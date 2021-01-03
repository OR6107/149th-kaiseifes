<template>
  <div>
    <Header />
    <div class="container">
      <Title :is-main="true" :text="'Ms.開成, Mr.開成 投票'" />

      <Title :is-main="false" :text="'Ms. 開成'" />
      <div class="content">
        <a class="vote" href="https://forms.gle/1mLFvY6QuxSRXsm18"
          >投票はこちらから！</a
        >
        <div class="photo-list">
          <div class="photo-item">
            <img class="tate" src="@/static/mr_ms/ms_1.jpeg" />
            <div class="photo-name">01 細川朱鈴</div>
          </div>
          <div class="photo-item">
            <img class="yoko" src="@/static/mr_ms/ms_2.jpeg" />
            <div class="photo-name">02 周舞</div>
          </div>
          <div class="photo-item">
            <img class="yoko" src="@/static/mr_ms/ms_3.jpeg" />
            <div class="photo-name">03 柏村奈央</div>
          </div>
          <div class="photo-item">
            <img class="tate" src="@/static/mr_ms/ms_4.jpeg" />
            <div class="photo-name">04 夢咲楓</div>
          </div>
          <div class="photo-item">
            <img class="tate" src="@/static/mr_ms/ms_5.PNG" />
            <div class="photo-name">05 山本有</div>
          </div>
        </div>
      </div>

      <Title :is-main="false" :text="'Mr. 開成'" />
      <div class="content">
        <a class="vote" href="https://forms.gle/S61CJhmCjKAoje6WA"
          >投票はこちらから！</a
        >
        <div class="photo-list">
          <div class="photo-item">
            <img class="yoko" src="@/static/mr_ms/mr_1.jpeg" />
            <div class="photo-name">01 引田尚希</div>
          </div>
          <div class="photo-item">
            <img class="yoko" src="@/static/mr_ms/mr_2.jpeg" />
            <div class="photo-name">02 千葉恒輝</div>
          </div>
          <div class="photo-item">
            <img class="yoko" src="@/static/mr_ms/mr_3.jpeg" />
            <div class="photo-name">03 後藤大輝</div>
          </div>
          <div class="photo-item">
            <img class="tate" src="@/static/mr_ms/mr_4.jpeg" />
            <div class="photo-name">04 後藤雅稀</div>
          </div>
          <div class="photo-item">
            <img class="tate" src="@/static/mr_ms/mr_5.jpeg" />
            <div class="photo-name">05 鎌仲義紀</div>
          </div>
          <div class="photo-item">
            <img class="tate2" src="@/static/mr_ms/mr_6.jpeg" />
            <div class="photo-name">06 片岡孝介</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header'
import Title from '@/components/Title'

export default {
  name: 'MrMs',
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
  margin-top: 10px;
  margin-bottom: 60px;
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
    color: $black;
  }
  a:hover {
    color: $yellow;
  }
}

.photo-list {
  .photo-item {
    display: inline-grid;
    margin-top: 10px;
    margin-right: 20px;
    .photo-name {
      font-size: 20px;
    }
    .yoko {
      height: 160px;
      width: 240px;
    }
    .tate {
      height: 240px;
      width: 160px;
    }
    .tate2 {
      height: 225px;
      width: 175px;
    }
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
  .photo-list {
    width: 240px;
    .photo-item {
      padding-bottom: 15px;
    }
  }
}
</style>
