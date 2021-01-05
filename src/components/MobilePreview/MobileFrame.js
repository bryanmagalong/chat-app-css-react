import React from 'react';

const MobileFrame = ({ children }) => (
  <div className="relative flex flex-col justify-between w-frame-x h-frame mx-auto lg:m-0 shadow-2xl border-frame rounded-frame border-white bg-light-grayish-violet overflow-x-hidden">
    {children}
  </div>
);

export default MobileFrame;
