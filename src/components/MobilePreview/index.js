import React from 'react';

import MobileFrame from './MobileFrame';
import MobileHeader from '../../components/MobileHeader';
import ChatSection from './ChatSection';
import SubmitInput from './SubmitInput';
import Message from './Message';

const MobilePreview = () => (
  <MobileFrame>
    <MobileHeader />
    <ChatSection>
      <Message position="left">
        That sounds great. I’d be happy to discuss more.
      </Message>
      <Message position="left">
        Could you send over some pictures of your dog, please?
      </Message>
      <Message position="right">
        Here a few pictures. She's a happy girl!
      </Message>
      <Message position="right">Can you make it?</Message>
      <Message position="left">
        She looks so happy! The time we discussed works. How long shall i take
        her out for?
      </Message>
    </ChatSection>
    <SubmitInput />
  </MobileFrame>
);

export default MobilePreview;
