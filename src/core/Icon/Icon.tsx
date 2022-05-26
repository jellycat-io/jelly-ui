import React, { FC } from "react";
import styled from "styled-components";
import { icons } from "../../shared/icons";

const Svg = styled.svg<Pick<IconProps, "block">>`
  display: ${({ block }) => (block ? "block" : "inline-block")};
`;

const Path = styled.path`
  fill: currentColor;
`;

export type IconType = keyof typeof icons;

export interface IconProps {
  icon: IconType;
  block?: boolean;
}

export const Icon: FC<IconProps> = ({ icon, block, ...props }) => (
  <Svg
    viewBox="0 0 1024 1024"
    width="20px"
    height="20px"
    block={block}
    {...props}
  >
    <Path d={icons[icon]} />
  </Svg>
);
