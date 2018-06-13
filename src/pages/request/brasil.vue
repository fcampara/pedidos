<template>
  <q-page class="flex flex-center">

    <q-card class="card-request shadow-9" inline color="black">
      <q-card-media>
        <img src="../../assets/flag/photoBR.jpg" width="100%">

        <q-card-title slot="overlay" class="text-center">
          Request // Marketing EAD // Brasil
          <span slot="subtitle">Seleciona abaixo qual o tipo de Solicitação:</span>
        </q-card-title>
      </q-card-media>
      <q-card-actions class="center text-center q-mt-md">
        <q-btn @click="redirect(1)">Solicitação de arte</q-btn>
        <q-btn @click="redirect(2)">Matéria para Imprensa</q-btn>
      </q-card-actions>
    </q-card>

  </q-page>
</template>
<script>
export default {
  name: 'RequestBrasil',
  methods: {
    redirect (type) {
      this.$router.push({ path: 'artRequest', query: { from: 'Brasil', type: type } })
    }
  }
}
</script>
