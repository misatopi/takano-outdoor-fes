export default function Sponsor({ items = [] }) {
  return (
    <section className="sponsor">
      <div className="sponsor__inner">
        <h2 className="sponsor__heading en">SPECIAL THANKS</h2>

        <p className="sponsor__detail">
          鷹野アウトドアフェス2025開催にあたり協賛、<br className="sp" />ご協力いただいた皆様です。<br />
          心より感謝申し上げます。
        </p>

        <ul className="sponsor__list">
          {items.map((item, index) => (
            <li key={index} className="sponsor__item">
              {item.url ? (
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.logo?.url ? (
                    <img src={item.logo.url} alt={item.name} />
                  ) : (
                    item.name
                  )}
                </a>
              ) : item.logo?.url ? (
                <img src={item.logo.url} alt={item.name} />
              ) : (
                item.name
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}