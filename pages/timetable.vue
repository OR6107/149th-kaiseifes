<template>
  <div>
    <Header />
    <div class="container">
      <div class="title">
        <div class="title-rectangle" />
        <div class="title-text">タイムテーブル</div>
      </div>

      <div class="content">
        <div class="content-title">
          <div class="content-rectangle" />
          <div class="content-text">Zoom</div>
        </div>
        <p>
          1/9 (土) 09:00 ~ 17:00 <br />
          1/10 (土) 09:00 ~ 16:30 <br />
          の文化祭期間中、いつでもお越しいただけます。
        </p>
      </div>
      <div class="content">
        <div class="content-title">
          <div class="content-rectangle" />
          <div class="content-text">バンド</div>
        </div>
        <a href="/kaiseifes-band.pdf" target="_blank" rel="noopener noreferrer"
          >ダウンロード</a
        >
      </div>
      <div class="content">
        <div class="content-title">
          <div class="content-rectangle" />
          <div class="content-text">講演会</div>
        </div>
        <p>
          1/10 (日) 13:00 に
          <a
            href="https://youtu.be/dgcUrqiz-Gk"
            target="_blank"
            rel="noopener noreferrer"
            >YouTube</a
          >
          で公開予定
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
      <div class="content">
        <div class="content-title">
          <div class="content-rectangle" />
          <div class="content-text">中後夜</div>
        </div>
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
import Footer from '@/components/Footer'

export default {
  name: 'Timetable',
  components: { Header, Footer },
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
.content {
  @include Didot-font();
  margin-top: 20px;
  margin-left: 60px;
  .content-title {
    display: flex;
    align-items: center;
    .content-rectangle {
      background-color: $yellow;
      width: 8px;
      height: 32px;
      margin-right: 17px;
    }
    .content-text {
      padding-bottom: 2px;
    }
  }
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
