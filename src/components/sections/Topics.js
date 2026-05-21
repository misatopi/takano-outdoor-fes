export default function Topics({ items = [] }) {
  return (
    <section className="topics js-fadein">
      <div className="topics__inner common-inner">

        <h2 className="topics__heading">
          TOPICS
        </h2>

        <ul className="topics__list">
          {items.map((item, index) => (
            <li key={index} className="topics__item">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="topics__link"
              >
                <span className="topics__date">
                  {item.date}
                </span>

                <span className="topics__title">
                  {item.title}
                </span>
              </a>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}