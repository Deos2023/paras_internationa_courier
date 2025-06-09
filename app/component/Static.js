import React from 'react';

const Static = () => {
  return (
    <div>
     <section
  className="relative text-center bg-cover md:bg-fixed py-20 text-white shadow-lg"
  style={{
    backgroundImage: "url('/cargo.jpg')",
    fontFamily: 'var(--font-lexendZetta)'
  }}
>
  <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
  <div className="relative container mx-auto z-10">
    <h1 className="text-[44px] md:text-[80px] font-bold drop-shadow-lg mt-12" id="heroTitle">
      Paras International Courier
    </h1>
    <p className="font-semibold" id="heroSubtitle">
      With 30,000 + Satisfied customers...
    </p>
    <a
      href="/contact"
      className="inline-block mt-6 px-8 py-4 rounded-full bg-gradient-to-b from-neutral-900 to-neutral-800 text-white font-medium text-xl shadow-lg transition hover:opacity-90"
    >
      Get in Touch
    </a>
  </div>
</section>

    </div>
  );
};

export default Static;
