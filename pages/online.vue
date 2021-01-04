<template>
  <div class="container">
    <Header />
    <Title :is-main="true" :text="'オンライン企画'" />

    <div class="search">
      <div class="search-items">
        <div class="search-items-1">
          <div
            :class="{ selected: (search_category & (1 << 0)) > 0 }"
            class="search-item"
            @click="search_category ^= 1 << 0"
          >
            YouTube
          </div>
          <div
            :class="{ selected: (search_category & (1 << 1)) > 0 }"
            class="search-item"
            @click="search_category ^= 1 << 1"
          >
            Zoom
          </div>
        </div>
        <div class="search-items-2">
          <div
            :class="{ selected: (search_category & (1 << 2)) > 0 }"
            class="search-item"
            @click="search_category ^= 1 << 2"
          >
            Cluster
          </div>
          <div
            :class="{ selected: (search_category & (1 << 3)) > 0 }"
            class="search-item"
            @click="search_category ^= 1 << 3"
          >
            配布物 (PDF)
          </div>
        </div>
      </div>
      <div class="search-text">
        <img src="@/static/icon/search.svg" />
        <div class="search-input">
          <input
            v-model="search_text"
            type="text"
            placeholder="例: A会場, グラウンド, 2階, ◯◯部"
          />
        </div>
      </div>
    </div>

    <div class="card-container">
      <div class="card-list">
        <Card
          v-for="project in show_projects_1"
          :key="project.id"
          :name="project.name"
          :place="project.place"
          :picture-url="project.pictureUrl"
          :content-url="project.contentUrl"
          :description="project.description"
        />
      </div>
      <div v-if="width >= 900" class="card-list">
        <Card
          v-for="project in show_projects_2"
          :key="project.id"
          :name="project.name"
          :place="project.place"
          :picture-url="project.pictureUrl"
          :content-url="project.contentUrl"
          :description="project.description"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header'
import Card from '@/components/SandanCardOnline'
import Title from '@/components/Title'

export default {
  name: 'Online',
  components: { Header, Card, Title },
  data() {
    return {
      search_text: '',
      search_category: 31,
      width: 1000,
      height: 1000,
      projects: [
        {
          id: 74,
          name: 'Letʼs talk Kaisei',
          place: 'Zoom',
          type: 31,
          pictureUrl: 'i.svg',
          contentUrl: 'https://www.google.com/',
          description:
            '開成生とお話がしたい小中高生の方へ！普段の生活、部活動、入試など、あなたの質問にZoom で開成生が答えます。さあ、お気軽に開成生と Letʼs talk ！',
        },
        {
          id: 75,
          name: 'カードゲームの夜',
          place: 'PDF, ?',
          type: 31,
          contentUrl: 'hoge',
          description:
            '今年もカードゲームの夜が文化祭に参戦。オリジナルカードゲームからマニアックな記事まで作りました。オンラインにてひっそりと営業中。',
        },
        {
          id: 76,
          name: 'まったり TRPG 広場',
          place: '?',
          type: 31,
          pictureUrl: 'i.svg',
          description:
            'インターネット上の機能を最大限活用し、経験者の方も、初めての方も TRPG を楽しんでいただけるようになっております。是非お越しください！',
        },
        {
          id: 77,
          name: '開成ピアノの会定期演奏会',
          place: 'YouTube (?)',
          type: 31,
          description:
            '「開成ピアノの会」のメンバーが、ピアノ曲をオンラインでお届けします！クラシックを中心に披露させていただきます！ぜひお聞きください！',
        },
        {
          id: 78,
          name: '開成管弦楽団特別演奏会',
          place: 'YouTube',
          type: 31,
          description:
            '部員による「花のワルツ」の演奏や、音楽部と合同の「パリのアメリカ人」アンサンブルの動画を公開します！開成管弦楽団によるクラシック音楽をオンラインの世界でも！',
        },
        {
          id: 79,
          name: '開成書道展',
          place: 'PDF',
          type: 31,
          description:
            '書道部員が丹精込めて書いた作品をオンラインでご覧いただけます。文化祭に行かないと見れない作品を是非お気軽にスマホなどで お楽しみください！',
        },
        {
          id: 80,
          name: '大道芸、自由自在。',
          place: 'YouTube',
          type: 31,
          description:
            '"今年のパフォーマンスはとにかく凄い！様々な道具をまさに "" 自由自在 "" に操る演技で、皆様の心をつかんで見せます！是非ご覧ください！"',
        },
        {
          id: 81,
          name: '天道流合気道',
          place: 'YouTube',
          type: 31,
          description: '知られざる合気道の魅力・美しさを。',
        },
        {
          id: 82,
          name: '飛べない蝉',
          place: 'YouTube',
          type: 31,
          description:
            '分かりづらい名前ですいません、水泳部です。水泳部には 120 年以上の歴史があります。普段の部活動や合宿の映像紹介をやっていますので、是非いらして下さい！',
        },
        {
          id: 83,
          name: '飛車ちゅうの成人式！',
          place: 'PDF',
          type: 31,
          description:
            '将棋部ではお客様との対局を行っています。初心者の方も腕利きの方も大歓迎です！また、他校との対抗戦や部誌のオンライン公開もしています。是非お越しください。',
        },
        {
          id: 84,
          name: '物理部',
          place: 'YouTube',
          type: 31,
          description:
            '物理部員が電子ゲームや高電圧実験を自作する様子を動画にまとめました。',
        },
        {
          id: 85,
          name: '数学研究部',
          place: 'PDF',
          type: 31,
          description:
            '今年はオンラインでの参加となりますが、更にレベルの上がったGPや入試予想問題が君を待っています。部員一同盛り上げてまいりますので、是非一度お越しください！',
        },
      ],
      show_projects_1: [],
      show_projects_2: [],
    }
  },
  watch: {
    search_category(_, __) {
      this.searchProject()
    },
    search_text(_, __) {
      this.searchProject()
    },
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
    this.searchProject()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      if (process.browser) {
        this.width = window.innerWidth
        this.height = window.innerHeight
      }
    },
    searchProject() {
      const newText = this.search_text
      const ret = []

      for (let i = 0; i < this.projects.length; i++) {
        if (newText && newText !== '') {
          if (
            ('name' in this.projects[i] &&
              this.projects[i].name.includes(newText)) ||
            ('place' in this.projects[i] &&
              this.projects[i].place.includes(newText)) ||
            ('description' in this.projects[i] &&
              this.projects[i].description.includes(newText))
          ) {
            if ((this.search_category & this.projects[i].type) === 0) continue
            ret.push(this.projects[i])
          }
        } else {
          ret.push(this.projects[i])
        }
      }

      if (this.width < 900) this.show_projects_1 = ret
      else {
        const ret1 = []
        const ret2 = []
        for (let i = 0; i < ret.length; i++) {
          if (i % 2 === 0) ret1.push(ret[i])
          if (i % 2 === 1) ret2.push(ret[i])
        }
        this.show_projects_1 = ret1
        this.show_projects_2 = ret2
      }
    },
  },
}
</script>

