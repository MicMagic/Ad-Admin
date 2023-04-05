import React from 'react';
import SvgIcon from '../SvgIcon';
import useStore from '@src/store';
import './index.scss';

const MainHeader = (): JSX.Element => {
  const { commonStore } = useStore();
  // menu切换
  const handleToggle = () => {
    commonStore.menuToggle();
  };
  return (
    <div className='header-wrapper'>
      <div className='header-left'>
        <div className='sider-toggle' onClick={handleToggle}>
          <SvgIcon iconName='siderToggle' />
        </div>
        <div className='header-breadcrumb'>面包屑</div>
      </div>
      <div className='header-right'>
        <div className='right-btn'>
          <div className='refresh'>
            <SvgIcon iconName='refresh' />
          </div>
        </div>
        <div className='right-operation'>
          <span>退出登录</span>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;