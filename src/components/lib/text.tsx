import css from "@styled-system/css";
import React, { FC } from "react";
import styled from "styled-components";
import {
  borders,
  BordersProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from "styled-system";

type StyledSystemProps = TypographyProps &
  SpaceProps &
  LayoutProps &
  ColorProps &
  PositionProps &
  FlexboxProps &
  BordersProps;

const styledSystemProps = [
  typography,
  space,
  layout,
  color,
  position,
  flexbox,
  borders,
];

export type TextProps = StyledSystemProps &
  React.HTMLAttributes<HTMLDivElement>;

export const Text: FC<TextProps> = (props) => {
  return (
    <TextRoot color="black" {...props}>
      {props.children}
    </TextRoot>
  );
};

const TextRoot = styled("div")<StyledSystemProps>(css({}), styledSystemProps);

export type InlineTextProps = StyledSystemProps &
  React.HTMLAttributes<HTMLSpanElement>;

export const InlineText: FC<InlineTextProps> = (props) => {
  return <InlineTextRoot {...props}>{props.children}</InlineTextRoot>;
};

const InlineTextRoot = styled("span")<StyledSystemProps>(
  css({
    display: "inline-block",
  }),
  styledSystemProps
);
