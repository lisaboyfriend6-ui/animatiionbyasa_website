export default function Pricing() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-gray-400">Simple and affordable pricing for premium content</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Individual */}
          <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-2">Individual Series</h3>
            <div className="text-4xl font-black text-purple-400 mb-2">5,000 MMK</div>
            <p className="text-gray-400 text-sm mb-6">per series</p>
            <ul className="text-left text-gray-300 text-sm space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> Full series access
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> All seasons included
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> Lifetime access
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> Telegram delivery
              </li>
            </ul>
            <a
              href="https://t.me/Vivan_saikyo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full block"
            >
              Contact to Buy
            </a>
          </div>

          {/* VIP */}
          <div className="relative bg-gradient-to-b from-amber-500/10 to-gray-900/80 border-2 border-amber-500/50 rounded-2xl p-8 text-center">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-gray-900 text-xs font-bold px-4 py-1 rounded-full">
              BEST VALUE
            </div>
            <h3 className="text-xl font-bold text-amber-400 mb-2 flex items-center justify-center gap-2">
              <span>👑</span> VIP All-Access
            </h3>
            <div className="text-4xl font-black text-amber-400 mb-2">25,000 MMK</div>
            <p className="text-gray-400 text-sm mb-1">all series, lifetime</p>
            <p className="text-emerald-400 text-sm font-semibold mb-6">Save 5,000 MMK!</p>
            <ul className="text-left text-gray-300 text-sm space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-amber-400">★</span> ALL series included
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-400">★</span> All current + future content
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-400">★</span> Lifetime access
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-400">★</span> Priority support
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-400">★</span> Early access to new releases
              </li>
            </ul>
            <a
              href="https://t.me/Vivan_saikyo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold w-full block"
            >
              Get VIP Access Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
