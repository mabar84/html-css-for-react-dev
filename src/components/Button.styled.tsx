import styled from "styled-components";

export const StyledButton = styled.button`
  min-width: 86px;
  margin-right: 20px;
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
`;
