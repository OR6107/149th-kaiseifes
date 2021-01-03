<template>
  <div>
    <Header />
    <div class="container">
      <Title :is-main="true" :text="'ご案内'" />

      <Title :is-main="false" :text="'ご来場にあたり'" />
      <div class="content">
        <p>
          パンフレット p.2 <br />
          ほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげ
        </p>
      </div>

      <Title :is-main="false" :text="'ご案内'" />
      <div class="content">
        <p>
          パンフレット p.8 <br />
          ほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげ
        </p>
      </div>

      <Title :is-main="false" :text="'感染症対策'" />
      <div class="content">
        <p>
          パンフレット p.9 <br />
          ほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげ
        </p>
      </div>

      <Title :is-main="false" :text="'有事の際は'" />
      <div class="content">
        <p>
          パンフレット p.9 <br />
          ほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげ
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header'
import Title from '@/components/Title'

export default {
  name: 'Information',
  components: { Header, Title },
}
</script>

<style scoped lang="scss">
$black: #082449;
$white: #ffffff;
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

.content {
  @include Didot-font();
  margin-bottom: 20px;
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
    margin-right: 20px;
  }
}

@media screen and (min-width: 900px) {
  .content {
    margin-left: 60px;
  }
}

@media screen and (max-width: 900px) {
  .content {
    margin-left: 25px;
  }
}
</style>
