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
            @click="changeCategory(0)"
          >
            YouTube
          </div>
          <div
            :class="{ selected: (search_category & (1 << 1)) > 0 }"
            class="search-item"
            @click="changeCategory(1)"
          >
            配布物 (PDF)
          </div>
        </div>
        <div class="search-items-2">
          <div
            :class="{ selected: (search_category & (1 << 2)) > 0 }"
            class="search-item"
            @click="changeCategory(2)"
          >
            音声通話
          </div>
          <div
            :class="{ selected: (search_category & (1 << 3)) > 0 }"
            class="search-item"
            @click="changeCategory(3)"
          >
            Cluster
          </div>
          <div
            :class="{ selected: (search_category & (1 << 4)) > 0 }"
            class="search-item"
            @click="changeCategory(4)"
          >
            HP
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

    <div v-if="width >= 900" class="card-container">
      <div class="card-list">
        <Card
          v-for="project in show_projects_1"
          :key="project.id"
          :name="project.name"
          :place="project.place"
          :picture-url="project.pictureUrl"
          :content-url="project.contentUrl"
          :content-url-text="project.contentUrlText"
          :description="project.description"
        />
      </div>
      <div class="card-list">
        <Card
          v-for="project in show_projects_2"
          :key="project.id"
          :name="project.name"
          :place="project.place"
          :picture-url="project.pictureUrl"
          :content-url="project.contentUrl"
          :content-url-text="project.contentUrlText"
          :description="project.description"
        />
      </div>
    </div>
    <div v-else class="card-container">
      <div class="card-list">
        <Card
          v-for="project in show_projects"
          :key="project.id"
          :name="project.name"
          :place="project.place"
          :picture-url="project.pictureUrl"
          :content-url="project.contentUrl"
          :content-url-text="project.contentUrlText"
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

const YOUTUBE = 1 << 0
const PDF = 1 << 1
const VOICECHAT = 1 << 2
const CLUSTER = 1 << 3
const HP = 1 << 4

