export default function CategoryPage({params}){
    return (
        <div>
            <h1>{params.category} 카테고리</h1>
            <p>이 카테고리의 제품 목록입니다.</p>
        </div>
    );
}