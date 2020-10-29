import styled from "styled-components";

export const H1 = styled.h1`
  font-size: ${(props) => {
    return props.theme.fonts.h1 + "px";
  }};
`;

export const H2 = styled.h2`
  font-size: ${(props) => {
    return props.theme.fonts.h2 + "px";
  }};
`;

export const H3 = styled.h3`
  font-size: ${(props) => {
    return props.theme.fonts.h3 + "px";
  }};
`;

export const P1 = styled.p`
  font-size: ${(props) => {
    return props.theme.fonts.p1 + "px";
  }};
`;

export const P2 = styled.p`
  font-size: ${(props) => {
    return props.theme.fonts.p2 + "px";
  }};
`;

export const P3 = styled.p`
  font-size: ${(props) => {
    return props.theme.fonts.p3 + "px";
  }};
`;

export const Sh = styled.p`
  font-weight: bold;
  color: ${(props) => {
    return props.theme.constCustomColors.USGreen;
  }};
  font-size: ${(props) => {
    return props.theme.fonts.sh + "px";
  }};
`;