<style scoped lang="scss">
$black: #082449;
$white: #ffffff;
$orange: #ff9a70;
$yellow: #fccf5a;

@mixin Didot-font {
  font-family: linotype-didot, serif;
}
@mixin UD-sin-go-font {
  font-family: a-otf-ud-shin-go-pr6n, sans-serif;
}

.search {
  border: 1px solid $black;
  border-radius: 5px;

  .search-items-1,
  .search-items-2 {
    display: flex;
    .search-item {
      display: flex;
      height: 50px;
      @include UD-sin-go-font();
      color: $black;
      font-size: 18px;
      text-align: center;
      align-items: center;
      justify-content: center;
      border: 2px solid $orange;
      border-radius: 5px;
    }
    .selected {
      background-color: $orange;
      color: $white;
    }
  }

  .search-text {
    height: 40px;
    border-top: 1px solid $black;
    border-radius: 0 0 5px 5px;
    display: flex;
    img {
      margin: 7px;
    }
    .search-input {
      margin-bottom: 2px;
      display: flex;
      align-items: center;
      justify-content: center;
      input {
        @include UD-sin-go-font;
        width: calc(100vw - 60px - 14px - 25px - 30px);
        border: none;
      }
    }
  }
}

.card-container {
  margin-top: 40px;
  .card-list {
    display: inline-grid;
  }
}

@media screen and (max-width: 900px) {
  .search {
    height: 160px;
    margin: 22px 12px auto 12px;
    .search-items-1 {
      .search-item {
        width: calc((100vw - 24px - 15px * 2 * 2) / 2);
        margin: 7px 15px;
      }
    }
    .search-items-2 {
      .search-item {
        width: calc((100vw - 24px - 15px * 2 * 2) / 3);
        margin: 0 15px 7px 15px;
      }
    }
  }

  .card-list {
    margin-left: calc((100vw - 340px) / 2 - 10px);
    margin-right: calc((100vw - 340px) / 2 - 10px);
  }
}

@media screen and (min-width: 900px) {
  .search {
    height: 110px;
    margin: 47px 30px auto 30px;
    .search-items {
      display: flex;
      .search-item {
        width: calc((100vw - 60px - 15px * 2 * 4.5) / 4);
        margin: 10px 15px;
      }
    }
  }

  .card-list {
    margin-left: calc((100vw - 340px * 2) / (2 * 2) - 10px);
    margin-right: calc((100vw - 340px * 2) / (2 * 2) - 10px);
  }
}
</style>
