import React from 'react';

/**
 * @author
 * @function ProductDetailPage
 **/

const ProductDetailPage = ({ message }) => {
	return <div>ProductDetailPage : {message}</div>;
};

export async function getServerSideProps(context) {
	console.log(context.params.productId);
	return {
		props: { message: '서버에서 보내준 메시지' },
	};
}

export default ProductDetailPage;
