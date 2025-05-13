import { getPosts } from "../lib/posts";

export default async function BlogPage() {
  // 서버 컨포넌트에서 직접 데이터 가져오기
  const posts = await getPosts();
  
  return (
    <div>
      <h1>블로그 포스트</h1>
      <ul>
        {posts.map(post=> (
          <li key = {post.id}>
            <a href={`/blog/${post.slug}`}>
            <h2>{post.title}</h2>
            <p>작성일: {post.date}</p>
            </a>
          </li>
        )) 
        }
      </ul>
    </div>
  );
}