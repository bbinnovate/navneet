import { adminDb } from '@/lib/firebase/admin';

const awards = [
  {
    title: "Innovative Tech Solutions for Schools",
    organization: "8th BW Top Education Awards",
  },
  {
    title: "Excellence in AI-Driven Educational Solution",
    organization: "ET Education Excellence Awards",
  },
  {
    title: "Emerging Technology Solutions",
    organization: "Indian Education Awards 2025",
  },
  {
    title: "Leading LMS Provider",
    organization: "26th Elets World Education Summit",
  },
];

export default async function White12() {
  // Fetch published news from Firestore Server-side
  let pressCoverage: any[] = [];
  try {
    const snapshot = await adminDb.collection('news')
      .where('status', '==', 'published')
      .get();
      
    let rawNews = snapshot.docs.map(doc => {
      const data = doc.data() as any;
      return {
        ...data,
        id: doc.id
      };
    });
    
    // Sort in memory to avoid needing a Firestore composite index
    rawNews.sort((a: any, b: any) => {
      const dateA = a.publishDate ? (a.publishDate.seconds || a.publishDate._seconds) : 0;
      const dateB = b.publishDate ? (b.publishDate.seconds || b.publishDate._seconds) : 0;
      return dateB - dateA;
    });
    
    let sortedNews = rawNews.map(data => {
      return {
        id: data.id,
        slug: data.slug || '',
        title: data.title || '',
        publication: data.author || data.category || 'News',
        date: data.publishDate ? new Date((data.publishDate.seconds || data.publishDate._seconds) * 1000).toLocaleDateString() : (data.createdAt ? new Date((data.createdAt.seconds || data.createdAt._seconds) * 1000).toLocaleDateString() : ''),
        image: data.featuredImage || null,
        shortDescription: data.shortDescription || '',
        content: data.content || '',
        author: data.author || '',
        category: data.category || ''
      };
    });
    
    // Apply the limit of 6
    pressCoverage = sortedNews.slice(0, 6);
  } catch (error) {
    console.error('Error fetching public news:', error);
  }

  // Fallback to static if no news data in db
  if (pressCoverage.length === 0) {
    pressCoverage = [
      {
        slug: "navneet-toptech-wins-top-edtech-award-2025",
        publication: "Education World",
        title: "NAVNEET TOPTECH Honored as Leading LMS & EdTech Provider of the Year",
        date: "August 10, 2025",
        shortDescription: "Recognized for driving digital transformation across Indian K-12 schools with TopSchool LMS and TopClass interactive content.",
        author: "Education World Bureau"
      },
      {
        slug: "future-of-phygital-education-in-indian-schools",
        publication: "Economic Times",
        title: "How Navneet Toptech is Bridging the Physical and Digital Divide in Indian Classrooms",
        date: "July 22, 2025",
        shortDescription: "An in-depth look at how blended learning tools are revolutionizing teacher workflows and student engagement.",
        author: "ET Technology Desk"
      },
      {
        slug: "ai-driven-personalized-learning-navneet",
        publication: "Financial Express",
        title: "AI Integration in K-12 Curriculum: Navneet Toptech's Next Big Step",
        date: "June 30, 2025",
        shortDescription: "Inside the new TopAssess diagnostic assessment tool powered by intelligent recommendation engines.",
        author: "Financial Express Bureau"
      }
    ];
  }

  // Fetch published articles from Firestore Server-side
  let articlesData: any[] = [];
  try {
    const articlesSnapshot = await adminDb.collection('articles')
      .where('status', '==', 'published')
      .get();

    let rawArticles = articlesSnapshot.docs.map(doc => {
      const data = doc.data() as any;
      return {
        ...data,
        id: doc.id
      };
    });

    rawArticles.sort((a: any, b: any) => {
      const dateA = a.publishDate ? (a.publishDate.seconds || a.publishDate._seconds) : 0;
      const dateB = b.publishDate ? (b.publishDate.seconds || b.publishDate._seconds) : 0;
      return dateB - dateA;
    });

    articlesData = rawArticles.map(data => {
      return {
        id: data.id,
        slug: data.slug || '',
        title: data.title || '',
        category: data.category || 'Article',
        date: data.publishDate ? new Date((data.publishDate.seconds || data.publishDate._seconds) * 1000).toLocaleDateString() : (data.createdAt ? new Date((data.createdAt.seconds || data.createdAt._seconds) * 1000).toLocaleDateString() : ''),
        image: data.featuredImage || null,
        shortDescription: data.shortDescription || '',
        content: data.content || '',
        author: data.author || ''
      };
    }).slice(0, 6);
  } catch (error) {
    console.error('Error fetching public articles for news page:', error);
  }

  // Fallback static articles if no data in DB
  if (articlesData.length === 0) {
    articlesData = [
      {
        slug: "transforming-k12-education-with-ai-tools",
        category: "EdTech Innovation",
        title: "Transforming K-12 Classrooms with Next-Gen AI Learning Platforms",
        date: "August 15, 2025",
        shortDescription: "Exploring how personalized AI learning pathways are improving student retention and teacher productivity in schools across India.",
        image: null,
        author: "Navneet Toptech Research Team"
      },
      {
        slug: "future-of-hybrid-classrooms-in-india",
        category: "Future of Learning",
        title: "The Rise of Hybrid Classrooms: Integrating Physical Books with Digital Content",
        date: "July 28, 2025",
        shortDescription: "How phygital education ecosystems connect traditional print textbooks with interactive digital assessments.",
        image: null,
        author: "Academic Advisory Board"
      },
      {
        slug: "empowering-teachers-digital-skills-2025",
        category: "Teacher Empowerment",
        title: "Empowering Educators: Best Practices for Digital Pedagogy and LMS Adoption",
        date: "July 10, 2025",
        shortDescription: "A comprehensive guide for school leaders on training teachers to effectively leverage interactive whiteboards and LMS tools.",
        image: null,
        author: "Navneet Toptech Academy"
      }
    ];
  }

  return (
    <section className="sec sec-white">
      {/* Press Coverage Section */}
      <p className="tag green-text">Press Coverage</p>

      <h2 className="sec-title heading blue-text">
        What the Media Says.
      </h2>

      <div className="g3" style={{ marginTop: "1.5rem", marginBottom: "3.5rem" }}>
        {pressCoverage.map((press, index) => (
          <div
            key={index}
            style={{
              borderRadius: "14px",
              overflow: "hidden",
              border: "1px solid var(--border)",
              display: "flex",
              flexDirection: "column",
              background: "var(--white)",
            }}
          >
            {press.image ? (
              <div 
                style={{
                  background: `url(${press.image}) center/cover no-repeat`,
                  aspectRatio: "16/9",
                  borderBottom: "1px solid var(--border)",
                }}
              />
            ) : (
              <div
                style={{
                  background: "var(--light)",
                  borderBottom: "1px solid var(--border)",
                  aspectRatio: "16/9",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "1.5rem",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "28px" }}>📰</div>
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: "700",
                    fontFamily: "var(--fh)",
                    color: "var(--muted)",
                  }}
                >
                  News Coverage
                </div>
              </div>
            )}

            <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column" }}>
              <div className="tag green-text"
                style={{
                  display: "inline-block",
                  background: "rgba(27, 138, 115, 0.1)",
                  textTransform: "uppercase",
                  padding: "3px 9px",
                  borderRadius: "10px",
                  marginBottom: "8px",
                  alignSelf: "flex-start",
                }}
              >
                {press.publication}
              </div>

              <div className="title blue-text" style={{ marginBottom: "8px", flex: 1 }}>
                {press.slug ? (
                  <a href={`/news/${press.slug}`} className="hover:underline">{press.title}</a>
                ) : (
                  press.title
                )}
              </div>

              {press.shortDescription && (
                <p className="subtitle dark-text" style={{ fontSize: "13px", marginBottom: "10px", color: "var(--muted)", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                  {press.shortDescription}
                </p>
              )}

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto", fontSize: "12px", color: "var(--muted)" }}>
                <span>{press.date}</span>
                {press.slug && (
                  <a href={`/news/${press.slug}`} className="link-more" style={{ fontSize: "12px" }}>
                    Read News →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Awards & Recognition Section */}
      <p className="tag green-text">Awards & Recognition</p>

      <h2 className="sec-title heading blue-text">
        Recognition That Validates the Work.
      </h2>

      <div
        className="g4"
        style={{ marginTop: "1.5rem", marginBottom: "3.5rem" }}
      >
        {awards.map((award, index) => (
          <div
            key={index}
            style={{
              background: "var(--light)",
              borderRadius: "12px",
              padding: "1.25rem",
              border: "1px solid var(--border)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                background: "var(--white)",
                borderRadius: "10px",
                border: "1.5px dashed var(--border)",
                aspectRatio: "1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "10px",
                fontSize: "11px",
                fontWeight: "700",
                fontFamily: "var(--fh)",
                color: "var(--muted)",
              }}
            >
              Award Logo
            </div>

            <div className="title blue-text" style={{ marginBottom: "4px" }}>
              {award.title}
            </div>

            <div className="subtitle dark-text">
              {award.organization}
            </div>
          </div>
        ))}
      </div>

      {/* Articles Section - Directly Below Awards & Recognition */}
      <p className="tag green-text">Articles & Insights</p>

      <div className="sec-hrow" style={{ marginBottom: "1.5rem" }}>
        <h2 className="sec-title heading blue-text" style={{ margin: 0 }}>
          In-Depth Articles & Thought Leadership.
        </h2>
        {/* <a href="/articles" className="link-more">
          View All Articles →
        </a> */}
      </div>

      <div className="g3" style={{ marginTop: "1.5rem" }}>
        {articlesData.map((article, index) => (
          <div
            key={article.id || article.slug || index}
            style={{
              borderRadius: "14px",
              overflow: "hidden",
              border: "1px solid var(--border)",
              display: "flex",
              flexDirection: "column",
              background: "var(--white)",
            }}
          >
            {article.image ? (
              <div 
                style={{
                  background: `url(${article.image}) center/cover no-repeat`,
                  aspectRatio: "16/9",
                  borderBottom: "1px solid var(--border)",
                }}
              />
            ) : (
              <div
                style={{
                  background: "var(--light)",
                  borderBottom: "1px solid var(--border)",
                  aspectRatio: "16/9",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "1.5rem",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "28px" }}>📄</div>
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: "700",
                    fontFamily: "var(--fh)",
                    color: "var(--muted)",
                  }}
                >
                  Featured Article
                </div>
              </div>
            )}

            <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column" }}>
              <div className="tag green-text"
                style={{
                  display: "inline-block",
                  background: "rgba(27, 138, 115, 0.1)",
                  textTransform: "uppercase",
                  padding: "3px 9px",
                  borderRadius: "10px",
                  marginBottom: "8px",
                  alignSelf: "flex-start",
                  fontFamily: "var(--fh)",
                }}
              >
                {article.category || 'Article'}
              </div>

              <div className="title blue-text" style={{ marginBottom: "8px", flex: 1 }}>
                {article.slug ? (
                  <a >{article.title}</a>
                ) : (
                  article.title
                )}
              </div>

              {article.shortDescription && (
                <p className="subtitle dark-text" style={{ fontSize: "13px", marginBottom: "12px", color: "var(--muted)", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                  {article.shortDescription}
                </p>
              )}

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto", fontSize: "12px", color: "var(--muted)" }}>
                <span>{article.date}</span>
                {article.slug && (
                  <a href={`/articles/${article.slug}`} className="link-more" style={{ fontSize: "12px" }}>
                    Read Article →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}