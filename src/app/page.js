import Kv from '@/components/sections/Kv';
import Concept from '@/components/sections/Concept';
import Gallery from '@/components/sections/Gallery';
import Topics from '@/components/sections/Topics';
import Exhibitor from '@/components/sections/Exhibitor';
import Access from '@/components/sections/Access';
import Timetable from '@/components/sections/Timetable';
import { client } from '@/lib/microcms';
import { getNotePosts } from '@/lib/note';

export async function generateMetadata() {
  const setting = await client.get({
    endpoint: 'settings',
  });

  const title = `鷹野アウトドアフェス ${setting.year}`;
  const description =
    '三郷市鷹野エリアで開催されるアウトドアテーマの地域イベントです。フード・物販・ワークショップ・ステージイベントを開催。';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      images: [
        {
          url: '/ogp.jpg',
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/ogp.jpg'],
    },
  };
}

export default async function Home() {
  const setting = await client.get({
    endpoint: 'settings',
  });

  const year = setting.year;
  const mode = setting.mode?.[0] || 'open';

  const exhibitorData = await client.get({
    endpoint: 'exhibitors',
    queries: {
      filters: `year[equals]${year}`,
      orders: 'order',
      limit: 100,
    },
  });

  const galleryData = await client.get({
    endpoint: 'gallery',
  });
  const topics = await getNotePosts();

  return (
    <main>
      <Kv setting={setting} />

      <Concept setting={setting} />

      <Gallery
        imagesLeft={galleryData.images_left}
        imagesRight={galleryData.images_right}
      />

     <Topics items={topics} />

      <Exhibitor
        items={exhibitorData.contents}
        year={year}
        mode={mode}
        setting={setting}
      />

      <Access />

      <Timetable
        items={setting.timetable}
        mode={mode}
      />
    </main>
  );
}