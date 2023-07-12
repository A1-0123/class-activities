import React from "react";
import styled from "styled-components";

const CustomButton = styled.button`
  display: inline-flex;
  padding: 8px 16px;
  align-items: flex-start;
  gap: 10px;
  background-color: transparent;
  border: none;
  color: ${props => props.textColor || "#FFF"};
  border: 1px solid ${props => props.borderColor || "#FFF"};
`;

const Button = ({ title, textColor, borderColor }) => {
  return <CustomButton textColor={textColor} borderColor={borderColor}>{title}</CustomButton>;
};

export default Button;
