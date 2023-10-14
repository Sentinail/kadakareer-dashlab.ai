import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useTheme } from '../contexts/themeContext';

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingSpinnerStyle = styled.div`
  border-left: 4px solid ${props => { return props.$spinningColor }};
  border-right: 4px solid transparent;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-radius: 50% !important;
  width: 50px !important;
  height: 50px !important;
  animation: ${spinAnimation} 1s linear infinite;
`;

const LoadingSpinner = () => {
  const { primaryColor } = useTheme()

  return (
    <div>
      <LoadingSpinnerStyle $spinningColor={primaryColor}></LoadingSpinnerStyle>
    </div>
  );
};

export default LoadingSpinner;
