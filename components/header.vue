<template>
  <div>
    <div class="header">
      <!-- <Hamburger class="hamburger" /> -->
    </div>
  </div>
</template>

<script>
/*
import Hamburger from '@/components/hamburger'

export default {
  name: 'Header',
  components: { Hamburger },
}
*/
</script>

<style lang="scss" scoped>
$black: #082449;
$dark: #38444d;
$gray: #888888;
$light: #e5e5e5;
$white: #ffffff;
$purple: #611fb6;
$orange: #ff9a70;
$yellow: #fccf5a;

.header {
  height: 60px;
  width: 100vw;
  padding: 5px;
  display: flex;
  position: fixed;
  background-color: $purple;
  color: $white;
}

.hamburger {
  margin: auto 10px auto auto;
}
</style>
