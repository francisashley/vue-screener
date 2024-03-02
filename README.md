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

Style using classes:

```
.vs-vue-screener ✅
  .vs-header 
    .vs-title
    .vs-search
    .vs-search--error
    .vs-settings
    .vs-settings__button
    .vs-settings__button--active
    .vs-settings__heading
    .vs-settings__options
    .vs-settings__options-button
    .vs-settings__options-button--active
    .vs-settings__options-button--match-word
    .vs-settings__options-button--match-case
    .vs-settings__options-button--use-regex
    .vs-view-selector
    .vs-view-selector__link
    .vs-view-selector__link--is-active
    .vs-dropdown
    .vs-dropdown__content
  .vs-main
    .vs-table-view
    .vs-table-view__cell
    .vs-table-view__cell--is-header
    .vs-table-view__cell--is-value
    .vs-table-view__cell--is-first
    .vs-table-view__cell--is-last
    .vs-table-view__cell--hasValue
    .vs-table-view__cell--string
    .vs-table-view__cell--number
    .vs-table-view__cell--boolean
    .vs-table-view__cell--symbol
    .vs-table-view__cell--undefined
    .vs-table-view__cell--object
    .vs-table-view__cell--null
    .vs-json-view
    .vs-no-data-view
  .vs-footer
    .vs-pagination__nav
    .vs-pagination__button
    .vs-pagination__button--first
    .vs-pagination__button--prev
    .vs-pagination__button--page
    .vs-pagination__button--next
    .vs-pagination__button--last
    .vs-pagination__button--active
    .vs-pagination__button--disabled
    .vs-pagination__info
    .vs-pagination__per-page
    .vs-pagination__per-page-input
  .vs-error-message
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