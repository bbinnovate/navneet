import React from 'react'

const CTA = () => {
  return (
     <section className="w-full bg-[#1b8a73] px-6 py-7 md:px-12 md:py-8">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-8">
        
        {/* Content */}
        <div className="flex-1">
            
          <h3 className="flex items-center gap-2 sec-title sec-title-wh title">
            <span className="text-xl">📚</span>
          Bundled with TopSeries Coursebooks + AI-Enabled IFP Panels

          </h3>

          <p className="mt-2 subtitle grey-text">
            Same as TopSchool — TopAssess works seamlessly with TopSeries phygital books and Brio, Cybernetix, Hikvision IFPs.
          </p>
        </div>

        {/* CTA */}
        <div className="shrink-0">
          <button className="btn-wh-outline"
            type="button"
          >
            Explore TopSeries
            <span className="ml-1.5">→</span>
          </button>
        </div>

      </div>
    </section>
  )
}

export default CTA