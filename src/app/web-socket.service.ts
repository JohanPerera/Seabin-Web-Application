import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  socket:any;
  readonly uri:string = "ws://localhost:3000";

  constructor() { 
    this.socket = io(this.uri);
  }

  listen(eventName:string){
    return new Observable((Subscriber)=>{
      this.socket.on(eventName,(data)=>{
        Subscriber.next(data);
      })
    })
  }

  emit(eventName:string,data:any){
    this.socket.emit(eventName,data);
  }
}
