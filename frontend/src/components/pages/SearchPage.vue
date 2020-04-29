<template>
  <v-app id="inspire">
    <Sidebar/>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center>
          <v-container fluid grid-list-lg pa-2>
            <v-layout>
              <v-flex xs6>
                <ScatterPanel/>
              </v-flex>
              <v-flex xs6>
                <BubbleChartPanel/>
              </v-flex>
            </v-layout>

            <v-flex xs6>
              <LineChart/>
            </v-flex>
          </v-container>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Sidebar from "@/components/templates/Sidebar.vue";
import ScatterPanel from "@/components/templates/ScatterPanel.vue";
import BubbleChartPanel from "@/components/templates/BubbleChartPanel.vue";
import LineChart from "@/components/templates/LineChart.vue";

export default {
  name: "SearchPage",
  components: {
    Sidebar,
    ScatterPanel,
    BubbleChartPanel,
    LineChart
  },
  props: {
    source: String
  },
  data: () => ({}),
  created() {
    this.$vuetify.theme.dark = false;
  }
};
</script>