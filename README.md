# Vue Screener

<div align="center">
  <img src="https://raw.githubusercontent.com/francisashley/vue-screener/main/logo.png" alt="Logo" style="max-width: 400px;">
  <br/>
  <em>Easily search and filter data in Vue3</em>
  <br/>
  <a href="https://francisashley.github.io/vue-screener/">Documentation</a>
</div>

## Install

```bash
npm install vue-screener
# or
yarn add vue-screener
```

## Basic Usage

```vue
<template>
  <VueScreener :data="[
    { category: 'Technology', product: 'Laptop', price: 799 },
    { category: 'Clothing', product: 'Sneakers', price: 60 }
  ]" />
</template>

<script setup>
import { VueScreener } from 'vue-screener'
import 'vue-screener/style.css'
</script>
```

## Remote Control

Control the state externally using the `useVueScreener` hook:

```vue
<template>
  <VueScreener :screener="screener" />
</template>

<script setup>
import { VueScreener, useVueScreener } from 'vue-screener'
import 'vue-screener/style.css'

const screener = useVueScreener(data, {
  height: '400px',
  defaultCurrentPage: 1,
  defaultRowsPerPage: 10,
  defaultSortField: 'id',
  defaultSortDirection: 'desc',
  columns: {
    id: { width: '50px', order: 0 },
    name: { width: '150px', order: 1 },
    email: { width: '200px', order: 2 }
  }
})
</script>
```

## Custom Styling

Compose your own table using individual components:

```vue
<template>
  <VueScreener :screener="screener">
    <VueScreenerSearch :screener="screener" class="custom-search" />
    <VueScreenerTableView :screener="screener">
      <VueScreenerTableHead>
        <VueScreenerTableHeadCell
          v-for="column in screener.columns.value"
          :key="column.field"
          :screener="screener"
          :column="column"
          class="custom-header"
        />
      </VueScreenerTableHead>
      <VueScreenerTableRow
        v-for="row in screener.paginatedRows.value"
        :key="row.id"
        class="custom-row"
      >
        <VueScreenerTableCell
          v-for="column in screener.columns.value"
          :key="column.field"
          :screener="screener"
          :column="column"
          :row="row"
          class="custom-cell"
        />
      </VueScreenerTableRow>
    </VueScreenerTableView>
    <VueScreenerPagination :screener="screener" class="custom-pagination" />
  </VueScreener>
</template>

<script setup>
import {
  VueScreener,
  VueScreenerSearch,
  VueScreenerTableView,
  VueScreenerTableHead,
  VueScreenerTableHeadCell,
  VueScreenerTableRow,
  VueScreenerTableCell,
  VueScreenerPagination,
  useVueScreener
} from 'vue-screener'
import 'vue-screener/style.css'

const screener = useVueScreener(data)
</script>
```

## Props

### VueScreener
* `data`: Array of data (optional)
* `screener`: VueScreener state from useVueScreener (optional)
* `class`: String (optional)

### useVueScreener Options
* `height`: CSS height (default: '400px')
* `defaultCurrentPage`: number (default: 1)
* `defaultRowsPerPage`: number (default: 10)
* `defaultSortField`: string
* `defaultSortDirection`: 'asc' | 'desc'
* `columns`: Record<PropertyKey, Column>
  ```ts
  interface Column {
    width?: string | number
    label?: string
    order?: number
    isPinned?: boolean
    isSortable?: boolean
    hidden?: boolean
    format?: (value: any, row: Row) => string
  }
  ```

## License

MIT
