import styled, { css } from "styled-components";

export const Wrapper = styled.div.attrs(({ className }) => ({
  className,
}))`
  ${(props) => {
    let { grid, col, center, container, theme, subContainer, noGrow, style } =
      props || {};
    let computedStyle = {};
    if (grid) {
      if (typeof grid !== "object") {
        computedStyle = { ...computedStyle };
      } else {
        computedStyle = {
          ...computedStyle,
          display: "grid",
          ...grid,
        };
      }
    } else {
      computedStyle = {
        ...computedStyle,
        display: "flex",
        flex: 1,
        flexDirection: col ? "column" : "row",
      };
    }
    if (center) {
      computedStyle = {
        ...computedStyle,
        justifyContent: "center",
        alignItems: "center",
      };
    }
    if (container) {
      computedStyle = {
        ...computedStyle,
        maxWidth: theme.containerWidth.mainContainerWidth + "px",
        width: "100%",
      };
    }
    if (subContainer) {
      computedStyle = {
        ...computedStyle,
        maxWidth: theme.containerWidth.subContainerWidth + "px",
        width: "100%",
      };
    }
    if (noGrow) {
      computedStyle = {
        ...computedStyle,
        flex: "none",
      };
    }
    if (style) {
      if (typeof style !== "object") {
        computedStyle = {
          ...computedStyle,
        };
      } else {
        computedStyle = {
          ...computedStyle,
          ...style,
        };
      }
    }
    return css(computedStyle);
  }}
`;
