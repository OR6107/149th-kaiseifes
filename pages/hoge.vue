<template>
  <div>
    <h1>Hello! Mr. {{ name }}!!!</h1>
    上が赤くなってるのはassetsのmain.scssが効いているから
    <div class="container">
      <div class="title">huge text</div>
      <div class="subtitle">blue text</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Hoge',
    }
  },
}
</script>

<style lang="scss" scoped>
$title-size: 100px;

.container {
  text-align: center;
  .title {
    font-size: $title-size;
  }
  .subtitle {
    color: blue;
  }
}
</style>
