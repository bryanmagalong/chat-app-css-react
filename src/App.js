import React from 'react';
import ContentWrapper from './components/ContentWrapper';

const App = () => (
  <div className="container relative min-h-screen  overflow-hidden bg-very-light-grayish  ">
    <div className="absolute -left-36 -top-60 decorative bg-gradient-to-t from-light-violet to-light-magenta" />
    <div className="absolute decorative bg-light-grayish-violet -right-36 -bottom-80" />
    <ContentWrapper>
      {/* <div className="relative decorative mx-auto bg-pale-violet">Hello</div> */}
    </ContentWrapper>
  </div>
);

export default App;
