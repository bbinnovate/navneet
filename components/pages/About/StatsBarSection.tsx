export default function StatsBarSection() {
  return (
    <section className="w-full bg-[#208F7C] px-6 py-16">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 tag grey-text">
            CENTRE OF ACADEMIC EXCELLENCE
          </p>

          <h2 className="heading white-text mb-3">
            The Experts Behind Every Lesson.
          </h2>

          <p className=" subtitle grey-text">
            Our academic team brings decades of curriculum expertise to every
            product — from animated content to assessment blueprints, ensuring
            every lesson meets board standards and pedagogical best practices.
          </p>
        </div>

        {/* Stats */}
        <div className=" mt-14 grid  grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-y-0">

          <div className="text-center">
            <div className="stat-num-two white-text">
              4,000+
            </div>
            <div className="  stat-label subtitle grey-text">
              Partner Schools
            </div>
          </div>

          <div className="text-center">
            <div className="stat-num-two white-text">
              1,00,000+
            </div>
            <div className="  stat-label subtitle grey-text">
              Teachers Trained
            </div>
          </div>

          <div className="text-center">
            <div className="stat-num-two white-text">
              20,00,000+
            </div>
            <div className="  stat-label subtitle grey-text">
              Students Enriched
            </div>
          </div>

          <div className="text-center">
            <div className="stat-num-two white-text">
              30+
            </div>
            <div className="  stat-label subtitle grey-text">
              Cities
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}