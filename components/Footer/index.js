import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const FooterContainer = styled.footer `{    
        background: #121212; 
    }`;

const FooterList = styled.ul `{    
        display:flex;
        justify-content:center; 
    }`;

// const FooterItemLinks = styled.ul `{    
//         display:flex;
//         justify-content:center; 
//         border: 1px solid red;

//     }`;

const FooterItem = styled.li `{     
        display:inline;
        margin:1rem;  
    }`;

const StyledIcon = styled.a `{     
        color: white;
        text-decoration: none;
        :hover {
        opacity: 0.7;
      }
    }`;

    const StyledIconSocial = styled.a `{  
        color: black;   
        background-color: white;
        padding: 5px;
        border-radius: 15px;
        text-decoration: none;
        :hover {
        opacity: 0.7;
      }
    }`;


const links= [
    {
        src:'#',
        icon:  faLink  
    },
    {
        src:'#',
        icon:  faInstagram  
    },
    {
        src:'#',
        icon:  faTwitter  
    },
    {
        src:'#',
        icon:  faFacebook  
    },    {
        src:'#',
        icon:  faEnvelope  
    }
];

const Footer= () => {
    return (
        <FooterContainer>
            <FooterList>
                {links.map((link,index)=>(
                    <FooterItem key={index}>
                        <StyledIconSocial href={link.src}>
                            <FontAwesomeIcon 
                                icon={link.icon}
                            >
                            </FontAwesomeIcon>
                        </StyledIconSocial>
                    </FooterItem>
                ))}
            </FooterList>

            <FooterList>
                <FooterItem>
                    <StyledIcon href="#">
                        Terms of Service
                    </StyledIcon>
                </FooterItem>
                <FooterItem>
                    <StyledIcon href="#">
                        Privacy
                    </StyledIcon>
                </FooterItem>
            </FooterList>
        </FooterContainer>
    );
};
export default Footer;