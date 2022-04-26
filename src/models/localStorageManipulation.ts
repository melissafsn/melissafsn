export class LocalStorageManipulation {
  static put(key: string, values: any, raw: boolean = false): any {
    if(!raw) {
      localStorage.setItem(key, JSON.stringify(values))
    } else {
      localStorage.setItem(key, values)
    }
  }

  static get(key: string, defaultValue: any = null, raw: boolean = false): any{
    if(!raw) {
      return JSON.parse(localStorage.getItem(key)!!) || defaultValue;
    } else {
      return localStorage.getItem(key) || defaultValue;
    }
  }

  static has(key: string){
    return localStorage.getItem(key)!!
  }

  static remove(key: string){
    localStorage.remove(key)
  }
}
