const conclaves = [
  {
    id: "y25",
    year: "2025",
    cities: "36 Cities",
    aftermovie:
      "https://youtu.be/ZzQoEfv3_wE?si=Sq5is4mnmpZ6hCd4",
    photos: [
      null,
      null,
      null,
      null,
      null,
      null,
    ],
  },
  {
    id: "y24",
    year: "2024",
    cities: "26 Cities",
    aftermovie:
      "https://youtu.be/EpXR7WBTk5U?si=N6yRMXSTOQn_m3EN",
    photos: [
      null,
      null,
      null,
      null,
      null,
      null,
    ],
  },
  {
    id: "y23",
    year: "2023",
    cities: "28 Cities",
    aftermovie:
      "https://youtu.be/oeycYIE4xfo?si=yUVhYr5ubupf8YEo",
    photos: [
      "https://navneettoptech.com/wp-content/uploads/2024/02/DSC_1141.jpg",
      "https://navneettoptech.com/wp-content/uploads/2024/02/1R9A6653.jpg",
      "https://navneettoptech.com/wp-content/uploads/2024/02/AEHA9751.jpg",
      "https://navneettoptech.com/wp-content/uploads/2024/02/1R9A6823.jpg",
      "https://navneettoptech.com/wp-content/uploads/2024/02/AEHA9515.jpg",
      "https://navneettoptech.com/wp-content/uploads/2024/04/DSC_3427.jpg",
      "https://navneettoptech.com/wp-content/uploads/2024/04/DSC_7063.jpg",
     
    ],
  },
  {
    id: "y22",
    year: "2022",
    cities: "10 Cities",
    aftermovie: null,
    photos: [
      "https://navneettoptech.com/wp-content/uploads/2024/04/IMG_9696.jpg",
      "https://navneettoptech.com/wp-content/uploads/2024/04/IMG_9750.jpg",
      "https://navneettoptech.com/wp-content/uploads/2024/04/IMG_9827.jpg",
      "https://navneettoptech.com/wp-content/uploads/2024/04/IMG_9919.jpg",
      "https://navneettoptech.com/wp-content/uploads/2024/04/IMG_9689.jpg",
      "https://navneettoptech.com/wp-content/uploads/2024/04/TJ043114.jpg",
      "https://navneettoptech.com/wp-content/uploads/2024/04/DSC_1995.jpg",
     
    ],
  },
];

export default function Light46() {
  return (
    <section className="sec sec-light">
      <p className="tag green-text">Recent Conclaves</p>

      <h2
        className="heading blue-text mb-3"
        style={{ marginBottom: ".5rem" }}
      >
        Editions That Enlightened Minds, Connected Peers.
      </h2>

      <p className="subtitle dark-text" style={{ marginBottom: "2rem" }}>
        A city footprint that's grown every year.
      </p>

      <div className="cur-tabs">
        <div className="cur-tab active" data-cur-tab="y25">
          2025 · 36 Cities
        </div>

        <div className="cur-tab" data-cur-tab="y24">
          2024 · 26 Cities
        </div>

        <div className="cur-tab" data-cur-tab="y23">
          2023 · 28 Cities
        </div>

        <div className="cur-tab" data-cur-tab="y22">
          2022 · 10 Cities
        </div>
      </div>

      {conclaves.map((conclave, index) => (
        <div
          key={conclave.id}
          id={`cur-${conclave.id}`}
          className={`cur-panel ${index === 0 ? "active" : ""}`}
        >
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "14px",
              flexWrap: "wrap",
              marginBottom: "1.25rem",
            }}
          >
            <div
              style={{
                fontFamily: "var(--fh)",
                fontSize: "28px",
                fontWeight: "800",
                color: "var(--blue2)",
              }}
            >
              {conclave.cities}
            </div>

            {conclave.aftermovie && (
              <a
                href={conclave.aftermovie}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "13px",
                  fontWeight: "700",
                  color: "var(--green)",
                  cursor: "pointer",
                  fontFamily: "var(--fh)",
                  textDecoration: "none",
                }}
              >
                ▶ Watch the {conclave.year} Aftermovie →
              </a>
            )}
          </div>

         <div
  className="photo-scroller"
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "1rem",
  }}
>
  {conclave.photos.map((photo, photoIndex) =>
    photo ? (
      <img
        key={photoIndex}
        src={photo}
        alt={`Conclave ${conclave.year}`}
        style={{
          width: "100%",
          aspectRatio: "3 / 2",
          objectFit: "cover",
          borderRadius: "14px",
          display: "block",
        }}
      />
    ) : (
      <div
        key={photoIndex}
        style={{
          width: "100%",
          aspectRatio: "3 / 2",
          background: "var(--light)",
          border: "2px dashed var(--border)",
          borderRadius: "14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--muted)",
          fontFamily: "var(--fh)",
          fontSize: "12px",
          fontWeight: "600",
        }}
      >
        [ Panel photo ]
      </div>
    )
  )}
</div>
        </div>
      ))}
    </section>
  );
}