<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar color="green-6" class="shadow-6">
        <!-- <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu">
           <q-icon name="menu" />
        </q-btn> -->

        <q-toolbar-title>
          Pedidos
        </q-toolbar-title>
         <q-btn class="shadow-6" color="white" text-color="black" icon="exit_to_app" label="Sair" @click.native="signOut()"/>
      </q-toolbar>
    </q-layout-header>

    <!-- <q-layout-drawer v-model="leftDrawerOpen" :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null">
      <q-list no-border link inset-delimiter>
        <q-list-header>Acesso rápido</q-list-header>

        <q-item :to="{ name: 'dashboard' }">
          <q-item-main>Pedidos</q-item-main>
        </q-item>

        <q-item @click.native="signOut()">
          <q-item-main>Sair</q-item-main>
        </q-item>

      </q-list>
    </q-layout-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'LayoutDefault',
  data () {
    return {
      leftDrawerOpen: true
    }
  },
  methods: {
    signOut () {
      this.$store.dispatch('auth/signOut')
    }
  }
}
</script>

<style>
</style>
