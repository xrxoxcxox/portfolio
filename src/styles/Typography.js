import { css } from '@emotion/core'

const Title = css`
  font-size: 6.4rem;
  line-height: 7.2rem;
  @media (max-width: 768px) {
    font-size: 4rem;
    line-height: 4.8rem;
  }
`

const Headline = css`
  font-size: 4rem;
  line-height: 4.8rem;
  @media (max-width: 768px) {
    font-size: 3rem;
    line-height: 3.8rem;
  }
`

const Subhead = css`
  font-size: 2.4rem;
  line-height: 3.2rem;
  @media (max-width: 768px) {
    font-size: 2rem;
    line-height: 3rem;
  }
`

const Body = css`
  font-size: 1.6rem;
  line-height: 2.4rem;
  @media (max-width: 768px) {
    font-size: 1.4rem;
    line-height: 2.2rem;
  }
`

const Callout = css`
  font-size: 1.4rem;
  line-height: 2rem;
`

const Footnote = css`
  font-size: 1.2rem;
  line-height: 1.8rem;
`

const Caption = css`
  font-size: 1rem;
  line-height: 1.6rem;
`

export default {
  Title: Title,
  Headline: Headline,
  Subhead: Subhead,
  Body: Body,
  Callout: Callout,
  Footnote: Footnote,
  Caption: Caption,
}
