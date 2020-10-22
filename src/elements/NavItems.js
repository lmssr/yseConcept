import styled from "styled-components"
import { Link } from "gatsby"

export const NavItem = styled(Link)`
  text-decoration: none;
  color: white;
  font-family: OPTIEpitome;
  font-size: 16px;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  center: center;

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    display: block;
    text-align: center;
    z-index: 6;
  }
`
