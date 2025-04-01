'use client';
import styles from './Login.module.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const router = useRouter();

    const [userId, setUserId] = useState('');
    const [passwd, setPasswd] = useState('');
    const [status, setStatus] = useState('테스트 준비 중...');
    const [error, setError] = useState('');
    const [userType, setUserType] = useState('users');
    const [pushKey, setPushKey] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        
        if (!userId || !passwd) {
          setError('아이디와 비밀번호를 모두 입력해주세요');
          return;
        }
        
        try {
          // 여기서 실제 로그인 API 호출
          const response = await fetch('http://localhost:8080/rest/auth/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId, passwd, userType, pushKey }),
          });
          
          const data = await response.json();
          
          if (response.ok) {
            // 로그인 성공 시 메인 페이지로 이동
            router.push('/');
          } else {
            // 로그인 실패 시 에러 메시지 표시
            setError(data.message || '로그인에 실패했습니다');
          }
        } catch (err) {
          setError('서버와의 연결에 문제가 있습니다');
          console.error(err);
        }
      };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>로그인</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="userId">아이디</label>
        <input type="text" id="userId" className={styles.input} value={userId} onChange={(e) => setUserId(e.target.value) }/>

        <label htmlFor="password">비밀번호</label>
        <input type="password" id="passwd" className={styles.input} value={passwd} onChange={(e) => setPasswd(e.target.value)}/>

        <button type="submit" className={styles.button}>로그인</button>
      </form>
    </div>
  );
}
