import { render } from '../helpers.mjs';

const { test, module } = QUnit;
let Component = null;

const beforeEach = () => {
  Component = document.createElement('component-stub');
  document.body.appendChild(Component);
};
const afterEach = () => {
  document.querySelector('component-stub').outerHTML = '';
  Component = null;
};

module('render(component)', { beforeEach, afterEach });

test('should update the rendered component state', async (assert) => {
  assert.ok(Component.hasConnected === false);
  await render(Component);
  assert.ok(Component.hasConnected === true);
});
