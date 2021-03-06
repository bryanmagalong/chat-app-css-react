import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const SubmitInput = ({ children }) => (
  <div className="px-2 pb-2">
    <div className="flex justify-between items-center w-submit-x h-submit-y rounded-submit bg-white overflow-hidden">
      <input
        className="text-submit bg-white ml-placeholder"
        type="text"
        placeholder="Type your message..."
        disabled
      />
      <div className="w-7 h-7 rounded-full bg-very-dark-desaturated-violet text-center text-white m-submit-button">
        <button className="w-full h-full" disabled>
          <FontAwesomeIcon icon={faChevronRight} size="sm" />
        </button>
      </div>
    </div>
  </div>
);

export default SubmitInput;
