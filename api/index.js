import axios from "axios"

const instance = axios.create({
	baseURL: "http://localhost:4000",
})

/**
 * 상품 목록을 조회하는 api 함수
 * @returns
 */
function fetchProducts(productId) {
	return instance.get("/products", {
		params: {
			id: productId,
		},
	})
}

/**
 * 장바구니에 아이템을 추가하는 API 함수
 * @param {number} id
 * @param {string} name
 * @returns
 */
function createCartItem(id, name) {
	return instance.post("/carts", {
		id,
		name,
	})
}

/**
 * 상품 상세 정보를 조회하는 api 함수
 * @param {number} id
 * @returns
 */
function fetchProductsById(id) {
	return instance.get(`/products/${id}`)
}

export { fetchProducts, fetchProductsById, createCartItem }
