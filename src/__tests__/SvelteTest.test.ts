/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/svelte';

import { twemoji } from '../index';

import Component from './SvelteTest.svelte';

test('Renders message with default emoji', () => {
  const emoji = '🚀';
  const message = 'Hello world! ' + emoji;

  //@ts-ignore check github.com/testing-library/svelte-testing-library/issues/194
  const { getByText } = render(Component, {
    props: {
      message: message,
    },
  });

  expect(getByText(message)).toBeInTheDocument();
});

test('Renders message with tweemoji', () => {
  const emoji = '🚀';
  const tweemojiCode = '1f680';

  const message = 'Hello world! ' + emoji;

  //@ts-ignore check github.com/testing-library/svelte-testing-library/issues/194
  render(Component, {
    props: {
      message: message,
      action: twemoji,
    },
  });

  //grab img with alt text of emoji
  const img = screen.getByAltText(emoji);
  expect(img).toBeInTheDocument();

  expect(img).toHaveClass('emoji');
  expect(img).toHaveAttribute('src');

  //check if src is correct
  const src = img.getAttribute('src');
  expect(src).toContain(tweemojiCode + '.png');
});
