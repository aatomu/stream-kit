//go:build linux && amd64

package main

import (
	"fmt"
	"net"
	"os"
	"path/filepath"
	"time"
)

const (
	DialTimeout = 5 * time.Second
	// IPCソケット名のプレフィックス
	SocketNamePrefix = "discord-ipc-"
)

func getIpcPath() string {
	for _, variableName := range []string{"XDG_RUNTIME_DIR", "TMPDIR", "TMP", "TEMP"} {
		path, exists := os.LookupEnv(variableName)

		if exists {
			return path
		}
	}

	return "/tmp"
}

func dialRPC(num int) (*IPC, error) {
	socketName := fmt.Sprintf("%s%d", SocketNamePrefix, num)
	socketPath := filepath.Join(getIpcPath(), socketName)

	conn, err := net.DialTimeout("unix", socketPath, DialTimeout)
	if err != nil {
		return nil, fmt.Errorf("failed to dial unix socket %s: %w", socketPath, err)
	}

	return &IPC{conn: conn}, nil
}
