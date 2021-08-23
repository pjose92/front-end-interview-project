import Link from "next/link";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import HamburgerMenu from 'react-hamburger-menu';
import styled from "styled-components";

const Nav = styled.nav`
    {
        background: #121212;
        display:flex;
        justify-content:space-between;
        min-height: 2rem;
        align-items: center;
    }`;

const Logo =styled.a`
    {
        font-weight: 700;
        font-size: 2rem;
        letter-spacing: .3rem;
        padding-right:10rem;
        margin:1rem;
        list-style-type: none;
        color: white;
        text-decoration: none;
        cursor:pointer;
        text-transform: uppercase;
    }
    :hover {
        opacity: 0.5;
    }
    @media (max-width: 600px) {
        padding-right: 0;
        :hover {
            opacity: 0.5;
        }
        }
    `;

const StyledLink = styled.a`
    {
        color: white;
        text-decoration: none;
    }
    :hover{
        opacity: 0.5;
    }
    @media (max-width: 600px){
       :hover {
            opacity: 0.5;
          }
        }
    }`;

const StyledIcon =styled.li`
    {
        font-size: 20px;
        margin:1rem;
        list-style-type: none;
    }`;



export default function Navbar (){

    const [open, setOpen] = useState(false);
    const handleClick = () => setOpen(!click);

    return (
        <>
            <Nav>
                <HamburgerMenu
                    className={'hamburger'}
                    isOpen={open} 
                    handleClick={() => setOpen(!open)}
                    width={25}
                    height={15}
                    strokeWidth={1}
                    rotate={0}
                    color="white"
                    animationDuration={0.5}
                />
                
                <Logo href="#">
                    Foxtrot
                </Logo>

                <StyledIcon>
                    <StyledLink href="#">
                        <FontAwesomeIcon 
                            color= {'white'} 
                            icon={faShoppingBag}
                        >
                        </FontAwesomeIcon>
                    </StyledLink>
                </StyledIcon>
            </Nav>
        </>
    )
}