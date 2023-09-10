import styled, {css} from "styled-components";
import {myTheme} from "../styles/Theme.styled";
import React from "react";

type StyledPhoneBodyPropsType = {
    forGirls: boolean
}


export const StyledPhoneBody = styled.div<StyledPhoneBodyPropsType>`
  box-sizing: border-box;
  width: 381px;
  height: 650px;
  margin: 10px auto;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border: 3px solid ${myTheme.colors.phoneBody.boys};
  background-color: #fff;

  ${props => props.forGirls && css`
    border: 3px solid ${myTheme.colors.phoneBody.girls};
  `}
  .phone-top {
    height: 45px;
    background-color: ${myTheme.colors.phoneBody.boys};
    position: relative;

    ${props => props.forGirls && css`
      background-color: ${myTheme.colors.phoneBody.girls};
    `}
    .phone-speaker {
      width: 100px;
      height: 6px;
      border: solid 3px silver;
      border-radius: 6px;
      position: absolute;
      bottom: 10px;
      z-index: 11;
      left: 50%;
      top: 50%;
      padding: 0;
      transform: translate(-50%, -50%);
    }
  }

  .phone-screen {
    padding: 10px;
    justify-self: end;
  }

  .phone-bottom {
    height: 45px;
    margin-top: auto;
    background-color: ${myTheme.colors.phoneBody.boys};
    position: relative;

    ${props => props.forGirls && css`
      background-color: ${myTheme.colors.phoneBody.girls};
    `}

  }

  .phone-button {
    width: 60px;
    height: 20px;
    border: solid 2px silver;
    border-radius: 6px;
    position: absolute;
    bottom: 10px;
    z-index: 11;
    left: 50%;
    top: 50%;
    padding: 0;
    transform: translate(-50%, -50%);

    &:active {
      background-color: silver;
      border: solid 2px red;
    }

    &:hover {
      background: radial-gradient(circle, rgba(63, 94, 251, 1) 0%, rgba(195, 41, 72, 1) 100%);

    }
  }
`;
