'use client';

import { motion } from 'framer-motion';

const featuredProducts = [
  {
    name: 'Luxury Birthday Cake',
    tag: 'Best Seller',
    price: 'From R850',
    accent: 'from-rose-200 via-rose-100 to-amber-50',
    description: 'Elegant buttercream finishing with custom flavours and personal touches.',
  },
  {
    name: 'Wedding Celebration Cake',
    tag: 'Signature',
    price: 'From R1,650',
    accent: 'from-amber-100 via-stone-100 to-rose-50',
    description: 'Statement cakes made for unforgettable moments, from classic to modern.',
  },
  {
    name: 'Gift Box Treats',
    tag: 'Sweet Surprise',
    price: 'From R280',
    accent: 'from-emerald-100 via-stone-100 to-rose-50',
    description: 'Curated dessert boxes and pastries perfect for gifting and everyday joy.',
  },
];

const highlights = [
  'Custom designs for birthdays, weddings, and events',
  'Premium ingredients and handcrafted quality',
  'Fast local ordering in Pretoria',
];

const stats = [
  { value: '500+', label: 'custom orders' },
  { value: '4.9/5', label: 'client rating' },
  { value: '24h', label: 'response time' },
];

const steps = [
  { title: 'Tell us your vision', text: 'Share your occasion, style, size, and flavour preferences.' },
  { title: 'We craft the design', text: 'Our team creates a tailored concept and pricing for your order.' },
  { title: 'We deliver with care', text: 'Enjoy a premium finish and dependable delivery for your event.' },
];

const reviews = [
  {
    quote:
      'The cake looked stunning and tasted even better. Everyone at our celebration kept asking where it came from.',
    name: 'Maya R.',
  },
  {
    quote:
      'Beautiful finish, professional communication, and premium quality. Exactly what we wanted for our event.',
    name: 'Lerato N.',
  },
  {
    quote:
      'Cake Maid made our baby shower feel extra special. The design was elegant and the service was outstanding.',
    name: 'Aisha P.',
  },
];

