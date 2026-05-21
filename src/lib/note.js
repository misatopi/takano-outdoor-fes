import { XMLParser } from 'fast-xml-parser';

export async function getNotePosts() {
  const res = await fetch(
    'https://note.com/takano_outdoor/rss',
    {
      next: { revalidate: 3600 },
    }
  );

  const xml = await res.text();

  const parser = new XMLParser({
    ignoreAttributes: false,
  });

  const data = parser.parse(xml);

  const items = data.rss.channel.item;

    return items.slice(0, 3).map((item) => ({
    title: item.title,
    link: item.link,

    date: new Date(item.pubDate)
        .toLocaleDateString('ja-JP', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        })
        .replaceAll('/', '.'),
    }));
}