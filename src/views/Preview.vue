<script lang="ts" setup>
  import useFormStore from '@/stores/form'

  const store = useFormStore()
</script>


<template>
  <main :class="M.view">
    <div>
      <Title as="h1">Персональные данные</Title>
      <span :class="M.about">{{ store.about.name }}, {{ store.about.age }}</span>
    </div>
    
    <div>
      <Title v-if="store.childs.length" as="h2">Дети</Title>
      <div :class="M.childs">
        <Chip v-for="item in store.childs" :label="`${item.name}, ${item.age}`"  />
      </div>
    </div>
  </main>
</template>


<style module="M">
  .view {
    display: grid;
    align-content: start;
    gap: 60px;
  }

  .about {
    font-weight: 700;
  }

  .childs {
    display: grid;
    gap: 20px;
    justify-items: start;
  }
</style>