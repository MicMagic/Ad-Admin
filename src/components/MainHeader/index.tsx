import React from 'react';
import SvgIcon from '../SvgIcon';
import './index.scss';

const MainHeader = (): JSX.Element => {
  return (
    <div className='header-wrapper'>
      <div className='header-left'>
        <div className='sider-toggle'>
          <SvgIcon iconName=''/>
        </div>
        <div className='header-breadcrumb'></div>
      </div>
      <div className='header-right'>
        <div className='right-btn'>
          <SvgIcon iconName=''/>
        </div>
        <div>
          <span>退出登录</span>
        </div>
      </div>
    </div>
    
  );
};

export default MainHeader;