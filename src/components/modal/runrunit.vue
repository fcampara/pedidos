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
    methods: {
        close () {
            this.$emit('close', false)
        }
    }
}
</script>