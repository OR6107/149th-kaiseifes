<template>
  <div>
    <Header />
    <div class="container">
      <Title :is-main="true" :text="'詳細情報'" />

      <Title :is-main="false" :text="'タイムテーブル (実演参加団体, バンド)'" />
      <div class="content">
        <a href="../kaiseifes-timetable.pdf">ダウンロード</a>
      </div>

      <Title :is-main="false" :text="'講演会'" />
      <div class="content">
        <a href="../kaiseifes-lecture.pdf">ダウンロード</a>
      </div>

      <Title :is-main="false" :text="'ペン剣ゼミ'" />
      <div class="content">
        <a href="../kaiseifes-penken-seminar.pdf">ダウンロード</a>
      </div>

      <Title :is-main="false" :text="'開成ツアー'" />
      <div class="content">
        <a href="../kaiseifes-tour.pdf">ダウンロード</a>
      </div>

      <Title :is-main="false" :text="'昼食時間'" />
      <div class="content">
        <p>該当する時間帯は、フロアの全参加団体が閉鎖となります。</p>
        <div class="place">
          A会場
          <div class="place-floor">
            1階: どの時間でもいらっしゃることができます。
          </div>
          <div class="place-floor">2階: 12:30 〜 13:10 (古本市を除く)</div>
          <div class="place-floor">3階: 12:00 〜 12:40</div>
          <div class="place-floor">4階: 11:30 〜 12:10</div>
        </div>
        <div class="place">
          B会場
          <div class="place-floor">
            1階: どの時間でもいらっしゃることができます。
          </div>
          <div class="place-floor">
            2階: どの時間でもいらっしゃることができます。
          </div>
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

      <Title :is-main="false" :text="'父母と先生の会からのお知らせ'" />
      <div class="content">
        <p>
          今年度の文化祭において、開成グッズ販売会は、現下のコロナ感染拡大状況に鑑み、開催致しません。ご了承ください。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header'
import Title from '@/components/Title'

export default {
  name: 'Limitedtime',
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
