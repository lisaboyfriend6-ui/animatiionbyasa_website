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

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white mb-4">
  <option value="">Select a series...</option>
  <option value="Adventure Time">Adventure Time</option>
  <option value="Fionna and Cake">Fionna and Cake</option>
  <option value="The Boondocks">The Boondocks</option>
  <option value="Smiling Friends">Smiling Friends</option>
  <option value="Scavengers Reign">Scavengers Reign</option>
  <option value="Over the Garden Wall">Over the Garden Wall</option>
</select>
          {/* Basic */}
<div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-8 text-center">
  <h3 className="text-xl font-bold text-white mb-2">BASIC</h3>
  <div className="text-4xl font-black text-gray-400 mb-2">6,000 MMK</div>
  <p className="text-gray-400 text-sm mb-6">per series</p>
  <ul className="text-left text-gray-300 text-sm space-y-3 mb-8">
    <li className="flex items-center gap-2">
      <span className="text-gray-500">✓</span> Full series access
    </li>
    <li className="flex items-center gap-2">
      <span className="text-gray-500">✓</span> All seasons included
    </li>
    <li className="flex items-center gap-2">
      <span className="text-gray-500">✓</span> Lifetime access
    </li>
  </ul>
 <select id="series-select" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white mb-4">
  <option value="">-- Select a series --</option>
  <option value="Adventure Time">Adventure Time</option>
  <option value="Fionna and Cake">Fionna and Cake</option>
  <option value="The Boondocks">The Boondocks</option>
  <option value="Smiling Friends">Smiling Friends</option>
  <option value="Scavengers Reign">Scavengers Reign</option>
  <option value="Over the Garden Wall">Over the Garden Wall</option>
</select>
<button 
  onClick={() => {
    const select = document.getElementById('series-select');
    const series = select.value;
    if (!series) {
      alert('Please select a series first');
      return;
    }
    const message = `I want to buy ${series} series (6,000 MMK)`;
    window.open(`https://t.me/Vivan_saikyo?text=${encodeURIComponent(message)}`, '_blank');
  }}
  className="w-full block bg-gradient-to-r from-gray-700 to-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 text-center"
>
  Contact to Buy
</button>
</div>

          {/* VIP */}
          <div className="relative bg-gradient-to-b from-purple-500/10 to-gray-900/80 border-2 border-purple-500/50 rounded-2xl p-8 text-center shadow-lg shadow-purple-500/20">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs font-bold px-4 py-1 rounded-full">
          👑 ULTIMATE
          </div>
            <h3 className="text-xl font-bold text-amber-400 mb-2 flex items-center justify-center gap-2">
              <span>👑</span> VIP All-Access
            </h3>
            <div className="text-4xl font-black text-amber-400 mb-2">25,000 MMK</div>
            <p className="text-gray-400 text-sm mb-1">all series, lifetime</p>
            <p className="text-emerald-400 text-sm font-semibold mb-6">Save 5,000 MMK!</p>
            <ul className="text-left text-gray-300 text-sm space-y-3 mb-8">
  <li className="flex items-center gap-2">
    <span className="text-purple-400">★</span> ALL series from Premium
  </li>
  <li className="flex items-center gap-2">
    <span className="text-purple-400">★</span> BoJack Horseman (BONUS)
  </li>
  <li className="flex items-center gap-2">
    <span className="text-purple-400">★</span> Family Guy S23 (BONUS)
  </li>
  <li className="flex items-center gap-2">
    <span className="text-purple-400">★</span> Lifetime access
  </li>
  <li className="flex items-center gap-2">
    <span className="text-purple-400">★</span> Copyright protection (re-upload if caught)
  </li>
  <li className="flex items-center gap-2">
    <span className="text-purple-400">★</span> Priority support
  </li>
</ul>
            <button 
  onClick={() => {
    const message = "I want to buy VIP ULTIMATE package (25,000 MMK) - ALL series + bonuses + lifetime access";
    window.open(`https://t.me/Vivan_saikyo?text=${encodeURIComponent(message)}`, '_blank');
  }}
  className="w-full block bg-gradient-to-r from-purple-600 to-purple-500 text-white font-bold py-3 px-6 rounded-xl hover:scale-105 transition-all text-center"
>
  Get VIP Access Now
</button>
          </div>
          
          {/* Premium */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-gray-900 text-xs font-bold px-4 py-1 rounded-full">
              BEST VALUE
            </div>
          <div className="relative bg-gradient-to-b from-emerald-500/10 to-gray-900/80 border-2 border-emerald-500/50 rounded-2xl p-8 text-center shadow-lg shadow-emerald-500/20">
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-emerald-500/40 rounded-tl-lg"></div>
  <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-emerald-500/40 rounded-tr-lg"></div>
            <h3 className = "text-xl font-bold text-white md-2">PREMIUM</h3>
            <div className = "text-4xl font-black text-emerland-400 mb-2">15,000 MMK</div>
            <p className = "text-grey-400 text-sm mb-6">Best Value</p>
                        <ul className="text-left text-gray-300 text-sm space-y-2 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> Adventure Time
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> Fionna and Cake
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> The Boondocks
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> Smiling Friends
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> Scavengers Reign
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> Over the Garden Wall
              </li>
              <li className="border-t border-gray-800 my-2 pt-2"></li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> Timely delivery
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> One-time payment
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> Lifetime access
              </li>
            </ul>
           <button 
  onClick={() => {
    const message = "I want to buy PREMIUM package (15,000 MMK) - All 6 series + lifetime access";
    window.open(`https://t.me/Vivan_saikyo?text=${encodeURIComponent(message)}`, '_blank');
  }}
  className="w-full bg-emerald-600 text-white font-semibold py-2 px-4 rounded-lg hover:scale-105 transition-all"
>
  Get Premium Now
</button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
