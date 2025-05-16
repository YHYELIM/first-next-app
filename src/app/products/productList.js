'use client';
import { useState } from "react";
import Link from "next/link";


export default function ProductList({products}){
    const [sortBy, setSortBy] = useState ('name');

    const sortedProducts = [...products].sort((a,b) => {
        if(sortBy === 'price'){
            return a.price - b.price;
        }
        return a.name.localeCompare(b.name);
    });

    return (
          <div>
      <div>
        <button onClick={() => setSortBy('name')}>이름순 정렬</button>
        <button onClick={() => setSortBy('price')}>가격순 정렬</button>
      </div>
      
      <ul>
        {sortedProducts.map(product => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              {product.name} - {product.price.toLocaleString()}원
            </Link>
          </li>
        ))}
      </ul>
    </div>
    );
}