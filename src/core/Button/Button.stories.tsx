import React from "react";
import styled from "styled-components";

import { Icon } from "../Icon/Icon";
import { Button } from "./Button";

const Wrapper = styled.div`
  button {
    margin-right: 8px;
  }
`;

export default {
  title: "Design System/Button",
  component: Button,
};

export const AllButtons = () => (
  <Wrapper>
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="tertiary">Tertiary</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="primaryOutline">Outline Primary</Button>
    <Button variant="secondaryOutline">Outline Secondary</Button>
    <Button variant="primary" isDisabled>
      Disabled
    </Button>
    <Button variant="outline" containsIcon>
      <Icon icon="link" aria-label="Link" />
    </Button>
    <Button variant="outline">
      <Icon icon="link" />
      Link
    </Button>
    <br />
    <br />
    <Button variant="primary" isLoading>
      Primary
    </Button>
    <Button variant="secondary" isLoading>
      Secondary
    </Button>
    <Button variant="tertiary" isLoading>
      Tertiary
    </Button>
    <Button variant="outline" isLoading>
      Outline
    </Button>
    <Button variant="outline" isLoading loadingText="Custom...">
      Outline
    </Button>
    <br />
    <br />
    <Button variant="primary" size="small">
      Primary
    </Button>
    <Button variant="secondary" size="small">
      Secondary
    </Button>
    <Button variant="tertiary" size="small">
      Tertiary
    </Button>
    <Button variant="outline" size="small">
      Outline
    </Button>
    <Button variant="primary" isDisabled size="small">
      Disabled
    </Button>
    <Button variant="outline" size="small" containsIcon>
      <Icon icon="link" aria-label="Link" />
    </Button>
    <Button variant="outline" size="small">
      <Icon icon="link" />
      Link
    </Button>
  </Wrapper>
);

AllButtons.storyName = "all buttons";
