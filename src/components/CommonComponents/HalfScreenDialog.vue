<template>
  <v-container
    style="
      padding: 0px;
      height: 100%;
      z-index: 100;
      position: absolute;
      top: 0px;
    "
    v-show="contralWhole"
  >
    <div class="background" :style="controlBackground ? 'backdrop-filter: blur(1px);' : 'backdrop-filter: none'" @click="cancl">
      <div class="content-container" :style="controlContent ? 'bottom:0px;' : 'bottom:-100%;'" @click.stop="">
        <slot></slot>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "HalfScreenDialog",
  props: { value: {} },
  data: () => ({
    contralWhole: false,
    controlBackground:false,
    controlContent: false,
  }),
  created() {
    this.contralWhole = this.value;
  },
  mounted() {},
  methods: {
    cancl() {
      this.value = false;
      this.$emit('input', false)
    }
  },
  watch: {
    value() {
      var _self = this;
      if (this.value) {
        this.contralWhole = true;
        setTimeout(() => {
        _self.controlBackground = true;
        _self.controlContent = true;  
        }, 10);
      } else {
        this.controlContent = false;
        setTimeout(() => {
          _self.controlBackground = false;
        }, 200);
        setTimeout(() => {
          _self.contralWhole = false;
        }, 400);
      }
    },
  },
};
</script>
<style scoped>
.background {
  width: 100%;
  height: 100%;
  transition: 0.4s cubic-bezier(0.25, 0.8, 0.25, 1) all;
}
.content-container {
  width: 100%;
  height: auto;
  position: fixed;
  bottom: -100%;
  transition: 0.2s cubic-bezier(0.25, 0.8, 0.25, 1) all;
}
</style>