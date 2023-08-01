<template>
  <v-container style="padding: 0px">
    <v-sheet style="height: calc(100% - 58px)">
      <div style="width: 100%; padding: 12px 12px 0px 12px">
        <v-text-field
          placeholder="搜索公司和客户"
          filled
          full-width
          rounded
          dense
          small
          append-icon="search"
        ></v-text-field>
      </div>
      <v-list style="padding-top: 0px; margin-top: -21px">
        <v-list-group
          v-for="item in items"
          :key="item.title"
          v-model="item.active"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item two-line v-for="child in item.items" :key="child.title">
            <v-list-item-content>
              <v-list-item-title v-text="child.title"></v-list-item-title>
              <v-list-item-subtitle
                ><span style="margin-right: 12px">
                  <v-icon small>phone</v-icon>{{ child.phone }}</span
                >
                <span><v-icon small>smartphone</v-icon>{{ child.mobile }}</span>
              </v-list-item-subtitle>
              <!-- <v-list-item-subtitle><span style="margin-right:12px;">
                <v-icon small>apartment</v-icon>{{child.apartment}}</span>
                <span><v-icon small>saved_search</v-icon>{{child.direction}}</span>
              </v-list-item-subtitle> -->
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-sheet>

    <half-screen-dialog v-model="addCustomerDialog">
      <v-card elevation="20" class="rounded-xl">
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
      <v-card elevation="20" class="rounded-xl">
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
          <v-btn color="primary" depressed @click="importAction">选择文件</v-btn>
        </v-card-actions>
      </v-card>
    </half-screen-dialog>

    <v-snackbar v-model="importInfo" :timeout="'1500'" centered color="success" app outlined> 导入成功 </v-snackbar>

    <v-toolbar
      flat
      color="primary"
      style="height: 56px; position: fixed; bottom: 0px; width: 100%"
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
        <v-icon>group_add</v-icon>
        <span class="navagation-span">客户</span>
      </v-btn>
      <v-btn icon dark style="padding-bottom: 12px">
        <v-icon>person_add</v-icon>
        <span class="navagation-span">人员</span>
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
    </v-toolbar>
  </v-container>
</template>

<script>
import HalfScreenDialog from "./CommonComponents/HalfScreenDialog";
export default {
  name: "Customers",
  components: { HalfScreenDialog },
  data: () => ({
    addCustomerDialog: false,
    importDialog: false,
    importInfo: false,
    items: [
      {
        items: [
          {
            title: "蔡玮菁",
            phone: "88888888",
            mobile: "13666666666",
            apartment: "研究部",
            direction: "宏观",
          },
          {
            title: "董 晗",
            phone: "88888888",
            mobile: "13666666666",
            apartment: "研究部",
            direction: "宏观",
          },
          {
            title: "国投瑞银基金总机",
            phone: "88888888",
            mobile: "13666666666",
            apartment: "研究部",
            direction: "宏观",
          },
        ],
        title: "国投瑞银（深圳）",
        active: 1,
      },
      {
        items: [],
        title: "国投瑞银（上海）",
      },
    ],
  }),
  mounted() {},
  methods: {
    goHome() {
      this.$router.go(-1);
    },
    importAction() {
      this.importDialog = false;
      var _self = this;
      _self.importInfo = true;   
    }
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
</style>