import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-yellow-300">Lucky Aura</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            A journey towards pure, organic, and nature-powered skincare & haircare.
          </p>
        </div>
      </section>

      {/* ================= BRAND STORY ================= */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Our Story
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Lucky Aura was born from a simple belief — nature has the power to heal,
            nourish, and enhance our natural beauty. In a world filled with chemical-heavy
            products, we wanted to create a safer, more natural alternative for everyday
            skincare and haircare.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our formulations are inspired by traditional herbal wisdom and combined
            with modern techniques to deliver products that are gentle, effective,
            and suitable for all skin and hair types.
          </p>
        </div>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">
            Our Philosophy
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

            <div className="p-6 rounded-lg bg-gray-100">
              <div className="text-3xl mb-4">🌿</div>
              <h3 className="font-semibold text-xl mb-2">Nature First</h3>
              <p className="text-gray-600">
                We carefully select botanical ingredients, herbs, and essential oils
                that work in harmony with your skin and hair.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-gray-100">
              <div className="text-3xl mb-4">🧴</div>
              <h3 className="font-semibold text-xl mb-2">Safe & Gentle</h3>
              <p className="text-gray-600">
                Our products are free from parabens, sulphates, and harsh chemicals,
                making them safe for daily use.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-gray-100">
              <div className="text-3xl mb-4">✨</div>
              <h3 className="font-semibold text-xl mb-2">Visible Results</h3>
              <p className="text-gray-600">
                Consistent use of Lucky Aura products helps restore glow,
                strength, and natural balance.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= WHAT MAKES US DIFFERENT ================= */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            What Makes Lucky Aura Different?
          </h2>

          <ul className="space-y-4 text-gray-600 text-lg">
            <li>✔ Made with natural and herbal ingredients</li>
            <li>✔ Cruelty-free and ethically sourced</li>
            <li>✔ Suitable for all skin and hair types</li>
            <li>✔ Inspired by Ayurvedic and herbal traditions</li>
            <li>✔ Carefully crafted for visible and long-lasting results</li>
          </ul>
        </div>
      </section>

      {/* ================= OUR PROMISE ================= */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Our Promise to You
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            At Lucky Aura, we promise to deliver products that are safe, effective,
            and rooted in nature. Your skin and hair deserve the best, and we are
            committed to providing honest formulations you can trust every day.
          </p>
        </div>
      </section>

    </div>
  );
};

export default About;
