import React from 'react';
import ContentWrapper from './components/ContentWrapper';
import MobilePreview from './components/MobilePreview';
import TextHeader from './components/TextHeader';
import TitleHeader from './components/TextHeader/TitleHeader';
import ContentHeader from './components/TextHeader/ContentHeader';

const App = () => (
  <div className="container relative lg:flex min-h-screen lg:justify-center lg:items-center overflow-hidden bg-very-light-grayish">
    <div className="absolute -left-36 -top-60 decorative bg-gradient-to-t from-light-violet to-light-magenta" />
    <div className="absolute decorative bg-light-grayish-violet -right-36 -bottom-80" />
    <ContentWrapper>
      {/* <div className="relative decorative mx-auto bg-pale-violet">Hello</div> */}
      <MobilePreview />
      <TextHeader>
        <TitleHeader>Simple booking</TitleHeader>
        <ContentHeader>
          Stay in touch with our dog walkers through the chat interface. This
          makes it easy to discuss arrangements and make bookings. Once the walk
          has been completed you can rate your walker and book again all through
          the chat.
        </ContentHeader>
      </TextHeader>
    </ContentWrapper>
  </div>
);

export default App;
