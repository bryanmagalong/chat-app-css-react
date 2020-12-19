import React from 'react';

const ContentHeader = ({ children }) => (
  <p className="mt-content-header text-content-header leading-6 text-center lg:text-left text-dark-grayish-violet">
    {children}
  </p>
);

export default ContentHeader;
