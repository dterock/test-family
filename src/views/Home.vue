<script lang="ts" setup>
  import { ref, computed } from 'vue'
  import useFormStore from '@/stores/form'
  import { useToast } from 'primevue/usetoast'
  import type { FormFields } from '@/stores/form/types'

  const store = useFormStore()
  const toast = useToast()

  const modelAbout = ref<FormFields>(store.about)
  const modelChild = ref<FormFields[]>(store.childs)

  function addChildFields() {
    if (modelChild.value.length < 5) {
      modelChild.value.push({ name: '', age: '' })
    }
  }

  function removeChildFields(idx: number) {
    modelChild.value.splice(idx, 1)
  }

  function save() {
    store.about = modelAbout.value
    store.childs = modelChild.value
    
    toast.add({
      severity: 'info',
      summary: 'Info',
      detail: 'Cохранено',
      life: 3000
    })
  }

  const isEmptyAbout = computed(() => !modelAbout.value.age || !modelAbout.value.name)
  const isEmptyChild = computed(() => !!modelChild.value.length && modelChild.value.some(v => !v.age || !v.name))
</script>


<template>
  <main>
    <Title as="h1">Персональные данные</Title>

    <form :class="M.form">
      <FormNameAge v-model="modelAbout" />

      <div :class="M.formChild">
        <div :class="M.formChildHeader">
          <Title as="h2">Дети (макс. 5)</Title>
          <Button
            v-if="modelChild.length < 5"
            @click="addChildFields"
            icon="pi pi-plus"
            :pt:root="M.formChildAdd"
            label="Добавить ребенка"
            outlined
            rounded
          />
        </div>

        <FormNameAge
          v-for="chModel, idx of modelChild"
          @update:model-value="modelChild[idx] = $event"
          :model-value="chModel"
          inline
        >
          <template #after>
            <Button @click="removeChildFields(idx)" variant="text" link>
              Удалить
            </Button>
          </template>
        </FormNameAge>
      </div>

      <div>
        <Button
          @click="save"
          label="Сохранить"
          :disabled="isEmptyAbout || isEmptyChild"
          rounded
        />
      </div>
    </form>
  </main>
</template>


<style module="M">
  .form {
    display: grid;
    gap: 44px;
  }

  .formChild {
    display: grid;
    gap: 10px;
  }

  .formChildHeader {
    display: flex;
    justify-content: space-between;
  }

  .formChildAdd {
    border-width: 2px !important;
  }
</style>