export default function Home() {
  return (
    <main className="bg-cream text-cacao">
      <header className="mx-auto max-w-7xl px-6 pb-6 pt-5">
        <nav className="flex items-center justify-between rounded-full border border-stone-200 bg-white/80 px-5 py-3 shadow-soft backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-rose-100 via-rose-300 to-amber-100 text-lg font-semibold text-cacao shadow-inner">C</div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-400">Cake Maid</p>
              <p className="text-xs text-stone-500">Custom confectionery</p>
            </div>
          </div>

          <div className="hidden items-center gap-8 text-sm font-medium text-stone-600 md:flex">
            <a href="#collections" className="transition hover:text-cacao">Collections</a>
            <a href="#featured" className="transition hover:text-cacao">Featured</a>
            <a href="#about" className="transition hover:text-cacao">Why us</a>
            <a href="#reviews" className="transition hover:text-cacao">Reviews</a>
            <a href="#contact" className="transition hover:text-cacao">Contact</a>
          </div>

          <a
            href="mailto:cakemaidsa@gmail.com"
            className="rounded-full bg-cacao px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-stone-800"
          >
            Order now
          </a>
        </nav>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-10 md:grid-cols-[1.1fr_0.9fr] md:pt-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-rose-500">
              Premium online confectionery
            </div>

            <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-cacao md:text-6xl">
              Beautiful cakes that turn moments into memories.
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-stone-600">
              Cake Maid creates custom cakes, elegant desserts and sweet gifts for every celebration, with premium design and flavour you can trust.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-rose-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-200 transition hover:bg-rose-600"
              >
                Order Your Custom Cake
              </a>
              <a
                href="tel:+27651028092"
                className="rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-cacao transition hover:border-stone-400"
              >
                Call 065 102 8092
              </a>
            </div>

            <div className="mt-10 grid max-w-lg gap-5 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-stone-200 bg-white/70 p-4 shadow-sm backdrop-blur-sm">
                  <p className="text-2xl font-bold text-cacao">{stat.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-stone-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative z-10"
          >
            <div className="relative mx-auto max-w-xl rounded-[2rem] border border-stone-200 bg-gradient-to-br from-white via-rose-50 to-amber-50 p-5 shadow-soft">
              <div className="absolute -left-8 top-10 h-32 w-32 rounded-full bg-rose-200/50 blur-3xl" />
              <div className="absolute -right-6 bottom-5 h-28 w-28 rounded-full bg-amber-200/60 blur-3xl" />

              <div className="relative rounded-[1.5rem] bg-white p-4 shadow-soft">
                <div className="rounded-[1.25rem] bg-gradient-to-br from-rose-50 via-amber-50 to-stone-100 p-5">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-stone-500">
                    <span>Signature cake</span>
                    <span>Premium</span>
                  </div>

                  <div className="relative mx-auto mt-7 flex h-72 max-w-[220px] items-end justify-center">
                    <div className="absolute bottom-0 h-4 w-52 rounded-full bg-stone-300/70 blur-md" />
                    <div className="absolute bottom-0 h-5 w-56 rounded-full bg-stone-200" />
                    <div className="absolute bottom-5 h-28 w-44 rounded-t-[10rem] rounded-b-[2rem] bg-gradient-to-b from-rose-200 via-rose-100 to-orange-100 shadow-lg" />
                    <div className="absolute bottom-28 left-1/2 h-16 w-20 -translate-x-1/2 rounded-t-[4rem] rounded-b-[1rem] bg-gradient-to-b from-amber-200 to-rose-200" />
                    <div className="absolute bottom-32 left-3 h-3 w-3 rounded-full bg-rose-400" />
                    <div className="absolute bottom-32 right-3 h-3 w-3 rounded-full bg-rose-400" />
                    <div className="absolute bottom-36 left-10 h-3 w-3 rounded-full bg-amber-300" />
                    <div className="absolute bottom-36 right-10 h-3 w-3 rounded-full bg-amber-300" />
                    <div className="absolute bottom-16 left-1/2 h-3 w-24 -translate-x-1/2 rounded-full bg-rose-400/80" />
                  </div>

                  <div className="mt-4 flex items-end justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Custom design</p>
                      <h3 className="mt-1 text-2xl font-semibold text-cacao">Rose Luxe</h3>
                    </div>
                    <span className="rounded-full bg-white px-3 py-1 text-sm font-medium text-rose-500 shadow-sm">From R850</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="collections" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">Our collections</p>
            <h2 className="mt-3 text-3xl font-bold text-cacao md:text-5xl">Crafted for every sweet occasion.</h2>
          </div>
          <a href="#contact" className="hidden text-sm font-semibold text-stone-700 underline-offset-4 hover:underline md:inline">
            Request a custom quote
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="rounded-[2rem] border border-stone-200 bg-white p-7 shadow-soft"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-rose-100 to-amber-100 text-xl font-bold text-rose-500">
                {index + 1}
              </div>
              <p className="text-lg font-medium leading-7 text-stone-700">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="featured" className="bg-[#f7f1ee] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">Featured treats</p>
              <h2 className="mt-3 text-3xl font-bold text-cacao md:text-5xl">Luxury favourites loved by every celebration.</h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredProducts.map((product, index) => (
              <motion.article
                key={product.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-soft"
              >
                <div className={`h-60 bg-gradient-to-br ${product.accent} p-4`}>
                  <div className="flex h-full items-end justify-between rounded-[1.5rem] border border-white/50 bg-white/25 p-4 backdrop-blur-sm">
                    <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-stone-600">
                      {product.tag}
                    </span>
                    <span className="rounded-full bg-cacao px-3 py-1 text-xs font-semibold text-white">{product.price}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-cacao">{product.name}</h3>
                  <p className="mt-3 text-base leading-7 text-stone-600">{product.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-[2rem] bg-gradient-to-br from-stone-900 via-stone-800 to-stone-700 p-8 text-white shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">Why Cake Maid</p>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">Premium design, heartfelt service, and unforgettable flavour.</h2>
            <p className="mt-5 text-base leading-8 text-stone-200">
              From birthdays and weddings to gifting and celebration cakes, Cake Maid is dedicated to creating unforgettable desserts that feel personal, premium and beautifully made.
            </p>
          </div>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={step.title} className="flex gap-4 rounded-[1.5rem] border border-stone-200 bg-white p-6 shadow-soft">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-gradient-to-br from-rose-100 to-amber-100 text-sm font-bold text-rose-500">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-cacao">{step.title}</h3>
                  <p className="mt-2 text-base leading-7 text-stone-600">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-stone-900 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">Testimonials</p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">Loved by clients across Pretoria.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {reviews.map((review) => (
              <div key={review.name} className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
                <div className="mb-4 text-amber-300">★★★★★</div>
                <p className="text-base leading-8 text-stone-200">“{review.quote}”</p>
                <p className="mt-6 font-semibold text-white">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-8 rounded-[2rem] bg-gradient-to-br from-rose-50 via-white to-amber-50 p-6 shadow-soft lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">Contact & location</p>
            <h2 className="mt-3 text-3xl font-bold text-cacao md:text-5xl">Let’s create something unforgettable.</h2>
            <p className="mt-5 max-w-md text-base leading-8 text-stone-600">
              We’re here to bring your next celebration to life with a custom cake design that feels truly yours.
            </p>

            <div className="mt-8 space-y-4 text-stone-700">
              <p>📍 966 12th Ave, Wonderboom South, Pretoria</p>
              <p>📧 <a href="mailto:cakemaidsa@gmail.com" className="hover:text-rose-500">cakemaidsa@gmail.com</a></p>
              <p>📞 <a href="tel:+27651028092" className="hover:text-rose-500">065 102 8092</a></p>
              <p>💬 Facebook: Cake Maid SA</p>
              <p>📸 Instagram: @cake_maid_sa</p>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-soft">
            <form className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-stone-700">Name</label>
                <input type="text" placeholder="Your full name" className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none ring-0 transition focus:border-rose-300" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-stone-700">Email</label>
                <input type="email" placeholder="your@email.com" className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none ring-0 transition focus:border-rose-300" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-stone-700">Order details</label>
                <textarea placeholder="Tell us about your cake design, occasion, size, and flavour preferences..." rows={5} className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none transition focus:border-rose-300" />
              </div>

              <button type="submit" className="w-full rounded-full bg-cacao px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-stone-800">
                Request my custom cake
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-sm text-stone-600 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-rose-100 to-amber-100 text-base font-bold text-cacao">C</div>
            <span>© 2025 Cake Maid SA</span>
          </div>

          <div className="flex items-center gap-5">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-cacao">Facebook</a>
            <a href="https://instagram.com/cake_maid_sa" target="_blank" rel="noreferrer" className="hover:text-cacao">Instagram</a>
            <a href="mailto:cakemaidsa@gmail.com" className="hover:text-cacao">Email</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
