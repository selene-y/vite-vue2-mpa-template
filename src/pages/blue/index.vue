<template>
  <div class="index">
    <p>Blue Page</p>
    <my-button
      class="summertime"
      text="to index page"
      @click="toIndex"
    />
    <my-button
      class="creamyPeach"
      text="to orange Page"
      @click="toOrange"
    />
  </div>
</template>

<script>
import MyButton from '@/assets/components/MyButton'

export default {
  components: {
    MyButton
  },
  data() {
    return {
    };
  },
  methods: {
    toIndex() {
      common.openPage('/index.html');
    },
    toOrange() {
      common.openPage('/orange.html');
    },
  }
};
</script>

<style lang="less" scoped>
@import 'blue.less';
</style>
