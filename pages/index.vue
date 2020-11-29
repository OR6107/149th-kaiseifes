<template>
  <div class="container">
    <div class="menu">
      <div class="Rectangle17"></div>
    </div>
    <div class="logo"></div>
    <div class="twilight">Twilight</div>
    <div class="Ellipse3"></div>
    <div class="Ellipse4"></div>
    <div class="when">
      開催日時
      <br />
      2021.01.09(土)09:00〜17:00
      <br />
      2021.01.10(日)09:00〜16:30
    </div>
    <div class="coming-soon">Coming Soon...</div>
  </div>
</template>
<script>
import Logo from '~/components/Logo.vue'
export default {
  components: {
    Logo,
  },
}
</script>
<style>
/*フォントはUD新ゴ*/
.container {
  position: relative;
  width: 1440px;
  height: 1024px;

  /* White */
  background: #ffffff;
}

.logo {
  position: absolute;
  width: 825px;
  height: 808px;
  left: -25px;
  top: 75px;

  background: url(logo-red.svg);
  background-blend-mode: darken;
}

.when {
  position: absolute;
  width: 675px;
  height: 214px;
  left: 765px;
  top: 387px;

  font-family: a-otf-ud-shin-go-pr6n, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 42px; /*48pxだったが途中で改行されてしまうため変更*/
  line-height: 71px;
  text-align: center;

  /* Black */
  color: #082449;
}
.coming-soon {
  position: absolute;
  width: 603px;
  height: 109px;
  left: 786px;
  top: 735px;

  font-family: a-otf-ud-shin-go-pr6n, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 72px;
  line-height: 106px;
  text-align: center;

  /* Black */
  color: #082449;
}

.twilight {
  position: absolute;
  width: 380px;
  height: 142px;
  left: 191px;
  top: 790px;

  font-family: a-otf-ud-shin-go-pr6n, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 96px;
  line-height: 142px;
  /* identical to box height */

  /* Black */
  color: #082449;
}

.Ellipse4 {
  position: absolute;
  width: 20px;
  height: 20px;
  left: 750px;
  top: 555px;

  /* Yellow */
  background: #fccf5a;
}

.Ellipse3 {
  position: absolute;
  width: 20px;
  height: 20px;
  left: 750px;
  top: 487px;

  /* Yellow */
  background: #fccf5a;
}

.menu {
  position: absolute;
  width: 1440px;
  height: 60px;
  left: 0px;
  top: 0px;
}

.Rectangle17 {
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;

  /* Purple */
  background: #611fb6;
}

. menulist {
  /*menulistは非表示*/
  position: absolute;
  visibility: hidden;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;

  font-family: a-otf-ud-shin-go-pr6n, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 53px;
  display: flex;
  align-items: center;
  text-align: center;

  /* White */
  color: #ffffff;
}
</style>
