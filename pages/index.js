import Head from "next/head";
import Navbar from "../components/navbar/navbar";
import React from "react"
import ProductList from "../components/products/index"
import Header from "../components/Header/header"
import Footer from "../components/Footer/index"

import styled from "styled-components";

const DiscoverAisle = styled.div`
    {
      width:60%;
      margin:auto;
      @media (max-width: 1065px) {
            width:100%;
        }    }
        `;

// https://thecodest.co/blog/data-fetching-strategies-in-nextjs/
  // HTML will be generated after fetching the data by resolving the promise.
  // In this case, we can use the getStaticProps data fetching method
export async function getStaticProps(context) {

  const res = await fetch("https://api.foxtrotchicago.com/v5/inventory/aisles/224/items?store_id=6")
  const products = await res.json()
  // console.log(products);

  // if no data/error return error/nothing
  if (!products) {
      return {
          notFound: true,
          
      }
  }
  return {
      props: { products },
  }
}

const Index = ({ products }) => {
  const groups = products.aisle.groups;
return (
  <div>
    <Head>
      <title>Foxtrot</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://use.typekit.net/zdz0zoa.css" />
    </Head>
    <main>
        <Navbar />
          <DiscoverAisle>
            <Header />
              <div>
                  <ul>
                      {groups.map(group => (
                          <ProductList 
                            title={group.name}
                            products={group.products}
                          >
                          </ProductList>
                      ))}
                  </ul>
              </div>
          </DiscoverAisle>
        <Footer></Footer>
    </main>
  </div>
);
};

export default Index;

