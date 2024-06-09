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
import { VueScreener } from 'vue-screener'
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

Omit fields:

```vue
<template>
  <vue-screener
    :data="data"
    :omit="['price', 'product', 'technology']"
  />
</template>
```

Add a pinned column on the right to put stuff in.

```vue
<template>
  <VueScreener
    :data="[
      { category: 'Technology', product: 'Laptop', price: '£799', inStock: true },
      { category: 'Clothing', product: 'Sneakers', price: '£60', inStock: true }
    ]"
    :column-config="{
      action: { field: 'action', isPinned: true }
    }"
    :pick=""
  >
    <template #head="props">
      <Head v-if="props.column.isPinned" v-bind="props">Actions</Head>
    </template>
    <template #data="props">
      <Data v-if="props.column.field === 'action'" v-bind="props">
        <button @click="handleClickEdit(props.item)">Edit</button>
        <button @click="handleClickDelete(props.item)">Delete</button>
      </Data>
    </template>
  </VueScreener>
</template>
<script setup>
import VueScreener, { Head, Data } from 'vue-screener'
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
    <template #data="props">
      <Data v-bind="props">
        <span v-if="props.field === 'price'">
          {{ formatPrice(props.value) }}
        </span>
        <template v-else>
          {{ props.value }}
        </template>
      </Data>
    </template>
  </vue-screener>
</template>
<script>
import VueScreener, { Data } from 'vue-screener'
import { formatPrice } from './utils/currency'
</script>
```

## Theming

Style using classes:

```
.vs-app
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
  .vs-main--is-scrollable
  .vs-main--is-scrolled-end
    .vs-table
    .vs-table__row
    .vs-table__row--header
    .vs-table__row--record
    .vs-table__cell
    .vs-table__cell--is-sortable
    .vs-table__cell--is-pinned
    .vs-table__cell--is-header
    .vs-table__cell--is-value
    .vs-table__cell--is-first
    .vs-table__cell--is-last
    .vs-table__cell--hasValue
    .vs-table__cell--string
    .vs-table__cell--number
    .vs-table__cell--boolean
    .vs-table__cell--symbol
    .vs-table__cell--undefined
    .vs-table__cell--object
    .vs-table__cell--null
      .vs-sort-selector
      .vs-sort-selector__icon
      .vs-sort-selector__icon--none
      .vs-sort-selector__icon--asc
      .vs-sort-selector__icon--desc
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
