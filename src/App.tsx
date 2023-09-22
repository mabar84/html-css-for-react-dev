import React, { useState } from "react";
import cardImage from "./img/desert.png";
import { StyledButton } from "./components/Button.styled";
import { StyledPhoneBody } from "./components/PhoneBody.styled";
import { StyledCard } from "./components/Card.styled";

function App() {
  const [forGirls, setForGirls] = useState<boolean>(false);
  const clickPhoneButton = () => {
    setForGirls((prev) => !prev);
  };

  return (
    <div className="App">
      <StyledPhoneBody $for_girls={!!forGirls}>
        <div className="phone-top">
          <div className="phone-speaker"></div>
        </div>
        <div className="phone-screen">
          <StyledCard>
            <img src={cardImage} alt="image" />
            <div className="wrapper">
              <h2>Headline</h2>
              <p>
                Faucibus! Faucibus. Sit sit sapien sit tempusrisu ut. Sit
                molestie ornare in venen.
              </p>
              <StyledButton background_color={"sandybrown"}>
                See more
              </StyledButton>
              <StyledButton $has_shadow background_color={"yellow"}>
                Save
              </StyledButton>
            </div>
          </StyledCard>
        </div>
        <div className="phone-bottom">
          <div onClick={clickPhoneButton} className="phone-button"></div>
        </div>
      </StyledPhoneBody>
    </div>
  );
}

export default App;
