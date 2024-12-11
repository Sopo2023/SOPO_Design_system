import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ToastType,ToastPosition } from './types';
import {Delete} from "@sopo-web/assets";

interface ToastProps {
  key:number;
  message: string;
  type: ToastType;
  position: ToastPosition;
  timer: number;
}

export const ToastComponent = ({ key, message, type, position, timer }: ToastProps) => {
  return (
    <ToastWrapper position={position} key={key}>

      <ToastBox type={type}>
        <ToastMessage>
          {message}
        </ToastMessage>
        <Delete size={7}/>
        <ProgressBar type={type} duration={timer} />
      </ToastBox>
    </ToastWrapper>
  );
};

const ToastWrapper = styled.div<{ position: string , key:number }>`
  position: fixed;
  ${({ position }) => position.includes('top') && 'top: 20px;'}
  ${({ position }) => position.includes('bottom') && 'bottom: 20px;'}
  ${({ position }) => position.includes('left') && 'left: 20px;'}
  ${({ position }) => position.includes('right') && 'right: 20px;'}
  z-index: 9999;
`;

const ToastBox = styled.div<{ type: string }>`
  background-color: #fff;
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0 1px 10px 0 rgba(0,0,0,.1),0 2px 15px 0 rgba(0,0,0,.05);
  position: relative;
  font-size: 14px;
  display: flex;
  cursor: pointer;
  overflow: hidden;
  width: 320px;
`;
const ToastMessage = styled.div`
  flex: 1;
`
const progressAnimation = (duration: number) => keyframes`
  from {
    width: 100%;
  }
  to {
    width: 0%;
  }
`;

const ProgressBar = styled.div<{ type: string; duration: number }>`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 4px;
  width: 100%;
  background-color: ${({ type }) =>
    type === 'success' ? '#4caf50' :
    type === 'error' ? '#f44336' :
    type === 'info' ? '#2196f3' : '#757575'};
  animation: ${({ duration }) => progressAnimation(duration)} linear ${({ duration }) => duration}ms;
`;
