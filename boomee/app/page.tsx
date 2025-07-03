"use client";
import { useEffect, useState } from "react";

const heroImages = [
  "/images/hero-1.jpg",
  "/images/hero-2.png",
  "/images/hero-3.png",
  "/images/hero-4.png",
  "/images/hero-5.png",
  "/images/hero-6.png",
  "/images/hero-7.png",
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen w-full font-sans">
      {/* Hero Section */}
      <section className="relative h-[100vh] text-white overflow-hidden">
        <img
          src={heroImages[index]}
          alt="Hero Cow"
          className="absolute w-full h-full object-cover transition-opacity duration-500 opacity-70"
        />

        {/* Optional background blur
        <div className="absolute top-0 left-0 w-full h-20 bg-black/30 backdrop-blur-sm z-10"></div> */}

        {/* Overlay Navigation & Branding */}
        <div className="relative z-20 flex justify-between items-center px-8 py-6">
          {/* Logo + Company Name */}
          <div className="flex items-center gap-3">
            <img
              src="/images/boomee-logo.png"
              alt="Boomee Logo"
              className="h-10 w-auto drop-shadow-md"
            />
            <span className="text-white font-bold text-lg md:text-xl drop-shadow-sm">
              Boomee Phygital Services Pvt. Ltd.
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex gap-4 md:gap-6 text-sm md:text-base">
            <a href="#about" className="hover:underline">About</a>
{/*             <a href="#case-studies" className="hover:underline">Case Studies</a> */}
            <a href="#how-it-works" className="hover:underline">How it works</a>
            <a href="#contact" className="hover:underline">Contact Us</a>
            <a href="#careers" className="hover:underline">Careers</a>
          </nav>
        </div>

        {/* Centered Text & Buttons */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 mt-48">
          <h1 className="text-4xl md:text-6xl font-bold">
            Empowering Livestock Health Care with Technology
          </h1>
          <p className="mt-6 text-lg max-w-xl">
            Using technology to revolutionize animal husbandry – proudly incubated under TANUVAS.
          </p>

          <div className="mt-8 flex flex-col md:flex-row gap-4">
            <a
              href="#solutions"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
            >
              Explore Our Solutions
            </a>
            <a
              href="#contact"
              className="bg-white text-blue-600 border border-blue-600 hover:bg-blue-100 px-6 py-3 rounded-lg font-medium transition"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </section>

      {/* Logos Row */}
<section className="py-10 bg-white">
  <div className="flex flex-col md:flex-row justify-center items-center gap-12">
    {/* Boomee Logo + Label */}
    <div className="flex flex-col items-center">
      <img src="/images/boomee-logo.png" alt="Boomee" className="h-40 object-contain" />
      <span className="mt-2 text-black font-semibold text-sm md:text-base text-center">
        Boomee Phygital Services Pvt. Ltd.
      </span>
    </div>

    {/* Label */}
    <div className="text-center text-black font-semibold text-base md:text-lg">
      in association with
    </div>

    {/* VIF/TANUVAS Logo + Label */}
    <div className="flex flex-col items-center">
      <img src="/images/vif.png" alt="VIF TANUVAS" className="h-40 object-contain" />
      <span className="mt-2 text-black font-semibold text-sm md:text-base text-center">
        Veterinary Incubation Foundation @ TANUVAS
      </span>
    </div>
  </div>
</section>


      {/* About Section */}
<section id="about" className="bg-white py-20 px-6 text-gray-800">
  <div className="max-w-6xl mx-auto space-y-16">
    <div className="text-center">
      <h2 className="text-4xl font-bold text-blue-700 mb-4">About Us</h2>
      <p className="text-lg leading-relaxed max-w-4xl mx-auto text-gray-700">
        <strong className="text-blue-800">Boomee Phygital Services Pvt. Ltd.</strong> is a pioneering
        veterinary innovation company based at TANUVAS, Chennai. We specialize in developing livestock
        vaccination technologies and smart ear tags, tailored to reduce manual labour, increase efficiency,
        and ensure precision in animal healthcare. Our team of engineers, veterinarians, and innovators is
        driven by a shared vision — to transform animal health services using advanced technology. Our
        solutions address critical challenges in rural veterinary outreach, such as manpower shortages,
        geographic barriers, and inefficiencies in disease monitoring.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-10">
      <div className="bg-gray-50 rounded-xl shadow-md p-6">
        <h3 className="text-2xl font-semibold text-blue-800 mb-3">🔧 What We Do</h3>
        <p className="text-gray-700 text-base leading-relaxed">
          We support animal healthcare through advanced technology by developing AI-driven vaccination
          solutions and smart ear tags that enable real-time health monitoring, tracking, and geofencing
          of livestock. Our platforms collect and analyze data to improve decision-making in veterinary
          services, disease control, and productivity.
        </p>
      </div>

      <div className="bg-gray-50 rounded-xl shadow-md p-6">
        <h3 className="text-2xl font-semibold text-blue-800 mb-3">🎯 Why We Do</h3>
        <p className="text-gray-700 text-base leading-relaxed">
          We're driven by challenges like limited veterinary manpower, remote access issues, and lack of
          real-time data. We believe healthy livestock is vital for food security, rural livelihoods, and
          public health. Our goal is to make animal healthcare faster, smarter, and more accessible.
        </p>
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-10">
      <div className="bg-white border-l-4 border-green-500 pl-6 py-4 shadow-sm">
        <h3 className="text-2xl font-semibold text-green-700 mb-2">🌍 Vision</h3>
        <p className="text-gray-700 text-base leading-relaxed">
          To become a global leader in smart veterinary technology, transforming animal healthcare
          through automation, data, and innovation — ensuring healthier livestock, empowered veterinary
          services, and sustainable agriculture.
        </p>
      </div>

      <div className="bg-white border-l-4 border-blue-500 pl-6 py-4 shadow-sm">
        <h3 className="text-2xl font-semibold text-blue-700 mb-2">🚀 Mission</h3>
        <p className="text-gray-700 text-base leading-relaxed">
          To develop AI-driven drones and smart ear tags that enhance the efficiency and reach of
          veterinary care. We aim for scalable, user-friendly solutions that support field-level
          decisions and empower communities through technology.
        </p>
      </div>
    </div>
  </div>
</section>



      {/* Products Section */}
<section id="solutions" className="bg-white py-20 px-6 text-gray-800">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-4 text-blue-700">Our Products</h2>
    <p className="text-center text-lg text-gray-600 mb-12">
      Bridging technology and animal health with cutting-edge solutions designed for field impact.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Vaccination Drone */}
      <div className="bg-green-50 hover:bg-green-100 transition rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        <div className="flex items-center justify-center md:w-1/3 p-6">
          <img
            src="/images/drone.png"
            alt="Vaccination Drone"
            className="max-h-40 w-auto object-contain"
          />
        </div>
        <div className="p-6 flex flex-col justify-center md:w-2/3">
          <h3 className="text-2xl font-bold text-green-800 mb-2">Vaccination Drone</h3>
          <p className="text-gray-700 mb-3">
            Our AI-enabled drone is engineered for rapid and contactless livestock vaccination in hard-to-reach rural regions. It autonomously navigates, administers vaccines, and ensures geo-logged delivery.
          </p>
          <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
            <li>Reduces vet workload and increases coverage</li>
            <li>Precision GPS mapping for herd-level targeting</li>
            <li>Real-time telemetry and cold chain monitoring</li>
          </ul>
        </div>
      </div>

      {/* Smart Ear Tag */}
      <div className="bg-green-50 hover:bg-green-100 transition rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        <div className="flex items-center justify-center md:w-1/3 p-6">
          <img
            src="/images/ear-tag.png"
            alt="Smart Ear Tag"
            className="max-h-40 w-auto object-contain"
          />
        </div>
        <div className="p-6 flex flex-col justify-center md:w-2/3">
          <h3 className="text-2xl font-bold text-green-800 mb-2">Smart Ear Tag</h3>
          <p className="text-gray-700 mb-3">
            A wearable IoT device for cattle that continuously monitors temperature, activity, heart rate, and location. Alerts are generated through our AI platform for early detection and disease prevention.
          </p>
          <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
            <li>24/7 monitoring of cattle health and movement</li>
            <li>Hourly and On demand data transfer to cloud and web or mobile apps</li>
            <li>Supports geofencing, heat detection & herd analytics</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

{/* How It Works Section */}
<section id="how-it-works" className="bg-blue-100 py-20 px-6 text-gray-800">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-14 text-blue-900">How It Works</h2>

    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
      {/* Step 1 */}
      <div className="flex flex-col items-center text-center w-48">
        <img
          src="/images/ear-tag.png"
          alt="Smart Ear Tag"
          className="h-24 mb-4 object-contain"
        />
        <h3 className="font-semibold text-lg mb-2 text-blue-800">Smart Ear Tag</h3>
        <p className="text-sm text-gray-700">
          Continuously collects temperature, movement & vitals from each cattle.
        </p>
      </div>

      {/* Arrow */}
      <div className="text-4xl text-blue-600 hidden md:block">➔</div>

      {/* Step 2 */}
      <div className="flex flex-col items-center text-center w-48">
        <img
          src="/images/real.png"
          alt="Real-Time Monitoring"
          className="h-24 mb-4 object-contain"
        />
        <h3 className="font-semibold text-lg mb-2 text-blue-800">Real-Time Monitoring</h3>
        <p className="text-sm text-gray-700">
          Data sent hourly and on demand to cloud dashboards & apps.
        </p>
      </div>

      {/* Arrow */}
      <div className="text-4xl text-blue-600 hidden md:block">➔</div>

      {/* Step 3 */}
      <div className="flex flex-col items-center text-center w-48">
        <img
          src="/images/ai.png"
          alt="AI Insights"
          className="h-30 mb-4 object-contain"
        />
        <h3 className="font-semibold text-lg mb-2 text-blue-800">AI Insights & Alerts</h3>
        <p className="text-sm text-gray-700">
          Detects early signs of disease or heat for timely vet action.
        </p>
      </div>

      {/* Arrow */}
      <div className="text-4xl text-blue-600 hidden md:block">➔</div>

      {/* Step 4 */}
      <div className="flex flex-col items-center text-center w-48">
        <img
          src="/images/drone.png"
          alt="Drone Vaccination"
          className="h-40 mb-4 object-contain"
        />
        <h3 className="font-semibold text-lg mb-2 text-blue-800">Drone Vaccination</h3>
        <p className="text-sm text-gray-700">
          Automated aerial vaccination for targeted disease control.
        </p>
      </div>
    </div>
  </div>
</section>



      {/* Who Trust Us Section */}
<section className="bg-gray-50 py-16 px-6 text-gray-800">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-12 text-blue-800">Who Trust Us</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
      {/* World Bank */}
      <div className="flex flex-col items-center">
        <img
          src="/images/world-bank.jpg"
          alt="World Bank"
          className="h-30 mb-4 object-contain"
        />
        <h4 className="text-md font-semibold text-gray-900">The World Bank</h4>
        <p className="text-sm text-gray-600">
          An international financial institution supporting development projects worldwide, including agriculture and livestock health in India.
        </p>
      </div>

      {/* TNIAMP */}
      <div className="flex flex-col items-center">
        <img
          src="/images/tniamp.jpg"
          alt="TNIAMP"
          className="h-30 mb-4 object-contain"
        />
        <h4 className="text-md font-semibold text-gray-900">Tamil Nadu Irrigated Agriculture Modernization Project (TNIAMP)</h4>
        <p className="text-sm text-gray-600">
          A World Bank-funded initiative promoting sustainable water use and integrated livestock management across Tamil Nadu.
        </p>
      </div>

      {/* TANUVAS */}
      <div className="flex flex-col items-center">
        <img
          src="/images/tanuvas.png"
          alt="TANUVAS"
          className="h-30 mb-4 object-contain"
        />
        <h4 className="text-md font-semibold text-gray-900">Tamil Nadu Veterinary and Animal Sciences University (TANUVAS)</h4>
        <p className="text-sm text-gray-600">
          India’s premier veterinary university and innovation hub supporting Boomee’s research and incubation.
        </p>
      </div>

      {/* VIF */}
      <div className="flex flex-col items-center">
        <img
          src="/images/vif.png"
          alt="VIF"
          className="h-30 mb-4 object-contain"
        />
        <h4 className="text-md font-semibold text-gray-900">Veterinary Incubation Foundation (VIF)</h4>
        <p className="text-sm text-gray-600">
          A startup incubator under TANUVAS empowering veterinary innovations and technology commercialization.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Careers Section */}
