<template>
  <div class="animated fadeIn" v-permission="'VIEW_PORTFOLIO'">
    <div id="projectsToolbar" class="bs-table-custom-toolbar">
      <b-button
        size="md"
        variant="outline-primary"
        @click="initializeProjectCreateProjectModal"
      >
        <span class="fa fa-plus"></span> Create Integration
      </b-button>
    </div>
    <bootstrap-table
      ref="table"
      :columns="columns"
      :data="integrations"
      :options="options"
    >
    </bootstrap-table>
    <b-modal
      id="createIntegrationModal"
      size="md"
      @hide="resetValues()"
      hide-header-close
      no-stacking
      title="Create integration"
    >
      <div>
        {{ selectedScmType }}
        <div class="row">
          <div
            class="col-sm-6 col-lg-3"
            v-for="item in createIntegrationList"
            :key="item.value"
          >
            <div class="card">
              <b-button
                variant="outline-primary"
                @click="handleItemClick(item.value)"
              >
                <img :src="item.svg" class="card-img-top" />
                {{ item.title }}</b-button
              >
            </div>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script lang="ts">
import { baseUrl } from "../../../Tencyle/Api/const/baseUrl.ts";
import integrationsGridColumns from "./common/const/integrationsGridColumns.ts";
import integrationScmCards from "./common/const/integrationTypeCards.ts";

export default {
  name: "IntegrationList",
  // components: {BInputGroupFormInput, PortfolioWidgetRow},
  data() {
    return {
      selectedScmType: "",
      integrations: [],
      columns: integrationsGridColumns,
      options: {},
      createIntegrationList: integrationScmCards,
    };
  },
  created() {
    const requestConfig = (params = {}) => {
      return {
        baseURL: baseUrl,

        headers: {
          "Content-Type": "application/json",
          "api-key": "15c30eb6-6e80-4538-8f04-eccb8eae2ffd",
        },
        params,
      };
    };
    this.axios.get("/v1/integration", requestConfig()).then((response) => {
      this.integrations = response.data.integrations;
    });
    console.log("created");
    // this.$http.get('/api/integrations').then(response => {
    //   this.integrations = response.data
    // })
  },
  methods: {
    resetValues: function () {
      this.$refs.createIntegrationForm.reset();
    },
    getIntegrationList: async function () {
      this.$http.get("/api/integrations").then((response) => {
        this.integrations = response.data;
      });
    },
    initializeProjectCreateProjectModal: function () {
      console.log(this);
      this.$root.$emit("bv::show::modal", "createIntegrationModal");
    },
    handleItemClick(item) {
      this.selectedScmType = item;
    },
  },
};
</script>
