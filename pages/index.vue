<template>
  <div>
    <Header />
    <div class="container">
      <div class="title">
        <img src="../static/logo_red.svg" />
        <div class="twilight">Twilight</div>
      </div>
      <div class="when">
        <div class="when-title">開催日時</div>
        <ul class="date">
          <li><div class="date-text">2021.01.09(土) 09:00 ~ 17:00</div></li>
          <li><div class="date-text">2021.01.10(日) 09:00 ~ 16:30</div></li>
        </ul>
        <div class="coming-soon">Coming Soon ...</div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header'

export default {
  name: 'Index',
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

@mixin center {
  align-items: center;
  justify-content: center;
  text-align: center;
}

@mixin Didot-font {
  font-family: linotype-didot, serif;
}

@mixin UD-sin-go-font {
  font-family: a-otf-ud-shin-go-pr6n, sans-serif;
}

.container {
  display: flex;
  align-items: center;
  background: $white;
}

.title {
  @include center();
  @include Didot-font();
  width: calc(min(1vw, 2vh) * 45);
  margin-top: calc((100vh - calc(min(1vw, 2vh) * (42.5 - 4.5 + 5 + 5 + 10))) / 2);
  margin-left: 5vw;
  img {
    height: calc(min(1vw, 2vh) * 42.5);
    width: calc(min(1vw, 2vh) * 42.5);
  }
  .twilight {
    margin-top: calc(min(1vw, 2vh) * -4.5);
    padding-right: calc(min(1vw, 2vh) * 1.5);
    line-height: calc(min(1vw, 2vh) * 5);
    font-size: calc(min(1vw, 2vh) * 5);
    color: $black;
  }
}

.when {
  @include center();
  @include UD-sin-go-font();
  width: calc(min(1vw, 2vh) * 40);
  margin-top: calc((100vh - calc(min(1vw, 2vh) * (3.5 + 5 + 2.5 + 4.2 + 4 + 5.3))) / 2);
  margin-left: auto;
  margin-right: 5vw;
  .when-title {
    margin-right: calc(min(1vw, 2vh) * 2.5);
    font-size: calc(min(1vw, 2vh) * 3.5);
    line-height: calc(min(1vw, 2vh) * 5);
    color: $black;
  }
  .date {
    text-align: center;
    font-size: calc(min(1vw, 2vh) * 2.5);
    line-height: calc(min(1vw, 2vh) * 4.2);
    color: $yellow;
    .date-text {
      margin-left: calc(min(1vw, 2vh) * -5);
      color: $black;
    }
  }
  .coming-soon {
    @include Didot-font();
    margin-top: calc(min(1vw, 2vh) * 8);
    margin-bottom: calc(min(1vw, 2vh) * 5);
    margin-right: calc(min(1vw, 2vh) * 2.5);
    font-size: calc(min(1vw, 2vh) * 4);
    line-height: calc(min(1vw, 2vh) * 5.3);
    color: $black;
  }
}
</style>
