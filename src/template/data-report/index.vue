<template>
  <div class="page-data-report">
    <div v-if="loading" class="page-data-report-loading">
      <Spin class="page-data-report-loading-spin" size="large" />
    </div>
    <div v-else>
      <FormGenerator
        v-if="fields.length > 0"
        ref="FormGenerator"
        class="page-data-report-conditions"
        :fields="fields"
        :model="model"
        :options="options"
      />
      <div v-if="charts.length > 0">
        <div v-if="charts.length > 0">
          <DataVis
            v-for="(item, index) in charts"
            :key="index"
            ref="DataVis"
            :config="item"
            class="data-vis"
            :params-container="model"
            :request-interceptor="interceptor"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/libs/api.request";
import { mapState } from "vuex";
export default {
  watch: {
    pagePath() {
      this.getPageConfig();
    }
  },
  data() {
    return {
      model: {},
      loading: true,
      pageConfig: {
        form: {},
        charts: []
      }
    };
  },
  computed: {
    ...mapState({
      pagePath: state => state.page.pagePath
    }),
    fields() {
      return this.pageConfig.form.fields || [];
    },
    options() {
      const options = this.pageConfig.form.options || [];
      options.apiBase = this.apiBase;
      options.labelWidth = 60;
      options.inline = true;
      options.labelPosition = "left";
      return options;
    },
    charts() {
      return this.pageConfig.charts || [];
    }
  },
  mounted() {
    this.getPageConfig();
  },
  methods: {
    getPageConfig() {
      this.loading = true;
      axios
        .request({
          url: `/api${this.pagePath}/page-config`,
          method: "get"
        })
        .then(res => {
          this.pageConfig = res.data;
          this.loading = false;
        });
    },
    interceptor(url, params) {
      return new Promise((resolve, reject) => {
        axios
          .request({
            url,
            method: "get",
            params: {
              conditions: JSON.stringify(params)
            }
          })
          .then(
            res => {
              if (+res.errno === 0) {
                resolve(res);
              } else {
                reject(res);
              }
            },
            error => {
              reject(error);
            }
          );
      });
    },
    pageReset() {
      this.model = {};
      this.pageConfig = {
        form: {},
        charts: []
      };
    }
  },
  beforeRouteLeave(to, from, next) {
    this.pageReset();
    next();
  }
};
</script>
<style lang="less">
.page-data-report {
  &-loading {
    text-align: center;
    padding: 140px;
    &-spin {
      display: inline-block;
    }
  }

  .dvis-ivu {
    margin-bottom: 0px;
    &-header {
      font-size: 14px;
      margin-top: 0px;
      margin-left: 10px;
    }

    > .ivu-divider-horizontal {
      margin: 1px 0;
    }
    .dvis-ivu-row .dvis-ivu-items-box {
      display: flex;
      justify-content: space-around;
    }
    .dvis-ivu-row .dvis-ivu-items-box .dvis-ivu-item .ivu-card-body {
      .ivu-table-body {
        height: 304px;
        overflow: scroll;
      }
    }
    .dvis-ivu-row .dvis-ivu-items-box .dvis-ivu-item {
      .dvis-ivu-chart-inline-items-box .dvis-ivu-chart-inline-item-box {
        width: 31.2%;
      }
    }
  }

  &-conditions {
    width: 98%;
    background: #fff;
    margin: 10px;
    padding: 20px 20px 0px 20px;
    border-radius: 10px;

    .fg-ivu-form-item {
      margin-right: 40px !important;
    }
  }

  &-chart {
    margin-top: 60px;
    padding: 20px;
    background: #fff;
  }
}
</style>
