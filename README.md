<div align="center">
  <img src="https://raw.githubusercontent.com/francisashley/vue-screener/main/logo.png" alt="Logo" style="max-width: 400px;">
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
import 'vue-screener/style.css'
</script>
```

## Theming

```
// Base classes
.vue-screener

// Header classes
.vue-screener__header
.vue-screener__header-title

// Footer classes
.vue-screener__footer

// Search input classes
.vue-screener__search
.vue-screener__search__input
.vue-screener__search__input--error
.vue-screener__search__options
.vue-screener__search__options-button
.vue-screener__search__options-button--active
.vue-screener__search__options-button--match-word

// View selector classes
.vue-screener__view-selector
.vue-screener__view-selector__link
.vue-screener__view-selector__link.is-active

// Table view classes
.vue-screener__table
.vue-screener__table__thead
.vue-screener__table__th
.vue-screener__table__th--is-sortable
.vue-screener__table__tr
.vue-screener__table__td

// JSON view classes
.vue-screener__json-view

// Sort selector classes
.vue-screener__sort-selector

// Pagination classes
.vue-screener__pagination__buttons
.vue-screener__pagination__buttons-button
.vue-screener__pagination__buttons-button a
.vue-screener__pagination__buttons-button--active a
.vue-screener__pagination__details

// Error message classes
.vue-screener__error-message
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