// NavbarLinks.js

import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { NavItem } from "../elements"
import {
    FaSearch
} from 'react-icons/fa';

export const NavbarLinks = () => {
  return (
  <div>
    <div class="nav">
      <NavItem style={{fontFamily: "Rockness", fontSize: "32px"}}>yse</NavItem>
      <NavItem to="https://lucmosser.com/">E-shop</NavItem>
      <NavItem to="/a-propos">Nouveautés</NavItem>
      <NavItem to="/contact">Lookbooks</NavItem>
      <NavItem to="/contact">Nos adresses</NavItem>
      <NavItem to="/contact">La marque</NavItem>
      <NavItem to="/contact">Aides</NavItem>
    </div>
    <div class="nav justify-content-end">
      <NavItem><FaSearch/></NavItem>
      <NavItem>Mon compte</NavItem>
      <NavItem>FR</NavItem>
    </div>
  </div>
  )
}


