<template>
  <div>
    <Header />
    <Title :is-main="true" :text="'企画一覧'" />

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
          :description="project.description"
        />
      </div>
      <div v-if="width >= 900" class="card-list">
        <Card
          v-for="project in show_projects_2"
          :key="project.id"
          :name="project.name"
          :place="project.place"
          :description="project.description"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header'
import Card from '@/components/SandanCard'
import Title from '@/components/Title'

export default {
  name: 'Sandan',
  components: { Header, Card, Title },
  data() {
    return {
      search_text: '',
      search_category: 31,
      width: 1000,
      height: 1000,
      projects: [
        {
          id: 1,
          name: 'Codename ZERO',
          place: 'A201・202',
          type: 31,
          description:
            '【緊急連絡】以前から目をつけていた組織のアジトから暗号らしきものが発見された。侵入して暗号を解読し情報を盗み出してほしい。至急A201・202まで来てくれ。',
        },
        {
          id: 2,
          name: 'エスペラント同好会',
          place: 'A211',
          type: 31,
          description:
            'ことば、使ってますか？当会ではエスペラントを始めとする様々な言語を遊びながら作った同好会会誌を布いたします。是非、お手に取ってぽんわりとお楽しみくださいませ！',
        },
        {
          id: 3,
          name: '開成ピアノの会定期演奏会',
          place: 'A 会場 2 階 本館ホール',
          type: 31,
          description:
            '「開成ピアノの会」のメンバーによる、ピアノ曲の発表です。クラシックを中心にメンバーが練習した曲を披露します。ぜひお越しください！',
        },
        {
          id: 4,
          name: '彼女は手品好き♡',
          place: 'A 会場 2 階 本館ホール',
          type: 31,
          description:
            '今年もマジックショーを開催します。不思議、驚き、興奮の数々。鳩やカードなどの大迫力のステージをお楽しみください。A408 ではテーブルマジックを披露しています。',
        },
        {
          id: 5,
          name: '開成王',
          place: 'A 会場 2 階 本館ホール',
          type: 31,
          description:
            '一般参加者同士のクイズ大会を実施します。競技クイズ経験者の方は参加を控えてください。',
        },
        {
          id: 6,
          name: 'VS ！ 先生‼',
          place: 'A 会場 2 階 本館ホール',
          type: 31,
          description:
            '開成学園の教員と一般参加者のクイズ対決を実施します。競技クイズ経験者の方は参加を控えてください。',
        },
        {
          id: 7,
          name: '階段「壁画製作」',
          place: 'A 会場 1 階～ 4 階',
          type: 31,
          // description:
          // '開成学園は創立 150 周年を迎えます。それを記念して壁画制作をしました。中高生の有志が、解体される校舎への感謝の気持ちを込め、原画を作成し、夏休みの間に着色を行いました。1 階から 2 階の階段の壁には創立当時の昔を、2 階から 3 階の階段の壁には現在の自分達を、3 階から 4 階の階段の壁には現在から 150 年後の未来をイメージして描きました。高校校舎は今年で解体されるので、この絵が文化祭で見られるのは今回が最初で最後です。是非ご覧ください。',
        },
        {
          id: 8,
          name: '鉄研の車窓から 2020',
          place: 'A301・302',
          type: 31,
          description:
            '今年のテーマは「地下鉄」です。今年も部誌「乗降場」の配布の他、模型運転体験やシュミレータ体験も感染への配慮を施し例年通り実施します。ぜひお越し下さい。',
        },
        {
          id: 9,
          name: '天文気象部',
          place: 'A303・304',
          type: 31,
          description:
            '天文気象部では宇宙や大気のことについて模型や実験を通して紹介しています。さらに今年は例年とは違う三密を避けたプラネタリウムも開催しています。ぜひお越しください。',
        },
        {
          id: 10,
          name: 'まったり TRPG 広場',
          place: 'A305',
          type: 31,
          description:
            'TRPG とは：各々が役を演じながら進んでいくゲームです。アニメ・サブカルチャー研究同好会が初めての方でも楽しめるシナリオを用意しております。ぜひお越しください！',
        },
        {
          id: 11,
          name: '大道芸、自由自在。',
          place: 'A305',
          type: 31,
          description:
            '今年はなんと、毎年 JGK のメンバーが作っているバルーンアートの体験ができます！ もちろん、例年通り公演やバルーン配布も行います。ぜひお越しください！',
        },
        {
          id: 12,
          name: '金の匙 5G',
          place: 'A306',
          type: 31,
          description:
            '2 年連続参団グランプリ獲得中の大人気参団「金の匙」シリーズが今年も降臨！圧倒的な楽しさで皆さんのハートをすくっちゃいます。君は完全制覇なるか……？',
        },
        {
          id: 13,
          name: '社会科研究部',
          place: 'A307',
          type: 31,
          description:
            '社会科研究部では、今年も入試予想問題を配布中！ さらに、近年よく耳にする「天皇制」の展示や、時事問題、クイズなど様々な企画があります。ぜひ社研へお越しください。',
        },
        {
          id: 14,
          name: 'キャップストーリーマニア',
          place: 'A308',
          type: 31,
          description:
            'キャップ投げとアトラクションの楽しさをもつキャップシューティングアトラクション。キャップ投げができる人はもちろん、投げられない人でも参加できるようになってます。',
        },
        {
          id: 15,
          name: 'クイズ研究部',
          place: 'A401',
          type: 31,
          description:
            '早押しクイズ体験を実施しています。競技クイズ経験者の方は参加を控えてください。',
        },
        {
          id: 16,
          name: '弁論文春',
          place: 'A402',
          type: 31,
          description:
            '言葉を使い他人を説得する競技、ディベート。オンラインでも熱い試合を実演します。あの超有名校と繰り広げる激論の勝敗を決めるのは貴方だ㾗',
        },
        {
          id: 17,
          name: 'Letʼs talk Kaisei',
          place: 'A403',
          type: 31,
          description:
            '受験生はもちろん、開成生とお話がしたい方へ！ 普段の生活、入試、部活動など、あなたの質問に直接開成生が答えます。さあ、お気軽に開成生と Letʼs talk ！',
        },
        {
          id: 18,
          name: 'オオカミ君には殺されない',
          place: 'A404',
          type: 31,
          description:
            '人狼の世界へと変貌した H1-5……。お互いに腹の内を探り合うデスゲームが今始まる。開成オリジナルの人狼ゲームを君の手で遊び尽くせ。',
        },
        {
          id: 19,
          name: 'UPDATE',
          place: 'A405',
          type: 31,
          description:
            '時は 2051 年。世界的に普及したアンドロイドが暴走、世界は崩壊の危機に瀕していた。残された君たちは 149th 開成祭へと転送され、暴走の原因調査を行うこととなる̶̶。',
        },
        {
          id: 20,
          name: 'ワールドチェスクラブ',
          place: 'A406',
          type: 31,
          description:
            'チェスやシャンチー（中国将棋）、どうぶつしょうぎといった様々な「世界の将棋」の展示・対戦を行っています。ルールは知らなくても大丈夫。お気軽にお越しください。',
        },
        {
          id: 21,
          name: '紳士の娯楽',
          place: 'A406',
          type: 31,
          description:
            '世界で一番多くの人に遊ばれているトランプゲーム、コントラクトブリッジ。運の要素を極力排除した優雅で知的なゲームであるブリッジを、簡単にわかりやすくお教えします！',
        },
        {
          id: 22,
          name: 'KCG',
          place: 'A407',
          type: 31,
          description:
            '高 2 有志で結成するカジノ参団、堂々のフィナーレ！日常から切り離された空間で、経験豊富なディーラーとカジノを楽しみませんか？',
        },
        {
          id: 23,
          name: '彼女は手品好き♡',
          place: 'A408',
          type: 31,
          description:
            '手品部です！ 目の前でマジシャン達が織り成す奇跡の数々をお楽しみ下さい。誰もが楽しめる内容です。本館ホールではステージマジックを披露しています。',
        },
        {
          id: 24,
          name: '開成管弦楽団文化祭演奏会',
          place: 'B 会場 1 階',
          type: 31,
          description:
            '開成祭に来たからには生のオーケストラ演奏を聴かなきゃもったいない！今回はチャイコフスキーの名曲を 3 曲お送りします。部員一同ご来場お待ちしております！',
        },
        {
          id: 25,
          name: '大道芸、自由自在。',
          place: 'B 会場 1 階',
          type: 31,
          description:
            '"今年のパフォーマンスはとにかく凄い！様々な道具をまさに "" 自由自在 "" に操る演技で、皆様の心をつかんで見せます！是非ご覧ください！"',
        },
        {
          id: 26,
          name: '開成フェンサーズ',
          place: 'B 会場 1 階',
          type: 31,
          description:
            'フェンシングは未だ日本ではメジャーな競技とは言えず、生で見たことのある方もそう多くはないと思います。ぜひこの機会に繊細な剣さばき、白熱する攻防をご覧ください。',
        },
        {
          id: 27,
          name: '史上最強のクイ研決定戦',
          place: 'B 会場 1 階',
          type: 31,
          description:
            '他校のクイズ研究部部員を招いて、ハイレベルなクイズ対決を行います。',
        },
        {
          id: 28,
          name: '弁論文春',
          place: 'B 会場 1 階',
          type: 31,
          description:
            '言葉を使い他人を説得する競技、ディベート。あの超有名校を招いて試合を実演します。「宿題を廃止すべき」などで繰り広げる激論の、勝敗を決めるのはあなただ！',
        },
        {
          id: 29,
          name: '音楽部 @ 小講堂',
          place: 'B 会場 1 階',
          type: 31,
          description:
            '迫力のある吹奏楽ステージと、三輪田学園さんを迎えての混声合唱をお楽しみいただけます。各日一回の演奏です。曲間の入退場も可能なので、ぜひお越しください。',
        },
        {
          id: 30,
          name: '演劇部文化祭公演',
          place: 'B 会場 1 階',
          type: 31,
          description:
            '演劇部です。「伝える」って、すごく難しいことですよね。その分、「伝わる」って、とんでもなく楽しい瞬間ですよね。お待ちしております。',
        },
        {
          id: 31,
          name: '熱闘！ 俳句甲子園 in 開成',
          place: 'B 会場 1 階',
          type: 31,
          description:
            '俳句甲子園の全国大会で叶わなかった、強豪校たちの熱い試合を開成で見ることができます。ここでしか見ることのできない中学生が参加する戦いも必見です！',
        },
        {
          id: 32,
          name: '開成生は告らせたい',
          place: 'B 会場 1 階',
          type: 31,
          description:
            '「開成生は出会いが少なくて緊急事態！」そんな彼らに彼女を作るチャンスがやってきた！彼らは女子高生との心のディスタンスを縮められるのか？',
        },
        {
          id: 33,
          name: '狙撃迷宮 in 1-7',
          place: 'B201',
          type: 31,
          description:
            '「迷路×狙撃」ナーフ銃片手に、暗い暗い迷路を攻略しよう！ 御守り景品あります。ぜひ来てください！',
        },
        {
          id: 34,
          name: '新感覚カジノへようこそ',
          place: 'B202',
          type: 31,
          description:
            '新感覚というのはどういうことかを文章を読んで理解しようとするあるいは理解させようとするのは愚かである。つまり B202 に来るべし。',
        },
        {
          id: 35,
          name: '画龍玉晴～ピタゴランド～',
          place: 'B203',
          type: 31,
          description:
            '開成中学校 1 年 3 組の教室に張り巡らされたピタゴラスイッチ網を君の手で完成させよ……。　※ただの参加型のピタゴラスイッチです。',
        },
        {
          id: 36,
          name: 'Escape from Kaisei castle',
          place: 'B204',
          type: 31,
          description:
            'トンネルを抜けるとそこは雪国……ではなく、館であった。館に隠された 3 つのヒントを探し、それらを用いて館から制限時間が来る前に脱出せよ！',
        },
        {
          id: 37,
          name: '1-5 脱出ゲーム',
          place: 'B205',
          type: 31,
          description:
            '1 年 5 組の愉快な仲間が贈る、脱出ゲームへようこそ。君はクイズを解いて無事脱出できるかな？難易度別なので誰でも楽しめます。ぜひ遊びに来てください。',
        },
        {
          id: 38,
          name: 'Kaisei survival',
          place: 'B206',
          type: 31,
          description:
            'あなたは仲間と共に教室に閉じ込められてしまった。仲間と共に三つのヒントを獲得して最後の謎を解け！ 謎解き、シューティング、クイズが楽しめるお得な脱出ゲーム。',
        },
        {
          id: 39,
          name: '浦島 Impossible',
          place: 'B207',
          type: 31,
          description:
            '文化祭でよく見かける脱出ゲームを一味違った昔話の世界観でアレンジ。問題数は全部で 4 問。パズル問題から浦島太郎の雑学まですべてのジャンルをクリアしろ！',
        },
        {
          id: 40,
          name: 'Kaiser Tiger Zwei',
          place: 'テニスコート',
          type: 31,
          description:
            '戦車について知っていますか？多くの人が見たことすらないかと思います。この参団では実物大の戦車の砲塔の模型に乗れます！ミリタリーに知識がない人も大歓迎です！',
        },
        {
          id: 41,
          name: '開成写真館',
          place: 'B301',
          type: 31,
          description:
            '写真部員が撮った写真の展示をしています。例年に比べて写真の枚数が多く、見ごたえあるものになったので、「少し時間が空いたな」と思った時など気軽にお越しください！',
        },
        {
          id: 42,
          name: '美術部',
          place: 'B302',
          type: 31,
          description:
            '鉛筆、油絵、水彩などなど、部員たちが描いてきた作品たちを展示中。技巧を凝らした、大胆かつ精緻な筆づかいをぜひ感じてください。似顔絵プレゼントもしています！',
        },
        {
          id: 43,
          name: '弱くても勝てます 7th',
          place: 'B303',
          type: 31,
          description:
            'リアル野球盤参団「弱くても勝てます」は今年でなんと 7 年目を迎えました！ 細部までとことんこだわって更なる進化を遂げた野球盤を、是非ともその目でお確かめください！',
        },
        {
          id: 44,
          name: 'The Ninja Mission',
          place: 'B304',
          type: 31,
          description:
            '数多の絡繰を潜り抜け、立ちはだかる忍者達を倒して奪われし巫女と財宝を奪還せよ。メンバー 1 人 1 人の血と汗で作られた一年間の集大成、篤とご体感あれ！',
        },
        {
          id: 45,
          name: 'VS 開成生',
          place: 'B305',
          type: 31,
          description:
            '射撃、ボードゲームなどのミニゲームで開成生と勝負しよう。果たして開成生に勝つことができるか？君たちの挑戦を待っている。勝利を掴め！',
        },
        {
          id: 46,
          name: '開成書道展',
          place: 'B306',
          type: 31,
          description:
            '書道部の部員が丹精込めて作った作品を展示致しております。普段なかなか味わえない書の空間をお楽しみください。',
        },
        {
          id: 47,
          name: '紫雁俳句会',
          place: 'B306',
          type: 31,
          description:
            '突然ですが、ラグビーの季語が何かわかりますか？ 実は冬の季語なんです。この参団では俳句甲子園や意外な季語の展示・解説をしています。是非、足を運んでみてください！',
        },
        {
          id: 48,
          name: 'ソフィーの碁',
          place: 'B307',
          type: 31,
          description: '部員たちと囲碁の対局を楽しむことができます。',
        },
        {
          id: 49,
          name: '飛車ちゅうの成人式！',
          place: 'B307',
          type: 31,
          description:
            '将棋部ではお客様との対局を行っています。初心者の方も腕利きの方も大歓迎です！ また、部誌の無料配布もあります。将棋の奥深い世界、あなたも味わってみませんか？',
        },
        {
          id: 50,
          name: 'NeXUS Next',
          place: 'B311',
          type: 31,
          description:
            'この参団では、開成生の音ゲーマーたちが集い、制作したゲームと譜面遊ぶことが出来ます。お馴染みの曲からマニアックな曲まで取り揃えています。初心者大歓迎です！',
        },
        {
          id: 51,
          name: 'サラブレッド研究同好会',
          place: 'B311',
          type: 31,
          description:
            '2020 年三冠を達成したコントレイルの矢作芳人調教師などを輩出した当校で、「ディープ」なサラブレッドの世界の展示、VR でのジョッキー体験をお楽しみいただけます。',
        },
        {
          id: 52,
          name: 'かいせいゆうえんち',
          place: 'B401',
          type: 31,
          description:
            'ジェットコースター！ 絶叫マシンと化した教室。我々が全力で作り上げたジェットコースターを今、体感せよ！',
        },
        {
          id: 53,
          name: 'ポケモンリーグ開成',
          place: 'B402',
          type: 31,
          description:
            '今も日本に残る奇妙な世界。闇を祀る民達のもとでは希望の光は絶望へと変わる。まるで一冊のホラー小説の世界に入り込むかのように…… 新たな恐怖体験があなたを待っている。',
        },
        {
          id: 54,
          name: '暗染地帯',
          place: 'B403',
          type: 31,
          description:
            '今も日本に残る奇妙な世界。闇を祀る民達のもとでは希望の光は絶望へと変わる。まるで一冊のホラー小説の世界に入り込むかのように…… 新たな恐怖体験があなたを待っている。',
        },
        {
          id: 55,
          name: '孤独な夜の奇妙なヒゲキ',
          place: 'B404',
          type: 31,
          description:
            'とある夜、悲劇が起こる。この事件の真相はどこに。それを突き止められるのはあなただ！さぁ謎解き好きの皆よ集まれ！ たくさんの謎、そして恐ろしい真実が君を待っている！',
        },
        {
          id: 56,
          name: '山岳部　̶ mountain boys　̶',
          place: 'B405（オセアニア）',
          type: 31,
          description:
            '一年間の活動の様子や、山頂からの絶景写真などを紹介しています。合宿中に使っている装備や食べ物なども展示しております。ぜひお立ち寄りください。',
        },
        {
          id: 57,
          name: '推しを語りたい',
          place: 'B405（オセアニア）',
          type: 31,
          description:
            'アトラクションも受付もなし。推しを語ることに特化した夢の場所。さあ、次元を超えた推しの世界へ。',
        },
        {
          id: 58,
          name: '文芸部',
          place: 'B405（オセアニア）',
          type: 31,
          description:
            '部誌として部員が執筆した小説を配布しております。なお発行部数には限りが御座いますのでご了承ください。その他展示もありますのでぜひ起こし下さい。',
        },
        {
          id: 59,
          name: 'FOOL COOL',
          place: 'B405（オセアニア）',
          type: 31,
          description:
            '最初はペットボトルをゴミ箱に投げ入れることから始まった参団。開成生のかっこいい日常をぜひご覧ください',
        },
        {
          id: 60,
          name: '開成斎',
          place: 'B405（オセアニア）',
          type: 31,
          description:
            '開成の新鋭・デザイン同好会による成果報告。部誌頒布あり。',
        },
        {
          id: 61,
          name: '飛べない蟬',
          place: 'B406',
          type: 31,
          description:
            '分かりづらい名前ですみません、水泳部です。水泳部には 120 年以上の歴史があります。身体能力測定と合宿の映像紹介をやっていますので、是非いらして下さい！',
        },
        {
          id: 62,
          name: '折り紙研究部',
          place: 'B407',
          type: 31,
          description:
            '日本の伝統文化である折り紙は、今もなお変化し、さらに高度な芸術作品へと進化しています。折り研も去年からさらに進化した展示でお客様をお待ちしております。',
        },
        {
          id: 63,
          name: 'コンピューター部大波乱',
          place: 'B412',
          type: 31,
          description:
            '大波乱だった今年度も、コンピューター部では部員手作りのゲームや作品の展示、部誌の配布を行っています！さらに今回は、オンラインでもいろいろ企画しています！',
        },
        {
          id: 64,
          name: '開成管弦楽団室内楽演奏会',
          place: 'B501',
          type: 31,
          description:
            '普段オーケストラで演奏する楽団員が、少人数アンサンブルの演奏会を行います。曲目はクラシックからポップスまで幅広く！皆様に安らぎと音楽の魅力をお届けします。　※ Day1 午前のみ',
        },
        {
          id: 65,
          name: '不屈の生物部',
          place: 'C101',
          type: 31,
          description:
            'コロナ禍にも屈しない生物部をご覧あれ。生き物について様々な展示もしています！ ぜひ特別棟入ってすぐの C101 へ。',
        },
        {
          id: 66,
          name: '開成模型製作所',
          place: 'C102・202',
          type: 31,
          description:
            'ここでは、模型部員製作のプラモデルや代々受け継がれているレイアウトが展示されています。鉄道模型の体験運転も行っているので皆様ぜひお越しください！',
        },
        {
          id: 67,
          name: '物理部',
          place: 'C201・203',
          type: 31,
          description:
            '物理部員が一から自作した電子ゲームや大迫力の高電圧実験を目の前で体験できます。',
        },
        {
          id: 68,
          name: '開成鉱石化石館',
          place: 'C301',
          type: 31,
          description:
            '地質部。今年もやります！開成鉱石化石館！ 今年のテーマは「火山」と「化石」です。大人気のレプリカ作り体験も行いますので是非来てください！',
        },
        {
          id: 69,
          name: '大化学実験',
          place: 'C401・402',
          type: 31,
          description:
            '大化学実験では、普段見られないような様々な化学実験を行っています。多くの実験を分かりやすく解説していますので、ぜひ C401・402 までお越しください！',
        },
        {
          id: 70,
          name: '天道流合気道',
          place: 'D 会場［武道場］',
          type: 31,
          description:
            '柔道や剣道、弓道だったらイメージは湧くのに、その他の武道がどのようなものかさえ全く知らない ...... そんな埋もれた武道・合気道の面白さ、美しさをお見せします！',
        },
        {
          id: 71,
          name: 'ストラックアウト in 開成',
          place: 'D 会場［第 2 グラウンド］',
          type: 31,
          description:
            '広々としたグラウンドで体を動かせる数少ない参団。暇な時にぜひ足を運んでみてはいかが？',
        },
        {
          id: 72,
          name: '剣もペンも強し',
          place: 'D 会場［第 2 グラウンド］',
          type: 31,
          description:
            'ペンのみならず剣までも磨きあげた剣道部員達にあなたは勝つことができるか !? 風船割り、気配斬りやってます。挑戦お待ちしています！',
        },
        {
          id: 73,
          name: 'Ms. ペリーのミステリー',
          place: 'D 会場［第 2 グラウンド］',
          type: 31,
          description:
            '待ち時間が退屈なあなた！ 第 2 グラウンドに行って謎解きキットを手に入れよう！キットいいことが起こるよ！ さあキットを片手に校内を巡ろう！',
        },
        {
          id: 74,
          name: 'Letʼs talk Kaisei',
          place: 'E 会場（オンライン）',
          type: 31,
          description:
            '開成生とお話がしたい小中高生の方へ！普段の生活、部活動、入試など、あなたの質問にZoom で開成生が答えます。さあ、お気軽に開成生と Letʼs talk ！',
        },
        {
          id: 75,
          name: 'カードゲームの夜',
          place: 'E 会場（オンライン）',
          type: 31,
          description:
            '今年もカードゲームの夜が文化祭に参戦。オリジナルカードゲームからマニアックな記事まで作りました。オンラインにてひっそりと営業中。',
        },
        {
          id: 76,
          name: 'まったり TRPG 広場',
          place: 'E 会場（オンライン）',
          type: 31,
          description:
            'インターネット上の機能を最大限活用し、経験者の方も、初めての方も TRPG を楽しんでいただけるようになっております。是非お越しください！',
        },
        {
          id: 77,
          name: '開成ピアノの会定期演奏会',
          place: 'E 会場（オンライン）',
          type: 31,
          description:
            '「開成ピアノの会」のメンバーが、ピアノ曲をオンラインでお届けします！クラシックを中心に披露させていただきます！ぜひお聞きください！',
        },
        {
          id: 78,
          name: '開成管弦楽団特別演奏会',
          place: 'E 会場（オンライン）',
          type: 31,
          description:
            '部員による「花のワルツ」の演奏や、音楽部と合同の「パリのアメリカ人」アンサンブルの動画を公開します！開成管弦楽団によるクラシック音楽をオンラインの世界でも！',
        },
        {
          id: 79,
          name: '開成書道展',
          place: 'E 会場（オンライン）',
          type: 31,
          description:
            '書道部員が丹精込めて書いた作品をオンラインでご覧いただけます。文化祭に行かないと見れない作品を是非お気軽にスマホなどで お楽しみください！',
        },
        {
          id: 80,
          name: '大道芸、自由自在。',
          place: 'E 会場（オンライン）',
          type: 31,
          description:
            '"今年のパフォーマンスはとにかく凄い！様々な道具をまさに "" 自由自在 "" に操る演技で、皆様の心をつかんで見せます！是非ご覧ください！"',
        },
        {
          id: 81,
          name: '天道流合気道',
          place: 'E 会場（オンライン）',
          type: 31,
          description: '知られざる合気道の魅力・美しさを。',
        },
        {
          id: 82,
          name: '飛べない蝉',
          place: 'E 会場（オンライン）',
          type: 31,
          description:
            '分かりづらい名前ですいません、水泳部です。水泳部には 120 年以上の歴史があります。普段の部活動や合宿の映像紹介をやっていますので、是非いらして下さい！',
        },
        {
          id: 83,
          name: '飛車ちゅうの成人式！',
          place: 'E 会場（オンライン）',
          type: 31,
          description:
            '将棋部ではお客様との対局を行っています。初心者の方も腕利きの方も大歓迎です！また、他校との対抗戦や部誌のオンライン公開もしています。是非お越しください。',
        },
        {
          id: 84,
          name: '物理部',
          place: 'E 会場（オンライン）',
          type: 31,
          description:
            '物理部員が電子ゲームや高電圧実験を自作する様子を動画にまとめました。',
        },
        {
          id: 85,
          name: '数学研究部',
          place: 'E 会場（オンライン）',
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
