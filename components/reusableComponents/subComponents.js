import styled, {css} from "styled-components";

export const Wrapper = styled.div.attrs(({className})=>({
  className
}))`
  display: flex;
  flex: 1;
  flex-direction: ${(props) => (props.col ? "column" : "row")};
  ${(props)=>{
    return props.css && css`
    ${{...props.css}}
    `
  }}
`;
