export default function Concept({ setting }) {
  const title = setting.concept_title;
  return (
    <section className="concept">
      <div className="concept__inner common-inner">
      <img src="/img/img_concept.png" alt="" />
      <div className="concept__content">
        <h2>{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: setting.concept_discription }} />
      </div>

      </div>

    </section>

  );
}
