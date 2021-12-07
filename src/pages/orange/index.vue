<template>
  <div class="index">
    <p>Orange Page</p>
    <my-button
      class="summertime"
      text="to index page"
      @click="toIndex"
    />
    <my-button
      class="squeaky"
      text="to blue page"
      @click="toBlue"
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
    toBlue() {
      common.openPage('/blue.html');
    },
  }
};
</script>

<style lang="less" scoped>
@import 'orange.less';
</style>
