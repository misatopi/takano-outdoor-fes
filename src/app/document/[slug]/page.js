import { client } from '@/lib/microcms';

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const data = await client.get({
    endpoint: 'document',
    queries: {
      filters: `slug[equals]${slug}`,
    },
  });

  const item = data.contents[0];

  if (!item) {
    return {
      title: 'Not Found',
    };
  }

  const description = item.contents
    ? item.contents.replace(/<[^>]*>/g, '').slice(0, 100)
    : '';

  return {
    title: `${item.title}｜鷹野アウトドアフェス`,
    description,
    openGraph: {
      title: `${item.title}｜鷹野アウトドアフェス`,
      description,
      type: 'article',
      images: [
        {
          url: '/ogp_document.jpg',
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${item.title}｜鷹野アウトドアフェス`,
      description,
      images: ['/ogp_document.jpg'],
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;

  const data = await client.get({
    endpoint: 'document',
    queries: {
      filters: `slug[equals]${slug}`,
    },
  });

  const item = data.contents[0];

  if (!item) {
    return <div>Not Found</div>;
  }

  return (
    <main className="document">
      <h1 className="document__heading pageheader">
        {item.title}
      </h1>

      <div className="document-guidelinewrap">
        <div className="document-guideline__inner common-inner">
          <div
            className="document-guideline__content"
            dangerouslySetInnerHTML={{ __html: item.contents }}
          />

          {item.button && (
            <a
              href={item.button}
              className="btn btn-return"
              target="_blank"
              rel="noopener noreferrer"
            >
              応募はこちら
            </a>
          )}

          {item.limit && (
            <p className="document-guideline__limit">
              <strong>申込期限</strong>：{item.limit}
            </p>
          )}
        </div>
      </div>
    </main>
  );
}