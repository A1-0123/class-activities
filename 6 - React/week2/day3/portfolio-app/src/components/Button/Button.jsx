import React from "react";
import styled from "styled-components";

const CustomButton = styled.button`
  font-family: "Fira Code", monospace;
  display: inline-flex;
  padding: 8px 16px;
  align-items: flex-start;
  gap: 10px;
  background-color: transparent;
  border: none;
  color: ${props => props.textColor || "#FFF"};
  border: 1px solid ${props => props.bordercolor || "#FFF"};
`;

const Button = ({ title, textColor, borderColor }) => {
  return <CustomButton textColor={textColor} bordercolor={borderColor}>{title}</CustomButton>;
};

export default Button;
