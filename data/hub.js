/*
  东启介资讯站 · 首页数据
  ------------------------------------------------------------
  更新方法（详见 README.md）：
  1. 改 updated 日期。
  2. 新消息加到 news 数组最上面：{ date, tag, title, text, url }
  3. 正在进行的作品改 now；新周边加到 goods。
  4. 作品／采访／杂志／广播的完整记录写在 data/archive.js 的 events 里，
     首页的“即将到来”和分类栏目会自动从那里读取。
  图片：只用官方公开的剧照／海报／宣传图，写明出处。FC会员内容与图片一律不放。
*/
window.HUB = {
  updated: "2026-11-17",

  profile: {
    name: "东启介",
    nameJa: "東 啓介",
    kana: "ひがし けいすけ",
    roman: "Keisuke Higashi",
    nicknames: ["とんちゃん", "とんすけ"],
    tagline: "舞台、音乐剧与影视两栖的演员。身高190cm，书道六段，热爱钢琴与摄影。",
    facts: [
      ["生日", "1995年7月14日"],
      ["出身", "东京都"],
      ["身高", "190cm"],
      ["血型", "O型"],
      ["所属", "Watanabe Entertainment（ワタナベエンターテインメント）"],
      ["出道", "2013年《网球王子》音乐剧第二季（千岁千里）"],
      ["资格", "普通汽车驾照 · 书道六段"]
    ],
    skills: [
      { icon: "筆", title: "书道 六段", text: "小学开始练字，2017年时已达六段，官方资料把书道列为第一特技。" },
      { icon: "♪", title: "钢琴", text: "学过4年钢琴，喜欢自弹自唱；个人音乐会和直播里常弹奏。" },
      { icon: "◎", title: "摄影", text: "官方特技之一。在QJWeb连载「QJ相机部」，还有网络节目《东启介的相机之旅》。" },
      { icon: "♫", title: "吉他 · 音乐鉴赏", text: "事务所资料写的爱好；2020年公开原创曲《こえ》。" },
      { icon: "●", title: "篮球 · 网球", text: "篮球2年；软式网球3年，曾打进东京都大赛。" },
      { icon: "~", title: "滑板 · 电影 · 散步", text: "维基所列的日常爱好。" }
    ],
    milestones: [
      ["2013", "D-BOYS 第10届选拔赛决赛入围，同年以《网球王子》音乐剧第二季正式出道"],
      ["2016", "首次出演刀舞，饰烛台切光忠；同年主演舞台《飙速宅男》箱根学园篇"],
      ["2017", "首部写真集《K》与个人DVD发售；以《红花侠》首次挑战大型音乐剧"],
      ["2019", "《吸血鬼之舞》登上帝国剧场，24岁实现“30岁前站上帝剧”的目标"],
      ["2020", "《泽西男孩》饰鲍勃·高迪欧；举办首场个人音乐剧音乐会《A NEW ME》"],
      ["2022", "TBS日剧《Fight Song》饰乌丸薰，影视作品增多"],
      ["2025", "主演百老汇音乐剧《长靴皇后》，饰查理·普莱斯"],
      ["2026", "电影《蓝色监狱》马狼照英；《假面骑士麦斯》岭高华武利／假面骑士Maou；时隔八年回归刀舞"]
    ],
    sources: [
      ["事务所资料", "https://www.watanabepro.co.jp/mypage/10000062/"],
      ["日文维基", "https://ja.wikipedia.org/wiki/東啓介"],
      ["2017写真集官网", "https://higashikeisuke.ponycanyon.co.jp/"]
    ]
  },

  /* 正在进行的主要工作（首页大卡片） */
  now: [
    {
      title: "舞台《刀剑乱舞》陽伝 月亮、太阳与繁星",
      ja: "舞台『刀剣乱舞』陽伝 月と太陽と星々よ",
      role: "烛台切光忠",
      kind: "舞台 · 前后编二部作",
      image: "https://stage-toukenranbu.jp/wp-content/uploads/2026/07/05%E3%80%90WEB%E3%80%91%E2%98%85toustayou_CV_shokudaikiri.jpg",
      imageNote: "官网角色视觉：烛台切光忠",
      lines: [
        "预演 11/10 · 明治座",
        "东京 11/11–11/29 · 明治座",
        "大阪 12/6–12/23 · 新歌舞伎座",
        "东京凯旋 12/29–12/31 · SGC HALL ARIAKE",
        "线上配信 11/11 · 12/30 · 12/31"
      ],
      note: "凯旋公演有“岁末感谢·开运巡游”企画，入场送开运团扇。东京公演有当日引换券和当日券（抽选）。Blu-ray/DVD 2027年5月19日发售。",
      links: [
        ["官网", "https://stage-toukenranbu.jp/stage/"],
        ["日程·票务", "https://stage-toukenranbu.jp/stage/schedule"],
        ["媒体露出一览", "https://stage-toukenranbu.jp/news/hiden2/4184"]
      ]
    },
    {
      title: "《假面骑士麦斯》",
      ja: "仮面ライダーマイス",
      role: "岭高华武利（みねたか・かむり）／假面骑士Maou",
      kind: "电视剧 · 朝日电视台系列",
      image: "https://www.tv-asahi.co.jp/my-th/character/minetaka/img/img_main01.webp",
      imageNote: "朝日电视台官网角色图",
      lines: [
        "每周日 9:00–9:30 播出（2026/9/6 起）",
        "衍生短剧《十二支十色》在东映特摄FC每周配信",
        "十二支同盟的首领，“猫”之骑士"
      ],
      note: "官网角色页有东启介的演员博客（キャストブログ），每集播出后常更新幕后照片。",
      links: [
        ["官网", "https://www.tv-asahi.co.jp/my-th/"],
        ["角色页 · 演员博客", "https://www.tv-asahi.co.jp/my-th/character/minetaka/"],
        ["《十二支十色》华武利篇预告", "https://www.youtube.com/watch?v=HiW6nsnVHo8"]
      ]
    }
  ],

  /* 最近结束、仍值得回看的作品 */
  recent: [
    { title: "舞台《王者天下Ⅱ：继承》", role: "庞煖", date: "2026/8/9–10/13", image: "https://www.tohostage.com/kingdom2/images/gallery_solo_higashi.jpg", imageNote: "官网舞台剧照", url: "https://www.tohostage.com/kingdom2/" },
    { title: "电影《蓝色监狱》", role: "马狼照英", date: "2026/8/7 上映", image: "assets/img/37a94da506481fff.jpg", imageNote: "官方宣传图", url: "https://bluelock-movie.jp/" },
    { title: "《SWAN：Ballet cross Reading》", role: "草壁飞翔", date: "2026/9/4–9/9", image: "https://swan-balletcrossreading.com/images/top/cast_img3-1.jpg", imageNote: "官网演员照", url: "https://swan-balletcrossreading.com/" }
  ],

  /* 最新动态：新的放最上面。tag 可用：舞台 影视 采访 杂志 广播 综艺 周边 活动 */
  news: [
    { date: "2026-11-15", tag: "活动", title: "确定出演《超英雄祭2027》DAY2（2027/1/21 横滨Arena）", text: "以岭高华武利／假面骑士Maou身份与《麦斯》演员同台；门票 11/15 起一般发售。", url: "https://www.tv-asahi.co.jp/my-th/eiyusai2027/" },
    { date: "2026-11-02", tag: "周边", title: "WE官方生写真〈2026年11月〉开放预约", text: "Watanabe商店（7net）受理至11/15，12/2前后发货。", url: "https://x.com/we_goods_info/status/2117089419144622119" },
    { date: "2026-10-18", tag: "综艺", title: "《玉城裕规的月下美人》第八十三夜 7周年BBQ特别篇 嘉宾出演", text: "与和田琢磨一同作为嘉宾；niconico 有前10分钟免费片段。", url: "https://www.nicovideo.jp/watch/so46942722" },
    { date: "2026-11-16", tag: "采访", title: "刀舞《陽伝》官网更新媒体露出一览", text: "收录各媒体陽伝相关采访的发布日期和链接，会持续追加。", url: "https://stage-toukenranbu.jp/news/hiden2/4184" },
    { date: "2026-11-12", tag: "影视", title: "街机《假面骑士 Ganba Legends》第5弹上线，假面骑士Maou参战", text: "维基记载本人担任Maou语音；万代官方宣传片已公开。", url: "https://www.youtube.com/watch?v=9VPedwZW6vg" },
    { date: "2026-11-10", tag: "舞台", title: "刀舞《陽伝》预演开幕；Blu-ray/DVD定于2027年5月19日发售", text: "东启介时隔八年再演烛台切光忠。前后编二部作，演至12月31日。", url: "https://stage-toukenranbu.jp/stage/" },
    { date: "2026-11-10", tag: "杂志", title: "《PASH!》2026年12月号｜秋谷郁甫×东启介", text: "“十二支画报”连载第1回，音澄宙与岭高华武利的写真和对谈。", url: "https://www.pashplus.jp/blog/500710/" },
    { date: "2026-10-28", tag: "杂志", title: "《anan》No.2517 刀舞总力特集", text: "烛台切光忠单人写真＋采访，以及13振集合写真。共三种版本，买前请对照版本。", url: "https://ananweb.jp/categories/covers/113785" },
    { date: "2026-10-23", tag: "周边", title: "写真集池袋会场追加发券", text: "部分售罄券种追加，10/25 12:00起开售，售完即止。", url: "https://zasshi.tv/products/62295/" },
    { date: "2026-10-18", tag: "周边", title: "最新写真集2027年1月8日发售，三场发售纪念活动", text: "A4，4,400日元（含税）。涩谷1/10、池袋1/17、新宿1/24。", url: "https://zasshi.tv/products/62295/" },
    { date: "2026-10-17", tag: "影视", title: "《十二支十色》第7话“完美男友检定～岭高华武利篇～”配信", text: "以华武利为主角的一话。", url: "https://www.youtube.com/watch?v=HiW6nsnVHo8" },
    { date: "2026-10-13", tag: "舞台", title: "《王者天下Ⅱ：继承》博多座千秋乐，全公演结束", text: "东京、大阪、福冈三地巡演，饰庞煖。", url: "https://www.tohostage.com/kingdom2/" },
    { date: "2026-10-01", tag: "杂志", title: "《宇宙船》vol.194｜《假面骑士麦斯》专访", text: "东启介专访在第41页，另附Maou海报。", url: "https://www.uchusen-mag.jp/" },
    { date: "2026-09-06", tag: "影视", title: "《假面骑士麦斯》开播", text: "每周日9:00，朝日电视台系列。", url: "https://www.tv-asahi.co.jp/my-th/" },
    { date: "2026-09-05", tag: "采访", title: "STREAM｜东启介《SWAN》专访", text: "「人生只有一次，不管失败与否，笔直奔跑的样子很帅」。", url: "https://strmweb.jp/archives/22701/" },
    { date: "2026-08-31", tag: "采访", title: "演剧媒体Audience｜东启介×西野辽《SWAN》对谈", text: "目标是“跨越芭蕾与戏剧界线的瞬间”。", url: "https://engeki-audience.com/article/detail/23194/" },
    { date: "2026-09-02", tag: "采访", title: "Animate Times｜华武利与Maou的“顽皮魅力”", text: "谈角色存在感、和皮套演员的配合，以及第一次拍特摄的体验。", url: "https://www.animatetimes.com/news/details.php?id=1788235894" },
    { date: "2026-07-10", tag: "采访", title: "《SWAN》官方演员访谈视频公开", text: "东启介谈草壁飞翔一角。", url: "https://www.youtube.com/watch?v=0hsF8IqwY1o" },
    { date: "2026-08-09", tag: "舞台", title: "《王者天下Ⅱ：继承》开幕", text: "Brillia HALL，饰庞煖。", url: "https://www.tohostage.com/kingdom2/" },
    { date: "2026-08-07", tag: "影视", title: "电影《蓝色监狱》上映", text: "饰马狼照英。", url: "https://bluelock-movie.jp/" }
  ],

  /* 周边与商品 */
  goods: [
    {
      title: "WE官方生写真〈2026年11月〉",
      date: "2026-12-02",
      price: "800日元（含税）",
      publisher: "ワタナベ商店（7net）",
      image: "https://7net.omni7.jp/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/033131/2190053499.jpg",
      points: ["预约期 11/2 12:00–11/15 23:59（已截止）", "12月2日前后发货", "WE官方生写真每月发售，新一期见 7net 专页"],
      url: "https://7net.omni7.jp/general/watanabeprobro.html"
    },
    {
      title: "东启介最新写真集（暂定名）",
      date: "2027-01-08",
      price: "4,400日元（含税）· A4",
      publisher: "东京新闻通信社",
      image: "assets/img/b4ccb520b19a2bb1.jpg",
      points: [
        "Amazon · 乐天：限定封面版",
        "7net：亲笔签名版（发售日后发货）",
        "Animate通贩：附生写真1张",
        "发售纪念活动：1/10 涩谷 SHIBUYA TSUTAYA · 1/17 池袋 HMVエソラ · 1/24 新宿 Book First（各13:00起，网上申请）"
      ],
      url: "https://zasshi.tv/products/62295/"
    },
    {
      title: "《TV指南 Stage Stars》vol.34",
      date: "2026-12-03",
      price: "",
      publisher: "东京新闻通信社",
      image: "assets/img/9a6bda52c3306f52.jpg",
      points: ["Special Other Cuts：最新写真集未使用照片"],
      url: "https://zasshi.tv/products/62998/"
    },
    {
      title: "刀舞《陽伝》Blu-ray / DVD",
      date: "2027-05-19",
      price: "",
      publisher: "舞台『刀剣乱舞』製作委員会",
      image: "",
      points: ["TOHO animation STORE 期间限定特典附发售纪念活动抽选应募券"],
      url: "https://stage-toukenranbu.jp/stage/"
    },
    {
      title: "刀舞《陽伝》公演周边",
      date: "",
      price: "",
      publisher: "官网 GOODS 页",
      image: "",
      points: ["会场与通贩周边以官网 GOODS 页为准"],
      url: "https://stage-toukenranbu.jp/"
    },
    {
      title: "变身腰带 DX Maou Driver",
      date: "",
      price: "",
      publisher: "万代 BANDAI",
      image: "",
      points: ["《假面骑士麦斯》假面骑士Maou的变身玩具；官方TVCM见视频栏"],
      url: "https://www.youtube.com/watch?v=baMEfVIuI-w"
    },
    {
      title: "过往写真集与日历写真书",
      date: "",
      price: "",
      publisher: "写真集 · 日历书",
      image: "https://tshop.r10s.jp/book/cabinet/8492/9784048968492.jpg?downsize=600:*",
      points: ["1st写真集《K》2017/3/15（Pony Canyon）", "写真集《何色》2021/3/10（KADOKAWA）", "日历写真书 2021、2023、2024、2025 年度版", "详细在“作品与媒体露出 → 写真·出版”"],
      url: "archive.html?cat=%E5%86%99%E7%9C%9F%EF%BC%8F%E5%87%BA%E7%89%88"
    }
  ],

  /* 官方渠道指路（只放链接，不搬运本人SNS和FC内容） */
  channels: {
    self: [
      { name: "X（Twitter）", handle: "@keisuke_higashi", url: "https://x.com/keisuke_higashi", note: "本人账号，工作告知与日常" },
      { name: "Instagram", handle: "keisuke_higashi_official", url: "https://www.instagram.com/keisuke_higashi_official/", note: "照片与直播" },
      { name: "官方粉丝俱乐部", handle: "waction.jp", url: "https://waction.jp/higashi_keisuke/", note: "会员内容请自行订阅" },
      { name: "事务所资料页", handle: "Watanabe Ent.", url: "https://www.watanabepro.co.jp/mypage/10000062/", note: "最新出演情报与经历" },
      { name: "WE Goods Info（X）", handle: "@we_goods_info", url: "https://x.com/we_goods_info", note: "事务所官方周边：生写真等预约告知" },
      { name: "WE官方生写真（每月）", handle: "7net · ワタナベ商店", url: "https://7net.omni7.jp/general/watanabeprobro.html", note: "每月新作生写真套装，限期预约" },
      { name: "We!プレ（X）", handle: "@wepremium", url: "https://x.com/wepremium", note: "事务所会员先行票务等资讯" },
      { name: "事务所公演日程", handle: "LIVE SCHEDULE", url: "https://www.watanabepro.co.jp/liveinfo/?artist_id=10000062", note: "按日查看演出" }
    ],
    works: [
      { name: "舞台《刀剑乱舞》", url: "https://stage-toukenranbu.jp/" },
      { name: "假面骑士麦斯 · 朝日电视台", url: "https://www.tv-asahi.co.jp/my-th/" },
      { name: "华武利角色页", url: "https://www.tv-asahi.co.jp/my-th/character/minetaka/" },
      { name: "麦斯演员博客（东启介）", url: "https://www.tv-asahi.co.jp/my-th/castblog/0016/" },
      { name: "《SWAN》官网", url: "https://swan-balletcrossreading.com/" },
      { name: "超英雄祭2027 官网", url: "https://www.tv-asahi.co.jp/my-th/eiyusai2027/" },
      { name: "TV指南PERSON / Stage Stars（X）", url: "https://x.com/TVguidePERSON" },
      { name: "电影《蓝色监狱》", url: "https://bluelock-movie.jp/" },
      { name: "写真集 · 东京新闻通信社", url: "https://zasshi.tv/products/62295/" },
      { name: "《Nostalgic Cabaret》· 东宝", url: "https://www.tohostage.com/nostalgic_cabaret/" },
      { name: "日文维基百科", url: "https://ja.wikipedia.org/wiki/東啓介" }
    ]
  }
};
