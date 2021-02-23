import css from "@styled-system/css";
import React, { FC } from "react";
import styled from "styled-components";
import {
  color,
  ColorProps,
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
  PositionProps;

const styledSystemProps = [typography, space, layout, color, position];

type ImageProps = StyledSystemProps & React.ImgHTMLAttributes<HTMLImageElement>;

export const Image: FC<ImageProps> = (props) => {
  return <ImageRoot {...props}>{props.children}</ImageRoot>;
};

const ImageRoot = styled("img")<StyledSystemProps>(css({}), styledSystemProps);
