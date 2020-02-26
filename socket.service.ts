import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
@Injectable({
  providedIn: 'root'
})
export class SocketService {
  constructor(public socket: Socket,socketService: SocketService) { }
  getDoc(msg: string) {
    this.socket.emit('msg', msg);
}

}
