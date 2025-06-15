<script lang="ts" setup>
  import { useId } from 'vue'
  import type { FormNameAgeProps } from './types'
  import type { FormFields } from '@/stores/form/types'


  defineModel<FormFields>({ required: true })
  defineProps<FormNameAgeProps>()

  const nameID = useId()
  const ageID = useId()
</script>


<template>
  <div :class="[ M.group, inline && M.inline ]">
    <slot name="before" />

    <IftaLabel>
      <InputText :id="nameID" v-model="modelValue.name" variant="filled" fluid />
      <label :for="nameID">Имя</label>
    </IftaLabel>

    <IftaLabel>
      <InputText :id="ageID" type="number" v-model="modelValue.age" variant="filled" fluid />
      <label :for="ageID">Возраст</label>
    </IftaLabel>

    <slot name="after" />
  </div>
</template>


<style module="M">
  .group {
    display: grid;
    gap: 10px;
    align-items: center;
  }

  .inline {
    grid-auto-flow: column;
    grid-auto-columns: auto;
  }

  .group input::-webkit-outer-spin-button,
  .group input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }
</style>