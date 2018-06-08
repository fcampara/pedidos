<template>
  <q-layout>
    <q-layout-header>
        <q-tabs two-lines color="green-6" class="shadow-6" align="justify">
          <q-route-tab name="home"         to="home"    slot="title" icon="home" label="home"  />
          <q-route-tab name="brasil"       to="brasil"  slot="title" icon="flag" label="Brasil"  />
          <q-route-tab name="florida"      to="florida" slot="title" icon="flag" label="Flórida" />
          <q-route-tab name="europa"       to="europa"  slot="title" icon="flag" label="Europa"  />
          <q-route-tab name="japao"        to="japao"   slot="title" icon="flag" label="Japão"   />
          <q-route-tab name="auth"         to="sign-in" slot="title" icon="lock" label="Login"  />
       </q-tabs>
    </q-layout-header>
    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: 'LayoutRequest',
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
  .q-layout
    background-size cover
</style>
