import { fetchCarts } from "@/api"
import { CartHeader } from "@/components/cart/CartHeader"
import { CartList } from "@/components/cart/CartList"

// '/cart'에 해당하는 페이지 컴포넌트
const CartPage = carts => {
	console.log(carts)
	return (
		<div>
			<CartHeader />
			<CartList />
		</div>
	)
}

export async function getServerSideProps() {
	const { data } = await fetchCarts()

	return {
		props: {
			carts: data,
		},
	}
}

export default CartPage

/**
 * /login
 * /main
 * /home
 * /products/productsId/1
 */