<section id="careers" className="bg-green-100 py-16 px-6 text-gray-800">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-4">Come, fly with us</h2>
    <p className="text-lg mb-8">
      We are actively hiring highly talented and passionate engineers across multiple domains, including Mechanical Design Engineering, Embedded Engineering, AI and Robotics, Operations and Manufacturing.
    </p>

    <form
  action="https://formspree.io/f/mzzgkngp"
  method="POST"
  className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
>
  {/* Hidden Subject Field */}
  <input type="hidden" name="_subject" value="New Career Application - Boomee" />

  {/* Name */}
  <div className="flex flex-col">
    <label htmlFor="name" className="mb-1 font-medium">Name</label>
    <input
      type="text"
      id="name"
      name="name"
      required
      className="border border-gray-300 rounded-lg px-4 py-2"
      placeholder="Your name"
    />
  </div>

  {/* Phone */}
  <div className="flex flex-col">
    <label htmlFor="phone" className="mb-1 font-medium">Phone Number</label>
    <input
      type="tel"
      id="phone"
      name="phone"
      required
      className="border border-gray-300 rounded-lg px-4 py-2"
      placeholder="+91"
    />
  </div>

  {/* Email */}
  <div className="flex flex-col">
    <label htmlFor="email" className="mb-1 font-medium">Email</label>
    <input
      type="email"
      id="email"
      name="email"
      required
      className="border border-gray-300 rounded-lg px-4 py-2"
      placeholder="you@example.com"
    />
  </div>

  {/* Location */}
  <div className="flex flex-col">
    <label htmlFor="location" className="mb-1 font-medium">Location</label>
    <input
      type="text"
      id="location"
      name="location"
      className="border border-gray-300 rounded-lg px-4 py-2"
      placeholder="City, State"
    />
  </div>

  {/* Note to Hiring Manager */}
  <div className="flex flex-col md:col-span-2">
    <label htmlFor="note" className="mb-1 font-medium">Note to the Hiring Manager</label>
    <textarea
      id="note"
      name="note"
      className="border border-gray-300 rounded-lg px-4 py-2"
      placeholder="Tell us about yourself"
    ></textarea>
  </div>

  {/* Resume Link */}
  <div className="flex flex-col md:col-span-2">
    <label htmlFor="resume" className="mb-1 font-medium">Resume (Google Drive Link)</label>
    <input
      type="url"
      id="resume"
      name="resume"
      className="border border-gray-300 rounded-lg px-4 py-2"
      placeholder="https://drive.google.com/..."
    />
  </div>

  {/* Submit Button */}
  <div className="md:col-span-2 mt-6">
    <button
      type="submit"
      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition"
    >
      Submit Application
    </button>
  </div>
