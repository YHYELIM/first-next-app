'use client';

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>제품을 불러오는 중 오류가 발생했습니다</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>다시 시도</button>
    </div>
  );
}