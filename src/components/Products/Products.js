import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = () => {
	const [products] = useState(productsData);

	return (
		<section>
			{products.map(product => <Product key={product.id} name={product.name} title={product.title} colors={product.colors} sizes={product.sizes} basePrice={product.basePrice} />)}
			{/* {products.map(product => <Product {...products[0]} />)} */}
			{/* <Product {...products[0]} />
			<Product {...products[1]} /> */}
		</section>
	);
};

export default Products;