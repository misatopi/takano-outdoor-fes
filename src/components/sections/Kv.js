export default function Kv({ setting }) {
  const year = setting.year;
  const month = setting.month;
  const day = setting.day;
  const start = setting.start;
  const end = setting.end;

  // 曜日自動生成（ついでにやると良い）
  const date = new Date(year, month - 1, day);
  const week = ['日', '月', '火', '水', '木', '金', '土'][date.getDay()];

  return (
    <section className="kv">
      <div className="kv__inner">
        <div className="kv__content js-fadein">
          <img src="/img/img_logo.svg" alt="TAKANO OUTDOOR FES" />

          <p className="en kv__date">
            <span className="year">{year}</span>.
            <span className="month">{month}</span>.
            <span className="day">{day}</span>
            <span className="week">{week}</span><br className="sp"/>
            <span className="start-time">{start}</span>
            <span className="end-time">{end}</span>
          </p>

        </div>
      </div>
    </section>
  );
}
