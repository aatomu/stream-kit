//go:build windows && amd64

package main

import (
	"fmt"
	"time"

	"github.com/Microsoft/go-winio"
)

const (
	PipeTimeout    = time.Duration(2 * time.Second)
	PipeNamePrefix = `\\.\pipe\discord-ipc-`
)

func dialRPC(index int) (*IPC, error) {
	pipeName := fmt.Sprintf("%s%d", PipeNamePrefix, index)

	timeout := PipeTimeout
	conn, err := winio.DialPipe(pipeName, &timeout)
	if err != nil {
		return nil, fmt.Errorf("failed to dial pipe %s: %w", pipeName, err)
	}

	return &IPC{conn: conn}, nil
}
