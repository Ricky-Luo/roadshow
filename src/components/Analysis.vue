<template>
  <v-container style="padding: 0px">
    <div style="width: 100%; padding: 12px 12px 0px 12px">
      <h2 @click="clickHeader">
        <span>{{ currentDate }} {{isSalesman ? '(销售员视角)':'(研究员视角)'}} </span>
        <v-btn text @click="changeTimeUnit">
            <span style="text-decoration: underline">切换时间单位</span></v-btn
          >
      </h2>
    </div>
    <v-sheet
      style="height: calc(100% - 105px); padding: 12px;"
      ref="worksContainer"
    >
    </v-sheet>
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
        @click="isSalesman = !isSalesman"
      >
        <v-icon>{{isSalesman ? 'science' : 'work_outline'}}</v-icon>
        <span class="navagation-span">{{isSalesman ? '研究' : '销售'}}</span>
      </v-btn>

      <v-spacer></v-spacer>
      <v-btn icon dark outlined style="padding-bottom: 12px">
        <v-icon>west</v-icon>
        <span class="navagation-span">{{last}}</span>
      </v-btn>
      <v-btn
        icon
        dark
        outlined
        style="padding-bottom: 12px; margin-left: 6px; margin-right: 1px"
      >
        <v-icon>east</v-icon>
        <span class="navagation-span">{{next}}</span>
      </v-btn>
    </v-toolbar>
  </v-container>
</template>

<script>
export default {
  name: "Analysis",
  data: () => ({
    today: null,
    currentDate:'二月',
    timeUnit: 'month', // halfYear, year
    isSalesman: true,
  }),
  mounted() {

  },
  methods: {
    clickHeader() {},
    changeTimeUnit() {
        switch (this.timeUnit) {
            case 'month':
                this.timeUnit = 'halfYear';
                break;
            case 'halfYear':
                this.timeUnit = 'year';
                break;
            case 'year':
                this.timeUnit = 'month';
                break;
        }
    },
    goHome() {
      this.$router.go(-1);
    },
  },
  computed:{
      last() {
        switch (this.timeUnit) {
            case 'month':
                return '上月';
            case 'halfYear':
                return '上半年';
            case 'year':
                return '上年';
            default:
                return '上月';
        }
      },
      next() {
          switch (this.timeUnit) {
            case 'month':
                return '下月';
            case 'halfYear':
                return '下半年';
            case 'year':
                return '下年';
            default:
                return '下月';
        }
      },
  }
};
</script>
<style scoped>
.navagation-span {
  display: block;
  font-size: 12px;
  position: absolute;
  bottom: -12px;
}
</style>