<div align="center">
  <img src="https://raw.githubusercontent.com/francisashley/vue-screener/main/public/logo-with-outline.png" alt="Logo" style="max-width: 400px;">
  <br/>
  <em>Easily search and filter data in Vue3</em>
  <br/>
  <a href="https://francisashley.github.io/vue-screener/">Documentation</a>
</div>

## Install

This package is hosted on npm. You can install it using npm or yarn:

```bash
npm install vue-screener
# or
yarn add vue-screener
```

## Basic usage

```js
<template>
  <vue-screener
    :data="[
      { type: 'fruit', name: 'Pears'},
      { type: 'fruit', name: 'Orange'},
      { type: 'vegetable', name: 'Brussels sprouts'}
    ]"
  />
</template>

<script lang="ts">
import VueScreener from 'vue-screener'
</script>
```

## Roadmap

- [x] Storybook documentation
- [x] Search query highlighting
- [x] Pagination
- [x] Sort by field (GUI)
- [ ] Add/remove table columns (GUI)
- [ ] Resize table columns (GUI)
- [ ] Full style customization
- [ ] Support for images, numbers, links and more
- [ ] Dark mode styling inspired by Mozilla Firefox JSON viewer
- [ ] Extensible cell content (like [VueTable](https://www.vuetable.com/guide/))

## Reading

https://medium.com/evodeck/responsive-data-tables-with-css-grid-3c58ecf04723

## License
MIT