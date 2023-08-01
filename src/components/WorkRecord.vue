<template>
  <v-container style="padding: 0px; height: 100%">
    <div style="width: 100%; padding: 12px 12px 0px 12px">
      <h2 @click="clickHeader">
        <span style="margin-right: 12px">{{ currentDate }}</span>
        <span>{{ currentWeekDay }}</span>
      </h2>
    </div>
    <v-sheet
      style="height: calc(100% - 105px); padding: 12px; overflow-y: scroll"
      ref="worksContainer"
      @scroll="changeCurrent"
    >
      <div
        class="datePickPanelContainer"
        :style="
          !showDatePickPanel
            ? 'margin-top:' + datePickPanelHeight
            : 'margin-top:0px;'
        "
        ref="datePickPanel"
      >
        <v-date-picker
          v-model="currentDate"
          full-width
          no-title
          dark
          color="orange"
          @change="pickDate"
        ></v-date-picker>
      </div>
      <v-expansion-panels v-model="currentInfo">
        <v-expansion-panel v-for="(item, i) in 16" :key="i">
          <v-expansion-panel-header>
            【路演-分析师】 曹** 易方*基金（广州）
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-sheet>
    <v-snackbar
      v-model="importInfo"
      :timeout="'1500'"
      centered
      color="success"
      app
      outlined
    >
      导入成功
    </v-snackbar>
    <v-toolbar
      flat
      color="primary"
      style="
        height: 56px;
        position: fixed;
        bottom: 0px;
        width: 100%;
        z-index: 99;
      "
    >
      <v-btn icon dark style="padding-bottom: 12px" @click="goHome">
        <v-icon dark>home</v-icon>
        <span class="navagation-span">主页</span>
      </v-btn>
      <v-btn
        icon
        dark
        style="padding-bottom: 12px"
        @click="addCustomerDialog = true"
      >
        <v-icon>add</v-icon>
        <span class="navagation-span">新增</span>
      </v-btn>
      <v-btn
        icon
        dark
        style="padding-bottom: 12px"
        @click="onlyMine = !onlyMine"
      >
        <v-icon>{{onlyMine ? 'person_search' : 'group'}}</v-icon>
        <span class="navagation-span">{{onlyMine ? '我' : '全部'}}</span>
      </v-btn>
      <v-btn
        icon
        dark
        style="padding-bottom: 12px"
        @click="importDialog = true"
      >
        <v-icon>cloud_upload</v-icon>
        <span class="navagation-span">导入</span>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon dark outlined style="padding-bottom: 12px">
        <v-icon>west</v-icon>
        <span class="navagation-span">昨天</span>
      </v-btn>
      <v-btn
        icon
        dark
        outlined
        style="padding-bottom: 12px; margin-left: 6px; margin-right: 1px"
      >
        <v-icon>east</v-icon>
        <span class="navagation-span">明天</span>
      </v-btn>
    </v-toolbar>
    <half-screen-dialog v-model="addCustomerDialog">
      <v-card elevation="20" class="reform-dialog">
        <v-card-title>新增客户</v-card-title>
        <v-card-text>
          <v-text-field
            label="客户全名"
            value="长城基金（北京）"
          ></v-text-field>
          <v-text-field
            label="客户简称"
            value="长城基金（北京）"
          ></v-text-field>

          <v-radio-group row>
            <v-radio label="上海" value="s"></v-radio>
            <v-radio label="广深" value="g"></v-radio>
            <v-radio label="北京" value="b"></v-radio>
            <v-radio label="香港" value="x"></v-radio>
          </v-radio-group>
          <v-select
            :items="['公募', '私募', '保险', '券商', '资管', '期货']"
            label="客户类别"
          ></v-select>
          <v-select
            :items="['A+', 'A', 'B', 'C', 'D', '打包A']"
            label="客户级别"
          ></v-select>
          <v-select
            :items="['罗**', '王**', '刘**', '罗**', '罗**', '罗**']"
            label="负责销售"
          ></v-select>
          <v-textarea
            label="具体地址"
            rows="3"
            no-resize
            value="深圳市福田区益田路6009号新世界商务中心40层；北京市西城区金融街7号英蓝国际金融中心916"
          ></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="addCustomerDialog = false"> 取消 </v-btn>
          <v-btn color="primary" depressed> 完成 </v-btn>
        </v-card-actions>
      </v-card>
    </half-screen-dialog>
    <half-screen-dialog v-model="importDialog">
      <v-card elevation="20" class="reform-dialog">
        <v-card-title>
          选择文件导入
          <v-btn text>
            <span style="text-decoration: underline">下载模板 </span></v-btn
          >
        </v-card-title>
        <v-card-text>
          <v-text-field
            label="选择客户"
            value="长城基金（北京）"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" depressed @click="importAction"
            >选择文件</v-btn
          >
        </v-card-actions>
      </v-card>
    </half-screen-dialog>
  </v-container>
</template>

<script>
import moment from "moment";
import HalfScreenDialog from "./CommonComponents/HalfScreenDialog";

export default {
  name: "WorkRecord",
  components: { HalfScreenDialog },
  data: () => ({
    addCustomerDialog: false,
    importDialog: false,
    onlyMine: false,
    importInfo: false,
    currentInfo: 0,
    currentDate: "",
    currentWeekDay: "",
    weekChineseMap: {
      1: "星期一",
      2: "星期二",
      3: "星期三",
      4: "星期四",
      5: "星期五",
      6: "星期六",
      7: "星期天",
    },
    datePickPanelHeight: "-312px",
    showDatePickPanel: false,
  }),
  created() {
    this.currentDate = moment().format("YYYY-MM-DD");
    this.currentWeekDay = this.weekChineseMap[moment().weekday()];
  },
  mounted() {
    // console.log(this.$refs.worksContainer.$el.offsetHeight);
    this.datePickPanelHeight =
      "-" + (this.$refs.datePickPanel.offsetHeight + 22) + "px";
  },
  methods: {
    goHome() {
      this.$router.go(-1);
    },
    importAction() {
      this.importDialog = false;
      var _self = this;
      _self.importInfo = true;
    },
    changeCurrent(e) {
      console.log(e);
      //       scrollHeight: 888
      // scrollLeft: 0
      // scrollTop: 180.22642517089844
      // scrollWidth: 376

      // if (this.showDatePickPanel) {
      //   this.showDatePickPanel = false;
      // }
    },
    clickHeader() {
      this.$refs["worksContainer"].$el.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      this.showDatePickPanel = !this.showDatePickPanel;
    },
    pickDate() {
      // console.log(moment("currentDate").weekday());
      this.currentWeekDay = this.weekChineseMap[
        moment(this.currentDate).weekday()
      ];
    },
  },
};
</script>
<style scoped>
.navagation-span {
  display: block;
  font-size: 12px;
  position: absolute;
  bottom: -12px;
}
.v-data-table td,
.v-data-table th {
  padding-left: 6px !important;
  padding-right: 6px !important;
}
.datePickPanelContainer {
  width: 100%;
  margin-bottom: 12px;
  transition: 0.2s cubic-bezier(0.25, 0.8, 0.25, 1) all;
}
.reform-dialog {
  border-radius: 24px 24px 0px 0px !important;
}
</style>