import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import { H1, Breakpoint, Color, Space } from '..';

export const StyledH1 = styled(H1)`
  font-size: 1.3rem;
  color: ${Color.textColor};
  @media (max-width: ${Breakpoint.sm}em) {
    font-size: .8rem;
  }
`;

export const StyledRow = styled(Row)`
  // display: flex;
  // justify-content: center;
  // align-items: center;
  @media (max-width: ${Breakpoint.sm}em) { 
  }
`;

export const TranslateButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  background: transparent;
  font-size: .9rem;
  outline: none;
  cursor: pointer;
  width: 190px;
  @media (max-width: ${Breakpoint.sm}em) {
    margin: auto;
  }
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

export const StyledWrapper = styled.div`
  display: flex;
  width: 200px;
`;

export const StyledSpan = styled.span`

`;