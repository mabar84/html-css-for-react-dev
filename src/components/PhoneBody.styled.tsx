import styled from "styled-components";

export const StyledPhoneBody = styled.div`
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
  background-color: #fff;

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
    padding: 0;
    transform: translateX(-50%);
  }
`;
