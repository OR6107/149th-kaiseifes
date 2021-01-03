<template>
  <div
    class="frame-container"
    v-on="{ mousedown: mousedown, mouseup: mouseup }"
    @click="change"
  >
    <div
      class="frame-basic"
      :class="{ border: hoge, 'frame-pressed': pressing }"
    >
      <InfoButton class="button" :is-closed="hoge" />
      <img class="thumbnail" src="logo_red.svg" />
      <div class="place">{{ place }}</div>
      <div class="title">{{ name }}</div>
    </div>

    <div
      v-show="!hoge"
      class="frame-detail"
      :class="{ border: !hoge, 'frame-pressed': pressing }"
    >
      <div class="content-title">
        <div class="content-rectangle" />
        <div class="content-text">この企画について</div>
      </div>
      <div class="detail">{{ description }}</div>
    </div>
  </div>
</template>

<script>
import InfoButton from '@/components/InfoButton'

export default {
  name: 'SandanCard',
  components: { InfoButton },
  props: {
    name: {
      type: String,
      default: 'Invalid!!!',
    },
    place: {
      type: String,
      default: 'Invalid!!!',
    },
    description: {
      type: String,
      default: 'Invalid!!!',
    },
  },
  data() {
    return {
      hoge: true,
      pressing: false,
    }
  },
  methods: {
    change() {
      this.hoge = !this.hoge
    },
    mousedown() {
      this.pressing = true
    },
    mouseup() {
      this.pressing = false
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

@mixin UD-sin-go-font {
  font-family: a-otf-ud-shin-go-pr6n, sans-serif;
}

.frame-basic {
  width: 340px;
  height: 100px;
  display: flex;
  background-color: $white;
  position: relative;
  @include UD-sin-go-font;
  color: $black;
  font-size: 18px;

  .button {
    position: absolute;
    top: 10px;
    left: 290px;
  }
  .thumbnail {
    position: absolute;
    top: 20px;
    left: 10px;
    width: 60px;
    height: 60px;
  }
  .place {
    position: absolute;
    top: 20px;
    left: 80px;
  }
  .title {
    position: absolute;
    top: 55px;
    left: 80px;
  }
}

.frame-detail {
  width: 340px;
  height: 100px;
  position: relative;
  background-color: $white;
  @include UD-sin-go-font;
  color: $black;
  font-size: 18px;

  .content-title {
    position: absolute;
    top: -15px;
    left: 15px;
    display: flex;
    align-items: center;
    .content-rectangle {
      background-color: $yellow;
      width: 8px;
      height: 28px;
      margin-right: 6px;
    }
    .content-text {
      font-size: 16px;
      padding-bottom: 2px;
    }
  }

  .detail {
    position: absolute;
    top: 10px;
    left: 30px;
    font-size: 14px;
    line-height: 1.5em;
  }
}

.frame-container {
  width: 340px;
}

.frame-pressed {
  background-color: $light;
}

.border {
  border-bottom: 2px solid $orange;
}
</style>
