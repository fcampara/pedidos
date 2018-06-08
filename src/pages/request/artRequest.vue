<template>
  <q-page class="flex flex-center">
   
    <q-card class="card-request shadow-9" inline color="">
        <q-stepper ref="stepper" color="secondary" v-model="step" alternative-labels vertical>
            <q-step default name="info" title="Suas informações">

                <q-field error-label="Campo obrigatório" :error="$v.info.fullName.$error">
                    <q-input type="text" v-model.trim="info.fullName" float-label="Nome completo"
                        @blur="$v.info.fullName.$touch"
                        :error="$v.info.fullName.$error"
                    />
                </q-field>

                <q-field error-label="Formato incorreto de e-mail" :error="$v.info.email.$error">
                    <q-input class="q-mt-md" type="email" v-model.trim="info.email" float-label="E-mail"
                        @blur="$v.info.email.$touch"
                        :error="$v.info.email.$error"
                    />
                </q-field>

                <q-field error-label="Campo obrigatório" :error="$v.info.phone.$error">
                    <q-input class="q-mt-md"  v-model.trim="info.phone" float-label="Telefone ou Celular"
                        v-mask="['(##) ####-####', '(##) #####-####']"
                        @blur="$v.info.phone.$touch"
                        :error="$v.info.phone.$error"
                    />
                </q-field>

                <q-stepper-navigation>
                    <q-btn :disabled="$v.groupOne.$invalid" color="secondary" @click="$refs.stepper.next()">Continue</q-btn>
                </q-stepper-navigation>

            </q-step>

            <q-step name="details" title="Detalhes da peça">
                <q-field v-for="quest in question" :key="quest.index" error-label="Campo obrigatório" :error="$v.question.$each[quest.index].answer.$error">
                    <q-input clearable v-model.trim="quest.answer" type="textarea" class="q-mt-md form-edit" rows="3"
                        :stack-label="quest.question"
                        :placeholder="quest.help"
                        @blur="$v.question.$touch"
                        :error="$v.question.$each[quest.index].answer.$error"
                    />
                </q-field>

                <q-stepper-navigation>
                     <q-btn :disabled="$v.question.$invalid" color="secondary" @click="$refs.stepper.next()">Continue</q-btn>
                    <q-btn color="secondary" flat @click="$refs.stepper.previous()">Back</q-btn>
                </q-stepper-navigation>
            </q-step>

            <q-step name="note" title="Observação">
                <q-editor v-model.trim="note" :toolbar="[
                    ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
                    ['token', 'hr', 'link', 'custom_btn'],
                    ['fullscreen'],
                    [
                    {
                        label: $q.i18n.editor.formatting,
                        icon: $q.icon.editor.formatting,
                        list: 'no-icons',
                        options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code']
                    },
                    {
                        label: $q.i18n.editor.fontSize,
                        icon: $q.icon.editor.fontSize,
                        fixedLabel: true,
                        fixedIcon: true,
                        list: 'no-icons',
                        options: ['size-1', 'size-2', 'size-3', 'size-4', 'size-5', 'size-6', 'size-7']
                    },
                    {
                        label: $q.i18n.editor.defaultFont,
                        icon: $q.icon.editor.font,
                        fixedIcon: true,
                        list: 'no-icons',
                        options: ['default_font', 'arial', 'arial_black', 'comic_sans', 'courier_new', 'impact', 'lucida_grande', 'times_new_roman', 'verdana']
                    },
                    'removeFormat'
                    ],
                    ['quote', 'unordered', 'ordered', 'outdent', 'indent'],
                    [
                    {
                        label: $q.i18n.editor.align,
                        icon: $q.icon.editor.align,
                        fixedLabel: true,
                        list: 'only-icons',
                        options: ['left', 'center', 'right', 'justify']
                    },
                    {
                        label: $q.i18n.editor.align,
                        icon: $q.icon.editor.align,
                        fixedLabel: true,
                        options: ['left', 'center', 'right', 'justify']
                    }
                    ],
                    ['undo', 'redo']
                                ]"
                    :fonts="{
                        arial: 'Arial',
                        arial_black: 'Arial Black',
                        comic_sans: 'Comic Sans MS',
                        courier_new: 'Courier New',
                        impact: 'Impact',
                        lucida_grande: 'Lucida Grande',
                        times_new_roman: 'Times New Roman',
                        verdana: 'Verdana'
                    }"
                    />

                <q-stepper-navigation>
                    <q-btn color="secondary" @click="$refs.stepper.next()">Continue</q-btn>
                    <q-btn color="secondary" flat @click="$refs.stepper.previous()">Back</q-btn>
                </q-stepper-navigation>
            </q-step>

            <q-step name="finish" title="Finalizar">
            <p>
                Lembrando que você é responsável por conseguir passar tudo de forma clara e detalhada. 
                Com essas informações a Criação pode executar todo o job seguindo os itens respondidos anteriormente.
                A entrega do job ocorrerá a partir de três dias após o envio destas informações, com retorno via e-mail.
                A equipe de MARKETING da UNIGRAN NET agradece sua cooperação!
            </p>

            <q-stepper-navigation>
                <q-btn :loading="saving" color="secondary" @click="save()">Salvar</q-btn>
            </q-stepper-navigation>
            </q-step>

        <q-inner-loading/>
      </q-stepper>
    </q-card>
    
  </q-page>
</template>
<script>
import { required, email } from 'vuelidate/lib/validators'
import question from '../../../data/question'

export default {
    name: 'RequestArt',
    data () {
        return {
            saving: false,
            question,
            info: {
                fullName: '',
                email: '',
                phone: '',
            },
            note: '',
            step: 'first',
            details: []
        }
    },
    validations: {
        info: {
            fullName: { required },
            email: { required, email },
            phone: { required },
        },
        question: {
            required,
            $each:{
                answer: {
                    required
                }
            }
        },
        groupOne: ['info.fullName','info.email','info.phone'],
    },
    methods: {
        log () {
            console.log(this.question)
        },
        async save () {
            this.saving = true
            const data = {
                type: this.$route.query.type,
                from: this.$route.query.from,
                info: this.info,
                question: this.question,
                note: this.note
            }
            let collection = this.$firebase.firestore().collection('request')

            await collection.doc().set(data).then(() => {
                this.showNotification('Salvo com sucesso', 1)
            }).catch(error => 
                this.showNotification('Ops! Ocorreu um erro, tente novamente', 0)
            )
        },
        showNotification (message,type) {
            this.saving = false
            const color = type === 1 ? 'positive' : 'negative'
            const icon = type === 1 ? 'thumb_up' : 'thumb_down'
            this.$q.notify({ message: message,  icon: icon, color: color, position: 'bottom', timeout: 1500})
            this.$router.push("home")
        }
    }
}
</script>