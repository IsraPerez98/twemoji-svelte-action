# 🚀 twemoji-svelte-action
    
[![npm version](https://badge.fury.io/js/twemoji-svelte-action.svg)](https://badge.fury.io/js/twemoji-svelte-action)

This is a Svelte action that replaces emoji in text with images from [Twemoji](https://github.com/twitter/twemoji)

## Installation

```bash 
npm install twemoji-svelte-action
```

## Usage

```svelte
<script>
  import twemoji from 'twemoji-svelte-action'
</script>

<div use:twemoji>🚀</div>
```

## Options

You can pass an object with options to the action.

```svelte
<script>
  import twemoji from 'twemoji-svelte-action'
  
  const options = {
    folder: 'svg',
    ext: '.svg'
  }
</script>

<div use:twemoji={options}>🚀</div>
```


Check more available options in the [Twemoji documentation](https://github.com/twitter/twemoji#object-as-parameter)

## License

#### The MIT License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
