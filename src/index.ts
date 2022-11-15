//Importing this normally will cause an error
const twemojify = require('twemoji');
import { afterUpdate } from 'svelte';

declare type ParseCallback = (icon: string, options: object, variant: string) => string | false;

type TwemojifyOptions = TwemojiOptions | ParseCallback;

declare interface TwemojiOptions {
    /**
     * Default: MaxCDN
     */
    base?: string;
    /**
     * Default: .png
     */
    ext?: string;
    /**
     * Default: emoji
     */
    className?: string;
    /**
     * Default: 72x72
     */
    size?: string | number;
    /**
     * To render with SVG use `folder: svg, ext: .svg`
     */
    folder?: string;
    /**
     * The function to invoke in order to generate image src(s).
     */
    callback?: ParseCallback
    /**
     * The function to invoke in order to generate additional, custom attributes for the image tag.
     * Default () => ({})
     * @param icon the lower case HEX code point i.e. "1f4a9"
     * @param variant variant the optional \uFE0F ("as image") variant, in case this info is anyhow meaningful. By default this is ignored.
     * 
     */
    attributes?(icon: string, variant: string): object;
  }

export function twemoji(node: HTMLElement, options: TwemojifyOptions = {}) {
    twemojify.parse(node, options);

    afterUpdate(() => {
        twemojify.parse(node, options);
    });
	return {
		update() {
            console.warn("Can't change twemoji options with an update.");
        }
	}
}