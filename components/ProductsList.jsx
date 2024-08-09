import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './ProductList.module.css';

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
					return (
						<li key={product.id} className={styles.item}>
							<div>
								<Image
									src={product.imageUrl}
									alt={product.name}
									width={300}
									height={250}
								/>
								<div>{product.name}</div>
								{/* <div>{product.price}</div> */}
							</div>
						</li>
					);
				})}
		</ul>
	);
};
