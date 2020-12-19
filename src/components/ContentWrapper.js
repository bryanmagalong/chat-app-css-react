import React from 'react';

const ContentWrapper = ({ children }) => (
  <div className="flow-root py-16 lg:flex lg:w-full lg:justify-center lg:gap-content">
    {children}
  </div>
);

export default ContentWrapper;
