// 임시 블로그 포스트 데이터
const posts = [
  {
    id: 1,
    slug: 'hello-nextjs',
    title: 'Hello Next.js',
    content: 'Next.js는 React 프레임워크입니다...',
    date: '2025-04-10'
  },
  {
    id: 2,
    slug: 'server-components',
    title: '서버 컴포넌트 이해하기',
    content: '서버 컴포넌트는 서버에서 렌더링됩니다...',
    date: '2025-04-15'
  }
];

// 모든 포스트 가져오기
export async function getPosts() {
  // 실제로는 DB나 API에서 가져옴
  await new Promise(r => setTimeout(r, 1000)); // 로딩 테스트용 지연
  return posts;
}

// 특정 포스트 가져오기
export async function getPost(slug) {
  await new Promise(r => setTimeout(r, 1000)); // 로딩 테스트용 지연
  return posts.find(p => p.slug === slug);
}