import { ArrowRight } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { SiteFooter } from '../components/SiteFooter'
import { INTEL_BLOGS, intelBlogPath } from '../data/intel-blog'
import { SITE_HOST } from '../data/site'

export function BlogIndexPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-z-bg text-white">
      <div className="border-b border-z-soft/15 bg-z-bg/90 backdrop-blur-xl">
        <Navbar />
      </div>
      <main className="page-body">
        <section className="page-x pt-12 sm:pt-16">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-z-soft/80">
              Blog · {SITE_HOST}
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">Fortnite Hacks Intel</h1>
            <p className="mt-4 max-w-2xl text-white/65">
              Meta guides, buyer comparisons, EAC reality posts, and Chapter 7 Season 3 tips — pair
              with Features and Pricing before checkout.
            </p>
          </div>
        </section>
        <section className="page-x py-12">
          <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INTEL_BLOGS.map((post) => (
              <a
                key={post.slug}
                href={intelBlogPath(post.slug)}
                className="page-card group flex h-full flex-col rounded-2xl p-5"
              >
                <p className="text-xs uppercase tracking-wider text-white/45">{post.tag}</p>
                <p className="mt-2 text-lg font-semibold text-white">{post.title}</p>
                <p className="mt-2 flex-1 text-sm text-white/55">{post.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-z-soft group-hover:text-white">
                  Read
                  <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
                </span>
              </a>
            ))}
          </div>
        </section>
        <SiteFooter currentPath="/blog" />
      </main>
    </div>
  )
}
