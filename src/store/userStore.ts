// 用户状态管理

import { makeAutoObservable } from 'mobx';

export class UserStore {
  constructor() {
    makeAutoObservable(this);
  }
}
