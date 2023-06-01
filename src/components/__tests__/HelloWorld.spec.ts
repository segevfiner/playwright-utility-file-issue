import { test, expect } from '@playwright/experimental-ct-vue';
import { mountHello } from './util';

test('Foo', async ({ mount }) => {
  const component = await mountHello(mount);
  expect(component)
})
