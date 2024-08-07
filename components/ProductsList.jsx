import axios from 'axios';
import { useEffect, useState } from 'react';

export const ProductList = props => {
	const [products, setProducts] = useState();
	useEffect(() => {
		axios.get('http://localhost:4000/products').then(response => {
			response.data;
			setProducts(response.data);
		});
	}, []);

	console.log(products);

	return (
		<ul>
			{products &&
				products.map(product => {
					return <li key={product.id}>{product.name}</li>;
				})}
		</ul>
	);
};
