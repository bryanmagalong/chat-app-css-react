import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const MoreButton = () => (
  <div className=" self-end">
    <button>
      <FontAwesomeIcon
        className="text-pale-violet"
        icon={faEllipsisV}
        size="xs"
      />
    </button>
  </div>
);

export default MoreButton;
