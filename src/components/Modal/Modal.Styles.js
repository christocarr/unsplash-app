import styled, { css } from 'styled-components';
export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  ${(props) =>
    props.theme.theme === 'light'
      ? css`
          background-color: rgba(100, 100, 100, 0.5);
        `
      : css`
          background-color: rgba(100, 100, 100, 0.9);
        `}
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
  border-radius: 0.5em;
  background-color: white;
  padding: 1em;
  ${(props) => {
    if (props.width > props.height && props.windowWidth < 570)
      return `
    width: 90%;
    height: auto;
    `;
    if (props.height > props.width)
      return `
    height: 72%;
    width: auto;
    `;
    if (props.windowWidth > 570 && props.windowWidth < 1024)
      return `
    width: 75%;
    height: auto;
    `;
    if (props.windowWidth > 1024)
      return `
    width: 60%;
    height: auto;
    `;
  }}
  ${(props) =>
    props.theme.theme === 'light'
      ? css`
          background-color: hsl(100, 0%, 100%);
        `
      : css`
          background-color: hsl(100, 0%, 20%);
          color: hsl(100, 0%, 100%);
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
  ${(props) =>
    props.theme.theme === 'light'
      ? css`
          color: hsl(0, 0%, 40%); ;
        `
      : css`
          color: hsl(100, 0%, 100%);
        `}
`;

export const ModalClose = styled.div`
  width: 2em;
  cursor: pointer;
`;

export const Image = styled.img`
  margin-bottom: 1em;
  border-radius: 0.5em;
  ${(props) => {
    if (props.width > props.height)
      return `
      width: 100%;
    height: auto;
    `;
    if (props.height > props.width)
      return `
    width: auto;
    height: 85%;
    `;
  }}
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 2em;
`;

export const IconImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const Likes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 55px;
  color: hsl(0, 100%, 50%);
  font-weight: 600;
`;

export const DownloadButton = styled.button`
  position: relative;
  width: 50%;
  height: 100%;
  color: white;
  background-color: hsl(210, 100%, 50%);
  border: none;
  border-radius: 0.3em;
  cursor: pointer;
  &:hover {
    background-color: hsl(220, 100%, 50%);
  }
`;

export const DownloadImage = styled.img`
  position: absolute;
  left: 8px;
  top: 5px;
  width: 1.5em;
  height: 1.5em;
`;

export const SaveImage = styled.div`
  cursor: pointer;
`;
