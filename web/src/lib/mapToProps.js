export function mapHeroBlockToProps(col, { title, byline, name, _rawSubtitle }) {
  return {
    col,
    h1: title,
    subtitle: _rawSubtitle,
    byline,
    author: name,
  };
}

export function mapImageBlockToProps(col, { asset, alt }) {
  return {
    col,
    image: asset.fluid,
    alt,
  };
}

export function mapQuoteCardToProps({ text, source, youtube }) {
  return {
    quote: text,
    source,
    video: youtube,
  };
}

export function mapCfFormBlockToProps(col, { className, ctaId, websiteId }) {
  return {
    col,
    className,
    ctaId,
    websiteId,
  };
}

export function mapSeoToProps(
  { title, description, facebook, twitter, slug, noindex, nofollow, canonical, heroImage },
  siteUrl,
  type,
  mpUrl = '',
) {
  return {
    mpUrl,
    type,
    title,
    description,
    og: facebook,
    twitter,
    siteUrl,
    slug: slug.current,
    noindex,
    nofollow,
    canonical,
    heroImage,
  };
}
