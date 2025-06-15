<script lang="ts" setup>
  import type { TitleProps } from './types';

  defineProps<TitleProps>()
</script>


<template>
  <Component :is="as || 'h1'" :class="M.title">
    <slot />
  </Component>
</template>


<style module="M">
  .title {
    font-size: 1rem;
    margin-bottom: 20px;
  }
</style>