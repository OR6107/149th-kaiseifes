<template>
  <div>
    <Header />
    <div class="container">
      <Title :is-main="true" :text="'Ms.開成, Mr.開成'" />

      <Title :is-main="false" :text="'コンテンツの複製・転載'" />
      <div class="content">
        <p>
          肖像権・著作権の観点から、いずれのコンテンツにつきましても許可なく複製・転載することを固く禁じます。
        </p>
      </div>

      <Title :is-main="false" :text="'Ms. 開成'" />
      <div class="content">
        <div class="photo-list">
          <div class="yoko photo-item">
            <img
              oncontextmenu="return false;"
              onselectstart="return false;"
              onmousedown="return false;"
              src="@/static/mr_ms/ms_1/1.jpg"
            />
          </div>
          <div class="yoko photo-item">
            <img
              oncontextmenu="return false;"
              onselectstart="return false;"
              onmousedown="return false;"
              src="@/static/mr_ms/ms_1/2.jpg"
            />
          </div>
          <div class="tate photo-item">
            <img
              oncontextmenu="return false;"
              onselectstart="return false;"
              onmousedown="return false;"
              src="@/static/mr_ms/ms_1/3.jpg"
            />
          </div>
          <div class="yoko photo-item">
            <img
              oncontextmenu="return false;"
              onselectstart="return false;"
              onmousedown="return false;"
              src="@/static/mr_ms/ms_1/4.jpg"
            />
          </div>
        </div>
        <div class="photo-name">01 細川朱鈴</div>

        <div class="photo-list">
          <div class="yoko photo-item">
            <img
              oncontextmenu="return false;"
              onselectstart="return false;"
              onmousedown="return false;"
              src="@/static/mr_ms/ms_2/1.jpg"
            />
          </div>
          <div class="tate photo-item">
            <img
              oncontextmenu="return false;"
              onselectstart="return false;"
              onmousedown="return false;"
              src="@/static/mr_ms/ms_2/2.jpg"
            />
          </div>
          <div class="tate photo-item">
            <img
              oncontextmenu="return false;"
              onselectstart="return false;"
              onmousedown="return false;"
              src="@/static/mr_ms/ms_2/3.jpg"
            />
          </div>
          <div class="yoko photo-item">
            <img
              oncontextmenu="return false;"
              onselectstart="return false;"
              onmousedown="return false;"
              src="@/static/mr_ms/ms_2/4.jpg"
            />
          </div>
        </div>
        <div class="photo-name">02 周舞</div>

        <div class="photo-list">
          <div class="yoko photo-item">
            <img
              oncontextmenu="return false;"
              onselectstart="return false;"
              onmousedown="return false;"
              src="@/static/mr_ms/ms_3/1.jpg"
            />
          </div>
          <div class="yoko photo-item">
            <img
              oncontextmenu="return false;"
              onselectstart="return false;"
              onmousedown="return false;"
              src="@/static/mr_ms/ms_3/2.jpg"
            />
          </div>
          <div class="tate photo-item">
            <img
              oncontextmenu="return false;"
              onselectstart="return false;"
              onmousedown="return false;"
              src="@/static/mr_ms/ms_3/3.jpg"
            />
          </div>
          <div class="yoko photo-item">
            <img
              oncontextmenu="return false;"
              onselectstart="return false;"
              onmousedown="return false;"
              src="@/static/mr_ms/ms_3/4.jpg"
            />
          </div>
        </div>
        <div class="photo-name">03 柏村奈央</div>

        <div class="photo-list">
          <div class="tate photo-item">
            <img
              oncontextmenu="return false;"
              onselectstart="return false;"
              onmousedown="return false;"
              src="@/static/mr_ms/ms_4/1.jpg"
            />
          </div>
          <div class="yoko photo-item">
            <img
              oncontextmenu="return false;"
              onselectstart="return false;"
              onmousedown="return false;"
              src="@/static/mr_ms/ms_4/2.jpg"
            />
          </div>
          <div class="tate photo-item">
            <img
              oncontextmenu="return false;"
              onselectstart="return false;"
              onmousedown="return false;"
              src="@/static/mr_ms/ms_4/3.jpg"
            />
          </div>
          <div class="yoko photo-item">
            <img
              oncontextmenu="return false;"
              onselectstart="return false;"
              onmousedown="return false;"
              src="@/static/mr_ms/ms_4/4.jpg"
            />
          </div>
        </div>
        <div class="photo-name">04 夢咲楓</div>

        <div class="photo-list">
          <div class="tate photo-item">
            <img
              oncontextmenu="return false;"
              onselectstart="return false;"
              onmousedown="return false;"
              src="@/static/mr_ms/ms_5/1.jpg"
            />
          </div>
          <div class="yoko photo-item">
            <img
              oncontextmenu="return false;"
              onselectstart="return false;"
              onmousedown="return false;"
              src="@/static/mr_ms/ms_5/2.jpg"
            />
          </div>
          <div class="tate photo-item">
            <img
              oncontextmenu="return false;"
              onselectstart="return false;"
              onmousedown="return false;"
              src="@/static/mr_ms/ms_5/3.jpg"
            />
          </div>
          <div class="yoko photo-item">
            <img
              oncontextmenu="return false;"
              onselectstart="return false;"
              onmousedown="return false;"
              src="@/static/mr_ms/ms_5/4.jpg"
            />
          </div>
        </div>
        <div class="photo-name">05 山本有紗</div>
      </div>

      <Title :is-main="false" :text="'Mr. 開成'" />
      <div class="content">
        <div class="photo-list">
          <div class="tate photo-item">
            <img
              oncontextmenu="return false;"
              onselectstart="return false;"
              onmousedown="return false;"
              src="@/static/mr_ms/mr_1/1.jpg"
            />
          </div>
          <div class="yoko photo-item">
            <img
              oncontextmenu="return false;"
              onselectstart="return false;"
              onmousedown="return false;"
              src="@/static/mr_ms/mr_1/2.jpg"
            />
          </div>
          <div class="tate photo-item">
            <img
              oncontextmenu="return false;"
              onselectstart="return false;"
              onmousedown="return false;"
              src="@/static/mr_ms/mr_1/3.jpg"
            />
          </div>
          <div class="tate photo-item">
            <img
              oncontextmenu="return false;"
              onselectstart="return false;"
              onmousedown="return false;"
              src="@/static/mr_ms/mr_1/4.jpg"
            />
          </div>
        </div>
        <div class="photo-name">01 引田尚希</div>

        <div class="photo-list">
          <div class="tate photo-item">
            <img
              oncontextmenu="return false;"
              onselectstart="return false;"
              onmousedown="return false;"
              src="@/static/mr_ms/mr_2/1.jpg"
            />
          </div>
          <div class="yoko photo-item">
            <img
              oncontextmenu="return false;"
              onselectstart="return false;"
              onmousedown="return false;"
              src="@/static/mr_ms/mr_2/2.jpg"
            />
          </div>
          <div class="yoko photo-item">
            <img
              oncontextmenu="return false;"
              onselectstart="return false;"
              onmousedown="return false;"
              src="@/static/mr_ms/mr_2/3.jpg"
            />
          </div>
          <div class="yoko photo-item">
            <img
              oncontextmenu="return false;"
              onselectstart="return false;"
              onmousedown="return false;"
              src="@/static/mr_ms/mr_2/4.jpg"
            />
          </div>
        </div>
        <div class="photo-name">02 千葉恒輝</div>

        <div class="photo-list">
          <div class="yoko photo-item">
            <img
              oncontextmenu="return false;"
              onselectstart="return false;"
              onmousedown="return false;"
              src="@/static/mr_ms/mr_3/1.jpg"
            />
          </div>
          <div class="yoko photo-item">
            <img
              oncontextmenu="return false;"
              onselectstart="return false;"
              onmousedown="return false;"
              src="@/static/mr_ms/mr_3/2.jpg"
            />
          </div>
          <div class="yoko photo-item">
            <img
              oncontextmenu="return false;"
              onselectstart="return false;"
              onmousedown="return false;"
              src="@/static/mr_ms/mr_3/3.jpg"
            />
          </div>
          <div class="yoko photo-item">
            <img
              oncontextmenu="return false;"
              onselectstart="return false;"
              onmousedown="return false;"
              src="@/static/mr_ms/mr_3/4.jpg"
            />
          </div>
        </div>
        <div class="photo-name">03 後藤大輝</div>

        <div class="photo-list">
          <div class="tate photo-item">
            <img
              oncontextmenu="return false;"
              onselectstart="return false;"
              onmousedown="return false;"
              src="@/static/mr_ms/mr_4/1.jpg"
            />
          </div>
          <div class="yoko photo-item">
            <img
              oncontextmenu="return false;"
              onselectstart="return false;"
              onmousedown="return false;"
              src="@/static/mr_ms/mr_4/2.jpg"
            />
          </div>
          <div class="yoko photo-item">
            <img
              oncontextmenu="return false;"
              onselectstart="return false;"
              onmousedown="return false;"
              src="@/static/mr_ms/mr_4/3.jpg"
            />
          </div>
          <div class="tate2 photo-item">
            <img
              oncontextmenu="return false;"
              onselectstart="return false;"
              onmousedown="return false;"
              src="@/static/mr_ms/mr_4/4.jpg"
            />
          </div>
        </div>
        <div class="photo-name">04 後藤雅稀</div>

        <div class="photo-list">
          <div class="tate photo-item">
            <img
              oncontextmenu="return false;"
              onselectstart="return false;"
              onmousedown="return false;"
              src="@/static/mr_ms/mr_5/1.jpg"
            />
          </div>
          <div class="tate photo-item">
            <img
              oncontextmenu="return false;"
              onselectstart="return false;"
              onmousedown="return false;"
              src="@/static/mr_ms/mr_5/2.jpg"
            />
          </div>
          <div class="tate photo-item">
            <img
              oncontextmenu="return false;"
              onselectstart="return false;"
              onmousedown="return false;"
              src="@/static/mr_ms/mr_5/3.jpg"
            />
          </div>
          <div class="tate3 photo-item">
            <img
              oncontextmenu="return false;"
              onselectstart="return false;"
              onmousedown="return false;"
              src="@/static/mr_ms/mr_5/4.jpg"
            />
          </div>
        </div>
        <div class="photo-name">05 鎌仲義紀</div>

        <div class="photo-list">
          <div class="square photo-item">
            <img
              oncontextmenu="return false;"
              onselectstart="return false;"
              onmousedown="return false;"
              src="@/static/mr_ms/mr_6/1.jpg"
            />
          </div>
          <div class="square photo-item">
            <img
              oncontextmenu="return false;"
              onselectstart="return false;"
              onmousedown="return false;"
              src="@/static/mr_ms/mr_6/2.jpg"
            />
          </div>
          <div class="square photo-item">
            <img
              oncontextmenu="return false;"
              onselectstart="return false;"
              onmousedown="return false;"
              src="@/static/mr_ms/mr_6/3.jpg"
            />
          </div>
          <div class="square photo-item">
            <img
              oncontextmenu="return false;"
              onselectstart="return false;"
              onmousedown="return false;"
              src="@/static/mr_ms/mr_6/4.jpg"
            />
          </div>
        </div>
        <div class="photo-name">06 片岡孝介</div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header'
