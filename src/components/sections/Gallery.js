export default function Gallery({
  imagesLeft = [],
  imagesRight = [],
}) {
  // 少ない時の保険（任意）
  const loopLeft =
    imagesLeft.length < 8
      ? [...imagesLeft, ...imagesLeft, ...imagesLeft]
      : [...imagesLeft, ...imagesLeft];

  const loopRight =
    imagesRight.length < 8
      ? [...imagesRight, ...imagesRight, ...imagesRight]
      : [...imagesRight, ...imagesRight];

  return (
    <section className="gallery">
      <div className="gallery__inner">

        {/* 上段（左流れ） */}
        <ul className="gallery__track gallery__track--left">
          {loopLeft.map((img, index) => (
            <li key={`left-${index}`} className="gallery__item">
              <img src={`${img.url}?w=600`} />
            </li>
          ))}
        </ul>

        {/* 下段（右流れ） */}
        <ul className="gallery__track gallery__track--right">
          {loopRight.map((img, index) => (
            <li key={`right-${index}`} className="gallery__item">
              <img src={`${img.url}?w=600`} />
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
