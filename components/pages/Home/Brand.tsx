

const schools = [
  { initials: "GS", location: "Akola", name: "G S Convent" },
  { initials: "HA", location: "Pune", name: "Holy Angels" },
  { initials: "JH", location: "Pimpri", name: "Jai Hind HS" },
  { initials: "SJ", location: "Khadki", name: "St. Joseph HS" },
  { initials: "HC", location: "Amravati", name: "Holy Cross" },
  { initials: "VG", location: "Kolhapur", name: "Vimla Goenka" },
  { initials: "VH", location: "Nashik", name: "Vision HS" },
  { initials: "NE", location: "Nashik", name: "Nashik Edu." },
  { initials: "MI", location: "Mumbai", name: "MVM Intl." },
  { initials: "DB", location: "Mumbai", name: "Don Bosco" },
  { initials: "HE", location: "CBSE", name: "Heritage" },
  { initials: "HW", location: "Academy", name: "Holy Wood" },
  { initials: "JH", location: "School", name: "Jai Hind" },
  { initials: "MS", location: "School", name: "Mahila Samiti" },
  { initials: "MG", location: "CBSE", name: "Mahatma Gandhi" },
  { initials: "YA", location: "School", name: "Yash Academy" },
  { initials: "MH", location: "School", name: "Michael HS" },
  { initials: "NE", location: "Nashik", name: "Nasik Edu." },
  { initials: "PI", location: "CBSE", name: "Pooja Intl." },
  { initials: "RP", location: "CBSE", name: "Radiant Public" },
  { initials: "RH", location: "CBSE", name: "Rosary HS" },
  { initials: "SD", location: "School", name: "Sant Dnyan." },
  { initials: "SI", location: "CBSE", name: "SDM Intl." },
  { initials: "SD", location: "College", name: "Sharada DP" },
  { initials: "SM", location: "English", name: "St. Mary's" },
  { initials: "SD", location: "CBSE", name: "Swami Dev." },
  { initials: "SS", location: "Goan HS", name: "St. Sebastian" },
  { initials: "VI", location: "CBSE", name: "Vijetha" },
  { initials: "SE", location: "Society", name: "Sindhu Edu." },
  { initials: "YU", location: "CBSE", name: "Yugantar" },
  { initials: "SA", location: "Convent", name: "Satpuda" },
  { initials: "AP", location: "Aurangab", name: "AGP Public" },
  { initials: "BN", location: "CBSE", name: "Balaji Natl." },
  { initials: "BR", location: "Public", name: "Brindhavan" },
  { initials: "CE", location: "CBSE", name: "Camp Edu." },
  { initials: "EA", location: "School", name: "Eaglewood" },
  { initials: "GE", location: "CBSE", name: "Geethanjali" },
  { initials: "BJ", location: "College", name: "B.C.A. Jr." },
  { initials: "SM", location: "Mumbai", name: "Swami Mukt." },
  { initials: "YU", location: "Rajnandg", name: "Yugantar" },
  { initials: "HU", location: "English", name: "Huzurpaga" },
  { initials: "BM", location: "Gamadia", name: "Bai M N" },
  { initials: "MO", location: "Vashi", name: "Modern" },
  { initials: "PE", location: "Pune", name: "Pragati EM" },
  { initials: "CH", location: "Satara", name: "Chhatrapati" },
];

export default function Brand() {
  // Duplicate the array so the marquee can loop continuously.
  const scrollingSchools = [...schools, ...schools];

  return (
    <section className="schools-strip">
      <div className="schools-strip-inner">
        <p className="tag green-text">Trusted By</p>

        <h2 className=" title blue-text">4,000+ Schools Across India</h2>

         <p className=" subtitle dark-text">
          From Maharashtra to Karnataka — schools that have made NAVNEET
          TOPTECH their transformation partner.
        </p>
      </div>

      <div className="scroll-track-wrap">
        <div className="scroll-track">
          {scrollingSchools.map((school, index) => (
            <div
              className="school-logo-item"
              key={`${school.name}-${school.location}-${index}`}
            >
              <div className="school-logo-badge">
                {school.initials}
                <br />

                <span>{school.location}</span>
              </div>

              <div className="school-logo-name">
                {school.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}