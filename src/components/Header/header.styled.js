import styled from 'styled-components';
import { Col } from 'react-flexbox-grid';
import { H1, Color, Space } from '..';

export const StyledH1 = styled(H1)`
  font-size: 1.3rem;
  color: ${Color.textColor};
`;

export const TranslateButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: transparent;
  font-size: .9rem;
  outline: none;
  cursor: pointer;
  float: right;

  span {
    margin-left: 5px; 
  }

  &:hover {
    color: ${Color.textLinkHover};
  }
`;

export const FloatingTranslateButton = styled(TranslateButton)`
  position: absolute;
  top: ${Space.medium}px;
  right: 10px;
`;

export const ColPositionRelative = styled(Col)`
  position: relative;
`;
