import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const FooterList = styled.ul `{    
    display:flex;
    justify-content:center; 
}`;

const FooterItem = styled.li `{     
    display:inline;
    margin:1rem;  
}`;

const IconSocial = styled.a `{  
    color: black;   
    background-color: white;
    padding: 15%;
    border-radius: 10px;
    text-decoration: none;
    :hover {
    opacity: 0.7;
    }
}`;

const FooterStyle = styled.footer`
    background: black;
    height: 146px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column nowrap;
    div {
        width: 60%;
        margin: 1%;
        diplay: flex;
        flex-flow: row nowrap;
        align-items: space-around;
        justify-content: space-between;
    }`;

const PrivacyTerms = styled.a`{
    color: white;
    margin: 0 3%;
    text-decoration: none;

}`

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

const Footer = () => {
  return (
    <FooterStyle>
      <div>
        <FooterList>
            {links.map((link,index)=>(                     
            <FooterItem key={index}>
                <IconSocial href={link.src}>
                    <FontAwesomeIcon 
                        icon={link.icon}
                    >
                    </FontAwesomeIcon>
                </IconSocial>
            </FooterItem>
                ))}
         </FooterList>
       
      </div>
      <div>
          <PrivacyTerms href="#">
            Terms of Service
          </PrivacyTerms> 
          <PrivacyTerms href="#">
            Privacy
          </PrivacyTerms>
     </div>
    </FooterStyle>
  )
}

export default Footer;