import Link from 'next/link';

export default function PageHeroSection1() {
  return (
    <div className="page-hero-block">
<div className="breadcrumb">
        <Link href="/" >Home</Link><span>/</span><span>In the News</span>
      </div>
<div className="page-hero">
        <div className="page-hero-tag">Press Coverage · Awards · Media</div>
        <h1>NAVNEET TOPTECH in the News.</h1>
        <p>
          Coverage from leading education media, recognition from industry
          bodies, and stories of school transformation from across India.
        </p>
      </div>
</div>
  );
}
