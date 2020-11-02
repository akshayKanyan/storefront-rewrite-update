import styled, { css } from "styled-components";

export const Wrapper = styled.div.attrs(({ className }) => ({
  className,
}))`
  display: flex;
  flex: 1;
  flex-direction: ${(props) => (props.col ? "column" : "row")};
  ${(props) => {
    let computedStyle = {};
    if (props.center) {
      computedStyle = {
        ...computedStyle,
        justifyContent: "center",
        alignItems: "center",
      };
    }
    if (props.container) {
      computedStyle = {
        ...computedStyle,
        maxWidth: props.theme.containerWidth.mainContainerWidth,
        width: "100%",
      };
    }
    if (props.subContainer) {
      computedStyle = {
        ...computedStyle,
        maxWidth: props.theme.containerWidth.subContainerWidth,
        width: "100%",
      };
    }
    if (props.noGrow) {
      computedStyle = {
        ...computedStyle,
        flex: "none",
      };
    }
    if (props.style) {
      computedStyle = {
        ...computedStyle,
        ...props.style,
      };
    }
    return css(computedStyle);
  }}
`;
