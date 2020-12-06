<template>
  <div>
    <Header />
    <div class="container">
      <div class="title">
        <div class="title-rectangle" />
        <div class="title-text">時間限定企画の情報</div>
      </div>

      <div class="content">
        <div class="content-title">
          <div class="content-rectangle" />
          <div class="content-text">タイムテーブル</div>
        </div>
        <a href="../kaiseifes-timetable.xlsx">ダウンロード</a>
      </div>
      <div class="content">
        <div class="content-title">
          <div class="content-rectangle" />
          <div class="content-text">講演会</div>
        </div>
        <a href="../kaiseifes-lecture.pdf">ダウンロード</a>
      </div>
      <div class="content">
        <div class="content-title">
          <div class="content-rectangle" />
          <div class="content-text">ペン剣ゼミ</div>
        </div>
        <a href="../kaiseifes-penken-seminar.pdf">ダウンロード</a>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header'

export default {
  name: 'Information',
  components: { Header },
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
  align-items: center;
  background: $white;
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
      font-size: 28px;
      padding-bottom: 2px;
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
}
</style>
