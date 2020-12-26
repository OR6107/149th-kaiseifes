<template>
  <div>
    <Header />
    <div class="container">
      <div class="title">
        <div class="title-rectangle" />
        <div class="title-text">訂正一覧</div>
      </div>

      <div class="content">
        <div class="content-title">
          <div class="content-rectangle" />
          <div class="content-text">開催取り消し</div>
        </div>
        <p>模擬店</p>
        <p>喫茶</p>
        <p>クイズ研究部 (A401)</p>
        <p>Let’s talk Kaisei (A403)</p>
        <p>KCG (A407)</p>
        <p>サラブレッド研究同好会 (B311)</p>
      </div>

      <div class="content">
        <div class="content-title">
          <div class="content-rectangle" />
          <div class="content-text">規模拡大 + 場所移動</div>
        </div>
        <p>大道芸、自由自在。 (A305 → A204)</p>
        <p>VS 開成生 (B305 → A4??)</p>
        <p>ソフィーの碁 (B307 → A4??)</p>
      </div>

      <div class="content">
        <div class="content-title">
          <div class="content-rectangle" />
          <div class="content-text">規模拡大</div>
        </div>
        <p>まったり TRPG 広場 (A305)</p>
        <p>UPDATE (B305)</p>
        <p>飛車ちゅうの成人式！ (B307)</p>
        <p>NeXUS Next (B311)</p>
      </div>

      <div class="content">
        <div class="content-title">
          <div class="content-rectangle" />
          <div class="content-text">場所移動</div>
        </div>
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
