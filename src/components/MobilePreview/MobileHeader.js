import React from 'react';

const MobileHeader = ({ children }) => (
  <div className="relative h-mfheader bg-gradient-to-r from-light-violet to-light-magenta">
    <div className="flex flex-row justify-center">
      <div className="absolute -top-3 h-7 w-36 bg-white rounded-full" />
    </div>
    {children}
  </div>
);

export default MobileHeader;
