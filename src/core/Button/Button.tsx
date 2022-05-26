import React, { FunctionComponent, MouseEvent, useMemo } from "react";
import { FC, ReactNode } from "react";
import styled from "styled-components";
import { rgba, darken } from "polished";

import { color, spacing, typography } from "../../shared/styles";
import { easing } from "../../shared/animation";
import { valueof } from "../../typings";

const Text = styled.span`
  display: inline-block;
  vertical-align: top;
`;

const Loading = styled.span`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  opacity: 0;
`;

const VARIANTS = {
  PRIMARY: "primary",
  PRIMARY_OUTLINE: "primaryOutline",
  SECONDARY: "secondary",
  SECONDARY_OUTLINE: "secondaryOutline",
  TERTIARY: "tertiary",
  OUTLINE: "outline",
};

const SIZES = {
  SMALL: "small",
  MEDIUM: "medium",
};

const StyledButton = styled.button<ButtonProps>`
  border: 0;
  border-radius: 3rem;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  padding: ${({ size }) =>
    size === SIZES.SMALL
      ? `${spacing.size.xs3} ${spacing.size.s3}`
      : `${spacing.size.s1} ${spacing.size.m2}`};
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: all 150ms ease-out;
  transform: translate3d(0, 0, 0);
  vertical-align: top;
  white-space: no-wrap;
  user-select: none;
  opacity: 1;
  margin: 0;
  background: transparent;

  font-size: ${({ size }) =>
    size === SIZES.SMALL ? typography.size.s1 : typography.size.s2};
  font-weight: ${typography.weight.extrabold};
  line-height: 1;

  ${({ isLoading }) =>
    !isLoading &&
    `
    &:hover {
      transform: translate3d(0, -2px, 0);
      box-shadow: rgba(0,0,0,0.2) 0 2px 6px 0;
    }

    &:active {
      transform: translate3d(0,0,0);
    }

    &:focus {
      box-shadow: ${rgba(color.primary, 0.4)} 0 1px 9px 2px;
    }

    &:focus:hover {
      box-shadow: ${rgba(color.primary, 0.2)} 0 8px 18px 0;
    }
  `}

  ${Text} {
    transform: scale3d(1, 1, 1) translate3d(0, 0, 0);
    transition: transform 700ms ${easing.rubber};
    opacity: 1;
  }

  ${Loading} {
    transform: translate3d(0, 100%, 0);
  }

  svg {
    height: ${({ size }) =>
      size === SIZES.SMALL ? typography.size.s2 : typography.size.s3};
    width: ${({ size }) =>
      size === SIZES.SMALL ? typography.size.s2 : typography.size.s3};
    vertical-align: top;
    margin-right: ${({ size }) =>
      size === SIZES.SMALL ? spacing.size.xs2 : spacing.size.xs3};
    margin-top: ${({ size }) => (size === SIZES.SMALL ? -1 : -2)}px;
    margin-bottom: ${({ size }) => (size === SIZES.SMALL ? -1 : -2)}px;

    /* Necessary for js mouse events to not glitch out when hovering on svgs */
    pointer-events: none;
  }

  ${({ disabled }) =>
    disabled &&
    `
    cursor: not-allowed;
    opacity: 0.5;
    &:hover {
      transform: none;
    }
  `}

  ${({ isUnclickable }) =>
    isUnclickable &&
    `
    cursor: default;
    pointer-events: none;
    &:hover {
      transform: none;
    }
  `}

  ${({ isLoading }) =>
    isLoading &&
    `
    cursor: progress;
    opacity: 0.7;

    ${Loading} {
      transition: transform 700ms ${easing.rubber};
      transform: translate3d(0, -50%, 0);
      opacity: 1;
    }

    ${Text} {
      transform: scale3d(0,0,1) translate3d(0, -100%, 0);
      opacity: 0;
    }

    &:hover {
      transform: none;
    }
  `}

  ${({ containsIcon, size }) =>
    containsIcon &&
    `
      svg {
        display: block;
        margin: 0;
      }
      padding: ${size === SIZES.SMALL ? spacing.size.xs3 : spacing.size.s1};
    `}

  ${({ variant, isLoading }) =>
    variant === VARIANTS.PRIMARY &&
    `
      background: ${color.primary};
      color: ${color.lightest};
      ${
        !isLoading &&
        `
          &:hover {
            background: ${darken(0.05, color.primary)};
          }
          &:active {
            box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
          }
          &:focus {
            box-shadow: ${rgba(color.primary, 0.4)} 0 1px 9px 2px;
          }
          &:focus:hover {
            box-shadow: ${rgba(color.primary, 0.2)} 0 8px 18px 0px;
          }
        `
      }
    `}
  ${({ variant, isLoading }) =>
    variant === VARIANTS.SECONDARY &&
    `
      background: ${color.secondary};
      color: ${color.lightest};
      ${
        !isLoading &&
        `
          &:hover {
            background: ${darken(0.05, color.secondary)};
          }
          &:active {
            box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
          }
          &:focus {
            box-shadow: ${rgba(color.secondary, 0.4)} 0 1px 9px 2px;
          }
          &:focus:hover {
            box-shadow: ${rgba(color.secondary, 0.2)} 0 8px 18px 0px;
          }
        `
      }
    `}
  ${({ variant, isLoading }) =>
    variant === VARIANTS.TERTIARY &&
    `
      background: ${color.tertiary};
      color: ${color.darkest};
      ${
        !isLoading &&
        `
          &:hover {
            background: ${darken(0.05, color.tertiary)};
          }
          &:active {
            box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
          }
          &:focus {
            box-shadow: ${rgba(color.tertiary, 0.4)} 0 1px 9px 2px;
          }
          &:focus:hover {
            box-shadow: ${rgba(color.tertiary, 0.2)} 0 8px 18px 0px;
          }
        `
      }
    `}
  ${({ variant, isLoading }) =>
    variant === VARIANTS.OUTLINE &&
    `
      box-shadow: ${color.medium} 0 0 0 1px inset;
      color: ${color.dark};
      background: transparent;
      ${
        !isLoading &&
        `
          &:hover {
            box-shadow: ${color.mediumdark} 0 0 0 1px inset;
          }
          &:active {
            background: ${color.medium};
            box-shadow: ${color.medium} 0 0 0 1px inset;
            color: ${color.darkest};
          }
          &:focus {
            box-shadow: ${color.medium} 0 0 0 1px inset, ${rgba(
          color.secondary,
          0.4
        )} 0 1px 9px 2px;
          }
          &:focus:hover {
            box-shadow: ${color.medium} 0 0 0 1px inset, ${rgba(
          color.secondary,
          0.2
        )} 0 8px 18px 0px;
          }
        `
      };
    `};
  ${({ variant }) =>
    variant === VARIANTS.PRIMARY_OUTLINE &&
    `
        box-shadow: ${color.primary} 0 0 0 1px inset;
        color: ${color.primary};
        &:hover {
          box-shadow: ${color.primary} 0 0 0 1px inset;
          background: transparent;
        }
        &:active {
          background: ${color.primary};
          box-shadow: ${color.primary} 0 0 0 1px inset;
          color: ${color.lightest};
        }
        &:focus {
          box-shadow: ${color.primary} 0 0 0 1px inset, ${rgba(
      color.primary,
      0.4
    )} 0 1px 9px 2px;
        }
        &:focus:hover {
          box-shadow: ${color.primary} 0 0 0 1px inset, ${rgba(
      color.primary,
      0.2
    )} 0 8px 18px 0px;
        }
      `};
  ${({ variant }) =>
    variant === VARIANTS.SECONDARY_OUTLINE &&
    `
        box-shadow: ${color.secondary} 0 0 0 1px inset;
        color: ${color.secondary};
        &:hover {
          box-shadow: ${color.secondary} 0 0 0 1px inset;
          background: transparent;
        }
        &:active {
          background: ${color.secondary};
          box-shadow: ${color.secondary} 0 0 0 1px inset;
          color: ${color.lightest};
        }
        &:focus {
          box-shadow: ${color.secondary} 0 0 0 1px inset,
            ${rgba(color.secondary, 0.4)} 0 1px 9px 2px;
        }
        &:focus:hover {
          box-shadow: ${color.secondary} 0 0 0 1px inset,
            ${rgba(color.secondary, 0.2)} 0 8px 18px 0px;
        }
        `}
`;

export interface ButtonProps {
  isLoading?: boolean;
  loadingText?: ReactNode;
  variant?: valueof<typeof VARIANTS>;
  size?: valueof<typeof SIZES>;
  isDisabled?: boolean;
  isUnclickable?: boolean;
  containsIcon?: boolean;
  onClick?: (event: MouseEvent) => void;
  children?: ReactNode;
}

export const Button: FC<ButtonProps> = ({
  isDisabled,
  isLoading,
  loadingText,
  children,
  ...props
}) => {
  const buttonInner = (
    <>
      <Text>{children}</Text>
      {isLoading && <Loading>{loadingText || "Loading..."}</Loading>}
    </>
  );

  return (
    <StyledButton isLoading={isLoading} disabled={isDisabled} {...props}>
      {buttonInner}
    </StyledButton>
  );
};
