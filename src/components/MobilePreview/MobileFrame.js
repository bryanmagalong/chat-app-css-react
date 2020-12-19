import React from 'react';

const MobileFrame = ({ children }) => (
  <div className="relative w-60 h-frame mx-auto lg:m-0 shadow-2xl border-frame rounded-frame border-white bg-light-grayish-violet overflow-x-hidden">
    {children}
  </div>
);

export default MobileFrame;
