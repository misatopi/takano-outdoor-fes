export default function TimeTable({ items = [], mode = 'recruiting' }) {
  return (
    <section className="timetable">
      <div className="timetable__inner">
        <h2 className="timetable__heading">
          <span className="en">TIME TABLE</span>
          当日スケジュール
        </h2>

        {mode === 'recruiting' && (
          <div className="timetable__comingsoon js-fadein">
            COMING SOON
          </div>
        )}

        {mode === 'open' && (
          <ul className="timetable__list js-fadein">
            {items.map((item, index) => (
              <li key={index} className="timetable__list--item">
                <span className="timetable__time">{item.time}</span>
                <span className="timetable__content">{item.content}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>

  );
}
