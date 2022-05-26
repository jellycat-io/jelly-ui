import { css } from "styled-components";

// Global style variables
export const background = {
  app: "#F6F9FC",
  appInverse: "#7A8997",
  positive: "#E1FFD4",
  negative: "#FEDED2",
  warning: "#FFF5CF",
};

export const color = {
  // Palette
  primary: "#FF4785", // coral
  secondary: "#1EA7FD", // ocean
  tertiary: "#DDDDDD",

  orange: "#FC521F",
  gold: "#FFAE00",
  green: "#66BF3C",
  seafoam: "#37D5D3",
  purple: "#6F2CAC",
  ultraviolet: "#2A0481",

  // Monochrome
  lightest: "#FFFFFF",
  lighter: "#F8F8F8",
  light: "#F3F3F3",
  mediumlight: "#EEEEEE",
  medium: "#DDDDDD",
  mediumdark: "#999999",
  dark: "#666666",
  darker: "#444444",
  darkest: "#333333",

  border: "rgba(0,0,0,.1)",

  // Status
  positive: "#66BF3C",
  negative: "#FF4400",
  warning: "#E69D00",
};

export const spacing = {
  size: {
    xs1: "O.25rem",
    xs2: "0.375rem",
    xs3: "0.5rem",
    s1: "0.75rem",
    s2: "0.875rem",
    s3: "1rem",
    m1: "1.25rem",
    m2: "1.5rem",
    m3: "1.75rem",
    l1: "2rem",
    l2: "2.5rem",
    l3: "3rem",
  },
  borderRadius: {
    small: "0.375rem",
    default: "0.625rem",
    full: "50%",
  },
};

export const typography = {
  type: {
    primary: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
  },
  weight: {
    light: 300,
    regular: 400,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  size: {
    xs1: "O.25rem",
    xs2: "0.375rem",
    xs3: "0.5rem",
    s1: "0.75rem",
    s2: "0.875rem",
    s3: "1rem",
    m1: "1.25rem",
    m2: "1.5rem",
    m3: "1.75rem",
    l1: "2rem",
    l2: "2.5rem",
    l3: "3rem",
    code: "5.625rem",
  },
};

export const breakpoint = 600;
export const pageMargin = 5.55555;

export const pageMargins = css`
  padding: 0 ${spacing.size.s3}px;
  @media (min-width: ${breakpoint * 1}px) {
    margin: 0 ${pageMargin * 1}%;
  }
  @media (min-width: ${breakpoint * 2}px) {
    margin: 0 ${pageMargin * 2}%;
  }
  @media (min-width: ${breakpoint * 3}px) {
    margin: 0 ${pageMargin * 3}%;
  }
  @media (min-width: ${breakpoint * 4}px) {
    margin: 0 ${pageMargin * 4}%;
  }
`;
