<template>
  <v-card>
    <v-card-title>Commento di {{ Comment.Author }}</v-card-title>
    <v-card-subtitle>
      <v-chip label small :class="Comment.Type === 'Errore' ? 'error' : 'primary'">
        <v-icon v-if="Comment.Type == 'Errore'" class="mr-1">{{ Icon }}</v-icon>

        {{ Comment.Type }}</v-chip
      >
    </v-card-subtitle>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import {Comment} from "@/core/Comment";


@Component
export default class ParsedComment extends Vue {
  @Prop({ default: {} })
  Comment!: Comment;

  get Icon() {
    switch (this.Comment.Type) {
      case "Errore":
        return "mdi-alert-circle";
      case "Foto":
        return "mdi-camera";
      case "Voto":
        return "mdi-vote";
      default:
        return "";
    }
  }


}
</script>