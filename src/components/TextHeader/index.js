import React from 'react';

const TextHeader = ({ children }) => (
  <section className="relative container mt-text-header  w-72 mx-auto lg:m-0 lg:self-center max-w-text-header lg:min-w-text-header-lg text-title-header">
    {children}
  </section>
);

export default TextHeader;
