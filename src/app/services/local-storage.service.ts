import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private storage: Storage;

  constructor() {
    this.storage = window.localStorage;
   }


  set(key: string, value: string): void{
    this.storage.setItem(key, JSON.stringify(value))

  }

  get(key: string): string | null{
    return this.storage.getItem(key)
  }

  remove(key: string): void{
    this.storage.removeItem(key)
  }


}
