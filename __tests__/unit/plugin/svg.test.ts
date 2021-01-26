import path from 'path';
import pluginTester from 'babel-plugin-tester';
import plugin from '../../../lib/plugin';

pluginTester({
  plugin,
  pluginName: 'kpfromer-react-optimized-image',
  babelrc: false,
  fixtures: path.join(__dirname, '__fixtures__', 'svg'),
});
