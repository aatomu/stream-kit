package main

import (
	"bytes"
	"encoding/binary"
	"encoding/json"
	"io"
	"net"
)

type IPC struct {
	conn     net.Conn
	packetId int
}

// Check: https://robins.one/notes/discord-rpc-documentation.html
type OPcode int32

const (
	HandShake OPcode = iota
	Frame
	Close
	Ping
	Pong
)

type RpcHandshake struct {
	V        string `json:"v"`
	ClientID string `json:"client_id"`
}

type RpcResponse struct {
	Code   OPcode
	Length int
}

func NewIPC(clientID string, index int) (ipc *IPC, err error) {
	// Dial
	conn, err := dialRPC(index)
	if err != nil {
		return nil, err
	}
	// Sent handshake
	err = conn.WriteJSON(HandShake, RpcHandshake{
		V:        "1",
		ClientID: clientID,
	})
	if err != nil {
		return nil, err
	}

	return conn, nil
}

func (ipc *IPC) WriteJSON(code OPcode, message any) (err error) {
	ipc.packetId++

	buf := new(bytes.Buffer)

	err = binary.Write(buf, binary.LittleEndian, code)
	if err != nil {
		return
	}

	m, err := json.Marshal(message)
	if err != nil {
		return
	}

	err = binary.Write(buf, binary.LittleEndian, int32(len(m)))
	if err != nil {
		return
	}
	buf.Write([]byte(m))

	_, err = ipc.conn.Write(buf.Bytes())
	if err != nil {
		return
	}

	return nil
}

func (ipc *IPC) ReadJSON(m any) (res RpcResponse, err error) {
	opcode := make([]byte, 4) // 32bit
	_, err = io.ReadFull(ipc.conn, opcode)
	if err != nil {
		return
	}

	length := make([]byte, 4) // 32bit
	_, err = io.ReadFull(ipc.conn, length)
	if err != nil {
		return
	}
	messageLength := binary.LittleEndian.Uint32(length)

	message := make([]byte, messageLength)
	_, err = io.ReadFull(ipc.conn, message)
	if err != nil {
		return
	}

	err = json.Unmarshal(message, &m)
	if err != nil {
		return
	}

	return RpcResponse{
		Code:   OPcode(binary.LittleEndian.Uint32(opcode)),
		Length: int(messageLength),
	}, nil
}

func (ipc *IPC) Close() (err error) {
	return ipc.conn.Close()
}
