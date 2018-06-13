<template>
  <q-page class="flex flex-center">

    <q-card class="card-request shadow-9" color="black">
      <q-card-media>
        <img src="../../assets/flag/photoJP.jpg">
        <q-card-title slot="overlay" class="text-center">
          Request // Marketing EAD // Japão
          <span slot="subtitle">Seleciona abaixo qual o tipo de Solicitação:</span>
        </q-card-title>
      </q-card-media>
      <q-card-actions class="center text-center q-mt-md">
        <q-btn @click="redirect(1)">Solicitação de arte</q-btn>
      </q-card-actions>
    </q-card>

  </q-page>
</template>
<script>
export default {
  name: 'RequestJapao',
  methods: {
    redirect (type) {
      this.$router.push({ path: 'artRequest', query: { from: 'Japão', type: type } })
    }
  }
}
</script>
