// NavbarLinks.js

import React from "react"
import styled from "styled-components"
import {Link} from "gatsby"
import { NavItem } from "../elements"
import {
    FaSearch
} from 'react-icons/fa';

export const NavbarLinks = () => {
  return (
  <div>
    <div class="nav">
      <NavItem style={{fontFamily: "Rockness", fontSize: "32px"}}>yse</NavItem>
      <NavItem to="#">E-shop</NavItem>
      <NavItem to="#">Nouveautés</NavItem>
      <NavItem to="#">Lookbooks</NavItem>
      <NavItem to="#">Nos adresses</NavItem>
      <NavItem to="#">La marque</NavItem>
      <NavItem to="#">Aides</NavItem>
      <NavItem><FaSearch/></NavItem>
      <NavItem>Mon compte</NavItem>
      <NavItem>FR</NavItem>
    </div>
  </div>
  )
}


