import Link from 'next/link';
import ProductList from './productList';

// 서버 컴포넌트에서 데이터 페칭
async function  getProducts() {
    return [
        // 실제로 API 호출
        { id: 1, name: '스마트폰', price: 1000000 },
        { id: 2, name: '노트북', price: 1500000 },
        { id: 3, name: '태블릿', price: 800000 },
    ];
    
}
export default async function Products() {
    const products = await getProducts();
  return (
    <div>
      <h1>제품 목록</h1>
      <ProductList products ={products}/>
    </div>
  )
}
