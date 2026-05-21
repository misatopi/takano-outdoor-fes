import { client } from '../../../../lib/microcms';
import Link from 'next/link';

const categoryLabel = {
  shop: '物販',
  food: 'フード',
  workshop: 'ワークショップ',
  stage: 'ステージ',
};

export async function generateMetadata({ params }) {
  const { year, slug } = await params;

  const data = await client.get({
    endpoint: 'exhibitors',
    queries: {
      filters: `slug[equals]${slug}[and]year[equals]${year}`,
    },
  });

  const item = data.contents[0];

  if (!item) {
    return {
      title: '出店者情報が見つかりません',
    };
  }

  const description = item.description
    ? item.description.replace(/<[^>]*>/g, '').slice(0, 100)
    : `${item.name}の出店情報です。`;

  return {
    title: `${item.name}｜${categoryLabel[item.category?.[0]] || '出店者'}｜鷹野アウトドアフェス ${year}`,
    description,
    openGraph: {
      title: `${item.name}｜鷹野アウトドアフェス ${year}`,
      description,
      images: item.thumbnail?.url
        ? [{ url: item.thumbnail.url, width: 1200, height: 630 }]
        : [],
    },
  };
}

export default async function Page({ params }) {
  const { year, slug } = await params;

  const data = await client.get({
    endpoint: 'exhibitors',
    queries: {
      filters: `slug[equals]${slug}[and]year[equals]${year}`,
    },
  });

  const item = data.contents[0];

  if (!item) {
    return <div>Not Found</div>;
  }
  return (
    <main className="exhibitor-detail">
      <h1 className="exhibitor__pagetitle pageheader">鷹野アウトドアフェス{year} 出店者</h1>
      <div className="exhibitor-wrap">
        <div className="exhibitor-detail__inner common-inner">
          {item.thumbnail?.url && (
            <img
              className="exhibitor-detail__image"
              src={item.thumbnail.url}
              alt={item.name}
            />
          )}

          <div className="exhibitor__datawrap">
            <h2 className="exhibitor__shopname">
              {item.name}
            </h2>
            <div className="exhibitor__comment" dangerouslySetInnerHTML={{ __html: item.description }}></div>

            <dl className="exhibitor__datatable">
             <dt>出店ジャンル</dt><dd>{categoryLabel[item.category?.[0]]}</dd>
             <dt>所在地</dt><dd>{item.address}</dd>
             <dt>Instagram</dt><dd><a href={item.instagram}>{item.instagram}</a></dd>
             <dt>公式サイト</dt><dd><a href={item.website}>{item.website}</a></dd>
            </dl>
          </div>
          <Link href={`/exhibitor/${year}`} className="btn btn-return">
          {year}年 出店者一覧
          </Link>
        </div>
      </div>
    </main>
  );
}
