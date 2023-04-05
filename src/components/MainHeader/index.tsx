import React from 'react';
import SvgIcon from '../SvgIcon';
import './index.scss';

const MainHeader = (): JSX.Element => {
  return (
    <div className='header-wrapper'>
      <div className='header-left'>
        <div className='sider-toggle'>
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