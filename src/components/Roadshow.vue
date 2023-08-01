<template>
  <v-container style="padding: 0px;background: #EDEDED;">
    <div style="width: 100%; padding: 12px 12px 0px 12px;" v-show="!showFilter">
      <h2>
        <span style="margin-right: 12px">03-15 至 03-21</span>
        <div style="display: inline-block; float: right; margin-right: -5px">
          <v-btn icon style="padding-bottom: 12px" color="black">
            <v-icon>west</v-icon>
            <span class="navagation-span">上周</span>
          </v-btn>
          <v-btn
            icon
            style="padding-bottom: 12px; margin-left: 6px; margin-right: 1px"
            color="black"
          >
            <v-icon>east</v-icon>
            <span class="navagation-span">下周</span>
          </v-btn>
        </div>
      </h2>
    </div>
    <!-- <div style="width: 100%; padding: 12px 12px 0px 12px;background:#D6D6D6;" v-show="showFilter">
      <h2>
        <span style="margin-right: 12px">筛选路演</span>
      </h2>
    </div> -->
    <div
      style="
        background: #EDEDED;
        width: 100%;
        padding: 12px 12px 12px 12px;
        clear:both;
      "
      v-show="showFilter"
    >
      <v-card>
        <v-card-title style="font-size:16px;">筛选路演</v-card-title>
        <v-card-text>
          <div>销售区</div>
          <v-btn-toggle v-model="filter.area" dense>
            <v-btn> 华东 </v-btn>
            <v-btn> 华北 </v-btn>
            <v-btn> 华南 </v-btn>
            <v-btn> 港澳台及海外 </v-btn>
          </v-btn-toggle>
          <div>业务标签</div>
          <v-btn-toggle v-model="filter.label" dense>
            <v-btn> 公募 </v-btn>
            <v-btn> 私募 </v-btn>
            <v-btn> 保险 </v-btn>
            <v-btn> 银行 </v-btn>
          </v-btn-toggle>
          <div>工作类</div>
          <v-btn-toggle v-model="filter.type" dense>
            <v-btn> 路演 </v-btn>
            <v-btn> 反路演 </v-btn>
            <v-btn> 调研 </v-btn>
            <v-btn> 会议 </v-btn>
          </v-btn-toggle>
          <v-row>
            <v-col cols="6">
              <v-autocomplete
                light
                v-model="filter.saleMan"
                :items="items"
                label="销售"
                solo
                dense
              ></v-autocomplete>
            </v-col>
            <v-col cols="6">
              <v-autocomplete
                v-model="filter.researchMan"
                :items="items"
                label="研究员"
                solo
                dense
              ></v-autocomplete>
            </v-col>
          </v-row>
          <v-row style="margin-top: -24px">
            <v-col cols="6">
              <v-autocomplete
                v-model="filter.customer"
                :items="items"
                label="客户公司"
                solo
                dense
                style="margin-top: -12px; margin-bottom: -36px"
              ></v-autocomplete>
            </v-col>
            <v-col cols="6">
              <v-autocomplete
                v-model="filter.apartment"
                :items="items"
                label="部门"
                solo
                dense
                style="margin-top: -12px; margin-bottom: -36px"
              ></v-autocomplete>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
      <v-card style="margin-top: 12px;border-radius:4px;">
        <v-card-title style="padding-bottom:12px;font-size:16px;">集中路演
          <v-spacer></v-spacer>
          <v-btn icon>
                    <v-icon color="secondary">add</v-icon>
                  </v-btn>
        </v-card-title>
        <v-card-text style="padding-left:0px;padding-right:0px;border-radius:4px;max-height:180px;overflow:scroll;">
          <v-list style="padding-top:0px;">
            <v-list-item-group color="primary" dense v-model="selectConcentration">
              <v-list-item dense>
                <v-list-item-content dense style="padding: 0px">
                  <v-list-item-title style="font-size: 14px"
                    >单次路演-不限-全体研究员</v-list-item-title
                  >
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon>
                    <v-icon color="secondary" small dense>edit</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title style="font-size: 14px"
                    >单次路演-不限-全体研究员</v-list-item-title
                  >
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon>
                    <v-icon color="secondary" small dense>edit</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title style="font-size: 14px"
                    >单次路演-不限-全体研究员</v-list-item-title
                  >
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon>
                    <v-icon color="secondary" small dense>edit</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title style="font-size: 14px"
                    >单次路演-不限-全体研究员</v-list-item-title
                  >
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon>
                    <v-icon color="secondary" small dense>edit</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card-text>
      </v-card>
    </div>
    <v-sheet
      style="height: calc(100% - 58px); overflow-x: scroll;padding-top:12px;clear:both;background: #EDEDED;"
      @scroll="speedSlide"
    >
      <div
        style="
          height: calc(100% - 60px);
          display: flex;
          width: calc(140% + 21px);
          background: #EDEDED;
        "
      >
        <div
          style="
            margin-left: 12px;
            margin-right: 12px;
            box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
            border-radius: 5px;
            height: 100%;
            overflow: hidden;
            width: calc(70% - 15px);
            background: white;
          "
        >
          <!-- 表头 start -->
          <div class="schedule-header">
            <div>时间</div>
            <div>周一</div>
            <div>周二</div>
            <div>周三</div>
            <div>周四</div>
            <div>周五</div>
          </div>
          <!-- 表头 end -->
          <div
            style="height: calc(100% - 40px); width: 100%; overflow-y: scroll"
          >
            <div class="schedule-body">
              <div>9点</div>
              <div>
                <div>数不尽相逢</div>
                <div></div>
              </div>
              <div>
                <div>等不完守候</div>
                <div></div>
              </div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div class="schedule-body">
              <div>10点</div>
              <div>
                <div style="background: #e91e63; color: white">
                  如果仅有此生
                </div>
                <div>又何用再从头</div>
                <div></div>
              </div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div class="schedule-body">
              <div>午餐</div>
              <div></div>
              <div></div>
              <div></div>
              <div>
                <div>如果仅有此生</div>
                <div style="background: #e91e63; color: white">
                  又何用再从头
                </div>
                <div></div>
              </div>
              <div></div>
            </div>
            <div class="schedule-body">
              <div>1点半</div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div>
                <div>如果仅有此生</div>
                <div>又何用再从头</div>
                <div></div>
              </div>
            </div>
            <div class="schedule-body">
              <div>3点半</div>
              <div></div>
              <div></div>
              <div>
                <div style="background: #e91e63; color: white">
                  如果仅有此生
                </div>
                <div>又何用再从头</div>
                <div></div>
              </div>
              <div></div>
              <div></div>
            </div>
            <div class="schedule-body">
              <div>4点半</div>
              <div></div>
              <div></div>
              <div>
                <div>如果仅有此生</div>
                <div>又何用再从头</div>
                <div></div>
              </div>
              <div></div>
              <div></div>
            </div>
            <div class="schedule-body">
              <div>晚餐</div>
              <div></div>
              <div></div>
              <div>
                <div>如果仅有此生</div>
                <div>又何用再从头</div>
                <div></div>
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div
          style="
            margin-legt: 6px;
            margin-right: 12px;
            box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
            border-radius: 5px;
            height: 100%;
            overflow: hidden;
            width: calc(29% + 15px);
          background: white;
          "
        >
          <!-- 表头 start -->
          <div class="schedule-weekend-header">
            <div>时间</div>
            <div>周六</div>
            <div>周日</div>
          </div>
          <!-- 表头 end -->
          <div
            style="
              max-height: calc(100% - 40px);
              width: 100%;
              overflow-y: scroll;
            "
          >
            <div class="schedule-weekend-body">
              <div>9点</div>
              <div>
                <div>数不尽相逢</div>
                <div></div>
              </div>
              <div>
                <div>等不完守候</div>
                <div></div>
              </div>
            </div>
            <div class="schedule-weekend-body">
              <div>10点</div>
              <div>
                <div style="background: #e91e63; color: white">
                  如果仅有此生
                </div>
                <div>又何用再从头</div>
                <div></div>
              </div>
              <div></div>
            </div>
            <div class="schedule-weekend-body">
              <div>午餐</div>
              <div></div>
              <div></div>
            </div>
            <div class="schedule-weekend-body">
              <div>1点半</div>
              <div></div>
              <div></div>
            </div>
            <div class="schedule-weekend-body">
              <div>3点半</div>
              <div></div>
              <div></div>
            </div>
            <div class="schedule-weekend-body">
              <div>4点半</div>
              <div></div>
              <div></div>
            </div>
            <div class="schedule-weekend-body">
              <div>晚餐</div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </v-sheet>
    <v-toolbar
      flat
      color="primary"
      style="height: 56px; position: fixed; bottom: 0px;width: 100%;"
    >
     <!-- width: calc(100% - 24px);left:12px; -->
      <v-btn icon dark style="padding-bottom: 12px" @click="goHome">
        <v-icon dark>home</v-icon>
        <span class="navagation-span">主页</span>
      </v-btn>
      <v-btn icon dark style="padding-bottom: 12px">
        <v-icon>add</v-icon>
        <span class="navagation-span">路演</span>
      </v-btn>
      <!-- <v-btn icon dark style="padding-bottom: 12px">
        <v-icon>view_compact</v-icon>
        <span class="navagation-span">集中</span>
      </v-btn> -->
      <v-btn icon dark style="padding-bottom: 12px" @click="showFilter = !showFilter">
        <v-icon>person_search</v-icon>
        <span class="navagation-span">筛选</span>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon dark outlined style="padding-bottom: 12px">
        <v-icon>west</v-icon>
        <span class="navagation-span">上周</span>
      </v-btn>
      <v-btn
        icon
        dark
        outlined
        style="padding-bottom: 12px; margin-left: 6px; margin-right: 1px"
      >
        <v-icon>east</v-icon>
        <span class="navagation-span">下周</span>
      </v-btn>
    </v-toolbar>
  </v-container>
