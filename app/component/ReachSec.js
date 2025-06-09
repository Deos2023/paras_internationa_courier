'use client';

import Image from 'next/image';

export default function ReachSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        
        {/* Left Column */}
        <div className="space-y-4">
          <h2 className="text-3xl  text-gray-800">
            27,000+ <span className="text-black">Unique</span><br />
            Pin codes Nationwide
          </h2>
          <div className="relative w-full h-56 mx-auto">
            <Image
              src="/47646.jpg" // your background shape image
              alt="Pincodes"
              fill
              className="object-contain"
            />
            <div className="absolute top-10 left-6 text-sm text-gray-700">Bangalore</div>
            <div className="absolute top-24 left-8 text-sm text-gray-700">Gurgaon</div>
            <div className="absolute top-32 right-10 text-sm text-gray-700">Mumbai</div>
            <div className="absolute bottom-10 left-12 text-sm text-gray-700">Jaipur</div>
          </div>
        </div>

        {/* Middle Column */}
        <div className="space-y-4">
          <h2 className="text-3xl  text-gray-800">
            220+ <span className="text-black">Countries</span><br />
            and Territories Globally
          </h2>
          <div className="relative w-56 h-56 mx-auto">
  {/* Transparent globe image from Unsplash */}
  <Image
    src="/19197958.jpg"
    alt="Global Reach"
    fill
    className="object-contain"
  />
  {/* Example flags from flagcdn.com */}
  <Image
    src="https://flagcdn.com/us.svg"
    alt="US"
    width={24}
    height={24}
    className="absolute top-2 left-16"
  />
  <Image
    src="https://flagcdn.com/gb.svg"
    alt="UK"
    width={24}
    height={24}
    className="absolute bottom-2 left-8"
  />
  
   <Image
    src="https://flagcdn.com/in.svg"
    alt="IN"
    width={24}
    height={24}
    className="absolute bottom-2 left-8"
  />
  <Image
    src="https://flagcdn.com/br.svg"
    alt="Brazil"
    width={24}
    height={24}
    className="absolute top-20 right-4"
  />
  <Image
    src="https://flagcdn.com/ch.svg"
    alt="Switzerland"
    width={24}
    height={24}
    className="absolute top-2 right-20"
  />
  <Image
    src="https://flagcdn.com/ar.svg"
    alt="Argentina"
    width={24}
    height={24}
    className="absolute bottom-2 right-10"
  />
</div>

        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <h2 className="text-3xl  text-gray-800">
            25+ <span className="text-black">Courier</span><br />
            Partners
          </h2>
          <div className="grid grid-cols-3   items-center justify-center">
            <Image src="/brand/inter/2 (1).png" alt="Ecom" width={80} height={20} />
            <Image src="/brand/inter/2 (2).png" alt="Xpressbees" width={80} height={40} />
            <Image src="/brand/inter/2 (3).png" alt="Blue Dart" width={80} height={40} />
            <Image src="/brand/inter/2 (4).png" alt="Delhivery" width={80} height={40} />
            <Image src="/brand/inter/2 (5).png" alt="Shadowfax" width={50} height={20} />
            <Image src="/brand/domestic/3 (1).png" alt="Ekart" width={80} height={40} />
            <Image src="/brand/domestic/3 (2).png" alt="Borzo" width={80} height={40} />
            <Image src="/brand/domestic/3 (3).png" alt="India Post" width={80} height={40} />
            <Image src="/brand/domestic/3 (4).png" alt="Ecom" width={80} height={40} />
            <Image src="/brand/domestic/3 (5).png" alt="Xpressbees" width={80} height={40} />
            <Image src="/brand/domestic/3 (6).png" alt="Blue Dart" width={80} height={40} />
            <Image src="/brand/domestic/3 (7).png" alt="Delhivery" width={80} height={40} />
            <Image src="/brand/domestic/3 (8).png" alt="Shadowfax" width={80} height={40} />
            <Image src="/brand/domestic/3 (9).png" alt="Shadowfax" width={80} height={40} />
        
          </div>
        </div>

      </div>
    </section>
  );
}
