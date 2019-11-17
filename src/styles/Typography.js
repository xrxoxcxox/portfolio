import { css } from '@emotion/core'

const Title = css`
  font-size: 4.8rem;
  line-height: 5.6rem;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 4rem;
    line-height: 4.8rem;
  }
`

const Headline1 = css`
  font-size: 3.6rem;
  line-height: 4.4rem;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 3rem;
    line-height: 3.8rem;
  }
`

const Headline2 = css`
  font-size: 2.4rem;
  line-height: 3.2rem;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 2rem;
    line-height: 3rem;
  }
`

const Headline3 = css`
  font-size: 2rem;
  line-height: 2.8rem;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 1.8rem;
    line-height: 2.8rem;
  }
`

const Body1 = css`
  font-size: 1.6rem;
  line-height: 2.8rem;
`

const Body2 = css`
  font-size: 1.4rem;
  line-height: 2rem;
`

const Body3 = css`
  font-size: 1.2rem;
  line-height: 1.8rem;
`

export default {
  Title: Title,
  Headline1: Headline1,
  Headline2: Headline2,
  Headline3: Headline3,
  Body1: Body1,
  Body2: Body2,
  Body3: Body3,
}
