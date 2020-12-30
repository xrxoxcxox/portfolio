import { css } from '@emotion/react'

export const color = {
  gray: {
    0: '#fff',
    10: '#f2f2f3',
    20: '#e0e0e1',
    30: '#cececf',
    40: '#b4b4b5',
    50: '#9c9c9f',
    60: '#7d7d81',
    70: '#636367',
    80: '#424249',
    90: '#1e1e28',
  },
  blue: {
    10: '#e9eff8',
    20: '#d4e2f1',
    30: '#b4d0e7',
    40: '#7fb4d7',
    50: '#358ebf',
    60: '#0074af',
    70: '#00537c',
    80: '#003951',
  },
  text: {
    onSurface: {
      highEmphasis: 'rgba(0 0 0 / 0.87)',
      mediumEmphasis: 'rgba(0 0 0 / 0.6)',
      disabled: 'rgba(0 0 0 / 0.38)',
    },
    onBackground: {
      highEmphasis: 'rgba(255 255 255 / 0.87)',
      mediumEmphasis: 'rgba(255 255 255 / 0.6)',
      disabled: 'rgba(255 255 255 / 0.38)',
    },
  },
  divider: {
    onSurface: 'rgba(0 0 0 / 0.12)',
    onBackground: 'rgba(0 0 0 / 0.2)',
  },
}

const title = css`
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  @media (max-width: 768px) {
    font-size: 40px;
    line-height: 48px;
  }
`

const headline1 = css`
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 38px;
  }
`

const headline2 = css`
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 30px;
  }
`

const headline3 = css`
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 28px;
  }
`

const body1 = css`
  font-size: 16px;
  line-height: 28px;
`

const body2 = css`
  font-size: 14px;
  line-height: 20px;
`

const body3 = css`
  font-size: 12px;
  line-height: 18px;
`

export const typography = {
  title: title,
  headline1: headline1,
  headline2: headline2,
  headline3: headline3,
  body1: body1,
  body2: body2,
  body3: body3,
}

export const elevation = {
  1: '0 2px 8px rgba(0 0 0 / 0.2)',
  2: '0 4px 16px rgba(0 0 0 / 0.16)',
}
