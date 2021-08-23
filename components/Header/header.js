import styled from 'styled-components';

const MainHeader =styled.div `{
    display: flex;
    justify-content: space-between;
    flex-wrap: no-wrap;
    margin:1.5rem auto;
    @media (max-width: 600px) {
        display: block;
        width: 100%;
        margin-top: 0;
    }
}`;

const ImageHeader =styled.span `{
    max-width: 100%;
    margin-right:5rem;
    @media (max-width: 600px) {
        margin:0;
        width:100%;
    }
}`;

const Image =styled.img `{
    height: 200px; 
    width: 400px;
    @media (max-width: 600px) {
        height: 100%; 
        width: 100%;
    }
    
}`

const MainText =styled.div `{
    flex: 1;
    margin: auto;
    width: 90%;
}`;

export default function Header() {

    return (
        <MainHeader>
            <ImageHeader>
                <Image
                    src="https://www.rue-re.com/wp-content/uploads/2020/12/Individual-Client-Foxtrot-1.jpg" 
                    alt="Foxtrot-store" 
                />
            </ImageHeader>
            <MainText>
                <h1>Discover Aisle</h1> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temre et dolierunt mollit anim id est laborum.</p>
            </MainText>
        </MainHeader>
    );
}