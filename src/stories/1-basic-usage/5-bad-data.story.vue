<template>
  <Story title="5. Bad data"  source="-">
    <VueScreener :screener="screener" />
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener } from '../../index'
import { useScreener } from '../../hooks/use-screener'
const badData: any = 'bad data'
const screener = useScreener(badData, { title: 'Bad data' })
</script>
