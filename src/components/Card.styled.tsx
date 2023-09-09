import styled from "styled-components";
import { TextAnimation } from "../styles/animations/TextAnimation";

export const StyledCard = styled.div`
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
  &:hover {
    animation: ${TextAnimation} 1000ms ease-in-out forwards;
  }
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
  @media (max-width: 450px) {
    background-color: red;
  }
`;
