<template>
  <div>
    <div :class="{ 'header-invisible': !isSun }" class="header">
      <div class="hamburger">
        <div :class="{ sun: isSun, moon: !isSun }" @click="change">
          <div :class="{ 'sun-circle': isSun, 'moon-circle': !isSun }">
            <div :class="{ 'sun-stick1': isSun, 'moon-stick1': !isSun }" />
            <div :class="{ 'sun-stick2': isSun, 'moon-stick2': !isSun }" />
            <div :class="{ 'sun-stick3': isSun, invisible: !isSun }" />
            <div :class="{ 'sun-stick4': isSun, invisible: !isSun }" />
          </div>
        </div>
      </div>

      <div v-if="!isSun" class="menu-container">
        <div>
          <div class="menu-item">
            <img class="menu-icon" src="icon/home.svg" />
            <a class="menu-text" href="../">ホーム</a>
          </div>
          <div class="menu-item">
            <img class="menu-icon" src="icon/alert-circle.svg" />
            <a class="menu-text" href="information">詳細情報</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
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

@mixin stick() {
  height: 5px;
  border-radius: 2.5px;
  position: relative;
}

@mixin sunshine() {
  @include stick();
  width: 50px;
  left: (36px - 50px) / 2;
  background: $orange;
}

@mixin UD-sin-go-font {
  font-family: a-otf-ud-shin-go-pr6n, sans-serif;
}

.sun {
  width: 50px;
  height: 50px;
  display: flex;
  .sun-circle {
    width: 36px;
    height: 36px;
    margin: auto;
    border-radius: 50%;
    position: static;
    background-color: $orange;
  }
  .sun-stick1 {
    @include sunshine();
    top: calc(50% - 2.5px);
  }
  .sun-stick2 {
    @include sunshine;
    top: 10px;
    transform: rotate(45deg);
  }
  .sun-stick3 {
    @include sunshine;
    top: 5.2px;
    transform: rotate(90deg);
  }
  .sun-stick4 {
    @include sunshine;
    transform: rotate(135deg);
  }
}

.moon {
  width: 50px;
  height: 50px;
  display: flex;
  .moon-circle {
    width: 40px;
    height: 40px;
    margin: auto;
    border-radius: 50%;
    position: static;
    background-color: $yellow;
  }
  .moon-stick1 {
    @include stick;
    width: 28px;
    top: 18px;
    left: (40px - 28px) / 2;
    transform: rotate(45deg);
    background-color: $gray;
  }
  .moon-stick2 {
    @include stick;
    width: 28px;
    top: 13px;
    left: (40px - 28px) / 2;
    transform: rotate(135deg);
    background-color: $gray;
  }
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 60px;
  padding: 5px;
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

.invisible {
  display: none;
}
</style>
