import { default as twemojify } from 'twemoji';

type TwemojifyOptions = TwemojiOptions | ParseCallback;

export function twemoji(node: HTMLElement, options: TwemojifyOptions = {}) {
  twemojify.parse(node, options);
}
