export default function Hero({ onNavigate }) {
  return (
    <section className="relative pt-24 pb-16 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-gray-950 to-gray-950"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute top-20 right-0 w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Brand */}
        <div className="mb-6">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-purple-400 border border-purple-500/30 rounded-full px-4 py-1.5 mb-6">
            Premium Animation Streaming
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            Animation by{' '}
          </span>
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
            ASA
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Your premium destination for the best Western animation series. 
          Stream your favorites on Telegram with our curated collection.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button onClick={() => onNavigate('catalog')} className="btn-primary text-lg px-8 py-3 cursor-pointer">
            Browse Catalog
          </button>
          <a href="https://t.me/Vivan_saikyo" target="_blank" rel="noopener noreferrer" className="btn-gold text-lg px-8 py-3">
            Get VIP Access
          </a>
        </div>

        {/* VIP Banner */}
        <div className="max-w-2xl mx-auto bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-amber-500/10 border border-amber-500/30 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-2xl">👑</span>
            <h3 className="text-xl sm:text-2xl font-bold text-amber-400">VIP All-Access Pass</h3>
          </div>
          <p className="text-gray-300 mb-2">
            Get <span className="font-bold text-white">ALL series</span> with lifetime access
          </p>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-gray-500 line-through text-lg">30,000 MMK</span>
            <span className="text-3xl font-black text-amber-400">25,000 MMK</span>
          </div>
          <p className="text-emerald-400 text-sm font-semibold mb-4">Save 5,000 MMK!</p>
          <a
            href="https://t.me/Vivan_saikyo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-block"
          >
            Contact @Vivan_saikyo to Buy VIP
          </a>
        </div>
      </div>
    </section>
  );
}
