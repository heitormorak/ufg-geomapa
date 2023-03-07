import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Logo
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      
      <Nav style={{ display: 'flex', justifyContent: 'center' }}>
        <NavMenu>
          <NavLink to='/Home' activeStyle>
            Home
          </NavLink>
          <NavLink to='/Equipe' activeStyle>
            Equipe
          </NavLink>  
          <NavLink to='/Mapa' activeStyle>
            Visualizar Profundidade
          </NavLink> 
          <NavLink to='/Risco' activeStyle>
            Visualizar Riscos
          </NavLink>         
          <NavBtn>
            <NavBtnLink to='/Amostra'>Cadastrar</NavBtnLink>
          </NavBtn>
        </NavMenu>
        
      </Nav>
    
    </> 
  
  );
};
  
export default Navbar;
