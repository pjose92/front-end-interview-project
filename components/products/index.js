import styled from 'styled-components';

const ProductGrid = styled.ul`{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    margin-top: 1.25rem;
    }
    @media (max-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
    }`;

const Img = styled.img`{
    width: 200px;
    transition: all .2s ease-in-out;
    :hover { 
        transform: scale(1.08)
        }; 
    }
    @media (max-width: 1059px) {
        width: 95%;
        }`;

const Price = styled.p`{
    color: #6D7173;
    font-size: 14px;
}`;

export default function ProductList(props){
    const products = props.products;

    return (
        <>
            <h2>{props.title}</h2>
            <ProductGrid>
                {products.map(product => (
                    <div>
                        <Img src={product.assets[0].url}
                        />
                        <p>
                            {product.title}
                        </p>
                        <Price>
                            {new Intl.NumberFormat("en-US",
                                {style: "currency",
                                currency: "USD"}).format(product.unitPrice)}
                        </Price>
                    </div>
                ))}

            </ProductGrid>
        </>
    )
}