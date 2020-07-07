export default {
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
    secondary: '#6c757d',
    accent: '#609',
    muted: '#f6f6f6',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
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
  }
}