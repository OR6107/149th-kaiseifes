<template>
  <div>
    <Header />
    <div class="title">
      <div class="title-rectangle" />
      <div class="title-text">企画一覧</div>
    </div>

    <div class="search">
      <div class="search-items">
        <div class="search-items-1">
          <div
            :class="{ selected: (search_category & (1 << 0)) > 0 }"
            class="search-item"
            @click="search_category ^= 1 << 0"
          >
            Online
          </div>
          <div
            :class="{ selected: (search_category & (1 << 1)) > 0 }"
            class="search-item"
            @click="search_category ^= 1 << 1"
          >
            参加型
          </div>
        </div>
        <div class="search-items-2">
          <div
            :class="{ selected: (search_category & (1 << 2)) > 0 }"
            class="search-item"
            @click="search_category ^= 1 << 2"
          >
            展示
          </div>
          <div
            :class="{ selected: (search_category & (1 << 3)) > 0 }"
            class="search-item"
            @click="search_category ^= 1 << 3"
          >
            公演
          </div>
          <div
            :class="{ selected: (search_category & (1 << 4)) > 0 }"
            class="search-item"
            @click="search_category ^= 1 << 4"
          >
            映画
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
        />
      </div>
      <div v-if="width >= 900" class="card-list">
        <Card
          v-for="project in show_projects_2"
          :key="project.id"
          :name="project.name"
          :place="project.place"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header'
import Card from '@/components/SandanCard'

export default {
  name: 'Sandan',
  components: { Header, Card },
  data() {
    return {
      search_text: '',
      search_category: 31,
      width: 1000,
      height: 1000,
      projects: [
        {
          id: 1,
          name: 'あいうえおかきくけこさし',
          place: 'B会場 4 階 B444',
          type: 1,
        },
        {
          id: 2,
          name: 'ああああああああああああ',
          place: 'B会場 4 階 B555',
          type: 2,
        },
        {
          id: 3,
          name: 'いいいいいいいいいいいい',
          place: 'B会場 4 階 B666',
          type: 3,
        },
        {
          id: 4,
          name: 'あいうえおかきくけこさし',
          place: 'B会場 4 階 B444',
          type: 4,
        },
        {
          id: 5,
          name: 'ああああああああああああ',
          place: 'B会場 4 階 B555',
          type: 5,
        },
        {
          id: 6,
          name: 'いいいいいいいいいいいい',
          place: 'B会場 4 階 B666',
          type: 6,
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
            !this.projects[i].name.includes(newText) &&
            !this.projects[i].place.includes(newText) &&
            !this.projects[i].name.includes(newText)
          )
            continue
        }
        if ((this.search_category & this.projects[i].type) === 0) continue
        ret.push(this.projects[i])
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
$dark: #38444d;
$gray: #888888;
$light: #e5e5e5;
$white: #ffffff;
$purple: #611fb6;
$orange: #ff9a70;
$yellow: #fccf5a;

@mixin Didot-font {
  font-family: linotype-didot, serif;
}
@mixin UD-sin-go-font {
  font-family: a-otf-ud-shin-go-pr6n, sans-serif;
}

.title {
  @include Didot-font();
  display: flex;
  margin-top: 90px;
  margin-left: 25px;
  align-items: center;
  .title-rectangle {
    background-color: $yellow;
    width: 8px;
    height: 48px;
    margin-right: 15px;
  }
  .title-text {
    color: $black;
    font-size: 40px;
    padding-bottom: 6px;
  }
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
