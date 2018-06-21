<template>
  <q-page padding>
  <q-list separator class="shadow-24">
      <q-collapsible v-for="request in requests" :key="request.protocolo"
        :label="getLabel(request)" :sublabel="getSubLabel(request)" :avatar="getAvatar(request)">
        <q-card class="shadow-4">
          <q-card-title class="text-center">
            Solicitado em {{dateTime(request.protocolo)}}
            <span slot="subtitle">
              <q-btn-group push class="full-width q-mt-md shadow-6">
                <q-btn v-clipboard="onCopyAction(request)" @success="handleSuccess" push color="primary" class="full-width" icon="file_copy" label="Copiar"/>
                <q-btn @click="finish(request)" push color="positive" :disable="request.finish" class="full-width" icon="check" label="Finalizar"/>
                <q-btn @click="runrunit(request)" push color="negative" :disable="true" class="full-width" icon="fa fa-cog" label="Runrun.it"/>
              </q-btn-group>
            </span>
          </q-card-title>
          <q-list separator>
            <q-collapsible class="ellipsis" v-for="question in request.question" :key="question.index" :label="question.question">
              <div>
                {{question.answer}}
              </div>
            </q-collapsible>
            <q-collapsible v-if="request.note" label="Observação">
              <div v-html="request.note"/>
            </q-collapsible>
          </q-list>
        </q-card>
      </q-collapsible>
    </q-list>
    <runrunit :show="modal" :run="runrunData" @close="modal = $event"/>
  </q-page>
</template>
<script>
import { date } from 'quasar'
import { mapState, mapActions } from 'vuex'
// import runrunit from '../components/modal/runrunit.vue'

export default {
  name: 'PageIndex',
  data () {
    return {
      copyData: 'teste',
      runrunData: {
        info: {
          fullName: '',
          polo: ''
        }
      },
      modal: false,
      selected: [],
      todos: []
    }
  },
  computed: {
    ...mapState({
      requests: state => state.request.requests
    })
  },
  methods: {
    ...mapActions({
      'getAllRequests': 'request/getAllRequests',
      'finish': 'request/finish'
    }),
    runrunit (data) {
      this.runrunData = data
      this.modal = true
    },
    handleSuccess () {
      this.$q.notify({message: 'Copiado com sucesso', timeout: 2000, type: 'positive', color: 'positive'})
    },
    getAvatar (request) {
      if (request.finish) {
        return './statics/avatar/checked.jpg'
      }
      const from = request.from === 'Japão' ? 'Japao' : request.from
      return `./statics/avatar/${from}.jpg`
    },
    getLabel (request) {
      return `${request.info.fullName} - ${request.info.polo}`
    },
    getSubLabel (request) {
      const type = request.type === 1 ? 'Solicitação de arte' : 'Material para imprensa'
      return `${type} - ${request.protocolo}`
    },
    onCopyAction (request) {
      const type = request.type === 1 ? 'Solicitação de arte' : 'Material para imprensa'
      return `${type}

Solicitado em ${this.dateTime(request.protocolo)} pelo polo ${request.info.polo} (${request.from}) com seu número de protocolo ${request.protocolo}, informações para contato:
Nome completo: ${request.info.fullName}
E-mail: ${request.info.email}
Celular: ${request.info.phone}

Perguntas/Respostas:
${request.question[0].question}
R: ${request.question[0].answer}
${request.question[1].question}
R: ${request.question[1].answer}
${request.question[2].question}
R: ${request.question[2].answer}
${request.question[3].question}
R: ${request.question[3].answer}
${request.question[4].question}
R: ${request.question[4].answer}
${request.question[5].question}
R: ${request.question[5].answer}

Observação:
${request.note}
`
    },
    dateTime (timeStamp) {
      return date.formatDate(parseInt(timeStamp), 'DD/MM/YY [ás] HH:MM')
    }
  },
  mounted () {
    this.getAllRequests()
  }
}
</script>
