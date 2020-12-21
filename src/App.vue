<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <UrlForm class="mb-4" @value="fetch" />
        <v-expansion-panels outline>
          <v-expansion-panel>
            <v-expansion-panel-header> Commenti </v-expansion-panel-header>
            <v-expansion-panel-content>
              <ParsedComment class = "mb-1" v-for="i in 5" :key="i" :Comment="{Author:i, Type: 'Errore'}" />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UrlForm from "@/components/UrlForm.vue";
import ParsedComment from "@/components/ParsedComment.vue";
import { replies$ } from "@/flickr-fetcher";
import { ParseComments } from './core/CommentParser';

@Component({ components: { UrlForm, ParsedComment } })
export default class App extends Vue {
  public fetch() {
    replies$().subscribe(x => ParseComments(x.map(c => c.message?._content ?? "")));
  }
}
</script>