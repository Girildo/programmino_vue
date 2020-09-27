<template>
  <v-card outlined>
    <v-card-text>
      <v-form v-model="valid" @submit.prevent="submit">
        <v-text-field
          type="url"
          v-model="value"
          :rules="validation"
          class="my-auto"
          label="URL"
          filled
        />
        <div class="d-flex justify-end">
          <v-btn :disabled="!valid" type="submit"> VAI </v-btn>
        </div>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class UrlForm extends Vue {
    valid = true
    @Prop()
    value = ""

    validation = [(s: string ) =>
    {
      return s.length == 0 || (s.length > 0 && /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/.test(s))
      ? null :
       "Non è un url valido di Flickr";
    }];
                  
    
    submit() {
      this.$emit("value", this.value);
    }

}
</script>