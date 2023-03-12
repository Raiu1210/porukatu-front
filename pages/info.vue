<template>
  <v-container fluid>
    <v-expansion-panels focusable>
      <v-expansion-panel
        v-for="(item,i) in 5"
        :key="i"
      >
        <v-expansion-panel-header>Item</v-expansion-panel-header>
        <v-expansion-panel-content>
          hoge
          <v-expansion-panel-content>
            hoge
          </v-expansion-panel-content>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>


<script>

export default defineComponent({
  data() {
    return {
      genres: ["ポルシェ社の歴史", ]
    }
  },
})
</script>
