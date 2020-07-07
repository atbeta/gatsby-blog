export default {
  breakpoints: [
    "640px",
    "768px",
    "1024px",
    "1280px"
  ],
  colors: {
    text: '#000', // 普通文字颜色
    background: '#fff', // 普通背景颜色
    tagBackground: '#ecedf2',
    primary: '#0779e4',
    secondary: '#6c757d',
    accent: '#609',
    muted: '#f6f6f6',
  },
  space: [0, 1, 2, 4, 8, 12, 16, 24, 32, 48, 64, 128],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  borderWidths: [0, 1, 2, 4],
  borderStyles: {
    solid: 'solid',
    dashed: 'dashed'
  },
  radii: {
    none: "0",
    round: '50%',
    sm: 12,
    md: 24,
    lg: 36
  },
  styles: {
  },
  sizes: {
    container: 960,
  },
  images: {
    cover: {
      width: "100%",
      maxWidth: 960,
      boxShadow: 'default',
      transition: `transform .3s linear`,
      '&:hover': {
        transform: `scale(1.1)`,
      }
    }
  },
  links: {
    bold: {
      fontWeight: 'bold',
    },
    nav: {
      fontWeight: 'bold',
      color: 'inherit',
      textDecoration: 'none',
    }
  }
}