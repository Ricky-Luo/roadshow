<template>
  <v-container style="padding: 0px">
    <v-sheet style="height: calc(100% - 58px)">
      <div style="width: 100%; padding: 12px 12px 0px 12px">
        <v-text-field
          placeholder="搜索"
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

          <v-list-item v-for="child in item.items" :key="child.title">
            <v-list-item-content>
              <v-list-item-title v-text="child.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-sheet>
    <v-toolbar flat color="primary" style="height: 56px;position: fixed;bottom: 0px;width: 100%;">
      <v-btn icon dark style="padding-bottom: 12px" @click="goHome">
        <v-icon dark>home</v-icon>
        <span class="navagation-span">主页</span>
      </v-btn>
      <v-btn icon dark style="padding-bottom: 12px">
        <v-icon>add</v-icon>
        <span class="navagation-span">新增</span>
      </v-btn>
    </v-toolbar>
  </v-container>
</template>

<script>
export default {
  name: "MarkRule",
  data: () => ({
    items: [
      {
        items: [
          { title: "泰信基金" },
          { title: "浦银安盛基金" },
          { title: "太平保险" },
        ],
        title: "上海",
      },
      {
        items: [
          { title: "泰信基金" },
          { title: "浦银安盛基金" },
          { title: "太平保险" },
        ],
        title: "广深",
      },
      {
        items: [
          { title: "泰信基金" },
          { title: "浦银安盛基金" },
          { title: "太平保险" },
        ],
        title: "北京",
      },
    ],
  }),
  mounted() {},
  methods: {
      goHome() {
      this.$router.go(-1);
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