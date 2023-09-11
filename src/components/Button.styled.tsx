import styled, {css} from "styled-components";
import {ScaleAnimation} from "../styles/animations/ScaleAnimation";

type StyledButtonType = {
    hasShadow?: boolean
    backgroundColor?: string
}

export const StyledButton = styled.button<StyledButtonType>`
  min-width: 86px;
  margin-right: 20px;
  color: #fff;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  border-radius: 5px;
  //background-color: #4e71fe;
  background-color: ${props => props.backgroundColor || '#4e71fe'};
  border: 2px solid #4e71fe;
  transition: color 0.3s, background-color 0.3s;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
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

  ${props => props.hasShadow && css`
    box-shadow: 5px 5px 5px bisque;
    transition: transform 1s;

    &:hover {
      transform: scale(1.2);
    }
  `}



`;
