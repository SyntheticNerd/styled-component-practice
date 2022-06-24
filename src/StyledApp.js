import styled from "styled-components";
export const TopBanner = styled.div`
  height: 160px;
  width: 100%;
  background-color: blue;
  .banner-text {
    transition: transform 0.3s ease-in-out;
    color: white;
    transform: translateX(${(props) => props.fooBar}px);
  }
`;
