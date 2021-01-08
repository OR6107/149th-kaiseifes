<template>
  <div>
    <Header />
    <div class="container">
      <Title :is-main="true" :text="'お知らせ'" />

      <Title :is-main="false" :text="'コンテンツの追加'" />
      <div class="content">
        <p>
          コンテンツは随時追加されていきます。<br />
          1月中旬まで追加は行われる予定です。
        </p>
      </div>

      <Title :is-main="false" :text="'文化祭期間中の動画'" />
      <div class="content">
        <p>
          文化祭期間中に撮影した動画を、1/15 (金) ごろに公開予定です。<br />
          しばらくお待ち下さい。
        </p>
      </div>

      <Title :is-main="false" :text="'このページの公開期間'" />
      <div class="content">
        <p>
          このページは、コンテンツ更新終了後もしばらく公開を続けます。<br />
          2月中旬までは公開する予定です。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header'
import Title from '@/components/Title'

export default {
  name: 'Information',
  components: { Header, Title },
}
</script>

<style scoped lang="scss">
$black: #082449;
$white: #ffffff;
$yellow: #fccf5a;

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
  .place {
    font-size: 24px;
    margin-top: 10px;
    margin-left: 45px;
    .place-floor {
      font-size: 20px;
      margin-left: 20px;
    }
  }
  a {
    font-size: 20px;
    margin-left: 45px;
    color: $black;
  }
  a:hover {
    color: $yellow;
  }
  p {
    font-size: 20px;
    margin-left: 45px;
    margin-right: 20px;
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
