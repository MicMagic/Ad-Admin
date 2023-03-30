// 状态管理
import userStore from './userStore';
import { createContext, useContext } from 'react';
const stores = {
  userStore,
};

// 创建context对象，用于跨级组件通信
const context = createContext(stores);

// 自定义useStore
const useStore = () => useContext(context);

export default useStore;