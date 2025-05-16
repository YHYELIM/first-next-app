import Link from 'next/link';
import { resolve } from 'styled-jsx/css';
export default async function ProductDetail({ params }) {
  if (params.id = '999'){
    throw new Error("제품을 찾을 수 없습니다.");
  }

  await new Promise (resolve => setTimeout(resolve, 2000));
  return (
    <div>
      <h1>제품 {params.id} 상세 정보</h1>
      <p>이 페이지는 제품 ID {params.id}에 대한 상세 정보 페이지입니다.</p>
      <Link href="/products">제품 목록으로</Link>
    </div>
  )
}