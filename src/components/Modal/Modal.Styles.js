import styled, { css } from 'styled-components';
export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  background-color: rgba(100, 100, 100, 0.5);
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px lightgrey solid;
  border-radius: 0.5em;
  background-color: white;
  padding: 1em;
  ${(props) =>
    props.width > props.height
      ? css`
          width: 90%;
        `
      : css`
          height: 80%;
        `}
`;

export const TopNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1em;
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserImage = styled.img`
  flex: 1;
  width: 35px;
  height: 35px;
  margin-right: 1em;
  border-radius: 0.2em;
`;

export const Name = styled.p`
  font-weight: bolder;
`;

export const LastUpdated = styled.p`
  color: hsl(0, 0%, 40%);
`;

export const ModalClose = styled.div`
  width: 2em;
  cursor: pointer;
`;

export const Image = styled.img`
  height: auto;
  margin-bottom: 1em;
  border-radius: 0.5em;
  ${(props) =>
    props.width > props.height
      ? css`
          width: 100%;
          height: auto;
        `
      : css`
          height: 100%;
          width: 100%;
        `}
`;

export const Icon = styled.svg`
  width: 100%;
  height: 100%;
`;

export const Footer = styled.div``;

export const SaveImage = styled.div`
  cursor: pointer;
`;
