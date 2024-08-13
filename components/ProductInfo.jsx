import React from "react"

/**
 * @author
 * @function
 **/

const ProductInfo = ({ productDetail }) => {
	return (
		<div>
			<div>
				<img src={productDetail.imageUrl} alt="" />
			</div>
			<div>
				<p>{productDetail.name}</p>
				<p>{productDetail.price}</p>
			</div>
		</div>
	)
}

export default ProductInfo
