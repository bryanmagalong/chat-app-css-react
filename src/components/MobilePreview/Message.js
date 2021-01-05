import React from 'react';

const Message = (props) => (
  <div
    className={`max-w-message min-h-message-y mb-message-bottom py-message-padding-y px-message-padding-x text-message ${props.position ===
    'left'
      ? ' text-moderate-violet bg-very-light-violet rounded-message-left'
      : 'text-dark-desaturated-violet bg-white rounded-message-right self-end'}`}
  >
    {props.children}
  </div>
);

export default Message;
