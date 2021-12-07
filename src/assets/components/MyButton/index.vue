<template>
  <van-button type="primary" v-bind="$attrs" v-on="$listeners"></van-button>
</template>

<script>
import { Button } from 'vant';

export default {
  name: 'MyButton',
  components: {
    [Button.name]: Button,
  }
};
</script>

<style lang="less" scoped>
button {
  width: 260px;
  font-size: 18px;
  text-transform: capitalize;
}
</style>