import React from "react";
import styled from "styled-components";
import cardImage from "./img/desert.png";
import { StyledButton } from "./components/Button.styled";
import { StyledPhoneBody } from "./components/PhoneBody.styled";
import { StyledCard } from "./components/Card.styled";

function App() {
  console.log(cardImage);

  return (
    <div className="App">
      <h1>Learning Styled Component</h1>
      <StyledPhoneBody>
        <div className="phone-top"></div>
        <div className="phone-screen">
          <StyledCard>
            <img src={cardImage} alt="image" />
            <div className="wrapper">
              <h2>Headline</h2>
              <p>
                Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit
                molestie ornare in venen.
              </p>
              <StyledButton>See more</StyledButton>
              <StyledButton>Save</StyledButton>
            </div>
          </StyledCard>
        </div>
        <div className="phone-bottom"></div>
        <div className="phone-button"></div>
      </StyledPhoneBody>
    </div>
  );
}

export default App;