</form>


    {/* <div className="mt-8">
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition"
      >
        Submit Application
      </button>
    </div> */}
  </div>
</section>


      {/* Contact Section */}
<section id="contact" className="bg-gray-50 py-20 px-6 text-gray-800">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-10">📬 Contact Us</h2>

    <div className="grid md:grid-cols-2 gap-8">
      {/* Registered Office */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">🏠 Registered Office</h3>
        <p className="text-gray-700 leading-relaxed">
          Railar Nagar, D.no. l4/105,<br />
          TNHB Colony, Sec-4, Podumbu,<br />
          Madurai North, Tamil Nadu – 625018 <br />
          🧾 <strong>CIN:</strong> U62013TN2025PTC178528
        </p>
      </div>

      {/* Corporate Office */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">🏢 Office</h3>
        <p className="text-gray-700 leading-relaxed">
          First Floor, CUL Building, VIF, TANUVAS,<br />
          Milk Colony, Madhavaram, Chennai – 600051
        </p>
      </div>

      {/* CIN */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4"> ✉️ Email </h3>
        <p className="text-gray-700">
        <strong>Email:</strong>{" "}
          <a
            href="mailto:info@boomee-tech.com"
            className="text-blue-600 hover:underline"
          >
            info@boomee-tech.com
          </a>
        </p>
        {/* <p className="text-gray-700">
          📞 <strong>Phone:</strong>{" "}
          <a href="tel:+919566661923" className="text-blue-600 hover:underline">
            +91 95666 61923
          </a>
        </p> */}
      </div>

      {/* Email */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4"> 📞 Phone</h3>
{/*         <p className="text-gray-700">
        ✉️ <strong>Email:</strong>{" "}
          <a
            href="mailto:info@boomee-tech.com"
            className="text-blue-600 hover:underline"
          >
            info@boomee-tech.com
          </a>
        </p> */}
        <p className="text-gray-700">
           <strong>Phone:</strong>{" "}
          <a href="tel:+919566661923" className="text-blue-600 hover:underline">
            +91 95666 61923
          </a>
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-blue-800 text-white p-6 text-center">
        <p className="text-sm">
          © 2025 Boomee Phygital Services Pvt. Ltd. | Incubated under Veterinary
          Incubation Foundation @TANUVAS
        </p>
      </footer>
    </main>
  );
}
