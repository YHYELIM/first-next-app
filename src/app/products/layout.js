import Link from "next/link";
export default function ProductLayout ({children}){
    return (
        <div>
      <aside>
        <h3>제품 카테고리</h3>
        <ul>
          <li><Link href="/products/category/electronics">전자제품</Link></li>
          <li><Link href="/products/category/clothing">의류</Link></li>
        </ul>
      </aside>
      <section>{children}</section>
    </div>
    );
}