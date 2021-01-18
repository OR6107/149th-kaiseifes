<template>
  <div>
    <Header />
    <div class="container">
      <Title :is-main="true" :text="'タイムテーブル'" />

      <Title :is-main="false" :text="'Zoom'" />
      <div class="content">
        <p>
          1/9 (土) 09:00 ~ 17:00 <br />
          1/10 (土) 09:00 ~ 16:30 <br />
          の文化祭期間中、いつでもお越しいただけます。
        </p>
      </div>

      <Title :is-main="false" :text="'バンド'" />
      <div class="content">
        <a href="/kaiseifes-band.pdf" target="_blank" rel="noopener noreferrer"
          >ダウンロード</a
        >
      </div>

      <Title :is-main="false" :text="'講演会'" />
      <div class="content">
        <p>
          <a
            href="https://youtu.be/dgcUrqiz-Gk"
            target="_blank"
            rel="noopener noreferrer"
            >YouTube</a
          >
          にて公開済み
        </p>
        <p>
          概要を
          <a
            href="../kaiseifes-lecture.pdf"
            target="_blank"
            rel="noopener noreferrer"
            >ダウンロード</a
          >
        </p>
        <p>
          今回の海野裕也さんの講演に関する質問がありましたら、<a
            href="https://forms.gle/wbsC6g9WH7krxEZn6"
            target="_blank"
            rel="noopener noreferrer"
            >Googleフォーム</a
          >
          よりご回答ください。<br />
          ※質問は、1月10日14時30分より、17日23時までに回答されたものを受け付けます。<br />
          ※不適切な質問は控えるようお願いします。<br />
          ※全ての質問に回答していただけるとは限りません。ご了承ください。<br />
          回答はこの欄に追記される予定です。
        </p>
      </div>

      <Title :is-main="false" :text="'中後夜'" />
      <div class="content">
        <p>
          中夜祭: 1/9 (土) 14:55 ~ 【終了】
          <!-- <a href="https://youtu.be/EhUbtmi0Bcs">アーカイブ</a> --><br />
          後夜祭: 1/10 (日) 11:15 ~ 【終了】
          <!-- <a href="https://youtu.be/aMi_k4j3tSI">アーカイブ</a> --><br />
        </p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header'
import Title from '@/components/Title'
import Footer from '@/components/Footer'

export default {
  name: 'Timetable',
  components: { Header, Title, Footer },
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
.container {
  display: block;
  margin-bottom: 25px;
  align-items: center;
  background: $white;
  color: $black;
}

.content {
  @include Didot-font();
  margin-top: 20px;
  margin-left: 60px;
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
    margin-bottom: 10px;
    a {
      margin-left: auto;
    }
  }
}
@media screen and (min-width: 900px) {
  .content-text {
    font-size: 28px;
  }
}
@media screen and (max-width: 900px) {
  .title {
    margin-bottom: 40px;
  }
  .content {
    margin-left: 25px;
    .content-text {
      font-size: 20px;
      padding-bottom: 2px;
    }
  }
}
</style>
