export default function SeriesCard({ series }) {
  const badgeClass = series.category === 'free' ? 'badge-free' : series.category === 'paid' ? 'badge-paid' : 'badge-mixed';
  const badgeLabel = series.category === 'free' ? 'FREE' : series.category === 'paid' ? 'PAID' : 'FREE + PAID';

  return (
    <div className="card group">
      {/* Image */}
      <div className="relative aspect-[2/3] overflow-hidden bg-gray-800">
        <img
          src={series.image}
          alt={series.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div className="w-full h-full items-center justify-center bg-gradient-to-br from-purple-900/50 to-gray-900 hidden">
          <span className="text-4xl font-black text-purple-400/50">{series.title.charAt(0)}</span>
        </div>
        {/* Badge overlay */}
        <div className="absolute top-3 left-3">
          <span className={badgeClass}>{badgeLabel}</span>
        </div>
        {series.category !== 'free' && (
          <div className="absolute top-3 right-3 bg-amber-500/90 text-gray-900 text-xs font-bold px-2 py-1 rounded-md">
            5,000 MMK
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-white mb-1 truncate">{series.title}</h3>
        {series.seasons && (
          <p className="text-sm text-gray-400 mb-3">{series.seasons}</p>
        )}
        {!series.seasons && <div className="mb-3"></div>}

        <div className="flex flex-col gap-2">
          {/* Watch on Telegram button */}
          {series.telegramLinks.map((link, i) => (
            <a
              key={i}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-sm py-2 w-full"
            >
              {series.telegramLinks.length > 1 ? `Watch on Telegram (${i + 1})` : 'Watch on Telegram'}
            </a>
          ))}

          {/* Contact to Buy for paid/mixed */}
          {series.category !== 'free' && (
            <a
              href="https://t.me/Vivan_saikyo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-sm py-2 w-full"
            >
              Contact to Buy — 5,000 MMK
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
