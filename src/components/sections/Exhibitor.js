'use client';
import { useMemo, useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

const categories = [
  { key: 'all', label: 'ALL' },
  { key: 'shop', label: 'SHOP' },
  { key: 'food', label: 'FOOD' },
  { key: 'workshop', label: 'WORKSHOP' },
  { key: 'stage', label: 'STAGE' },
];


export default function Exhibitor({ items = [], mode = 'open', year }) {
const [activeCategory, setActiveCategory] = useState('all');

const filteredItems = useMemo(() => {
  if (activeCategory === 'all') return items;
  return items.filter((item) => item.category?.[0] === activeCategory);
}, [items, activeCategory]);

console.log('mode:', mode);
console.log('items:', items);
console.log('filteredItems:', filteredItems);

const sectionRef = useRef(null);

useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const mm = gsap.matchMedia();

  mm.add('(min-width: 769px)', () => {

    if (!sectionRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: '+=100%',
      pin: true,
      scrub: true,
      invalidateOnRefresh: true,
    });

    // 読み込み後に再計算
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      clearTimeout(refreshTimer);
      trigger.kill();
    };
  });

  return () => {
    mm.revert();
  };

}, []);
  return (
    <section className="exhibitor" ref={sectionRef}>
      <div className="exhibitor__inner">
        <div className="exhibitor__menuwrap">
          <h2 className="exhibitor__heading">
            <span className="en">{year} BOOTH</span>出店者一覧
          </h2>

          <p className="exhibitor__description">
            三郷内外から集まった美味しいフード<br />
            地域でしか手に入らない雑貨<br />
            子どもたちが喜ぶワークショップ<br />
            素敵な演奏をお楽しみください
          </p>

          {mode === 'open' && (
            <ul className="exhibitor__menu">
              {categories.map((category) => (
                <li
                  key={category.key}
                  className={
                    activeCategory === category.key
                      ? 'exhibitor__menu-item exhibitor__menu-item--active'
                      : 'exhibitor__menu-item'
                  }
                  onClick={() => setActiveCategory(category.key)}
                >
                  {category.label}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="exhibitor__content">
          {mode === 'recruiting' && (
            <ul className="exhibitor__recruiting-list">
              <li className="exhibitor__recruiting-item exhibitor__recruiting--workshop">
                <h3>出店に応募する</h3>
                <p className="exhibitor__recruiting-info">
                  鷹野アウトドアフェスに出店希望の方はこちら<br />
                  （販売・フード・ワークショップ）
                </p>
                <p className="exhibitor__recruiting-time">2026/6/1〜2026/6/30</p>
                <a href="/document/exhibitor_guideline" className="btn exhibitor__btn exhibitor__btn--shop">
                  出店に応募する
                </a>
              </li>

              <li className="exhibitor__recruiting-item exhibitor__recruiting--stage">
                <h3>出演に応募する</h3>
                <p className="exhibitor__recruiting-info">
                  鷹野アウトドアフェスに出演希望の方はこちら<br />
                  （ステージ）
                </p>
                <p className="exhibitor__recruiting-time">2026/6/1〜2026/6/30</p>
                <a href="/document/performer_guideline" className="btn exhibitor__btn exhibitor__btn--stage">
                  出演に応募する
                </a>
              </li>

              <li className="exhibitor__recruiting-item exhibitor__recruiting--sponsor">
                <h3>協賛する</h3>
                <p className="exhibitor__recruiting-info">
                  鷹野アウトドアフェスに協賛いただける企業様を募集しています
                </p>
                <p className="exhibitor__recruiting-time">2026/6/1〜2026/6/30</p>
                <a href="/document/sponsor_guideline" className="btn exhibitor__btn exhibitor__btn--sponsor">
                  協賛する
                </a>
              </li>
            </ul>
          )}

          {mode === 'open' && (
            <ul className={`exhibitor__list exhibitor__list--${activeCategory}`}>
              {filteredItems.map((item) => (
                <li key={item.id} className="exhibitor__item">
                  <Link href={`/exhibitor/${year}/${item.slug}`}>
                    {item.thumbnail?.url && (
                      <img
                        className="exhibitor__photo"
                        src={item.thumbnail.url}
                        alt={item.name}
                      />
                    )}
                    <div className="exhibitor__info">
                      <h3>{item.name}</h3>
                      <p>more</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
