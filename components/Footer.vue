<template>
  <div class="footer">
    ©︎2020-2021
    <a href="https://kaiseigakuen.jp/" target="_blank" rel="noopener noreferrer"
      >開成学園</a
    >
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped lang="scss">
$black: #082449;
$dark: #38444d;
$gray: #888888;
$light: #e5e5e5;
$white: #ffffff;
$purple: #611fb6;
$orange: #ff9a70;
$yellow: #fccf5a;

.footer {
  color: $gray;
  text-align: right;
  padding-top: 20px;
  padding-right: 10px;
  a {
    color: $gray;
    text-decoration: none;
  }
}
</style>
