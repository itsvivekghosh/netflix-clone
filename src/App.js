import React from "react";
import Container from "./compounds/container";
import { FAQsContainer } from "./containers/faqs/faqs";
import { FooterContainer } from "./containers/footer/footer";
import { JumbotronContainer } from "./containers/Jumbotron/Jumbotron";

const App = () => {
  return (
    <Container>
      <JumbotronContainer />
      <FAQsContainer />
      <FooterContainer />
    </Container>
  );
};

export default App;
