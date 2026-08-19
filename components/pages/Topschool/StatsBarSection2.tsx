
export default function StatsBarSection2() {
  return (
    <div className="stats" style={{ gridTemplateColumns: 'repeat(6, 1fr)' }}>
        <div className="stat-item">
          <div className="stat-num">100+</div>
          <div className="stat-label subtitle white-text">Schools Activated</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">300+</div>
          <div className="stat-label subtitle white-text">Academic Team</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">2,00,000+</div>
          <div className="stat-label subtitle white-text">MCQs</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">60,000+</div>
          <div className="stat-label subtitle white-text">Mins Digital Content</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">2,500+</div>
          <div className="stat-label subtitle white-text">Extended Lesson Assignments</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">18,000+</div>
          <div className="stat-label subtitle white-text">Digital Teaching Aids</div>
        </div>
      </div>
  );
}
