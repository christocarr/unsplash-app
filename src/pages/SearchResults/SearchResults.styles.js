import styled, { css } from 'styled-components';
import InfiniteLoader from 'react-infinite-loader';

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 153.6px;
  margin: 0 -5px 1em -5px;
`;

export const HeaderDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  height: 100%;
  ${(props) =>
    props.theme.theme === 'light'
      ? css`
          color: hsl(100, 0%, 0%);
        `
      : css`
          color: hsl(100, 0%, 100%);
        `}
`;

export const HeaderImageContainer = styled.div`
  width: 20%;
  height: 100%;
  margin-right: 1em;
  border-radius: 0.3em;
  overflow: hidden;

  background-color: ${(props) => props.bgColor};
`;

export const HeaderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const HashTag = styled.h2``;

export const HeaderPara = styled.p``;

export const Posts = styled.p``;

export const LinkNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: -5px;
  margin-right: -5px;
  ${(props) =>
    props.theme.theme === 'light'
      ? css`
          color: hsl(100, 0%, 0%);
        `
      : css`
          color: hsl(100, 0%, 100%);
        `}
`;

export const LinkContainer = styled.div`
  justify-self: flex-end;
`;

export const Button = styled.button`
  border-style: none;
  font-size: inherit;
  background-color: inherit;
  cursor: pointer;
  ${(props) =>
    props.active === 'true'
      ? css`
          color: inherit;
        `
      : css`
          color: inherit;
        `}

  &&:first-of-type {
    margin-right: 1em;
  }
`;

//These styles are needed to trigger InfiniteLoader because of the list layout
export const InfiniteLoaderContainer = styled.div`
  position: relative;
  z-index: -100;
  padding: 2em 0 2em 0;
`;

export const StyledInfinteLoader = styled(InfiniteLoader)`
  position: absolute;
  width: 100%;
  height: 10em;
  bottom: 10em;
`;
