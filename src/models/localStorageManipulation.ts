import {LocalStorage} from "./types";

export class LocalStorageManipulation implements LocalStorage{
  put(key: string, values: any, raw: boolean = false): any {
    if(!raw) {
      localStorage.setItem(key, JSON.stringify(values))
    } else {
      localStorage.setItem(key, values)
    }
  }

  get(key: string, defaultValue: any = null, raw: boolean = false): any{
    if(!raw) {
      return JSON.parse(localStorage.getItem(key)!!) || defaultValue;
    } else {
      return localStorage.getItem(key) || defaultValue;
    }
  }

  has(key: string): boolean {
    return Boolean(localStorage.getItem(key)!!)
  }

  remove(key: string){
    localStorage.remove(key)
  }
}
