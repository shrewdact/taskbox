import { configure } from '@storybook/vue';
import '../src/index.css';

const req = require.context('../src', true, /\.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}
// automatically import all files ending in *.stories.js
// configure(require.context('../stories', true, /\.stories\.js$/), module);
configure(loadStories, module);
