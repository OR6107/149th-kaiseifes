<template>
  <div
    class="frame-container"
    v-on="{ mousedown: mousedown, mouseup: mouseup }"
    @click="change"
  >
    <div
      class="frame frame-basic"
      :class="{ border: hoge, 'frame-pressed': pressing }"
    >
      <InfoButton class="button" :is-closed="hoge" />
      <img class="thumbnail" src="logo_red.svg" />
      <div class="place">{{ place }}</div>
      <div class="title">{{ name }}</div>
    </div>

    <div
      v-show="!hoge"
      class="frame frame-detail"
      :class="{ border: !hoge, 'frame-pressed': pressing }"
    >
      <div class="screenshot">
        <img v-if="pictureUrl !== ''" :src="pictureUrl" />
      </div>
      <a v-if="contentUrl !== ''" :href="contentUrl"> Link: {{ urlText }} </a>
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
  name: 'SandanCardOnLine',
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
    pictureUrl: {
      type: String,
      default: '',
    },
    contentUrl: {
      type: String,
      default: '',
    },
    contentUrlText: {
      type: String,
      default: '',
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
      urlText: '',
    }
  },
  mounted() {
    this.fillInfo()
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
    fillInfo() {
      if (this.contentUrl !== '') {
        if (this.contentUrlText !== '') this.urlText = this.contentUrlText
        else {
          this.urlText = this.contentUrl.substring(
            this.contentUrl.lastIndexOf('/') + 1
          )
        }
      }
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

.frame {
  width: 340px;
  position: relative;
  background-color: $white;
  @include UD-sin-go-font;
  color: $black;
}

.frame-basic {
  height: 100px;
  display: flex;
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
  margin-top: -20px;

  .screenshot {
    margin: 5px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      border: 1px solid $black;
      width: 240px;
      height: 160px;
    }
  }
  a {
    margin-top: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: $black;
  }
  a:hover {
    color: $yellow;
  }

  .content-title {
    margin: 8px auto auto 15px;
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
    margin: 0 auto 5px 30px;
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
