<template>
    <q-page class="flex flex-center">
    <q-card inline class="card-request shadow-9">
      <q-card-title>
        Sistema de solicitação de artes da Unigranet
        <span v-if="protocolo" slot="subtitle">Protocolo: {{protocolo}}</span>
      </q-card-title>
      <q-card-main>
        <p>
            Seja bem bem vindo, para utilizar o sistema basta você navegar pelas abas na parte superior
            ou selecionado algumas das opções a baixo.
        </p>
      </q-card-main>
            <q-card-separator />
      <q-card-actions>
        <q-btn-group color="green-6" push class="full-width">
            <q-btn to="brasil" color="green-6" class="full-width" push>Brasil</q-btn>
            <q-btn to="florida" color="green-6" class="full-width" push>Flórida</q-btn>
            <q-btn to="europa" color="green-6" class="full-width" push>Europa</q-btn>
            <q-btn to="japao" color="green-6" class="full-width" push>Japão</q-btn>
        </q-btn-group>
      </q-card-actions>
    </q-card>

  </q-page>
</template>
<script>
export default {
  name: 'PageRequest',
  computed: {
      protocolo () {
        return this.$route.query.protocolo 
      }
  }
}
</script>
