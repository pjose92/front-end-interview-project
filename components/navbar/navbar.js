import {useState} from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const NavBar = styled.nav`{
    background: #121212;
    display:flex;
    justify-content:space-between;
    min-height: 2rem;
    align-items: center;
}`;

const Logo =styled.a`{
    font-weight: 400;
    font-size: 32px;
    letter-spacing: .3rem;
    text-transform: uppercase;
    padding-right: 10rem;
    margin:1rem;
    color: white;
    text-decoration: none;
    cursor:pointer;
}
:hover {
    opacity: 0.8;
  }
  @media (max-width: 600px) {
    padding-right: 0;
    :hover {
        opacity: 1;
      }
}`;

const Links = styled.a`{
    color: white;
    text-decoration: none;
}
   :hover {
        opacity: 0.8;
    }
    @media (max-width: 800px) {
        :hover {
            opacity: .7;
          }
      }
}`;

const CheckoutIcon =styled.li`{
    font-size: 20px;
    margin:1.5rem;
    list-style-type: none;
}`;

const MobileMenu = styled.ul `{  
    list-style-type: none;
    display:flex;
    position:absolute;
    top:4rem;
    background:#121212ed;
    flex-direction: column;
    width: 80%;
    height: 100%;
    border-radius: 3px;
}`;

const DesktopMenu = styled.ul `{  
    list-style-type: none;
    display:flex;
    @media (max-width: 600px) {
        display: none;
    }
}`;

const LinkItems= styled.li `{
    font-size: 20px;
    margin:1rem;
    list-style-type: none;
}`;

export default function Navbar() {
    const [open, setOpen]= useState(false);

    return (
        <NavBar>
            <HamburgerMenu
                className={'hamburger'}
                isOpen={open}
                menuClicked={()=>setOpen(!open)}
                width={25}
                height={20}
                strokeWidth={1}
                rotate={0}
                color='white'
                animationDuration={0.7}
            />
            {open?
                <MobileMenu>
                    <LinkItems>
                        <Links href="#">
                            Stores
                        </Links>
                    </LinkItems>
                    <LinkItems>
                        <Links href="#">
                            Contact Us
                        </Links>
                    </LinkItems>
                </MobileMenu>:null}
            <DesktopMenu>
                <LinkItems>
                    <Links href="#">
                        Stores 
                    </Links>
                </LinkItems>
                <LinkItems>
                    <Links href="#">
                        Contact Us
                    </Links>
                </LinkItems>
            </DesktopMenu>
            <Logo href="#">
                Foxtrot
            </Logo>
            <CheckoutIcon>
                <Links href="#">
                    <FontAwesomeIcon 
                        icon={faShoppingBag}
                    >
                    </FontAwesomeIcon>
                </Links>
            </CheckoutIcon>
        </NavBar>
        
    );
}