import React from 'react';

const Avatar = ({ src, alt, name, status }) => (
  <div className="flex gap-x-2.5">
    <img className="h-7 rounded-full border border-white" src={src} alt={alt} />
    <div className="flex flex-col">
      <p className="text-light-grayish-violet text-avatar-name font-bold">
        {name}
      </p>
      <span className="text-pale-violet text-avatar-status font-light">
        {status}
      </span>
    </div>
  </div>
);

export default Avatar;