import Title from '@/components/Title'
import Footer from '@/components/Footer'

export default {
  name: 'MrMs',
  components: { Header, Title, Footer },
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
  margin-top: 10px;
  margin-bottom: 60px;

  .place {
    font-size: 24px;
    margin-top: 10px;
    margin-left: 45px;

    .place-floor {
      font-size: 20px;
      margin-left: 20px;
    }
  }

  p {
    color: $black;
    font-size: 20px;
    margin-left: 45px;
    margin-right: 20px;
  }

  a {
    font-size: 20px;
    color: $black;
  }

  a:hover {
    color: $yellow;
  }
}

.photo-list {
  display: flex;
  flex-wrap: wrap;
  margin: 5px 10px 5px 10px;
  .yoko {
    height: 160px;
    width: 240px;
    img {
      height: 160px;
      width: 240px;
    }
  }
  .tate {
    height: 240px;
    width: 160px;
    img {
      height: 240px;
      width: 160px;
    }
  }
  .tate2 {
    height: 240px;
    width: 180px;
    img {
      height: 240px;
      width: 180px;
    }
  }
  .tate3 {
    height: 240px;
    width: 135px;
    img {
      height: 240px;
      width: 135px;
    }
  }
  .square {
    height: 195px;
    width: 195px;
    img {
      height: 195px;
      width: 195px;
    }
  }

  .photo-item {
    margin-top: 10px;
    margin-right: 20px;
  }
}
.photo-name {
  font-size: 20px;
  margin-bottom: 30px;
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
