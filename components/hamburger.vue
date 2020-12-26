<template>
  <div>
    <div v-if="isSun" class="sun" @click="change">
      <div class="sun-circle">
        <div class="sun-stick1" />
        <div class="sun-stick2" />
        <div class="sun-stick3" />
        <div class="sun-stick4" />
      </div>
    </div>
    <div v-else class="moon" @click="change">
      <div class="moon-circle">
        <div class="moon-stick1" />
        <div class="moon-stick2" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hamburger',
  data() {
    return {
      isSun: true,
    }
  },
  methods: {
    change () {
      this.isSun = !this.isSun
    },
  },
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
    top: (36px - 5px) / 2;
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
</style>
