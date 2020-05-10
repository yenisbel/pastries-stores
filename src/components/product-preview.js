import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

const ProductPreview = ({ title, description, imageData }) => (
  <div className="product-preview">
    <Link to='/locations/all'>
      <Image fluid={imageData} alt={title} />
    </Link>
    <h2>
      <Link to='/locations/all'>{title}</Link>
    </h2>
    <p>{description}</p>
    <p>
      <Link to='/locations/all'>Put one in your bag! &rarr;</Link>
    </p>
  </div>
);

export default ProductPreview;