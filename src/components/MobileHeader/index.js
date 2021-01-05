import React from 'react';
import Avatar from './Avatar';
import avatar from './../../assets/images/avatar.jpg';

const MobileHeader = () => (
  <div className="relative h-mfheader bg-gradient-to-r from-light-violet to-light-magenta rounded-b-md shadow-md px-5 pb-3">
    <div className="flex flex-row justify-center">
      <div className="absolute -top-3 h-7 w-32 bg-white rounded-full" />
    </div>
    <div className="container h-full flex items-end">
      <Avatar
        src={avatar}
        alt="avatar"
        name="Samuel Green"
        status="Available to Walk"
      />
    </div>
  </div>
);

export default MobileHeader;
