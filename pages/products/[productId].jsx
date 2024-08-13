import { ProductHeader } from '@/components/ProductHeader';
import axios from 'axios';
import React from 'react';

/**
 * @author {상품 상세 페이지 컴포넌트}
 * @function ProductDetailPage
 **/

const ProductDetailPage = ({ message, productInfo }) => {
	const headerTitle = '상품 상세 정보 페이지';
	return (
		<div>
			<ProductHeader title={headerTitle} />
			<div>ProductDetailPage : {message}</div>
			<p>{productInfo.name}</p>
		</div>
	);
};

export async function getServerSideProps(context) {
	// console.log(context.params.productId);
	const id = context.params.productId;
	const response = await axios.get(`http://localhost:4000/products/${id}`);
	return {
		props: { message: '서버에서 보내준 메시지', productInfo: response.data },
	};
}

export default ProductDetailPage;
