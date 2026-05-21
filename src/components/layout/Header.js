'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  return (
    // header
    <header className={isHome ? 'header header--home' : 'header header--sub'}>
      <h1 className="header__heading en"><Link href="/">TAKANO OUTDOOR FES</Link></h1>
      <nav className="header__nav">
        <ul className="header__menu">
          <li><Link href="">開催日時</Link></li>
          <li><Link href="">鷹野アウトドアフェスとは</Link></li>
          <li><Link href="">お知らせ</Link></li>
          <li><Link href="">出店一覧</Link></li>
          <li><Link href="">アクセス</Link></li>
          <li><Link href="">スポンサー</Link></li>
        </ul>
      </nav>
    </header>
  );
}
