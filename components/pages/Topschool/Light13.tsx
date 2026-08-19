export default function Light13() {
  return (
    <section className="sec sec-light">
      <div className="flex flex-col items-center gap-8 md:flex-row md:items-center">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2">
          <p className="tag green-text">
            One Platform. Infinite Possibilities.
          </p>

          <h2 className="heading blue-text mb-3">
            Everything Your School Needs. One Place.
          </h2>

           <p className="subtitle dark-text " style={{ marginBottom: "2rem" }}>
            Teachers teach, plan lessons, and track progress. Students learn
            through experiential and gamified learning with 3D animations and
            AI-enabled assessments. Administrators get full visibility across
            the institution.
          </p>
        </div>

        {/* Right Video Section */}
        <div className="w-full md:w-1/2">
          <div className="flex min-h-[220px] w-full items-center justify-center rounded-lg border-2 border-dashed border-gray-400 bg-gray-100 md:min-h-[300px]">
            <span className="text-sm font-medium text-gray-500">
              Add Video
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}