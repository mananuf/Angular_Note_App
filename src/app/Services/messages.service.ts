import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  message: string[] = []; // stores an array of messages
  constructor() { }
  
  add(msg: string){
    this.message.push(msg)  // stores message to cache
  }

  clear(){
    this.message = []   // clear message cache after display
  }
}
