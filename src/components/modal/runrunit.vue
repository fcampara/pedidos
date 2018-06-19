<template>
    <q-modal v-model="show" :content-css="{minWidth: '80vw', minHeight: '80vh'}">
      <q-modal-layout>
        <q-toolbar slot="header" color="green-6" class="shadow-6">
          <q-btn flat round dense @click="close" icon="reply"/>
          <q-toolbar-title>
            {{run.info.fullName}} - {{run.info.polo}}
          </q-toolbar-title>
        </q-toolbar>
        
        <q-card inline class="q-ma-sm">
            <q-card-title>
                Title
                <span slot="subtitle">Subtitle</span>
            </q-card-title>
            <q-card-main>
               asdasd
            </q-card-main>
        </q-card>
      </q-modal-layout>
    </q-modal>
</template>
<script>
export default {
    name: 'runrunit',
    props: ['show', 'run'],
    watch: {
        show (value) {
            console.log('Watch:', value)
        }
    },
    methods: {
        close () {
            this.$emit('close', false)
        }
    },
    beforeCreate () {
        this.$axios({
            method: 'GET',
            url:'https://secure.runrun.it/api/v1.0/users',
            mode: 'no-cors',
            data: {
                'email': 'mktdigital01.ead@unigran.br'
            },
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:8080',
                'App-Key': 'cf558497a61a597914b9338064582373',
                'User-Token': 'qVGzUqKfgDm8w5DsQDB',
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
            },
            withCredentials: true,
            credentials: 'same-origin',
        }).then(response => {
            console.log(response)
        }).catch(error => {
            console.error(error)
        })
    }
}
</script>