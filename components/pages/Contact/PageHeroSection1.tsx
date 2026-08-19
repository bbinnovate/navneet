import Link from 'next/link';

export default function PageHeroSection1() {
  return (
    <div className="page-hero-block">
<div className="breadcrumb">
        <Link href="/" >Home</Link><span>/</span><span>Contact Us</span>
      </div>
<div className="page-hero">
        <div  className="hero-eyebrow tag">
          Sales · Support · Partnerships · School Demos
        </div>
        <h1>Let's Talk About Your School.</h1>
                 <p className="hero-sub subtitle grey-text ">

          Book a free 30-minute demo and we'll show you what NAVNEET TOPTECH
          looks like running inside a school like yours — your board, your
          grades, your goals.
        </p>
      </div>
</div>
  );
}
