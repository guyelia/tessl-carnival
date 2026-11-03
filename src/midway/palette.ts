import { theme } from '../carnival';

const { colors } = theme;

/**
 * The midway map's night-time palette, so the map sits in the same dark mode
 * as the page around it. Tent reds, creams and golds come from the
 * carnival theme; the sky, grass, paths and other scenery shades only the map
 * uses live here.
 */
export const palette = {
  sky: '#1e2a5a',
  skyHigh: '#0b1030',
  cloud: '#3a4478',
  cloudShade: '#2c3564',
  haze: '#2f4a6a',

  grass: '#24452a',
  grassDark: '#1b3820',
  grassEdge: '#16301b',
  grassLight: '#2e5533',
  path: '#6e6450',
  pathShade: '#5a5240',
  hedge: '#1f3d22',
  hedgeDark: '#152c18',
  hedgeLight: '#2a4f2d',
  shadow: 'rgba(5, 10, 25, 0.4)',

  red: colors.stripeA,
  redShade: '#b8283a',
  cream: colors.stripeB,
  creamShade: '#e3d9c2',
  gold: colors.accent,
  goldShade: '#e0a91c',
  blue: '#2b8ccc',
  blueShade: '#1f6aa0',
  sky2: colors.water,
  pink: '#f59ac0',
  pinkShade: '#e076a4',
  wood: colors.wood,
  woodDark: '#6b4429',
  woodLight: '#b7834f',
  board: '#c8955b',
  metal: '#e9e4f2',
  metalShade: '#b9b0cc',
  ink: colors.background,
  opening: '#4a2a28',
  closed: '#a99cc4',
  closedShade: '#8a7daa',
  white: '#ffffff',

  skins: ['#f1c27d', '#c68642', '#8d5524', '#e0ac69', '#ffdbac'],
  hairs: ['#3b2219', '#1b1035', '#a55728', '#e6c35c', '#6b4429'],
  shirts: [colors.water, '#7bd389', '#b48ee0', colors.danger, '#2b8ccc', colors.stripeB],
  pants: ['#2d3a6b', '#3b2a4f', '#5a4a3a'],
  bunting: [colors.stripeA, colors.accent, '#2b8ccc', colors.stripeB],
  balloons: [colors.stripeA, colors.accent, '#2b8ccc', colors.water, '#f59ac0'],
} as const;
