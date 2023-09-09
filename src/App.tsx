import React from "react";
import styled from "styled-components";
import cardImage from "./img/desert.png";

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
              <p>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</p>
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

const StyledPhoneBody = styled.div`
  box-sizing: border-box;
  width: 381px;
  height: 700px;
  margin: 0 auto;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border: 3px solid #000;

  .phone-top {
    height: 45px;
    background-color: #000;
  }

  .phone-screen {
    padding: 10px;
    justify-self: end;
  }
  .phone-bottom {
    height: 45px;
    margin-top: auto;
    background-color: #000;
  }
  .phone-button {
    width: 60px;
    height: 20px;
    background-color: #000;
    border: solid 2px silver;
    border-radius: 6px;
    position: absolute;
    bottom: 10px;
    z-index: 11;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const StyledCard = styled.div`
  width: 300px;
  padding: 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.1);
  background-image: url(cardImage);
  .wrapper {
    padding: 0 10px 12px;
    h2 {
      margin: 0 0 20px;
      color: #000;
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    p {
      margin: 0 0 20px;
      color: #abb3ba;
      font-family: Inter;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
    }
  }
`;

const StyledButton = styled.button`
  min-width: 86px;
  color: #fff;
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 200% */
  border-radius: 5px;
  background-color: #4e71fe;
  border: 2px solid #4e71fe;
  transition: color 0.3s, background-color 0.3s;
  cursor: pointer;
  &:last-of-type {
    margin-left: 20px;
    color: #4e71fe;
    background-color: #fff;
    &:hover {
      color: #fff;
      background-color: #4e71fe;
    }
  }
  &:hover {
    color: #4e71fe;
    background-color: #fff;
  }
`;
