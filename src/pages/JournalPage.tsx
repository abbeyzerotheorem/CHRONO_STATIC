import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, User } from 'lucide-react';
import { PageTransition } from '../components/layout/PageTransition';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Badge } from '../components/ui/Badge';
import { JOURNAL_ARTICLES } from '../constants/products';
import { formatDate } from '../lib/utils';

export default function JournalPage() {
  const featuredArticle = JOURNAL_ARTICLES.find((a) => a.featured);
  const otherArticles = JOURNAL_ARTICLES.filter((a) => !a.featured);

  return (
    <PageTransition>
      <div className="pt-24 pb-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Journal' }]} className="mb-8" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="text-mono-xs text-sky-400 font-bold tracking-[0.2em] uppercase">// JOURNAL</span>
            <h1 className="text-display text-white mt-2">Field Reports</h1>
            <p className="text-body text-slate-400 mt-4 max-w-xl">
              Technical deep dives, field test reports, and stories from the edge of the world.
            </p>
          </motion.div>

          {/* Featured Article */}
          {featuredArticle && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <Link
                to={`/journal/${featuredArticle.slug}`}
                className="group block relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-white/5 mb-12"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="primary" size="sm">{featuredArticle.category}</Badge>
                    <span className="text-xs font-mono text-slate-400">{featuredArticle.readTime} min read</span>
                  </div>
                  <h2 className="text-2xl md:text-4xl font-display font-bold text-white max-w-2xl">{featuredArticle.title}</h2>
                  <p className="text-sm text-slate-300 mt-3 max-w-xl">{featuredArticle.excerpt}</p>
                  <div className="flex items-center gap-3 mt-4 text-xs text-slate-400">
                    <span className="flex items-center gap-1"><User className="w-3 h-3" /> {featuredArticle.author.name}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {formatDate(featuredArticle.publishedAt)}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Article Grid */}
          {otherArticles.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {JOURNAL_ARTICLES.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                >
                  <Link
                    to={`/journal/${article.slug}`}
                    className="group block rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden hover:border-sky-500/20 transition-all"
                  >
                    <div className="aspect-[16/9] overflow-hidden bg-slate-900">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="primary" size="sm">{article.category}</Badge>
                        <span className="text-[10px] font-mono text-slate-500">{article.readTime} min read</span>
                      </div>
                      <h3 className="text-lg font-display font-bold text-white group-hover:text-sky-400 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-sm text-slate-400 mt-2 line-clamp-2">{article.excerpt}</p>
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
                        <span className="text-xs text-slate-500">{formatDate(article.publishedAt)}</span>
                        <span className="text-xs font-mono font-bold text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                          Read <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
}