import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default DefaultTheme

import { inBrowser } from 'vitepress';
import 'lite-youtube-embed/src/lite-yt-embed.css';

if (inBrowser) {
  // @ts-ignore
  import('lite-youtube-embed');
}