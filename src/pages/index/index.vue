<template>
  <div class="index">
    <p>Index Page</p>
    <my-button
      class="squeaky"
      text="to blue page"
      @click="toBlue"
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
    toBlue() {
      common.openPage('/blue.html');
    },
    toOrange() {
      common.openPage('/orange.html');
    },
  }
};
</script>

<style lang="less" scoped>
@import 'index.less';
</style>
