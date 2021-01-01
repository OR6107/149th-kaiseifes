<template>
  <div>
    <Header />
    <div class="title">
      <div class="title-rectangle" />
      <div class="title-text">企画一覧</div>
    </div>

    <div class="search" />

    <div class="card-container">
      <div class="card-list">
        <Card />
        <Card />
      </div>
      <div class="card-list">
        <Card />
        <Card />
      </div>
    </div>
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

.search {
  height: 110px;
  margin: 27px 30px auto 30px;
  border: 2px solid $orange;
}

.card-container {
  margin-top: 40px;
  .card-list {
    display: inline-grid;
    margin-left: 70px;
  }
}
</style>
