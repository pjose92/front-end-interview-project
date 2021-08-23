// import Image from 'next/image';
import styled from 'styled-components';

const StyledHeader =styled.div `{
    display: flex;
    justify-content: space-between;
    flex-wrap: no-wrap;
    margin:1rem auto;
    @media (max-width: 600px) {
        display: block;
        width: 100%;
        margin-top: 0;
    }
}`;

const StyledImage =styled.span `{
    max-width: 100%;
    margin-right:5rem;
    @media (max-width: 600px) {
        display: block;
        margin:0;
        width:100%;
    }
}`;

const ImageHeader =styled.img `{
    height: 200px; 
    width: 400px;
    @media (max-width: 600px) {
        height: 100%; 
        width: 100%;
    }
    
}`

const StyledText =styled.div `{
    flex: 1;
    margin: auto;
    width: 90%;
}`;

export default function Header() {

    return (
        <StyledHeader>
            <StyledImage>
                <ImageHeader
                    src="https://www.rue-re.com/wp-content/uploads/2020/12/Individual-Client-Foxtrot-1.jpg" 
                    alt="Foxtrot-store" 
                    // height="200" 
                    // width="400"
                />
            </StyledImage>
            <StyledText>
                <h1>Discover Aisle</h1> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temre et dolierunt mollit anim id est laborum.</p>
            </StyledText>
        </StyledHeader>
    );
}