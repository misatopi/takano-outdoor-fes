import Link from 'next/link';
import { client } from '../../../lib/microcms';
export async function generateMetadata({ params }) {
  const { year } = await params;

  return {
    title: `鷹野アウトドアフェス ${year}年 出店者一覧`,
    description: `${year}年に開催される鷹野アウトドアフェスの出店者一覧ページです。`,
    openGraph: {
      title: `鷹野アウトドアフェス ${year}年 出店者一覧`,
      description: `${year}年の出店者一覧をご紹介します。`,
      images: [
        {
          url: `/ogp_${year}.jpg`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}
export default async function Page({ params }) {
  const { year } = await params;

  const data = await client.get({
    endpoint: 'exhibitors',
    queries: {
      filters: `year[equals]${year}`,
      orders: 'order',
      limit: 100,
    },
  });

  const items = data.contents;

  return (
    <main className="exhibitor-archive">
      <h1 className="exhibitor-archive__heading  pageheader">
        鷹野アウトドアフェス{year} 出店者一覧
      </h1>
      <div className="exhibitor-wrap">
        <div className="exhibitor-archive__inner common-inner">

          <ul className="exhibitor-archive__list">
            {items.map((item) => (
              <li key={item.id} className="exhibitor-archive__item">
                <Link href={`/exhibitor/${year}/${item.slug}`}>
                  {item.thumbnail?.url && (
                    <img
                      className="exhibitor-archive__photo"
                      src={item.thumbnail.url}
                      alt={item.name}
                    />
                  )}
                  <div className="exhibitor-archive__info">
                    <h2>{item.name}</h2>
                    <p>more</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
