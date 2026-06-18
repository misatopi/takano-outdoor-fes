import Sponsor from '@/components/sections/Sponsor';
import { client } from '@/lib/microcms';

export default async function Footer() {
  const setting = await client.get({
    endpoint: 'settings',
  });

  return (
    <>
     <Sponsor items={setting.sponsors} />
    <footer className="footer">
  <div className="footer__inner common-inner">
    <img className="footer__logo" src="/img/img_logo.svg" alt=""/>
    <div className="footer__content">
      <h2 className="footer__heading">コンテンツ</h2>
      <ul className="footer__list">
        <li className="footer__listitem"><a href="/">ホーム</a></li>
        <li className="footer__listitem"><a href="">開催日時鷹野アウトドアフェスとは</a></li>
        <li className="footer__listitem"><a href="">お知らせ</a></li>
        <li className="footer__listitem"><a href="">出店一覧</a></li>
        <li className="footer__listitem"><a href="">アクセス</a></li>
        <li className="footer__listitem"><a href="">スポンサー</a></li>
      </ul>
    </div>
    <div className="footer__member">
      <h2 className="footer__heading">鷹野アウトドアフェス実行委員会</h2>
      <ul className="footer__list">
        <li className="footer__listitem"><a href="https://www.instagram.com/ichigo_okanaga/" target="_blank">フルーツカフェIchina</a></li>
        <li className="footer__listitem"><a href="https://misato-quest.jp/" target="_blank">ダイニングレストランQuest</a></li>
        <li className="footer__listitem"><a href="https://www.instagram.com/gohan_imhome_1663/" target="_blank">ごはん屋 I'm HOME</a></li>
        <li className="footer__listitem"><a href="https://kawailani.crayonsite.info/" target="_blank">Kawailani</a></li>
        <li className="footer__listitem"><a href="https://www.misatopi.com" target="_blank">地域ブログみさとぴ</a></li>
      </ul>
    </div>
    <div className="footer__information">
      <h2 className="footer__heading">関連情報</h2>
      <ul className="footer__list">
        <li className="footer__listitem"><a href="/document/exhibitor_guideline">出店者募集</a></li>
        <li className="footer__listitem"><a href="/document/performer_guideline">出演者募集</a></li>
        <li className="footer__listitem"><a href="/document/sponsor_guideline">スポンサー募集</a></li>
        <!--li className="footer__listitem"><a href="/document/volunteer_guideline">当日ボランティア募集</a></li-->
        <li className="footer__listitem"><a href="/document/exhibitor_info">出店者の皆様へ</a></li>
      </ul>
    </div>
    <div className="footer__sns">
      <ul className="footer__list">
        <li className="footer__snsitem"><a href="https://www.instagram.com/takano_outdoor_fes/" target="_blank"><img src="/img/img_instagram.svg" alt="" /></a></li>
      </ul>
    </div>

  </div>
</footer>
</>
  );
}
