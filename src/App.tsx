import React from "react";
import cardImage from "./img/desert.png";
import {StyledButton} from "./components/Button.styled";
import {StyledPhoneBody} from "./components/PhoneBody.styled";
import {StyledCard} from "./components/Card.styled";

function App() {

    return (
        <div className="App">
            <h1 style={{textAlign: 'center', paddingRight: '10px', paddingLeft: '10px'}}>Learning Styled Component</h1>
            <StyledPhoneBody>
                <div className="phone-top"></div>
                <div className="phone-screen">
                    <StyledCard>
                        <img src={cardImage} alt="image"/>
                        <div className="wrapper">
                            <h2>Headline</h2>
                            <p>
                                Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit
                                molestie ornare in venen.
                            </p>
                            <StyledButton backgroundColor={'sandybrown'}>See more</StyledButton>
                            <StyledButton backgroundColor={'yellow'}>Save</StyledButton>
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