</template>

<script>
import moment from "moment";

export default {
  name: "Roadshow",
  data: () => ({
    today: null,
    currentDate: "",
    currentWeekDay: "",
    filter: {
      area: "",
      label: "",
      type: "",
      saleMan: "",
      researchMan: "",
      customer: "",
      apartment: "",
    },
    showFilter:false,
    items: ["测试1", "测试2", "测试3", "测试4"],
    selectConcentration:0,
  }),
  mounted() {
    this.currentDate = moment().format("YYYY-MM-DD");
    // this.currentWeekDay = this.weekChineseMap[moment().weekday()];
  },
  methods: {
    goHome() {
      this.$router.go(-1);
    },
    speedSlide() {
      // if (e.target.scrollLeft > this.lastScrollTop) {
      //   this.$emit("scroll");
      //   if (
      //     e.target.scrollTop !== 0 &&
      //     e.target.scrollTop + e.target.clientHeight + 1 > e.target.scrollHeight
      //   ) {
      //     // 这一步对外暴露滚动到底部事件
      //     this.$emit("scrollToEnd");
      //   }
      // }
      // this.lastScrollTop = e.target.scrollTop;
      // event.stopPropagation();
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
.schedule-header {
  width: 100%;
  display: flex;
  font-size: 14px;
  /* font-weight: bold; */
}
.schedule-header > div:first-child {
  writing-mode: vertical-lr;
  width: 30px;
  line-height: 30px;
  border-left: none;
  border-radius: 5px 0px 0px 0px;
}
.schedule-header > div {
  width: calc((100% - 30px) / 4);
  text-align: center;
  /* background: rgba(0, 0, 0, 0.12); */
  height: 40px;
  line-height: 40px;
  border-left: solid 1px rgba(0, 0, 0, 0.12);
  border-bottom: solid 1px rgba(0, 0, 0, 0.12);
}
.schedule-header > div:last-child {
  border-radius: 0px 5px 0px 0px;
}
.schedule-body {
  width: 100%;
  display: flex;
  font-size: 12px;
}
.schedule-body > div:first-child {
  writing-mode: vertical-lr;
  width: 30px;
  line-height: 30px;
  border-left: none;
  font-size: 14px;
  /* font-weight: bold; */
  padding: 5px 0px 5px 0px;
}
/* .schedule-body > div:last-child {
  border-left:none;
  border-right:solid 1px rgba(0,0,0,.12);
} */
.schedule-body > div {
  width: calc((100% - 30px) / 4);
  text-align: center;
  color: rgba(0, 0, 0, 0.87);
  border-left: solid 1px rgba(0, 0, 0, 0.12);
  border-bottom: solid 1px rgba(0, 0, 0, 0.12);
}
.schedule-body > div > div {
  border-bottom: solid 1px rgba(0, 0, 0, 0.12);
  min-height: 30px;
}
.schedule-body > div > div:last-child {
  border-bottom: none;
}

/**周末面板布局 */
.schedule-weekend-header {
  width: 100%;
  display: flex;
  font-size: 14px;
  /* font-weight: bold; */
}
.schedule-weekend-header > div:first-child {
  writing-mode: vertical-lr;
  width: 30px;
  line-height: 30px;
  border-left: none;
  border-radius: 5px 0px 0px 0px;
}
.schedule-weekend-header > div {
  width: calc((100% - 30px) / 2);
  text-align: center;
  /* background: rgba(0, 0, 0, 0.12); */
  height: 40px;
  line-height: 40px;
  border-left: solid 1px rgba(0, 0, 0, 0.12);
  border-bottom: solid 1px rgba(0, 0, 0, 0.12);
}
.schedule-weekend-header > div:last-child {
  border-radius: 0px 5px 0px 0px;
}
.schedule-weekend-body {
  width: 100%;
  display: flex;
  font-size: 12px;
}
.schedule-weekend-body > div:first-child {
  writing-mode: vertical-lr;
  width: 30px;
  line-height: 30px;
  border-left: none;
  font-size: 14px;
  /* font-weight: bold; */
  padding: 5px 0px 5px 0px;
}
/* .schedule-body > div:last-child {
  border-left:none;
  border-right:solid 1px rgba(0,0,0,.12);
} */
.schedule-weekend-body > div {
  width: calc((100% - 30px) / 2);
  text-align: center;
  color: rgba(0, 0, 0, 0.87);
  border-left: solid 1px rgba(0, 0, 0, 0.12);
  border-bottom: solid 1px rgba(0, 0, 0, 0.12);
}
.schedule-weekend-body > div > div {
  border-bottom: solid 1px rgba(0, 0, 0, 0.12);
  min-height: 30px;
}
.schedule-weekend-body > div > div:last-child {
  border-bottom: none;
}
</style>
<style>
.v-label {
  font-size: 14px !important;
}
.v-input {
  font-size: 14px !important;
}
</style>