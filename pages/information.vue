<template>
  <div>
    <Header />
    <div class="container">
      <div class="title">
        <div class="title-rectangle" />
        <div class="title-text">詳細情報</div>
      </div>

      <div class="content">
        <div class="content-title">
          <div class="content-rectangle" />
          <div class="content-text">タイムテーブル (実演参加団体, バンド)</div>
        </div>
        <a href="../kaiseifes-timetable.pdf">ダウンロード</a>
      </div>
      <div class="content">
        <div class="content-title">
          <div class="content-rectangle" />
          <div class="content-text">講演会</div>
        </div>
        <p>Coming Soon...</p>
        <!-- <a href="../kaiseifes-lecture.pdf">ダウンロード</a> -->
      </div>
      <div class="content">
        <div class="content-title">
          <div class="content-rectangle" />
          <div class="content-text">ペン剣ゼミ</div>
        </div>
        <a href="../kaiseifes-penken-seminar.pdf">ダウンロード</a>
      </div>
      <div class="content">
        <div class="content-title">
          <div class="content-rectangle" />
          <div class="content-text">開成ツアー</div>
        </div>
        <p>Coming Soon...</p>
        <!-- <a href="../kaiseifes-tour.pdf">ダウンロード</a> -->
      </div>
      <div class="content">
        <div class="content-title">
          <div class="content-rectangle" />
          <div class="content-text">昼食時間</div>
        </div>
        <p>該当する時間帯は、フロアの全参加団体が閉鎖となります。</p>
        <div class="place">
          A会場
          <div class="place-floor">1階: どの時間でもいらっしゃることができます。</div>
          <div class="place-floor">2階: 12:30 〜 13:10 (古本市を除く)</div>
          <div class="place-floor">3階: 12:00 〜 12:40</div>
          <div class="place-floor">4階: 11:30 〜 12:10</div>
        </div>
        <div class="place">
          B会場
          <div class="place-floor">1階: どの時間でもいらっしゃることができます。</div>
          <div class="place-floor">2階: どの時間でもいらっしゃることができます。</div>
          <div class="place-floor">3階: 12:00 〜 12:40</div>
          <div class="place-floor">4階: 11:30 〜 12:10</div>
        </div>
        <div class="place">
          C会場
          <div class="place-floor">1階: 12:30 〜 13:10</div>
          <div class="place-floor">2階: 12:30 〜 13:10</div>
          <div class="place-floor">3階: 12:00 〜 12:40</div>
          <div class="place-floor">4階: 11:30 〜 12:10</div>
        </div>
      </div>
      <div class="content">
        <div class="content-title">
          <div class="content-rectangle" />
          <div class="content-text">父母と先生の会からのお知らせ</div>
        </div>
        <p>
          今年度の文化祭において、開成グッズ販売会は、現下のコロナ感染拡大状況に鑑み、開催致しません。ご了承ください。
        </p>
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
