<template>
  <div>
    <div :class="{ 'header-invisible': !isSun }" class="header">
      <div class="hamburger" @click="change">
        <Hamburger :is-sun="isSun" />
      </div>
      <div v-if="!isSun" class="menu-container">
        <div>
          <div class="menu-item">
            <img class="menu-icon" src="@/static/icon/home.svg" />
            <NuxtLink class="menu-text" to="/">ホーム</NuxtLink>
          </div>
          <div class="menu-item">
            <img class="menu-icon" src="@/static/icon/monitor.svg" />
            <NuxtLink class="menu-text" to="/online/">オンライン企画</NuxtLink>
          </div>
          <!--
          <div class="menu-item">
            <img class="menu-icon" src="@/static/icon/help-circle.svg" />
            <a
              class="menu-text"
              href="/nazotoki/"
              target="_blank"
              rel="noopener noreferrer"
              >謎解き</a
            >
          </div>
          -->
          <div class="menu-item">
            <img class="menu-icon" src="@/static/icon/user.svg" />
            <NuxtLink class="menu-text" to="/mr_ms/"
              >Ms.開成 & Mr.開成</NuxtLink
            >
          </div>
          <div class="menu-item">
            <img class="menu-icon" src="@/static/icon/clock.svg" />
            <NuxtLink class="menu-text" to="/timetable/"
              >タイムテーブル</NuxtLink
            >
          </div>
          <div class="menu-item">
            <img class="menu-icon" src="@/static/icon/alert-circle.svg" />
            <NuxtLink class="menu-text" to="/information/">お知らせ</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hamburger from '@/components/Hamburger'

export default {
  name: 'Header',
  components: { Hamburger },
  data() {
    return {
      isSun: true,
    }
  },
  methods: {
    change() {
      this.isSun = !this.isSun
    },
  },
}
</script>

<style lang="scss" scoped>
$black: #082449;
$dark: #38444d;
$gray: #888888;
$light: #e5e5e5;
$white: #ffffff;
$purple: #611fb6;
$orange: #ff9a70;
$yellow: #fccf5a;

@mixin UD-sin-go-font {
  font-family: a-otf-ud-shin-go-pr6n, sans-serif;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 60px;
  padding: 5px;
  z-index: 100;
  display: flex;
  color: $white;
  background-color: $purple;
}

.header-invisible {
  height: 100vh;
  background-color: #202e87;
}

.hamburger {
  margin: 0px 10px auto auto;
}

.menu-container {
  position: absolute;
  top: 60px;
  left: 0;
  width: 100vw;
  height: calc(100vh - 60px);

  align-items: center;
  justify-content: center;
  z-index: 1;
  display: flex;
  background-color: #202e87;

  .menu-item {
    display: flex;
    z-index: 10;
    margin-bottom: 20px;

    .menu-icon {
      margin-right: 15px;
    }
    .menu-text {
      @include UD-sin-go-font;
      font-size: 24px;
      padding-bottom: 3px;
      color: $white;
    }
    .menu-text:hover {
      color: $yellow;
    }
  }
}
</style>
