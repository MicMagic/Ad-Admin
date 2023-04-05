// 用户状态管理
import { makeAutoObservable } from 'mobx';

class CommonStore {

  // menu的collapsed
  menuCollapsed = false;
  constructor() { 
    makeAutoObservable(this, {}, { autoBind: true });
  }

  // menu切换
  menuToggle = () => {
    this.menuCollapsed = !this.menuCollapsed;
  };
}

const commonStore = new CommonStore();
export default commonStore;