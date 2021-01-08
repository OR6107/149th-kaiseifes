<template>
  <div :class="{ 'title-big': isMain, 'title-small': !isMain }" class="title">
    <div class="title-rectangle" />
    <div class="title-text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    isMain: {
      type: Boolean,
      default: true,
    },
    text: {
      type: String,
      default: 'Nothing !!!',
    },
  },
}
</script>

<style scoped lang="scss">
$black: #082449;
$yellow: #fccf5a;

@mixin Didot-font {
  font-family: linotype-didot, serif;
}

.title {
  align-items: center;
  display: flex;
  .title-rectangle {
    background-color: $yellow;
    width: 8px;
  }
  .title-text {
    @include Didot-font;
    color: $black;
  }
}

.title-big {
  margin-top: 90px;
  margin-left: 25px;
  .title-rectangle {
    height: 48px;
    margin-right: 15px;
  }
  .title-text {
    font-size: 40px;
    font-weight: 700;
    padding-bottom: 6px;
  }
}
.title-small {
  margin-top: 20px;
  margin-left: 60px;
  .title-rectangle {
    height: 32px;
    margin-right: 17px;
  }
  .title-text {
    font-weight: 600;
    padding-bottom: 2px;
  }
}

@media screen and (min-width: 900px) {
  .title-small {
    .title-text {
      font-size: 28px;
    }
  }
}
@media screen and (max-width: 900px) {
  .title-big {
    margin-bottom: 40px;
  }
  .title-small {
    margin-left: 25px;
    .title-text {
      font-size: 24px;
      padding-bottom: 2px;
    }
  }
}
</style>
