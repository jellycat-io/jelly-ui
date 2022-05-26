import { createGlobalStyle, css } from "styled-components";
import { color, typography, spacing } from "./styles";

export const bodyStyles = css`
  font-family: ${typography.type.primary};
  font-size: ${typography.size.s3};
  color: ${color.darkest};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-overflow-scrolling: touch;
  * {
    box-sizing: border-box;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: ${typography.weight.regular};
    margin: 0;
    padding: 0;
  }
  button,
  input,
  textarea,
  select {
    outline: none;
    font-family: ${typography.type.primary};
  }
  sub,
  sup {
    font-size: 0.875rem;
  }
  sub {
    bottom: -0.25rem;
  }
  sup {
    top: -0.25rem;
  }
  b,
  em {
    font-weight: ${typography.weight.bold};
  }
  hr {
    border: none;
    border-top: 1px solid ${color.border};
    clear: both;
    margin-bottom: 1.25rem;
  }
  code,
  pre {
    font-family: ${typography.type.code};
    font-size: ${typography.size.s2};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    display: inline-block;
    padding-left: 0.125rem;
    padding-right: 0.125rem;
    vertical-align: baseline;
    color: ${color.secondary};
  }
  pre {
    line-height: 1.6;
    padding: 11px 1rem;
    white-space: pre-wrap;
    background: rgba(0, 0, 0, 0.05);
    color: ${color.darkest};
    border-radius: ${spacing.borderRadius.small};
    margin: 1rem 0;
  }
  &.ReactModal__Body--open {
    overflow: hidden;
    &.hide-intercom #intercom-container {
      display: none;
    }
  }
  .ReactModalPortal > div {
    opacity: 0;
  }
  .ReactModalPortal .ReactModal__Overlay {
    transition: all 200ms ease-in;
    &--after-open {
      opacity: 1;
    }
    &--before-close {
      opacity: 0;
    }
  }
`;

export const GlobalStyle = createGlobalStyle`
 body {
   ${bodyStyles}
 }
`;
