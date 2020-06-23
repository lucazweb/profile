import styled from "styled-components";
import { Space, Color } from "..";

// Transactions list
export const TimelineList = styled.div`
  ul {
    list-style-type: none;
    margin: ${Space.medium}px 0 0 0;
    padding: 0;
    position: relative;

    top: 0;
    position: relative;

    li {
      position: relative;
      display: flex;
      flex-direction: column;
      margin: 0 20px;
      padding: 0px 0px 20px 10px;
      color: #333;
      line-height: 20px;

      &:hover {
        .title {
          text-decoration: underline;
        }
      }
      .title {
        position: relative;
        text-transform: uppercase;
        font-weight: 700;
        margin: 0;
        font-size: 0.9em;
        text-align: left;
        cursor: pointer;
      }
      small {
        font-weight: bold;
        font-size: 0.7em;
        color: #666;
        margin-bottom: 4px;
        text-align: left;
      }
      p {
        display: block;
        word-break: break-word;
        text-align: left;
        margin-top: 2px;
        font-weight: 400;
        font-size: 0.7rem;
        line-height: 1.1rem;
        coolor: #999;
      }
      a {
        text-align: left;
        font-size: 0.8rem;
        font-weight: bold;
        &:hover {
          color: ${Color.textLinkHover};
        }
      }
      .price {
        font-size: 1.1em;
        display: initial;
      }
      .time {
        span {
          position: absolute;
          left: -160px;
          top: -2px;
          color: #333;
          font-size: 80%;
          font-weight: bold;
          @media #{$mq-smartphones-portrait-landscape} {
            left: -137px;
          }
        }
      }
    }
    li > span {
      content: "";
      display: block;
      width: 0;
      height: 100%;
      border: 1px solid #333;
      position: absolute;
      top: 12px;
      left: -10px;
      &:before {
        content: "";
        display: block;
        top: -10px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: black;
        border: 2px solid #333;
        position: absolute;
        left: -7px;
      }
      &:after {
        top: 95%;
      }
    }
  }
`;
