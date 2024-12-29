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
import { Screener } from 'vue-screener'
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

Pick fields to show:

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

Add a sticky column on the right to put stuff in.

```vue
<template>
  <VueScreener
    :data="[
      { category: 'Technology', product: 'Laptop', price: '£799', inStock: true },
      { category: 'Clothing', product: 'Sneakers', price: '£60', inStock: true }
    ]"
    :columnDefs="{
      action: { field: 'action', isSticky: true }
    }"
    :pick=""
  >
    <template #head="props">
      <Head v-if="props.column.isSticky" v-bind="props">Actions</Head>
    </template>
    <template #data="props">
      <Data v-if="props.column.field === 'action'" v-bind="props">
        <button @click="handleClickEdit(props.item)">Edit</button>
        <button @click="handleClickDelete(props.item)">Delete</button>
      </Data>
    </template>
  </Screener>
</template>
<script setup>
import Screener, { Head, Data } from 'vue-screener'
</script>
```

## Slots

Custom head cell renderer:

```vue
<template>
  <vue-screener :data="data">
    <template #head-cell="props">
      <HeadCell v-bind="props">
        {{ props.field }}
        <CurrencyPicker  v-if="props.field === 'price'" />
      </HeadCell>
    </template>
  </vue-screener>
</template>
<script>
import Screener, { HeadCell } from 'vue-screener'
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
import Screener, { Data } from 'vue-screener'
import { formatPrice } from './utils/currency'
</script>
```

## Theming

You can style components and their subcomponents by passing an object to the ui prop. The object reflects the hierarchical structure of the components, allowing you to apply TailwindCSS classes at different levels. Subcomponents inherit styles from higher levels unless explicitly overridden.

```ts
{ // VueScreener
  class?: string
  tableView?: { // TableView
    table?: { // Table
      class?: string
      header?: { // TableHead
        class?: string
        cell?: { // TableCell
          class?: string
          isFirstClass?: string
          isLastClass?: string
          isStickyClass?: string
          isStickyOverlappingClass?: string
          sortableClass?: string
          sortingClass?: string
          sortIcon?: { // SortIcon
            class?: string
            ascClass?: string
          }
        }
      }
      row?: { // TableRow
        class?: string
        cell?: { // TableCell
          class?: string
          isFirstClass?: string
          isLastClass?: string
          isStickyClass?: string
          isStickyOverlappingClass?: string
        }
      }
    }
  }
  noDataView?: { // NoDataView
    class?: string
  }
  badDataView?: { // BadDataView
    class?: string
  }
}


{ // ScreenerPagination
  class?: string
  leftSide?: {
    class?: string
  }
  rightSide?: {
    class?: string
    perPageInput?: { // Input
      class?: string
      errorClass?: string
    }
  }
  nav?: {
    class?: string
    button?: { // Button
      class?: string
      activeClass?: string
      disabledClass?: string
    }
  }
}

{ // ScreenerSearchOptions
  class?: string
  toggleButton?: { // ToggleButton
    class?: string
    activeClass?: string
    icon?: {
      class?: string
    }
  }
}
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
