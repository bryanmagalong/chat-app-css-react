import React from 'react';

import MobileFrame from './MobileFrame';
import MobileHeader from '../../components/MobileHeader';
import ChatSection from './ChatSection';
import SubmitInput from './SubmitInput';

const MobilePreview = () => (
  <MobileFrame>
    <MobileHeader />
    <ChatSection>
      <p>Message</p>
      <p>Message</p>
      <p>Message</p>
      <p>Message</p>
    </ChatSection>
    <SubmitInput />
  </MobileFrame>
);

export default MobilePreview;
