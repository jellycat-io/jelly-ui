import React, { FC } from "react";
import styled, { css } from "styled-components";
import { icons } from "../../shared/icons";
import { Icon, IconProps, IconType } from "./Icon";

const Meta = styled.div`
  color: #666;
  font-size: 12px;
`;

const Item = styled.li<{ minimal?: boolean }>`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  flex: 0 1 20%;
  min-width: 120px;

  padding: 0px 7.5px 20px;

  svg {
    margin-right: 10px;
    width: 24px;
    height: 24px;
  }
  ${({ minimal }) =>
    minimal &&
    css`
      flex: none;
      min-width: auto;
      padding: 0;
      background: #fff;
      border: 1px solid #666;

      svg {
        display: block;
        margin-right: 0;
        width: 48px;
        height: 48px;
      }
    `}
`;

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style: none;
`;

export default {
  title: "Design System/Icon",
  component: Icon,
};

export const Labels = () => (
  <>
    There are {Object.keys(icons).length} icons
    <List>
      {Object.keys(icons).map((key) => (
        <Item key={key}>
          <Icon icon={key as IconType} aria-hidden />
          <Meta>{key}</Meta>
        </Item>
      ))}
    </List>
  </>
);

export const NoLabels = () => (
  <List>
    {Object.keys(icons).map((key) => (
      <Item minimal key={key}>
        <Icon icon={key as IconType} aria-label={key} />
      </Item>
    ))}
  </List>
);

NoLabels.storyName = "no labels";

export const Inline = (args: JSX.IntrinsicAttributes & IconProps) => (
  <>
    This is an inline <Icon {...args} /> icon (default)
  </>
);

Inline.args = {
  icon: "facehappy",
  "aria-label": "Happy Face",
};

export const Block = (args: JSX.IntrinsicAttributes & IconProps) => (
  <>
    this is a block <Icon {...args} /> icon
  </>
);
Block.args = {
  icon: "facehappy",
  "aria-label": "Happy face",
  block: true,
};
