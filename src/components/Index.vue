<template>
  <v-container style="padding: 0px">
    <v-card
      class="mx-auto"
      style="height: 100%"
      color="#EDEDED"
      flat
      rounded="false"
    >
      <v-card flat color="#EDEDED" style="border-radius: 0px" :rounded="false">
        <v-container class="fill-height" style="align-items: start">
          <v-row align="center">
            <v-col cols="3" style="text-align: center">
              <div class="mark popIn">
                <div @click="clickIcon('markRule')">
                  <v-btn x-large icon color="primary">
                    <v-icon x-large>wysiwyg</v-icon>
                  </v-btn>
                </div>
                <span>规则</span>
              </div>
            </v-col>
            <v-col cols="3" style="text-align: center">
              <div class="mark popIn">
                <div @click="clickIcon('roadshow')">
                  <v-btn x-large icon color="primary">
                    <v-icon x-large>live_tv</v-icon>
                  </v-btn>
                </div>
                <span>路演</span>
              </div>
            </v-col>
            <v-col cols="3" style="text-align: center">
              <div class="mark popIn2">
                <div @click="clickIcon('workRecord')">
                  <v-btn x-large icon color="primary">
                    <v-icon x-large>grading</v-icon>
                  </v-btn>
                </div>
                <span>工作记录</span>
              </div>
            </v-col>
            <v-col cols="3" style="text-align: center">
              <div class="mark popIn">
                <div @click="clickIcon('customers')">
                  <v-btn x-large icon color="primary">
                    <v-icon x-large>people</v-icon>
                  </v-btn>
                </div>
                <span>客户</span>
              </div>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="3" style="text-align: center">
              <div class="mark popIn">
                <div @click="clickIcon('analysis')">
                  <v-btn x-large icon color="primary">
                    <v-icon x-large>analytics</v-icon>
                  </v-btn>
                </div>
                <span>统计分析</span>
              </div>
            </v-col>
            <v-col cols="3" style="text-align: center">
              <div class="mark popIn2">
                <div @click="clickIcon()">
                  <v-btn x-large icon color="primary">
                    <v-icon x-large>wb_sunny</v-icon>
                  </v-btn>
                </div>
                <span>晨会</span>
              </div>
            </v-col>
            <v-col cols="3" style="text-align: center">
              <div class="mark popIn">
                <div @click="clickIcon()">
                  <v-btn x-large icon color="primary">
                    <v-icon x-large>groups</v-icon>
                  </v-btn>
                </div>
                <span>团队管理</span>
              </div>
            </v-col>
            <v-col cols="3" style="text-align: center">
              <div class="mark popIn2">
                <div @click="clickIcon()">
                  <v-btn x-large icon color="primary">
                    <v-icon x-large>perm_identity</v-icon>
                  </v-btn>
                </div>
                <span>用户管理</span>
              </div>
            </v-col>
          </v-row>

          <v-row align="center">
            <v-col cols="3" style="text-align: center">
              <div class="mark popIn">
                <div @click="clickIcon()">
                  <v-btn x-large icon color="primary">
                    <v-icon x-large>access_time</v-icon>
                  </v-btn>
                </div>
                <span>打分时间</span>
              </div>
            </v-col>
          </v-row>

        </v-container>
      </v-card>
      <v-card
        style="height: calc(100% - 220px); border-radius: 24px 24px 0px 0px;"
      >
      <!-- margin-left:24px;margin-right:24px; -->
        <v-timeline align-top dense>
          <v-timeline-item color="pink" small>
            <v-row class="pt-1">
              <v-col cols="3" style="padding-top: 0px;">
                <strong>5pm</strong>
              </v-col>
              <v-col  style="padding-top: 0px;">
                <strong>安排工作一</strong>
                <div class="caption">T+0交易政策解读</div>
              </v-col>
            </v-row>
          </v-timeline-item>

          <v-timeline-item color="teal lighten-3" small>
            <v-row class="pt-1">
              <v-col cols="3" style="padding-top: 0px;">
                <strong>3-4pm</strong>
              </v-col>
              <v-col style="padding-top: 0px;">
                <strong>安排工作二</strong>
                <div class="caption mb-2">详情详情详情详情详情详情</div>
                <v-avatar>
                  <v-img
                    src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Kurt&hairColor=Red&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Brown"
                  ></v-img>
                </v-avatar>
                <v-avatar>
                  <v-img
                    src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Prescription02&hairColor=Black&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=BlazerSweater&clotheColor=Black&eyeType=Default&eyebrowType=FlatNatural&mouthType=Default&skinColor=Tanned"
                  ></v-img>
                </v-avatar>
                <v-avatar>
                  <v-img
                    src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Sunglasses&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Pale"
                  ></v-img>
                </v-avatar>
              </v-col>
            </v-row>
          </v-timeline-item>

          <v-timeline-item color="pink" small>
            <v-row class="pt-1">
              <v-col cols="3" style="padding-top: 0px;">
                <strong>8-9am</strong>
              </v-col>
              <v-col style="padding-top: 0px;">
                <strong>安排工作三</strong>
                <div class="caption">详情详情详情详情详情详情</div>
              </v-col>
            </v-row>
          </v-timeline-item>

          <v-timeline-item color="teal lighten-3" small>
            <v-row class="pt-1">
              <v-col cols="3" style="padding-top: 0px;">
                <strong>9-11am</strong>
              </v-col>
              <v-col style="padding-top: 0px;">
                <strong>安排工作4</strong>
                <div class="caption">详情详情详情详情详情详情</div>
              </v-col>
            </v-row>
          </v-timeline-item>
          <v-timeline-item color="teal lighten-3" small>
            <v-row class="pt-1">
                <a>查看更多</a>
            </v-row>
          </v-timeline-item>
        </v-timeline>
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Index",
  data: () => ({}),
  methods: {
    clickIcon(name) {
      this.$router.push({ name: name });
    },
  },
};
</script>
<style scoped>
.mark > div {
  width: auto;
  height: auto;
  text-align: center;
  transition: 0.1s linear;
  cursor: pointer;
  /* color: white; */
}

.mark > span {
  font-size: 14px;
  /* color: white; */
  text-align: center;
  display: inline-block;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
}

.mark:hover {
  filter: brightness(0.7);
}
/* 动画 */
/* .popIn {
  animation-name: popIn;
  animation-delay: 0.17s;
  animation-duration: 0.2s;
  will-change: transform, opacity;
} */

@keyframes popIn {
  0% {
    transform: scale3d(0, 0, 0);
    opacity: 0;
  }

  20% {
    opacity: 1;
  }

  /* 90% {
    animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
    transform: scale3d(1.01, 1.01, 1.01); } */
  /* 60% {
    animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
    transform: scale3d(0.8, 0.8, 0.8); } */
  /* 80% {
    animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
    transform: scale3d(1.03, 1.03, 1.03); } */
  100% {
    animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transform: scale3d(1, 1, 1);
  }
}

/* .popIn2 {
  -webkit-animation-name: popIn;
  animation-name: popIn;
  animation-delay: 0.17s;
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.4s;
  will-change: transform, opacity;
} */

@keyframes popIn2 {
  0% {
    transform: scale3d(0, 0, 0);
    opacity: 0;
  }

  20% {
    opacity: 1;
  }

  /* 90% {
    animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
    transform: scale3d(1.01, 1.01, 1.01); } */
  /* 60% {
    animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
    transform: scale3d(0.8, 0.8, 0.8); } */
  /* 80% {
    animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
    transform: scale3d(1.03, 1.03, 1.03); } */
  100% {
    animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transform: scale3d(1, 1, 1);
  }
}
</style>
