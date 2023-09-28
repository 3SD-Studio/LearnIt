import React from 'react';
import Button from './navbar-button/navbar-button'
import './navbar.css';

/**
 * Navbar component 
 * @author Dawid Jeziorski <@Dave848>
 * @returns {JSX} JSX component responsible for navbar
 */
const Navbar = () =>
  <>
    <div id="main-contener">
      <h1 id="site-name">LearnIt</h1>
      <Button link="https://www.google.com/" buttonName="button-name" />
      <Button link="https://www.google.com/" buttonName="button-name" />
      <Button link="https://www.google.com/" buttonName="button-name" />
      <Button link="https://www.google.com/" buttonName="button-name" />
    </div>
  </>


export default Navbar;