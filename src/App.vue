<script lang="ts" setup>
  import type { MenuItem } from 'primevue/menuitem'
  import type { RouteLocationRaw } from 'vue-router'

  const menu: (MenuItem & { route: RouteLocationRaw })[] = [
    {
      label: 'Форма',
      route: { name: 'home' }
    },
    {
      label: 'Превью',
      route: { name: 'preview' }
    }
  ]
</script>


<template>
  <Toast />
  <Menubar :model="menu" :pt:root="M.menuRoot">
    <template #item="{ item }">
      <RouterLink :class="M.menuLink" :to="item.route" :active-class="M.menuLinkActive">
        {{ item.label }}
      </RouterLink>
    </template>
  </Menubar>

  <RouterView :class="M.view" />
  
  <footer :class="M.footer">
    All right reserved
  </footer>
</template>


<style module="M">
  .menuRoot {
    justify-content: center;
    height: 76px;
    margin-bottom: 30px;
    --p-menubar-gap: 24px;
    --p-menubar-item-focus-background: none;
  }

  .menuLink {
    color: #111;
    opacity: .48;
    text-decoration: none;
    transition: opacity .3s;
  }
  .menuLinkActive,
  .menuLink:hover {
    opacity: 1;
  }

  .view {
    max-width: 616px;
    width: 100%;
    margin: 0 auto;
  }

  .footer {
    display: grid;
    place-content: center;
    min-height: 76px;
    background: #fafafa;
    color: #111;
    font-size: 13px;
  }
</style>