import io from "socket.io-client";

export class SocketService {
	socket = io();

	start() {
		this.socket.emit("start")
	}

	end() {
		this.socket.emit("end")
	}

	vote() {
		this.socket.emit("vote")
	}

	joinRoom(room) {
		this.socket.emit("to room")
	}
}
