import NextHead from 'next/head'
import * as SiteInfo from '@/config/site'
import { SEOMetaTags } from './seo'

interface Props {
  title?: string
}
export const Head: React.FC<Props> = (props) => {
  const { titleBase, SEO } = SiteInfo
  const title = titleBase + (props.title ? ` | ${props.title}` : '')

  return (
    <NextHead>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <SEOMetaTags {...SEO} title={title} />
    </NextHead>
  )
}
