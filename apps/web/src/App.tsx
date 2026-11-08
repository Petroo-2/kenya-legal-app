import { useMemo, useState } from 'react';
import { constitutionArticles, popularTopics } from './data/constitution';

function App() {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedId, setSelectedId] = useState<number>(19);

  const filteredArticles = useMemo(() => {
    return constitutionArticles.filter((article) => {
      const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
      const matchesQuery =
        query.trim() === '' ||
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.summary.toLowerCase().includes(query.toLowerCase()) ||
        article.keyPoints.some((point) => point.toLowerCase().includes(query.toLowerCase()));

      return matchesCategory && matchesQuery;
    });
  }, [query, selectedCategory]);

  const selectedArticle =
    filteredArticles.find((article) => article.id === selectedId) ?? filteredArticles[0] ?? constitutionArticles[0];

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">Kenya Legal App</p>
          <h1>Constitutional Rights Guide</h1>
        </div>
        <div className="status-pill">Updated for 2010 Constitution</div>
      </header>

      <main className="main-grid">
        <aside className="sidebar panel">
          <div className="search-wrap">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a right or topic"
              aria-label="Search legal topics"
            />
          </div>

          <div className="filters">
            <button className={selectedCategory === 'All' ? 'active' : ''} onClick={() => setSelectedCategory('All')}>
              All
            </button>
            {popularTopics.map((topic) => (
              <button
                key={topic}
                className={selectedCategory === topic ? 'active' : ''}
                onClick={() => setSelectedCategory(topic)}
              >
                {topic}
              </button>
            ))}
          </div>

          <div className="list">
            {filteredArticles.length === 0 ? (
              <div className="empty-state">No articles matched your search.</div>
            ) : (
              filteredArticles.map((article) => (
                <button
                  key={article.id}
                  className={`article-item ${selectedArticle.id === article.id ? 'selected' : ''}`}
                  onClick={() => setSelectedId(article.id)}
                >
                  <span className="article-number">{article.article}</span>
                  <strong>{article.title}</strong>
                  <small>{article.category}</small>
                </button>
              ))
            )}
          </div>
        </aside>

        <section className="content panel">
          <div className="content-header">
            <span className="chip">{selectedArticle.category}</span>
            <span className="article-ref">{selectedArticle.article}</span>
          </div>

          <h2>{selectedArticle.title}</h2>
          <p className="summary">{selectedArticle.summary}</p>

          <div className="stats-grid">
            <div className="stat-box">
              <label>Type</label>
              <strong>{selectedArticle.category}</strong>
            </div>
            <div className="stat-box">
              <label>Legal Source</label>
              <strong>{selectedArticle.source}</strong>
            </div>
          </div>

          <div className="section-block">
            <h3>Key points</h3>
            <ul>
              {selectedArticle.keyPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="section-block disclaimer">
            <h3>Important disclaimer</h3>
            <p>
              This app provides general information based on the Constitution of Kenya, 2010. It is not legal advice and does not replace consultation with a qualified Kenyan lawyer.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
