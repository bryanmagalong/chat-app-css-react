import React from 'react';
import ContentWrapper from './components/ContentWrapper';
import MobilePreview from './components/MobilePreview';
import TextHeader from './components/TextHeader';
import TitleHeader from './components/TextHeader/TitleHeader';
import ContentHeader from './components/TextHeader/ContentHeader';
import DecorativeRight from './components/DecorativeRight';
import DecorativeLeft from './components/DecorativeLeft';

const App = () => (
  <div className="container relative min-w-full lg:flex min-h-screen lg:justify-center lg:items-center overflow-hidden bg-very-light-grayish">
    <DecorativeLeft />
    <DecorativeRight />
    <ContentWrapper>
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
