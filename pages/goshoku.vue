<template>
  <div>
    <Header />
    <div class="container">
      <Title :is-main="true" :text="'訂正一覧'" />

      <Title :is-main="false" :text="'開催取り消し'" />
      <div class="content">
        <p>模擬店</p>
        <p>喫茶</p>
        <p>クイズ研究部 (A401)</p>
        <p>Let’s talk Kaisei (A403)</p>
        <p>KCG (A407)</p>
        <p>サラブレッド研究同好会 (B311)</p>
      </div>

      <Title :is-main="false" :text="'パンフレット記載漏れ'" />
      <div class="content">
        <p>音楽部アンサンブル (音楽部)</p>
        <p class="content-detail">
          小講堂での演奏とはまた違う曲目を、小編成の演奏でお送りします。<br />一日目10：30～、二日目15：00～の各日1回30分、出入り自由のステージです。是非お気軽にお越しください。
        </p>
      </div>

      <Title :is-main="false" :text="'規模拡大 + 場所移動'" />
      <div class="content">
        <p>大道芸、自由自在。 (A305 → A204)</p>
        <p>VS 開成生 (B305 → A4??)</p>
        <p>ソフィーの碁 (B307 → A4??)</p>
      </div>

      <Title :is-main="false" :text="'規模拡大'" />
      <div class="content">
        <p>まったり TRPG 広場 (A305)</p>
        <p>UPDATE (B305)</p>
        <p>飛車ちゅうの成人式！ (B307)</p>
        <p>NeXUS Next (B311)</p>
      </div>

      <Title :is-main="false" :text="'場所移動'" />
      <div class="content">
        <p>Kaiser Tiger Zwei (テニスコート → A205)</p>
        <p>演劇部文化祭公演 (視聴覚教室 → A206, 207)</p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header'

export default {
  name: 'Goshoku',
  components: { Header },
}
</script>

<style scoped lang="scss">
$black: #082449;
$white: #ffffff;

@mixin Didot-font {
  font-family: linotype-didot, serif;
}

.container {
  display: block;
  margin-bottom: 25px;
  align-items: center;
  background: $white;
  color: $black;
}

.content {
  @include Didot-font();
  margin-bottom: 20px;
  p {
    font-size: 20px;
    margin-left: 45px;
  }
  p + .content-detail {
    font-size: 16px;
    margin-left: 65px;
  }
}

@media screen and (min-width: 900px) {
  .content {
    margin-left: 60px;
  }
}

@media screen and (max-width: 900px) {
  .content {
    margin-left: 25px;
  }
}
</style>
