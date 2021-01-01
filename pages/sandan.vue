<template>
  <div>
    <Header />
    <div class="title">
      <div class="title-rectangle" />
      <div class="title-text">企画一覧</div>
    </div>

    <Card />
    <Card />
  </div>
</template>

<script>
import Header from '@/components/header'
import Card from '@/components/SandanCard'

export default {
  name: 'Sandan',
  components: { Header, Card },
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

@mixin Didot-font {
  font-family: linotype-didot, serif;
}

.title {
  @include Didot-font();
  display: flex;
  margin-top: 90px;
  margin-left: 25px;
  align-items: center;
  .title-rectangle {
    background-color: $yellow;
    width: 8px;
    height: 48px;
    margin-right: 15px;
  }
  .title-text {
    font-size: 40px;
    padding-bottom: 6px;
  }
}

.card-list {
  margin-top: 40px;
}
</style>
