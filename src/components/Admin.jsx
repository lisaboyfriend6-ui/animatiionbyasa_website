import { useState, useEffect } from 'react';

const ADMIN_USER = 'ASA';
const ADMIN_PASS = 'moemoe543243';
const STORAGE_KEY = 'asa_series_data';

export default function Admin({ seriesList, setSeriesList }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [editingSeries, setEditingSeries] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    title: '', seasons: '', category: 'free', price: 0, image: '', telegramLinks: ['']
  });

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === ADMIN_USER && password === ADMIN_PASS) {
      setLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('Invalid credentials');
    }
  };

  const resetForm = () => {
    setForm({ title: '', seasons: '', category: 'free', price: 0, image: '', telegramLinks: [''] });
    setEditingSeries(null);
    setShowForm(false);
  };

  const handleEdit = (series) => {
    setForm({ ...series, telegramLinks: [...series.telegramLinks] });
    setEditingSeries(series.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this series?')) {
      const updated = seriesList.filter(s => s.id !== id);
      setSeriesList(updated);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const links = form.telegramLinks.filter(l => l.trim() !== '');
    if (!form.title || links.length === 0) {
      alert('Title and at least one Telegram link are required.');
      return;
    }

    let updated;
    if (editingSeries) {
      updated = seriesList.map(s => s.id === editingSeries ? { ...form, id: editingSeries, telegramLinks: links } : s);
    } else {
      const newId = Math.max(...seriesList.map(s => s.id), 0) + 1;
      updated = [...seriesList, { ...form, id: newId, telegramLinks: links }];
    }
    setSeriesList(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    resetForm();
  };

  const addLinkField = () => {
    setForm({ ...form, telegramLinks: [...form.telegramLinks, ''] });
  };

  const updateLink = (index, value) => {
    const links = [...form.telegramLinks];
    links[index] = value;
    setForm({ ...form, telegramLinks: links });
  };

  const removeLink = (index) => {
    const links = form.telegramLinks.filter((_, i) => i !== index);
    setForm({ ...form, telegramLinks: links.length ? links : [''] });
  };

  if (!loggedIn) {
    return (
      <section className="pt-24 pb-16 px-4 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Admin Login
          </h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
              />
            </div>
            {loginError && <p className="text-red-400 text-sm">{loginError}</p>}
            <button type="submit" className="btn-primary w-full cursor-pointer">Login</button>
          </form>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Admin Panel
          </h2>
          <div className="flex gap-3">
            <button
              onClick={() => { resetForm(); setShowForm(true); }}
              className="btn-primary text-sm cursor-pointer"
            >
              + Add Series
            </button>
            <button
              onClick={() => setLoggedIn(false)}
              className="text-sm text-gray-500 hover:text-white transition-colors cursor-pointer"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Add/Edit Form */}
        {showForm && (
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-bold mb-4">{editingSeries ? 'Edit Series' : 'Add New Series'}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Title *</label>
                  <input
                    type="text"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Seasons</label>
                  <input
                    type="text"
                    value={form.seasons}
                    onChange={(e) => setForm({ ...form, seasons: e.target.value })}
                    placeholder="e.g. Season 1-4"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Category</label>
                  <select
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
                  >
                    <option value="free">Free</option>
                    <option value="paid">Paid</option>
                    <option value="mixed">Free + Paid</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Price (MMK)</label>
                  <input
                    type="number"
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: parseInt(e.target.value) || 0 })}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Image URL</label>
                <input
                  type="text"
                  value={form.image}
                  onChange={(e) => setForm({ ...form, image: e.target.value })}
                  placeholder="https://..."
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Telegram Links *</label>
                {form.telegramLinks.map((link, i) => (
                  <div key={i} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={link}
                      onChange={(e) => updateLink(i, e.target.value)}
                      placeholder="https://t.me/..."
                      className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
                    />
                    {form.telegramLinks.length > 1 && (
                      <button type="button" onClick={() => removeLink(i)} className="text-red-400 hover:text-red-300 px-2 cursor-pointer">✕</button>
                    )}
                  </div>
                ))}
                <button type="button" onClick={addLinkField} className="text-sm text-purple-400 hover:text-purple-300 cursor-pointer">+ Add another link</button>
              </div>
              <div className="flex gap-3">
                <button type="submit" className="btn-primary cursor-pointer">{editingSeries ? 'Update' : 'Add'} Series</button>
                <button type="button" onClick={resetForm} className="text-gray-400 hover:text-white transition-colors cursor-pointer">Cancel</button>
              </div>
            </form>
          </div>
        )}

        {/* Series Table */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-800 text-gray-400">
                  <th className="text-left p-4">Title</th>
                  <th className="text-left p-4 hidden sm:table-cell">Seasons</th>
                  <th className="text-left p-4">Category</th>
                  <th className="text-left p-4 hidden sm:table-cell">Price</th>
                  <th className="text-right p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {seriesList.map((s) => (
                  <tr key={s.id} className="border-b border-gray-800/50 hover:bg-gray-800/30">
                    <td className="p-4 font-medium text-white">{s.title}</td>
                    <td className="p-4 text-gray-400 hidden sm:table-cell">{s.seasons || '—'}</td>
                    <td className="p-4">
                      <span className={s.category === 'free' ? 'badge-free' : s.category === 'paid' ? 'badge-paid' : 'badge-mixed'}>
                        {s.category === 'mixed' ? 'FREE+PAID' : s.category.toUpperCase()}
                      </span>
                    </td>
                    <td className="p-4 text-gray-400 hidden sm:table-cell">{s.price > 0 ? `${s.price.toLocaleString()} MMK` : 'Free'}</td>
                    <td className="p-4 text-right">
                      <button onClick={() => handleEdit(s)} className="text-purple-400 hover:text-purple-300 mr-3 cursor-pointer">Edit</button>
                      <button onClick={() => handleDelete(s.id)} className="text-red-400 hover:text-red-300 cursor-pointer">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
