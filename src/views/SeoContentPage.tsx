import type { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { SiteFooter } from '../components/SiteFooter'
import { CheckoutLink } from '../components/CheckoutLink'
import { SITE_HOST, SITE_NAME } from '../data/site'

export type SeoContentSection = { heading: string; body: string[] }

type SeoContentPageProps = {
  h1: string
  intro: string
  sections: SeoContentSection[]
  related?: { label: string; href: string }[]
  currentPath: string
  eyebrow?: string
  extra?: ReactNode
}

export function SeoContentPage({
  h1,
  intro,
  sections,
  related = [],
  currentPath,
  eyebrow = 'Fortnite Hacks',
  extra,
}: SeoContentPageProps) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-z-bg text-white">
      <div className="border-b border-z-soft/15 bg-z-bg/90 backdrop-blur-xl">
        <Navbar />
      </div>

      <main className="page-body">
        <section className="page-x pt-12 sm:pt-16">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-z-soft/80">
              {eyebrow} · {SITE_HOST}
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl">{h1}</h1>
            <p className="mt-4 text-base leading-relaxed text-white/65">{intro}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CheckoutLink className="cta-gradient inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white">
                Get {SITE_NAME}
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </CheckoutLink>
              <a
                href="/pricing"
                className="inline-flex items-center rounded-full border border-z-soft/30 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/5"
              >
                View pricing
              </a>
            </div>
          </div>
        </section>

        <section className="page-x py-10 sm:py-14">
          <div className="mx-auto flex max-w-3xl flex-col gap-5">
            {sections.map((section) => (
              <article key={section.heading} className="page-card rounded-2xl p-6 sm:p-8">
                <h2 className="text-xl font-semibold tracking-tight text-white">{section.heading}</h2>
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-white/65">
                  {section.body.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </div>
              </article>
            ))}
            {extra}
          </div>
        </section>

        {related.length > 0 ? (
          <section className="page-band page-x border-t border-z-soft/15 py-10">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-lg font-semibold text-white">Related pages</h2>
              <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-z-soft">
                {related.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}

        <SiteFooter currentPath={currentPath} />
      </main>
    </div>
  )
}
