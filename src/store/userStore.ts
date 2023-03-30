// 用户状态管理
import { makeAutoObservable } from 'mobx';

class UserStore {
  constructor() { 
    makeAutoObservable(this, {}, { autoBind: true });
  }
}

const userStore = new UserStore();
export default userStore;