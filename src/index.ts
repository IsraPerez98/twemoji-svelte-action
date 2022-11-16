import { default as twemojify } from 'twemoji';
import { afterUpdate } from 'svelte';

type TwemojifyOptions = TwemojiOptions | ParseCallback;

export function twemoji(node: HTMLElement, options: TwemojifyOptions = {}) {
  twemojify.parse(node, options);

  afterUpdate(() => {
    twemojify.parse(node, options);
  });
  return {
    update() {
      console.warn("Can't change twemoji options with an update.");
    },
  };
}
