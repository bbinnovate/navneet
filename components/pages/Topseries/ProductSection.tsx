export default function ProductSection() {
  return (
    <section className="w-full bg-[#f1f3fc] px-5 py-10 md:px-8 md:py-12">
      <div className="mx-auto w-full max-w-[1125px]">
        <div className="relative flex aspect-[16/9] w-full items-center justify-center rounded-[20px] border-2 border-dashed border-[#cdd5f2] bg-white">
          
          {/* Placeholder Badge */}
          <div className="absolute right-5 top-5 rounded-[10px] border border-[#cdd5f2] bg-[#f1f3fc] px-4 py-2">
            <span className="text-[14px] font-bold tracking-[1px] text-[#4b6098]">
              PLACEHOLDER
            </span>
          </div>

          {/* Center Content */}
          <div className="flex flex-col items-center justify-center text-center">
            
            {/* Icon */}
            <div className="mb-5 flex h-[80px] w-[80px] items-center justify-center rounded-[20px] border-2 border-[#d3daf3] bg-[#f1f3fc]">
              <span className="text-[32px]">🖥️</span>
            </div>

            {/* Title */}
            <h3 className="text-[20px] font-bold text-[#4b6098] md:text-[21px]">
              Product Screenshot
            </h3>

            {/* Description */}
            <p className="mt-6 text-[14px] font-medium text-[#d1d8ee] md:text-[16px]">
              [ Replace with actual product screen — 1280×720px recommended ]
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}