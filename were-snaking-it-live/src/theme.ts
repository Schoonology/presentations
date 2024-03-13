import {defaultTheme, type SpectacleTheme} from 'spectacle';

export const ENGAGED = '👏🏻';

const SINOPIA = 'rgb(204, 57, 20)';
const BLUE = '#0f96d6';
const GOLD = '#d68b2f';
const PINK = '#d6249f';
const PURPLE = '#461ad6';
const GREEN = '#29c910';

const WHITE = '#ffffff';
const BLACK = '#151515';
// const PURPLE = '#2E46C9';
// const PURPLE = '#6e82e7';

export const EXTRA_COLORS = {
  gold: GOLD,
  purple: PURPLE,
  sinopia: SINOPIA,
};

export const GRADIENT =
  'linear-gradient(135deg, rgba(15,150,214,1) 0%, rgba(70,26,214,1) 100%)';

export const THEME: SpectacleTheme = {
  ...defaultTheme,
  // @ts-ignore
  backdropStyle: {
    backgroundColor: BLACK,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
  },
  fonts: {
    monospace: 'Jetbrains Mono',
    header: 'Metropolis, sans-serif',
    text: 'Metropolis, sans-serif',
  },
  colors: {
    // e.g. Text
    primary: WHITE,
    // e.g. Headings
    secondary: GREEN,
    // e.g. backgrounds
    tertiary: BLACK,
    quaternary: BLUE,
    quinary: PINK,
  },
};

export const ART = {
  board: require('../assets/art/board.svg').default,
  chaotic_evil: require('../assets/art/chaotic-evil.svg').default,
  height_map: require('../assets/art/height-map.svg').default,
  height_map_2: require('../assets/art/height-map-2.svg').default,
  neural_network: require('../assets/art/neural-network.svg').default,
};

export const IMAGES = {
  autumn: loadAsset('img/autumn.jpg', {
    alt: 'Autumn leaves in full color',
    attrib: 'Photo by Wajid Hussain on Unsplash',
  }),
  autumn_gray: loadAsset('img/autumn-gray.jpeg', {
    alt: 'Autumn leaves in grayscale',
    attrib: 'Edited from a photo by Wajid Hussain on Unsplash',
  }),
  battlesnake: require('../assets/img/battlesnake.svg').default,
  battlesnakeLogo: loadAsset('img/battlesnake.svg', {
    alt: 'Battlesnake logo',
  }),
  battlesnakeScreenshot: loadAsset('img/screenshot.png', {
    alt: 'Screenshot of the Battlesnake website',
  }),
  // bs_board: require('../assets/img/bs-board.png').default,
  burger: require('../assets/img/burger.jpg').default,
  createSnakeScreenshot: loadAsset('img/screenshot-create-snake.png', {
    alt: 'Screenshot of the "Create Battlesnake" screen',
  }),
  donkey_car: require('../assets/img/donkey-car-graphic.jpg').default,
  duo_ai: require('../assets/img/duo-ai.png').default,
  duo_swole: require('../assets/img/duo-swole.gif').default,
  fish: require('../assets/img/fish.jpg').default,
  graph_cs: require('../assets/img/graph-cs.png').default,
  graph_cs_2: require('../assets/img/graph-cs2.jpg').default,
  graph_normie: require('../assets/img/graph-normie.jpg').default,
  jsLogo: loadAsset('img/js.svg', {
    alt: 'JavaScript logo',
  }),
  lop: require('../assets/img/lop.png').default,
  nibbles: require('../assets/img/nibbles.png').default,
  nokia: require('../assets/img/nokia-6110.jpeg').default,
  on_air: require('../assets/img/on-air.jpg').default,
  paint_bucket: require('../assets/img/paint-bucket.jpg').default,
  screepsLogo: loadAsset('img/screeps.svg', {
    alt: 'Screeps logo',
  }),
  slack_ai: require('../assets/img/slack-ai.jpg').default,
  snakeGame: loadAsset('img/snake-game.png', {
    alt: 'Snake game',
  }),
  squad: require('../assets/img/squad.svg').default,
  tis100logo: loadAsset('img/tis-100.png', {
    alt: 'TIS-100 logo',
  }),
  tomHollandBartender: loadAsset('img/tom-holland.png', {
    alt: 'Tom Holland as a bartender',
  }),
  tree_cs: require('../assets/img/tree-cs.png').default,
  unpub: loadAsset('img/unpub.png', {
    alt: 'UNPUB logo',
  }),
};

export const UNSPLASH = {
  baltimore_skyline: loadAsset('img/unsplash/baltimore-skyline.jpg', {
    alt: 'Baltimore skyline',
    attrib: 'Photo by Yianni Mathioudakis on Unsplash',
  }),
  game_over: loadAsset('img/unsplash/game-over.jpg', {
    alt: 'Game Over on a video screen',
    attrib: 'Photo by Sigmund on Unsplash',
  }),
};

export const TEXT = {
  a_star: require('../assets/txt/a_star.txt').default,
  a_star_heuristic: require('../assets/txt/a_star_heuristic.txt').default,
  flood_fill_lib: require('../assets/txt/flood_fill_lib.txt').default,
  flood_fill_router: require('../assets/txt/flood_fill_router.txt').default,
  height_map: require('../assets/txt/height_map.txt').default,
  request_body: require('../assets/txt/request_body.txt').default,
};

function loadAsset(
  filename: string,
  metadata?: Partial<Record<'alt' | 'attrib', string>>,
) {
  return {
    src: require(`../assets/${filename}`).default,
    ...(metadata ?? {}),
  };
}
