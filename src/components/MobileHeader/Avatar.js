import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import MoreButton from './MoreButton';

const Avatar = ({ src, alt, name, status }) => (
  <div className="w-full flex  justify-between content-center">
    <div className="flex gap-x-1.5 ">
      <FontAwesomeIcon
        className="self-center text-light-grayish-violet"
        icon={faChevronLeft}
        size="xs"
      />
      <img
        className="h-7 rounded-full border border-white"
        src={src}
        alt={alt}
      />
      <div className="flex flex-col">
        <p className="text-light-grayish-violet text-avatar-name font-bold">
          {name}
        </p>
        <span className="text-pale-violet text-avatar-status font-light">
          {status}
        </span>
      </div>
    </div>

    <MoreButton />
  </div>
);

export default Avatar;
