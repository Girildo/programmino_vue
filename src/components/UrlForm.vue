<template>
<v-card outlined>
  <v-card-text>
  <v-form v-model="valid" @submit.prevent="submit">
    <v-text-field v-model="url" :rules="[(s) => 'aa']" class="my-auto" label="URL" filled />
    <div class="d-flex justify-end">
      <v-btn :disabled="!valid" type="submit"> VAI </v-btn>
    </div>
  </v-form>
  </v-card-text>
</v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class UrlForm extends Vue {
    valid = true
    url = "google.com"

    validation = [(s:string ) => s.length > //]

    submit() {
      console.log(this.url)
    }

}
</script>