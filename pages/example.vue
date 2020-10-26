<template>
  <div>
    <h1>Hello! {{ name }}!!!</h1>
    上が赤くなってるのはassetsのmain.scssが効いているから〜
    <div class="container-didot">
      <div class="title">Didot</div>
      <div class="subtitle">blue text</div>
    </div>
    <div class="container-helvetica">
      <div class="title">Helvetica</div>
    </div>
    <div class="container-din">
      <div class="title">DIN</div>
    </div>
    <div class="container-udnewgothic">
      <div class="title">UD新ゴ</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'World',
    }
  },
}
</script>

<style lang="scss" scoped>
$title-size: 100px;

.container-didot {
  font-family: linotype-didot, serif;
  font-style: normal;
  font-weight: normal;

  text-align: center;
  .title {
    font-size: $title-size;
  }
  .subtitle {
    color: blue;
    font-size: 20px;
  }
}

.container-helvetica {
  font-family: neue-haas-grotesk-display, sans-serif;
  font-style: normal;
  font-weight: normal;

  text-align: center;
  .title {
    font-size: $title-size;
  }
}

.container-din {
  font-family: din-2014, sans-serif;
  font-style: normal;
  font-weight: normal;

  text-align: center;
  .title {
    font-size: $title-size;
  }
}

.container-udnewgothic {
  font-family: a-otf-ud-shin-go-pr6n, sans-serif;
  font-style: normal;
  font-weight: normal;

  text-align: center;
  .title {
    font-size: $title-size;
  }
}
</style>
