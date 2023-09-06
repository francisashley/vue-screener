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
```

## Roadmap

- [x] storybook documentation
- [x] highlight search query
- [x] paginated results
- [x] GUI enables sort by field
- [ ] GUI enables adding and removing table fields
- [ ] GUI enables resize table fields
- [ ] can fully customise style
- [ ] support images, numbers, links
- [ ] the style matches Mozilla Firefox JSON viewer in dark mode
- [ ] the content of each cell can be extended like https://www.vuetable.com/guide/

## Reading

https://medium.com/evodeck/responsive-data-tables-with-css-grid-3c58ecf04723

## License
MIT