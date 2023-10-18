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

```vue
<template>
  <vue-screener
    :data="[
      { category: 'Technology', product: 'Laptop', price: '£799', inStock: true },
      { category: 'Clothing', product: 'Sneakers', price: '£60', inStock: true },
      { category: 'Home Decor', product: 'Table Lamp', price: '£30', inStock: false },
      { category: 'Books', product: 'Adventure Novel', price: '£12', inStock: true },
      { category: 'Electronics', product: 'Smartphone', price: '£399', inStock: true },
      { category: 'Kitchen', product: 'Coffee Maker', price: '£65', inStock: false },
      { category: 'Clothing', product: 'Dress', price: '£40', inStock: true },
      { category: 'Technology', product: 'Headphones', price: '£49', inStock: true },
      { category: 'Home Decor', product: 'Throw Pillow', price: '£15', inStock: true },
    ]"
  />
</template>

<script lang="ts">
import VueScreener from 'vue-screener'
import 'vue-screener/style.css'
</script>
```

## Options

Set the title:

```vue
<template>
  <vue-screener title="Product data" />
</template>
```

Pick fields (in order) to show:

```vue
<template>
  <vue-screener
    :data="data"
    :pick="['price', 'product', 'technology']"
  />
</template>
```

Exclude fields:

```vue
<template>
  <vue-screener
    :data="data"
    :exclude="['price', 'product', 'technology']"
  />
</template>
```

Add a sticky column at the end to put stuff in.

```vue
<template>
  <vue-screener :data="data" include-actions>
    <template #sticky-actions-head="props">
      <StickyHeaderCell v-bind="props">Actions</StickyHeaderCell>
    </template>
    <template #sticky-actions-value="props">
      <StickyValueCell v-bind="props">
        <button @click="handleClickEdit(props.cell)">Edit</button>
        <button @click="handleClickDelete(props.cell)">Delete</button>
      </StickyValueCell>
    </template>
  </vue-screener>
</template>
<script setup>
import VueScreener, { StickyValueHead, StickyValueCell } from 'vue-screener'
</script>
```

## Slots

Custom header cell renderer:

```vue
<template>
  <vue-screener :data="data">
    <template #header-cell="props">
      <HeaderCell v-bind="props">
        {{ props.field }}
        <CurrencyPicker  v-if="props.field === 'price'" />
      </HeaderCell>
    </template>
  </vue-screener>
</template>
<script>
import VueScreener, { HeaderCell } from 'vue-screener'
import CurrencyPicker from './components/currency-picker'
</script>
```

Custom value cell renderer:

```vue
<template>
  <vue-screener :data="data">
    <template #value-cell="props">
      <ValueCell v-bind="props">
        <span v-if="props.field === 'price'">
          {{ formatPrice(props.value) }}
        </span>
        <template v-else>
          {{ props.value }}
        </template>
      </ValueCell>
    </template>
  </vue-screener>
</template>
<script>
import VueScreener, { ValueCell } from 'vue-screener'
import { formatPrice } from './utils/currency'
</script>
```

## Theming

Add custom classes:

```vue
<vue-screener
  :classes="{
    "SCREENER": "...",
    "HEADER": "...",
    "MAIN": "...",
    "FOOTER": "...",
    "HEADER_TITLE": "...",
    "SEARCH_INPUT": "...",
    "SETTINGS": "...",
    "SETTINGS_DROPDOWN_BUTTON": "...",
    "SETTINGS_DROPDOWN_SUB_HEADING": "...",
    "SETTINGS_DROPDOWN_OPTIONS": "...",
    "SETTINGS_DROPDOWN_OPTIONS_BUTTON": "...",
    "SETTINGS_VIEW_SELECTOR_CONTAINER": "...",
    "SETTINGS_VIEW_SELECTOR_LINK": "...",
    "TABLE_VIEW": "...",
    "TABLE_VIEW_CELL": "...",
    "TABLE_VIEW_HEADER_CELL": "...",
    "TABLE_VIEW_STICKY_HEADER_CELL": "...",
    "TABLE_VIEW_VALUE_CELL": "...",
    "TABLE_VIEW_STICKY_VALUE_CELL": "...",
    "TABLE_VIEW_SORT": "...",
    "TABLE_VIEW_SORT_NONE": "...",
    "TABLE_VIEW_SORT_ASC": "...",
    "TABLE_VIEW_SORT_DESC": "...",
    "JSON_VIEW": "...",
    "NO_DATA_VIEW": "....",
    "PAGINATION": "...",
    "PAGINATION_INFO": "...",
    "PAGINATION_NAV": "...",
    "PAGINATION_BUTTON": "...",
    "PAGINATION_FIRST_BUTTON": "...",
    "PAGINATION_PREV_BUTTON": "...",
    "PAGINATION_PAGE_BUTTON": "...",
    "PAGINATION_NEXT_BUTTON": "...",
    "PAGINATION_LAST_BUTTON": "...",
    "PAGINATION_PER_PAGE": "...",
    "PAGINATION_PER_PAGE_INPUT": "...",
    "ERROR_MESSAGE": "...",
  }"
/>
```

Or style default classes:

```
// Base classes
.vue-screener

// Header classes
.vue-screener__header
.vue-screener__header-title

// Main classes
.vue-screener__main

// Footer classes
.vue-screener__footer

// Search input class
.vue-screener__search
.vue-screener__search--error

// Options input class
.vue-screener__settings__options
.vue-screener__settings__options-button
.vue-screener__settings__options-button--active
.vue-screener__settings__options-button--match-word

// Dropdown classes
.vue-screener__dropdown
.vue-screener__dropdown__dropdown-content

// View selector classes
.vue-screener__view-selector
.vue-screener__view-selector__link
.vue-screener__view-selector__link.is-active

// Table view classes
.vue-screener__table-view
.vue-screener__table-view__cell
.vue-screener__table-view__cell--is-header
.vue-screener__table-view__cell--is-data-cell
.vue-screener__table-view__cell--is-first
.vue-screener__table-view__cell--is-last
.vue-screener__table-view__cell--hasValue
.vue-screener__table-view__cell--string
.vue-screener__table-view__cell--number
.vue-screener__table-view__cell--boolean
.vue-screener__table-view__cell--symbol
.vue-screener__table-view__cell--undefined
.vue-screener__table-view__cell--object
.vue-screener__table-view__cell--null

// JSON view classes
.vue-screener__json-view

// No data view
.vue-screener__no-data-view

// Sort selector classes
.vue-screener__sort-selector

// Pagination classes
.vue-screener__pagination__nav
.vue-screener__pagination__button
.vue-screener__pagination__button--first
.vue-screener__pagination__button--prev
.vue-screener__pagination__button--page
.vue-screener__pagination__button--next
.vue-screener__pagination__button--last
.vue-screener__pagination__button--active
.vue-screener__pagination__button--disabled
.vue-screener__pagination__info
.vue-screener__pagination__per-page
.vue-screener__pagination__per-page-input


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