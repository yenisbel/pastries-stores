import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from 'gatsby'
import ProductPreview from '../components/product-preview';

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allProductsJson {
        edges {
          node {
            title
            description
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `);
  const products = data.allProductsJson.edges;

  return (
    <Layout>
      <SEO title="Home" />
      <h3 style={{marginBottom: `1.4rem`}}>Welcome to Pastries <Link to="/locations/all"> --> Pick your nearest store</Link></h3>
      
      {products.map(({ node: product }) => {
        const title = product.title;
        const description = product.description;
        const imageData = product.image.childImageSharp.fluid;

        return (
          <ProductPreview
            title={title}
            description={description}
            imageData={imageData}
          />
        );
      })}
      
    </Layout>
  )

}

export default IndexPage
