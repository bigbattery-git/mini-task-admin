import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Mini Task Admin</h1>

      <nav>
        <Link href={'/login'}>로그인</Link>
        <Link href={'/dashboard'}>대시보드</Link>
        <Link href={'/tasks'}>업무목록</Link>
        <Link href={'/users'}>사용자 목록</Link>
      </nav>
    </>
  );
}