export default {
  name: 'Online',
  components: { Header, Card, Title },
  data() {
    return {
      search_text: '',
      search_category: YOUTUBE | PDF | VOICECHAT | CLUSTER | HP,
      width: 1000,
      height: 1000,
      projects: [
        {
          id: 74,
          name: 'Letʼs talk Kaisei',
          place: 'meetnow',
          type: VOICECHAT,
          pictureUrl: 'i.svg',
          contentUrl: 'https://www.google.com/',
          description:
            '開成生とお話がしたい小中高生の方へ！普段の生活、部活動、入試など、あなたの質問にZoom で開成生が答えます。さあ、お気軽に開成生と Letʼs talk ！',
        },
        {
          id: 75,
          name: 'カードゲームの夜',
          place: 'PDF, HP',
          type: PDF | HP,
          contentUrl: 'doc/カードの夜',
          description:
            '今年もカードゲームの夜が文化祭に参戦。オリジナルカードゲームからマニアックな記事まで作りました。オンラインにてひっそりと営業中。',
        },
        {
          id: 76,
          name: 'まったり TRPG 広場',
          place: 'PDF',
          type: PDF,
          contentUrl: 'doc/まったりTRPG/まったりTRPG広場部誌.pdf',
          description:
            'インターネット上の機能を最大限活用し、経験者の方も、初めての方も TRPG を楽しんでいただけるようになっております。是非お越しください！',
        },
        {
          id: 77,
          name: '開成ピアノの会定期演奏会',
          place: 'YouTube',
          type: YOUTUBE,
          description:
            '「開成ピアノの会」のメンバーが、ピアノ曲をオンラインでお届けします！クラシックを中心に披露させていただきます！ぜひお聞きください！',
        },
        {
          id: 78,
          name: '開成管弦楽団特別演奏会',
          place: 'YouTube',
          type: YOUTUBE,
          description:
            '部員による「花のワルツ」の演奏や、音楽部と合同の「パリのアメリカ人」アンサンブルの動画を公開します！開成管弦楽団によるクラシック音楽をオンラインの世界でも！',
        },
        {
          id: 79,
          name: '開成書道展',
          place: 'PDF',
          type: PDF,
          description:
            '書道部員が丹精込めて書いた作品をオンラインでご覧いただけます。文化祭に行かないと見れない作品を是非お気軽にスマホなどで お楽しみください！',
          contentUrl: 'doc/書道展/開成書道展.pdf',
        },
        {
          id: 80,
          name: '大道芸、自由自在。',
          place: 'YouTube',
          type: YOUTUBE,
          description:
            '今年のパフォーマンスはとにかく凄い！様々な道具をまさに " 自由自在 " に操る演技で、皆様の心をつかんで見せます！是非ご覧ください！',
        },
        {
          id: 81,
          name: '天道流合気道',
          place: 'YouTube',
          type: YOUTUBE,
          description: '知られざる合気道の魅力・美しさを。',
        },
        {
          id: 82,
          name: '飛べない蝉',
          place: 'HP, YouTube, PDF',
          type: HP | YOUTUBE | PDF,
          description:
            '分かりづらい名前ですいません、水泳部です。水泳部には 120 年以上の歴史があります。普段の部活動や合宿の映像紹介をやっていますので、是非いらして下さい！',
          contentUrl: 'doc/水泳部/開成水泳部公式パンフレット.pdf',
        },
        {
          id: 83,
          name: '飛車ちゅうの成人式！',
          place: 'Zoom, PDF',
          type: VOICECHAT | PDF,
          description:
            '将棋部ではお客様との対局を行っています。初心者の方も腕利きの方も大歓迎です！また、他校との対抗戦や部誌のオンライン公開もしています。是非お越しください。',
          contentUrl: 'doc/将棋部/まやか誌2020.pdf',
        },
        {
          id: 84,
          name: '物理部',
          place: 'YouTube',
          type: YOUTUBE,
          description:
            '物理部員が電子ゲームや高電圧実験を自作する様子を動画にまとめました。',
        },
        {
          id: 85,
          name: '数学研究部',
          place: 'Zoom, PDF',
          type: VOICECHAT | PDF,
          description:
            '今年はオンラインでの参加となりますが、更にレベルの上がったGPや入試予想問題が君を待っています。部員一同盛り上げてまいりますので、是非一度お越しください！',
          contentUrl: 'doc/数学研究部/数学研究部.zip',
        },
        {
          id: 86,
          name: '折り紙研究部',
          place: 'Cluster, YouTube',
          type: CLUSTER | YOUTUBE,
          description:
            '日本の伝統文化である折り紙は、今もなお変化し、さらに高度な芸術作品へと進化しています。折り研も去年からさらに進化した展示でお客様をお待ちしております。',
          contentUrl: 'hogehoge',
        },
        {
          id: 87,
          name: '彼女は手品好き♡',
          place: 'YouTube',
          type: YOUTUBE,
          description:
            '手品部です！ 今年もマジックショーを開催します。不思議、驚き、興奮の数々。目の前でマジシャン達が織り成す奇跡の数々をお楽しみ下さい。誰もが楽しめる内容です。',
          contentUrl: 'hogehoge',
        },
        {
          id: 88,
          name: '弁論文春',
          place: 'YouTube, PDF',
          type: YOUTUBE | PDF,
          description:
            '言葉を使い他人を説得する競技、ディベート。オンラインでも熱い試合を実演します。あの超有名校と繰り広げる激論の勝敗を決めるのは貴方だ？！',
          contentUrl: 'doc/弁論文春/弁論文春.zip',
        },
        {
          id: 89,
          name: '動画研究会',
          place: 'YouTube',
          type: YOUTUBE,
          // description:
          //  '手品部です！ 今年もマジックショーを開催します。不思議、驚き、興奮の数々。目の前でマジシャン達が織り成す奇跡の数々をお楽しみ下さい。誰もが楽しめる内容です。',
          contentUrl: 'hogehoge',
        },
        {
          id: 90,
          name: 'ポケモンリーグ開成',
          place: 'YouTubeLive',
          type: YOUTUBE,
          // description:
          //  '手品部です！ 今年もマジックショーを開催します。不思議、驚き、興奮の数々。目の前でマジシャン達が織り成す奇跡の数々をお楽しみ下さい。誰もが楽しめる内容です。',
          contentUrl: 'hogehoge',
        },
        {
          id: 91,
          name: '不屈の生物部',
          place: 'YouTube, HP',
          type: YOUTUBE | HP,
          description:
            'コロナ渦にも屈しない生物部をご覧あれ。 生き物について様々な展示もしています！ ぜひ特別棟入ってすぐのC101へ',
          contentUrl: 'hogehoge',
        },
        {
          id: 92,
          name: '最後の切り札',
          place: 'YouTube, PDF',
          type: YOUTUBE | PDF,
          // description:
          //   'コロナ渦にも屈しない生物部をご覧あれ。 生き物について様々な展示もしています！ ぜひ特別棟入ってすぐのC101へ',
          contentUrl: 'hogehoge',
        },
        {
          id: 93,
          name: '柔道部',
          place: 'PDF',
          type: PDF,
          // description:
          //   'コロナ渦にも屈しない生物部をご覧あれ。 生き物について様々な展示もしています！ ぜひ特別棟入ってすぐのC101へ',
          contentUrl: 'hogehoge',
        },
        {
          id: 94,
          name: '社会科研究部',
          place: 'PDF',
          type: PDF,
          description:
            '社会科研究部では、今年も入試予想問題を配布!さらに、近年よく耳にする「天皇制」の展示や、時事問題、クイズなど様々な企画があります。ぜひA307にお越しください。',
          contentUrl: 'doc/社会科研究部/社会科研究部.zip',
        },
        {
          id: 95,
          name: '映画同好会',
          place: 'PDF',
          type: PDF,
          // description:
          //   'コロナ渦にも屈しない生物部をご覧あれ。 生き物について様々な展示もしています！ ぜひ特別棟入ってすぐのC101へ',
          contentUrl: 'doc/映画同好会/幻燈機.pdf',
        },
        {
          id: 96,
          name: '暗染地帯',
          place: 'HP',
          type: HP,
          description:
            '今も日本に残る奇妙な世界。闇を祀る民達のもとでは希望の光は絶望へと変わる。まるで一冊のホラー小説の世界に入り込むかのように…新たな恐怖体験があなたを待っている。',
          contentUrl: 'https://anzen-chitai.github.io/anchi',
          contentUrlText: 'anzen-chitai.github.io/anchi',
        },
        {
          id: 97,
          name: 'サラブレット研究同好会',
          place: 'PDF',
          type: PDF,
          description:
            '2020年三冠を達成したコントレイルの矢作芳人調教師などを輩出した当校で、「ディープ」なサラブレッドの世界の展示、VRでのジョッキー体験をお楽しみいただけます。',
          contentUrl: '/doc/サラブレット研究同好会/駿馬研究会誌.pdf',
        },
      ],
      show_projects: [],
      show_projects_1: [],
      show_projects_2: [],
    }
  },
  watch: {
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
    changeCategory(x) {
      this.search_category ^= 1 << x
      this.searchProject()
    },
    searchProject() {
      const newText = this.search_text
      const ret = []

      for (let i = 0; i < this.projects.length; i++) {
        if ((this.search_category & this.projects[i].type) === 0) continue

        if (newText && newText !== '') {
          if (
            ('name' in this.projects[i] &&
              this.projects[i].name.includes(newText)) ||
            ('place' in this.projects[i] &&
              this.projects[i].place.includes(newText)) ||
            ('description' in this.projects[i] &&
              this.projects[i].description.includes(newText))
          ) {
            ret.push(this.projects[i])
          }
        } else {
          ret.push(this.projects[i])
        }
      }
      this.show_projects = ret

      const ret1 = []
      const ret2 = []
      for (let i = 0; i < ret.length; i++) {
        if (i % 2 === 0) ret1.push(ret[i])
        if (i % 2 === 1) ret2.push(ret[i])
      }
      this.show_projects_1 = ret1
      this.show_projects_2 = ret2
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
        width: calc((100vw - 24px - 15px * 2 * 3) / 3);
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
        width: calc((100vw - 60px - 15px * 2 * 5.5) / 5);
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
