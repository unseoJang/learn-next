import { fetchProductsById } from "@/api"
import { ProductHeader } from "@/components/ProductHeader"
import ProductInfo from "@/components/product-detail/ProductInfo"
import React from "react"

/**
 * @author {상품 상세 페이지 컴포넌트}
 * @function ProductDetailPage
 **/

const ProductDetailPage = ({ productDetail }) => {
	console.log(productDetail)
	const headerTitle = "상품 상세 정보 페이지"
	return (
		<div>
			<ProductHeader title={headerTitle} />
			<ProductInfo productDetail={productDetail} />
		</div>
	)
}

export async function getServerSideProps(context) {
	const id = context.params.productId
	const { data } = await fetchProductsById(id)
	return {
		props: { productDetail: data },
	}
}

export default ProductDetailPage
