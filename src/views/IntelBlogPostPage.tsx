import { ArrowLeft } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { SiteFooter } from '../components/SiteFooter'
import { CheckoutLink } from '../components/CheckoutLink'
import { getIntelBlog, intelBlogPath } from '../data/intel-blog'
import { NotFoundPage } from './NotFoundPage'

type IntelBlogPostPageProps = { slug: string }

export function IntelBlogPostPage({ slug }: IntelBlogPostPageProps) {
  const post = getIntelBlog(slug)
  if (!post) return <NotFoundPage />

  return (
    <div className="min-h-screen overflow-x-hidden bg-z-bg text-white">
      <div className="border-b border-z-soft/15 bg-z-bg/90 backdrop-blur-xl">
        <Navbar />
      </div>
      <main className="page-body">
        <article className="page-x py-10 sm:py-14">
          <div className="mx-auto max-w-3xl">
            <a
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-white/55 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
              Blog
            </a>
            <p className="mt-6 text-xs uppercase tracking-wider text-z-soft/80">{post.tag}</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{post.title}</h1>
            <p className="mt-4 text-white/65">{post.excerpt}</p>
            {post.sections.map((section) => (
              <div key={section.heading} className="mt-10">
                <h2 className="text-xl font-semibold text-white">{section.heading}</h2>
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-white/65">
                  {section.body.map((p) => (
                    <p key={p.slice(0, 32)}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
            <CheckoutLink className="cta-gradient mt-10 inline-flex rounded-full px-6 py-3 text-sm font-semibold text-white">
              Get Fortnite Hacks
            </CheckoutLink>
          </div>
        </article>
        <SiteFooter currentPath={intelBlogPath(post.slug)} />
      </main>
    </div>
  )
}
