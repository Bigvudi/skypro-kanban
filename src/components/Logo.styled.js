import styled from "styled-components";

export const SLogo = styled.div`
  a {
    text-decoration: none;
    cursor: pointer;
  }

  img {
    width: 85px;
  }

  // Если dark === true показываем темный логотип, иначе светлый
  display: ${({ dark }) => (dark ? "none" : "block")};
`;

export const DarkLogo = styled(SLogo)`
  display: ${({ dark }) => (dark ? "block" : "none")};
`;
