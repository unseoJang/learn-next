import { ProductList } from '@/components/ProductsList';
import { ProductHeader } from '../components/ProductHeader';

// '/'에 해당하는 페이지 컴포넌트
const ProductPage = () => {
	const headerTitle = '상품 목록 페이지';
	return (
		<div>
			<ProductHeader title={headerTitle} />
			<ProductList />
		</div>
	);
};

export default ProductPage;
/**
 * 1. 상품 목록 페이지 - '/'
 * 2. 상품 상세 페이지 - '/products/productId'
 * 3. 장바구니 페이지 - '/carts'
 */
