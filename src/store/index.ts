// 状态管理
import { makeAutoObservable } from 'mobx';
class Store {
  constructor() {
    makeAutoObservable(this);
  }
}

export default new Store();