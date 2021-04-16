interface Props {
  title: string
  sitename: string
  description: string
  url: string
  image: string
  locale?: string
  type?: string
  facebookAppId?: string
  twitterUsername?: string
}

export const SEOMetaTags: React.FC<Props> = (props) => {
  const {
    sitename,
    title,
    description,
    url,
    image,
    locale = 'en_US',
    type = 'website',
    facebookAppId,
    twitterUsername,
  } = props

  return (
    <>
      {/* Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={sitename} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content={locale} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />

      {facebookAppId ? (
        <meta property="fb:app_id" content={facebookAppId} />
      ) : null}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={description} />

      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
    </>
  )
}
