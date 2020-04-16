/* eslint-disable */
export default class LocalStorage {
  localStorage = window.localStorage;

  static setItem(key: string, value: any): void {
    localStorage.setItem(key, value);
  }

  static getItem(key: string): any {
    return localStorage.getItem(key);
  }

  static hasItem(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }

  static deleteItem(key: string): void {
    localStorage.removeItem(key);
  }
}