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
 "updated": "2026-11-17",
 "profile": {
  "name": "东启介",
  "nameJa": "東 啓介",
  "kana": "ひがし けいすけ",
  "roman": "Keisuke Higashi",
  "nicknames": [
   "とんちゃん",
   "とんすけ"
  ],
  "tagline": "舞台、音乐剧与影视两栖的演员。身高190cm，书道六段，热爱钢琴与摄影。",
  "facts": [
   [
    "生日",
    "1995年7月14日"
   ],
   [
    "出身",
    "东京都"
   ],
   [
    "身高",
    "190cm"
   ],
   [
    "血型",
    "O型"
   ],
   [
    "所属",
    "Watanabe Entertainment（ワタナベエンターテインメント）"
   ],
   [
    "出道",
    "2013年《网球王子》音乐剧第二季（千岁千里）"
   ],
   [
    "资格",
    "普通汽车驾照 · 书道六段"
   ]
  ],
  "skills": [
   {
    "icon": "筆",
    "title": "书道 六段",
    "text": "小学开始练字，2017年时已达六段，官方资料把书道列为第一特技。"
   },
   {
    "icon": "♪",
    "title": "钢琴",
    "text": "学过4年钢琴，喜欢自弹自唱；个人音乐会和直播里常弹奏。"
   },
   {
    "icon": "◎",
    "title": "摄影",
    "text": "官方特技之一。在QJWeb连载「QJ相机部」，还有网络节目《东启介的相机之旅》。"
   },
   {
    "icon": "♫",
    "title": "吉他 · 音乐鉴赏",
    "text": "事务所资料写的爱好；2020年公开原创曲《こえ》。"
   },
   {
    "icon": "●",
    "title": "篮球 · 网球",
    "text": "篮球2年；软式网球3年，曾打进东京都大赛。"
   },
   {
    "icon": "~",
    "title": "滑板 · 电影 · 散步",
    "text": ""
   }
  ],
  "milestones": [
   [
    "2013",
    "D-BOYS 第10届选拔赛决赛入围，同年以《网球王子》音乐剧第二季正式出道"
   ],
   [
    "2016",
    "首次出演刀舞，饰烛台切光忠；同年主演舞台《飙速宅男》箱根学园篇"
   ],
   [
    "2017",
    "首部写真集《K》与个人DVD发售；以《红花侠》首次挑战大型音乐剧"
   ],
   [
    "2019",
    "《吸血鬼之舞》登上帝国剧场，24岁实现“30岁前站上帝剧”的目标"
   ],
   [
    "2020",
    "《泽西男孩》饰鲍勃·高迪欧；举办首场个人音乐剧音乐会《A NEW ME》"
   ],
   [
    "2022",
    "TBS日剧《Fight Song》饰乌丸薰，影视作品增多"
   ],
   [
    "2025",
    "主演百老汇音乐剧《长靴皇后》，饰查理·普莱斯"
   ],
   [
    "2026",
    "电影《蓝色监狱》马狼照英；《假面骑士麦斯》岭高华武利／假面骑士Maou；时隔八年回归刀舞"
   ]
  ],
  "sources": [
   [
    "事务所资料",
    "https://www.watanabepro.co.jp/mypage/10000062/"
   ],
   [
    "2017写真集官网",
    "https://higashikeisuke.ponycanyon.co.jp/"
   ]
  ]
 },
 "now": [
  {
   "title": "舞台《刀剑乱舞》陽伝 月亮、太阳与繁星",
   "ja": "舞台『刀剣乱舞』陽伝 月と太陽と星々よ",
   "role": "烛台切光忠",
   "kind": "舞台 · 前后编二部作",
   "image": "https://stage-toukenranbu.jp/wp-content/uploads/2026/07/05%E3%80%90WEB%E3%80%91%E2%98%85toustayou_CV_shokudaikiri.jpg",
   "imageNote": "官网角色视觉：烛台切光忠",
   "lines": [
    "预演 11/10 · 明治座",
    "东京 11/11–11/29 · 明治座",
    "大阪 12/6–12/23 · 新歌舞伎座",
    "东京凯旋 12/29–12/31 · SGC HALL ARIAKE",
    "线上配信 11/11 · 12/30 · 12/31"
   ],
   "note": "凯旋公演有“岁末感谢·开运巡游”企画，入场送开运团扇。东京公演有当日引换券和当日券（抽选）。Blu-ray/DVD 2027年5月19日发售。",
   "links": [
    [
     "官网",
     "https://stage-toukenranbu.jp/stage/"
    ],
    [
     "日程·票务",
     "https://stage-toukenranbu.jp/stage/schedule"
    ],
    [
     "媒体露出一览",
     "https://stage-toukenranbu.jp/news/hiden2/4184"
    ],
    [
     "明治座公演页",
     "https://www.meijiza.co.jp/info/2026/2026_11_01/"
    ]
   ]
  },
  {
   "title": "《假面骑士麦斯》",
   "ja": "仮面ライダーマイス",
   "role": "岭高华武利（みねたか・かむり）／假面骑士Maou",
   "kind": "电视剧 · 朝日电视台系列",
   "image": "https://www.tv-asahi.co.jp/my-th/character/minetaka/img/img_main01.webp",
   "imageNote": "朝日电视台官网角色图",
   "lines": [
    "每周日 9:00–9:30 播出（2026/9/6 起）",
    "衍生短剧《十二支十色》在东映特摄FC每周配信",
    "十二支同盟的首领，“猫”之骑士"
   ],
   "note": "官网角色页有东启介的演员博客（キャストブログ），每集播出后常更新幕后照片。",
   "links": [
    [
     "官网",
     "https://www.tv-asahi.co.jp/my-th/"
    ],
    [
     "角色页 · 演员博客",
     "https://www.tv-asahi.co.jp/my-th/character/minetaka/"
    ],
    [
     "《十二支十色》华武利篇预告",
     "https://www.youtube.com/watch?v=HiW6nsnVHo8"
    ]
   ]
  }
 ],
 "recent": [
  {
   "title": "舞台《王者天下Ⅱ：继承》",
   "role": "庞煖",
   "date": "2026/8/9–10/13",
   "image": "https://www.tohostage.com/kingdom2/images/gallery_solo_higashi.jpg",
   "imageNote": "官网舞台剧照",
   "url": "https://www.tohostage.com/kingdom2/"
  },
  {
   "title": "电影《蓝色监狱》",
   "role": "马狼照英",
   "date": "2026/8/7 上映",
   "image": "https://animeanime.jp/imgs/zoom/889762.jpg",
   "imageNote": "电影场面照：马狼把对手撞倒那场（アニメ！アニメ！）",
   "url": "https://bluelock-movie.jp/",
   "imageBg": "69% 29% / auto 300%"
  },
  {
   "title": "《SWAN：Ballet cross Reading》",
   "role": "草壁飞翔",
   "date": "2026/9/4–9/9",
   "image": "https://swan-balletcrossreading.com/images/top/cast_img3-1.jpg",
   "imageNote": "官网演员照",
   "url": "https://swan-balletcrossreading.com/"
  }
 ],
 "news": [
  {
   "date": "2026-11-15",
   "tag": "活动",
   "title": "确定出演《超英雄祭2027》DAY2（2027/1/21 横滨Arena）",
   "text": "以岭高华武利／假面骑士Maou身份与《麦斯》演员同台；门票 11/15 起一般发售。",
   "url": "https://www.tv-asahi.co.jp/my-th/eiyusai2027/"
  },
  {
   "date": "2026-11-02",
   "tag": "周边",
   "title": "WE官方生写真〈2026年11月〉开放预约",
   "text": "Watanabe商店（7net）受理至11/15，12/2前后发货。",
   "url": "https://x.com/we_goods_info/status/2117089419144622119"
  },
  {
   "date": "2026-10-18",
   "tag": "综艺",
   "title": "《玉城裕规的月下美人》第八十三夜 7周年BBQ特别篇 嘉宾出演",
   "text": "与和田琢磨一同作为嘉宾；niconico 有前10分钟免费片段。",
   "url": "https://www.nicovideo.jp/watch/so46942722"
  },
  {
   "date": "2026-11-16",
   "tag": "采访",
   "title": "刀舞《陽伝》官网更新媒体露出一览",
   "text": "收录各媒体陽伝相关采访的发布日期和链接，会持续追加。",
   "url": "https://stage-toukenranbu.jp/news/hiden2/4184"
  },
  {
   "date": "2026-11-12",
   "tag": "影视",
   "title": "街机《假面骑士 Ganba Legends》第5弹上线，假面骑士Maou参战",
   "text": "Maou 的变身语音是他配的，万代官方宣传片里能听到。",
   "url": "https://www.youtube.com/watch?v=9VPedwZW6vg"
  },
  {
   "date": "2026-11-10",
   "tag": "舞台",
   "title": "刀舞《陽伝》预演开幕；Blu-ray/DVD定于2027年5月19日发售",
   "text": "东启介时隔八年再演烛台切光忠。前后编二部作，演至12月31日。",
   "url": "https://stage-toukenranbu.jp/stage/"
  },
  {
   "date": "2026-11-10",
   "tag": "杂志",
   "title": "《PASH!》2026年12月号｜秋谷郁甫×东启介",
   "text": "“十二支画报”连载第1回，音澄宙与岭高华武利的写真和对谈。",
   "url": "https://www.pashplus.jp/blog/500710/"
  },
  {
   "date": "2026-10-28",
   "tag": "杂志",
   "title": "《anan》No.2517 刀舞总力特集",
   "text": "烛台切光忠单人写真＋采访，以及13振集合写真。共三种版本，买前请对照版本。",
   "url": "https://ananweb.jp/categories/covers/113785"
  },
  {
   "date": "2026-10-23",
   "tag": "周边",
   "title": "写真集池袋会场追加发券",
   "text": "部分售罄券种追加，10/25 12:00起开售，售完即止。",
   "url": "https://zasshi.tv/products/62295/"
  },
  {
   "date": "2026-10-18",
   "tag": "周边",
   "title": "最新写真集2027年1月8日发售，三场发售纪念活动",
   "text": "A4，4,400日元（含税）。涩谷1/10、池袋1/17、新宿1/24。",
   "url": "https://zasshi.tv/products/62295/"
  },
  {
   "date": "2026-10-17",
   "tag": "影视",
   "title": "《十二支十色》第7话“完美男友检定～岭高华武利篇～”配信",
   "text": "以华武利为主角的一话。",
   "url": "https://www.youtube.com/watch?v=HiW6nsnVHo8"
  },
  {
   "date": "2026-10-13",
   "tag": "舞台",
   "title": "《王者天下Ⅱ：继承》博多座千秋乐，全公演结束",
   "text": "东京、大阪、福冈三地巡演，饰庞煖。",
   "url": "https://www.tohostage.com/kingdom2/"
  },
  {
   "date": "2026-10-01",
   "tag": "杂志",
   "title": "《宇宙船》vol.194｜《假面骑士麦斯》专访",
   "text": "东启介专访在第41页，另附Maou海报。",
   "url": "https://www.uchusen-mag.jp/"
  },
  {
   "date": "2026-09-06",
   "tag": "影视",
   "title": "《假面骑士麦斯》开播",
   "text": "每周日9:00，朝日电视台系列。",
   "url": "https://www.tv-asahi.co.jp/my-th/"
  },
  {
   "date": "2026-09-05",
   "tag": "采访",
   "title": "STREAM｜东启介《SWAN》专访",
   "text": "「人生只有一次，不管失败与否，笔直奔跑的样子很帅」。",
   "url": "https://strmweb.jp/archives/22701/"
  },
  {
   "date": "2026-08-31",
   "tag": "采访",
   "title": "演剧媒体Audience｜东启介×西野辽《SWAN》对谈",
   "text": "目标是“跨越芭蕾与戏剧界线的瞬间”。",
   "url": "https://engeki-audience.com/article/detail/23194/"
  },
  {
   "date": "2026-09-02",
   "tag": "采访",
   "title": "Animate Times｜华武利与Maou的“顽皮魅力”",
   "text": "谈角色存在感、和皮套演员的配合，以及第一次拍特摄的体验。",
   "url": "https://www.animatetimes.com/news/details.php?id=1788235894"
  },
  {
   "date": "2026-07-10",
   "tag": "采访",
   "title": "《SWAN》官方演员访谈视频公开",
   "text": "东启介谈草壁飞翔一角。",
   "url": "https://www.youtube.com/watch?v=0hsF8IqwY1o"
  },
  {
   "date": "2026-08-09",
   "tag": "舞台",
   "title": "《王者天下Ⅱ：继承》开幕",
   "text": "Brillia HALL，饰庞煖。",
   "url": "https://www.tohostage.com/kingdom2/"
  },
  {
   "date": "2026-08-07",
   "tag": "影视",
   "title": "电影《蓝色监狱》上映",
   "text": "饰马狼照英。",
   "url": "https://bluelock-movie.jp/"
  }
 ],
 "pastGoods": [
  {
   "date": "2025-08-01",
   "title": "30岁生日音乐会《afterglow》周边",
   "bday": 1,
   "status": "部分售罄",
   "price": "场刊／收纳包／亚克力钥匙扣",
   "image": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/dwbf62c4fb/033131/2110671822.jpg",
   "points": [
    "2025.7.11 COTTON CLUB 生日音乐会官方周边",
    "亚克力钥匙扣已经卖完了，场刊和收纳包看7net页面"
   ],
   "url": "https://7net.omni7.jp/search?q=afterglow%20%E6%9D%B1%E5%95%93%E4%BB%8B",
   "publisher": "WE SHOP／ワタナベ商店",
   "items": [
    {
     "t": "パンフレット",
     "st": "有货",
     "img": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/dwbf62c4fb/033131/2110671822.jpg",
     "u": "https://7net.omni7.jp/detail/2110671822.html"
    },
    {
     "t": "亚克力钥匙扣",
     "st": "已结束",
     "img": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/dw1191a1ac/033131/2110671824.jpg",
     "u": "https://7net.omni7.jp/detail/2110671824.html"
    },
    {
     "t": "收纳包",
     "st": "",
     "img": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/dwdd5cce4b/033131/2110671823.jpg",
     "u": "https://7net.omni7.jp/detail/2110671823.html"
    }
   ]
  },
  {
   "date": "2024-12-05",
   "title": "《Connecting Puzzles vol.2》音乐会周边",
   "status": "已售罄",
   "price": "猫咪长袖T 5,000円 · 亚克力立牌 1,800円 · 贴纸 900円 · 半身生写真 800円",
   "image": "https://stat.ameba.jp/user_images/20241017/12/we-goodsinfo/28/df/j/o2380336815498946018.jpg",
   "points": [
    "长袖T后领印着本人设计的猫咪「きゃっとん。」",
    "亚克力立牌第二弹，可套用上一弹的底座"
   ],
   "url": "https://ameblo.jp/we-goodsinfo/entry-12871597232.html",
   "publisher": "WE SHOP／ワタナベ商店",
   "items": [
    {
     "t": "亚克力立牌",
     "st": "缺货",
     "img": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/dwc9f2ab5e/033131/2110656753.jpg",
     "u": "https://7net.omni7.jp/detail/2110656753.html"
    },
    {
     "t": "きゃっとん。长袖T",
     "st": "有货",
     "img": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/dwed06940c/033131/2110656751.jpg",
     "u": "https://7net.omni7.jp/detail/2110656751.html"
    },
    {
     "t": "半身生写真套组",
     "st": "缺货",
     "img": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/dwd2d08859/033131/2110656754.jpg",
     "u": "https://7net.omni7.jp/detail/2110656754.html"
    },
    {
     "t": "贴纸套组",
     "st": "",
     "img": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/dw58de1e49/033131/2110656755.jpg",
     "u": "https://7net.omni7.jp/detail/2110656755.html"
    }
   ]
  },
  {
   "date": "2024-06-01",
   "title": "JBB Concert Tour 2024 巡演周边",
   "status": "官方BOOTH通贩",
   "price": "场刊 3,000円 · T恤 3,000円 · 亚克力立牌 3,000円 · 扁平收纳盒 2,000円 · 镭射钥匙扣 1,500円 · 巾着托特 2,000円 · 环保袋 1,500円",
   "image": "https://booth.pximg.net/7b6ba865-5b86-4790-a400-77fb8f3fedb5/i/5962114/82347b6d-26ac-480d-b671-8bb5104674d7_base_resized.jpg",
   "points": [
    "场刊30页B5，收录四人对谈和录音现场，附A4棉质托特包",
    "亚克力立牌四人一套，底座是拼图式，可以换顺序",
    "扁平收纳盒上的四只小熊分别以四个人为原型",
    "T恤藏青色S–XL，巡演终场贩售；巾着托特为Hall场限定，环保袋为Billboard大阪·横浜限定"
   ],
   "url": "https://jbb2024.booth.pm/items",
   "publisher": "JBB 官方 BOOTH",
   "items": [
    {
     "t": "场刊（附托特包）",
     "st": "缺货",
     "img": "https://booth.pximg.net/7b6ba865-5b86-4790-a400-77fb8f3fedb5/i/5961437/2b3b35ec-e5f1-4928-828c-0a231556d393_base_resized.jpg",
     "u": "https://booth.pm/ja/items/5961437"
    },
    {
     "t": "原创T恤",
     "st": "缺货",
     "img": "https://booth.pximg.net/7b6ba865-5b86-4790-a400-77fb8f3fedb5/i/6204064/2c4888a3-0282-4d76-a2fb-b0e63621239d_base_resized.jpg",
     "u": "https://booth.pm/ja/items/6204064"
    },
    {
     "t": "亚克力立牌（4人1套）",
     "st": "缺货",
     "img": "https://booth.pximg.net/7b6ba865-5b86-4790-a400-77fb8f3fedb5/i/5962114/82347b6d-26ac-480d-b671-8bb5104674d7_base_resized.jpg",
     "u": "https://booth.pm/ja/items/5962114"
    },
    {
     "t": "扁平收纳盒",
     "st": "有货",
     "img": "https://booth.pximg.net/7b6ba865-5b86-4790-a400-77fb8f3fedb5/i/5961517/9e3c3222-20e7-4d97-ac8a-97a806057714_base_resized.jpg",
     "u": "https://booth.pm/ja/items/5961517"
    },
    {
     "t": "镭射钥匙扣",
     "st": "缺货",
     "img": "https://booth.pximg.net/7b6ba865-5b86-4790-a400-77fb8f3fedb5/i/5961867/e23a0083-1e94-4a7c-8bbc-49236316281f_base_resized.jpg",
     "u": "https://booth.pm/ja/items/5961867"
    },
    {
     "t": "Hall限定 巾着托特",
     "st": "缺货",
     "img": "https://booth.pximg.net/7b6ba865-5b86-4790-a400-77fb8f3fedb5/i/5962137/cdd1dd3d-805f-434b-9b4c-8167c7e8c621_base_resized.jpg",
     "u": "https://booth.pm/ja/items/5962137"
    },
    {
     "t": "Billboard限定 环保袋",
     "st": "缺货",
     "img": "https://booth.pximg.net/7b6ba865-5b86-4790-a400-77fb8f3fedb5/i/5961882/d9a7085e-59ea-4cba-baa3-6f9b6e1c4b7e_base_resized.jpg",
     "u": "https://booth.pm/ja/items/5961882"
    }
   ]
  },
  {
   "date": "2024-04-01",
   "title": "《WE ARE MUSIC》vol.1 生写真套组（东启介）",
   "status": "已售罄",
   "price": "生写真套组",
   "image": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/dwe08ed40c/033131/2110647487.jpg",
   "points": [
    "Musical shoW「WE ARE MUSIC」vol.1 纪念生写真"
   ],
   "url": "https://7net.omni7.jp/detail/2110647487.html",
   "publisher": "WE SHOP／ワタナベ商店",
   "items": [
    {
     "t": "生写真套组",
     "st": "缺货",
     "img": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/dwe08ed40c/033131/2110647487.jpg",
     "u": "https://7net.omni7.jp/detail/2110647487.html"
    },
    {
     "t": "亚克力立牌",
     "st": "缺货",
     "img": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/dw6289048a/033131/2110647485.jpg",
     "u": "https://7net.omni7.jp/detail/2110647485.html"
    }
   ]
  },
  {
   "date": "2023-07-14",
   "title": "生日演唱会《音》原创周边",
   "bday": 1,
   "status": "已结束",
   "price": "预约套组 3,000円（亚克力卡2种·文件夹·生写真6枚）",
   "image": "https://matisowa.jp/wp-content/uploads/2023/06/higashi-_BDL_goods_thumbnail.jpg",
   "points": [
    "手持\"28\"气球拍摄，\"Birthday Live 音\"是本人亲笔字",
    "预约套组比会场多一张限定生写真",
    "会场单卖：亚克力卡850円、文件夹500円、生写真5枚1,000円"
   ],
   "url": "https://matisowa.jp/5170/",
   "publisher": "产经新闻社 Matisowa"
  },
  {
   "date": "2022-11-14",
   "title": "《东启介と聴活》原创T恤",
   "status": "已结束（受注生产）",
   "price": "受注贩售",
   "image": "https://matisowa.jp/wp-content/uploads/2023/01/mtsw271.jpg",
   "points": [
    "连载《东启介と聴活♪》圣诞特别活动纪念T恤"
   ],
   "url": "https://matisowa.jp/382/",
   "publisher": "产经新闻社 Matisowa"
  },
  {
   "date": "2020-11-25",
   "title": "1st Musical Concert《A NEW ME》周边",
   "status": "已售罄",
   "price": "长袖T · 随行杯 · 手帕 · 文件夹套组",
   "image": "https://stat.ameba.jp/user_images/20201016/14/we-goodsinfo/9f/43/j/o0450070514835697602.jpg",
   "points": [
    "东启介全程监制，设计用了本人亲自拍的照片",
    "因疫情不在会场贩售，改为 Watanabe商店事前受注"
   ],
   "url": "https://ameblo.jp/we-goodsinfo/entry-12631883800.html",
   "publisher": "WE SHOP／ワタナベ商店",
   "items": [
    {
     "t": "长袖T 黑",
     "st": "有货",
     "img": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/dwc07bb608/033131/1301466158.jpg",
     "u": "https://7net.omni7.jp/detail/1301466158.html"
    },
    {
     "t": "长袖T 白",
     "st": "有货",
     "img": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/dw8d68dc3a/033131/1301466161.jpg",
     "u": "https://7net.omni7.jp/detail/1301466161.html"
    },
    {
     "t": "文件夹套组",
     "st": "缺货",
     "img": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/dw769d9c5d/033131/1301466156.jpg",
     "u": "https://7net.omni7.jp/detail/1301466156.html"
    },
    {
     "t": "手巾 自然色",
     "st": "缺货",
     "img": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/dw022fb874/033131/1301466165.jpg",
     "u": "https://7net.omni7.jp/detail/1301466165.html"
    },
    {
     "t": "手巾 竹色",
     "st": "",
     "img": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/dw6e0cde84/033131/1301466164.jpg",
     "u": "https://7net.omni7.jp/detail/1301466164.html"
    },
    {
     "t": "随行杯",
     "st": "",
     "img": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/dw5df3db39/033131/1301466157.jpg",
     "u": "https://7net.omni7.jp/detail/1301466157.html"
    }
   ]
  },
  {
   "date": "2020-01-24",
   "title": "「东启介ソロイベント2020」周边",
   "status": "已售罄",
   "price": "2L生写真2枚 800円 · L判6枚 1,200円 · 卫衣 6,000円 等",
   "image": "https://stat.ameba.jp/user_images/20200117/12/we-goodsinfo/50/12/j/o0900127314697511352.jpg",
   "points": [
    "本人亲笔画的原创角色做成的周边",
    "会场当天完售，之后开放过一次受注"
   ],
   "url": "https://ameblo.jp/we-goodsinfo/entry-12570700741.html",
   "publisher": "WE SHOP／ワタナベ商店"
  },
  {
   "date": "2018-04-28",
   "title": "个人活动《Two-ton》周边",
   "status": "已售罄",
   "price": "生写真3种 · 生写真收纳册 1,800円 · 票夹 · とん缶",
   "image": "https://stat.ameba.jp/user_images/20180419/19/we-goodsinfo/8a/8a/j/o0350017214173755330.jpg",
   "points": [
    "亲笔Logo，从选品到设计全程本人监制",
    "收纳册印着本人手写的「想」字"
   ],
   "url": "https://ameblo.jp/we-goodsinfo/entry-12369629960.html",
   "publisher": "WE SHOP／ワタナベ商店",
   "items": [
    {
     "t": "生写真套组B（L判3枚）",
     "st": "缺货",
     "img": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/dwdaab4b3e/033131/1301392057.jpg",
     "u": "https://7net.omni7.jp/detail/1301392057.html"
    },
    {
     "t": "生写真套组A（L判3枚）",
     "st": "缺货",
     "img": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/dwac59f311/033131/1301392056.jpg",
     "u": "https://7net.omni7.jp/detail/1301392056.html"
    },
    {
     "t": "生写真（2L判2枚）",
     "st": "缺货",
     "img": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/dw620e5940/033131/1301392055.jpg",
     "u": "https://7net.omni7.jp/detail/1301392055.html"
    },
    {
     "t": "生写真文件册",
     "st": "缺货",
     "img": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/dw393f8ccb/033131/1301392058.jpg",
     "u": "https://7net.omni7.jp/detail/1301392058.html"
    },
    {
     "t": "票夹",
     "st": "缺货",
     "img": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/dw85cab129/033131/1301392059.jpg",
     "u": "https://7net.omni7.jp/detail/1301392059.html"
    },
    {
     "t": "とん缶",
     "st": "缺货",
     "img": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/dwb7ad4681/033131/1301392060.jpg",
     "u": "https://7net.omni7.jp/detail/1301392060.html"
    }
   ]
  },
  {
   "date": "2018-04-28",
   "title": "《Two-ton》通贩限定 手机壳",
   "status": "已结束（完全受注生产）",
   "price": "M／L 各4,000円",
   "image": "https://stat.ameba.jp/user_images/20180419/19/we-goodsinfo/ce/4d/j/o0595076414173755795.jpg",
   "points": [
    "本人\"想自己用\"而监制的翻盖手机壳",
    "内侧暗印「KEEP SMILING」"
   ],
   "url": "https://ameblo.jp/we-goodsinfo/entry-12369630263.html",
   "publisher": "WE SHOP／ワタナベ商店"
  },
  {
   "date": "2017-07-14",
   "title": "22岁生日 生写真套组",
   "bday": 1,
   "status": "已结束",
   "price": "700円（L判4枚）",
   "image": "https://cdn.suruga-ya.jp/database/pics_light/game/g3639106.jpg",
   "points": [
    "西装造型，\"像时尚杂志内页一样\"的生日生写真",
    "WE SHOP表参道店限定 2017.7.14–8.31"
   ],
   "url": "https://ameblo.jp/we-goodsinfo/entry-12288073752.html",
   "publisher": "WE SHOP／ワタナベ商店"
  },
  {
   "date": "2017-05-03",
   "title": "首次个人活动《First-on》周边",
   "status": "已售罄",
   "price": "生写真 · 卷袖T 3,000円 · 托特包 1,500円 · 手环灯",
   "image": "https://stat.ameba.jp/user_images/20170426/11/we-goodsinfo/c0/9d/j/o0250024913922579089.jpg",
   "points": [
    "第一次自己监制周边，活动Logo是本人亲笔",
    "会场限定生写真附印刷亲笔留言"
   ],
   "url": "https://ameblo.jp/we-goodsinfo/entry-12268879951.html",
   "publisher": "WE SHOP／ワタナベ商店",
   "items": [
    {
     "t": "托特包",
     "st": "缺货",
     "img": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/dwd1e9587a/033131/1301362130.jpg",
     "u": "https://7net.omni7.jp/detail/1301362130.html"
    },
    {
     "t": "手环灯 粉",
     "st": "缺货",
     "img": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/dw7dca7859/033131/1301362131.jpg",
     "u": "https://7net.omni7.jp/detail/1301362131.html"
    },
    {
     "t": "卷袖T恤",
     "st": "",
     "img": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/dw207dab8f/033131/1301362129.jpg",
     "u": "https://7net.omni7.jp/detail/1301362129.html"
    }
   ]
  },
  {
   "date": "2016-12-15",
   "title": "刀舞《虚伝》东启介×纳谷健 双人生写真〔IN〕〔OUT〕",
   "status": "已结束",
   "price": "各500円（L判3枚）",
   "image": "https://stat.ameba.jp/user_images/20161208/16/we-goodsinfo/b5/6f/j/o0313031313816663047.jpg",
   "points": [
    "同龄\"凸凹组合\"的清爽双人照"
   ],
   "url": "https://ameblo.jp/we-goodsinfo/entry-12226803496.html",
   "publisher": "WE SHOP／ワタナベ商店"
  },
  {
   "date": "2016-08-18",
   "title": "特大Special生写真2016 & Special生写真套组2016",
   "status": "已结束",
   "price": "A4 1,200円 · L判3枚 500円",
   "image": "https://stat.ameba.jp/user_images/20160818/14/we-goodsinfo/89/8f/j/o0350024813726329585.jpg",
   "points": [
    "\"和以往不太一样\"的成熟系生写真",
    "WE SHOP表参道店限定"
   ],
   "url": "https://ameblo.jp/we-goodsinfo/entry-12191465623.html",
   "publisher": "WE SHOP／ワタナベ商店"
  },
  {
   "date": "2015-07-28",
   "title": "20岁纪念 特大Special生写真",
   "bday": 1,
   "status": "已结束",
   "price": "A4 1,200円",
   "image": "",
   "points": [
    "迎接20岁生日的纪念款，附印刷留言与签名",
    "WE SHOP表参道店限定 2015.7.28–8.31"
   ],
   "url": "https://ameblo.jp/we-goodsinfo/entry-12029375280.html",
   "publisher": "WE SHOP／ワタナベ商店"
  },
  {
   "date": "2014-08-01",
   "title": "Future系列 东启介生写真 vol.1",
   "status": "已结束",
   "price": "各160円（L判）",
   "image": "",
   "points": [
    "最早期的个人生写真，A/B/C 三种"
   ],
   "url": "https://ameblo.jp/we-goodsinfo/entry-11911691365.html",
   "publisher": "WE SHOP／ワタナベ商店"
  }
 ],
 "goods": [
  {
   "title": "WE官方生写真〈2026年11月〉",
   "date": "2026-12-02",
   "price": "800日元（含税）",
   "publisher": "ワタナベ商店（7net）",
   "image": "https://7net.omni7.jp/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/033131/2190053499.jpg",
   "points": [
    "预约期 11/2 12:00–11/15 23:59（已截止）",
    "12月2日前后发货",
    "WE官方生写真每月发售，新一期见 7net 专页"
   ],
   "url": "https://7net.omni7.jp/general/watanabeprobro.html"
  },
  {
   "title": "东启介最新写真集（暂定名）",
   "date": "2027-01-08",
   "price": "4,400日元（含税）· A4",
   "publisher": "东京新闻通信社",
   "image": "assets/img/b4ccb520b19a2bb1.jpg",
   "points": [
    "Amazon · 乐天：限定封面版",
    "7net：亲笔签名版（发售日后发货）",
    "Animate通贩：附生写真1张",
    "发售纪念活动：1/10 涩谷 SHIBUYA TSUTAYA · 1/17 池袋 HMVエソラ · 1/24 新宿 Book First（各13:00起，网上申请）",
    "活动特典：ぷくぷく（立体泡泡）贴纸，10/30 官方X公开设计样本"
   ],
   "url": "https://zasshi.tv/products/62295/"
  },
  {
   "title": "《TV指南 Stage Stars》vol.34",
   "date": "2026-12-03",
   "price": "",
   "publisher": "东京新闻通信社",
   "image": "assets/img/9a6bda52c3306f52.jpg",
   "points": [
    "Special Other Cuts：最新写真集未使用照片"
   ],
   "url": "https://zasshi.tv/products/62998/"
  },
  {
   "title": "刀舞《陽伝》Blu-ray / DVD",
   "date": "2027-05-19",
   "price": "",
   "publisher": "舞台『刀剣乱舞』製作委員会",
   "image": "https://stage-toukenranbu.jp/wp-content/uploads/2026/11/%E3%80%90WEB%E3%80%91toustayou_KV.jpg",
   "points": [
    "TOHO animation STORE 期间限定特典附发售纪念活动抽选应募券"
   ],
   "url": "https://stage-toukenranbu.jp/stage/"
  },
  {
   "title": "刀舞《陽伝》公演周边",
   "date": "",
   "price": "",
   "publisher": "官网 GOODS 页",
   "image": "https://stage-toukenranbu.jp/wp-content/uploads/2026/09/1_%E9%99%BD%E4%BC%9D_%E5%85%AC%E6%BC%94%E3%83%8F%E3%82%9A%E3%83%B3%E3%83%95%E3%83%AC%E3%83%83%E3%83%88.jpg",
   "points": [
    "会场和通贩周边看官网 GOODS 页"
   ],
   "url": "https://stage-toukenranbu.jp/"
  },
  {
   "title": "变身腰带 DX Maou Driver",
   "date": "2026-10-17",
   "price": "7,920円（含税）",
   "publisher": "万代 BANDAI",
   "image": "https://bandai-a.akamaihd.net/bc/img/model/xl/1000257519_1.jpg",
   "points": [
    "《假面骑士麦斯》假面骑士Maou的变身玩具；官方TVCM见视频栏"
   ],
   "url": "https://toy.bandai.co.jp/ja/series/rider/item/01_21234/"
  },
  {
   "title": "过往写真集与日历写真书",
   "date": "",
   "price": "",
   "publisher": "写真集 · 日历书",
   "image": "https://tshop.r10s.jp/book/cabinet/8492/9784048968492.jpg?downsize=600:*",
   "points": [
    "1st写真集《K》2017/3/15（Pony Canyon）",
    "写真集《何色》2021/3/10（KADOKAWA）",
    "日历写真书 2021、2023、2024、2025 年度版",
    "详细在“作品与媒体露出 → 写真·出版”"
   ],
   "url": "archive.html?cat=%E5%86%99%E7%9C%9F%EF%BC%8F%E5%87%BA%E7%89%88"
  },
  {
   "date": "2026-09-05",
   "title": "Rider Hero Series 假面骑士Maou",
   "price": "990円（含税）",
   "publisher": "万代 BANDAI",
   "image": "https://assets-toy.bandai.co.jp/toy/ja/product/2026/08/p2a3QIYpeJmPvCjf/1000255432_1.jpg",
   "points": [
    "软胶人偶，赤猫变身后的样子"
   ],
   "url": "https://toy.bandai.co.jp/ja/series/rider/item/01_20954/"
  },
  {
   "date": "2026-09-19",
   "title": "TAF 假面骑士Maou",
   "price": "4,400円（含税）",
   "publisher": "万代 BANDAI",
   "image": "https://assets-toy.bandai.co.jp/toy/ja/product/2026/08/i04Ub4bU5VuN3QTZ/1000255433_1.jpg",
   "points": [
    "可动人偶，可以和蛋道具联动"
   ],
   "url": "https://toy.bandai.co.jp/ja/series/rider/item/01_20955/"
  },
  {
   "date": "2026-10-17",
   "title": "变身腰带 DX Maou Driver & Maou Blade 套装",
   "price": "13,750円（含税）",
   "publisher": "万代 BANDAI",
   "image": "https://bandai-a.akamaihd.net/bc/img/model/xl/1000257517_1.jpg",
   "points": [
    "腰带和Maou剑一起的套装",
    "腰带的变身语音是他本人配的"
   ],
   "url": "https://toy.bandai.co.jp/ja/series/rider/item/01_21232/"
  },
  {
   "date": "2026-10-17",
   "title": "DX Maou Blade",
   "price": "5,830円（含税）",
   "publisher": "万代 BANDAI",
   "image": "https://bandai-a.akamaihd.net/bc/img/model/xl/1000257518_1.jpg",
   "points": [
    "Maou的剑单卖版"
   ],
   "url": "https://toy.bandai.co.jp/ja/series/rider/item/01_21233/"
  },
  {
   "date": "2027-03",
   "title": "S.H.Figuarts 假面骑士Maou",
   "price": "9,900円（含税）",
   "publisher": "BANDAI SPIRITS 魂ウェブ",
   "image": "https://tamashiiweb.com/storage/images/products/thumbnail/69043fb0-2497-4cba-9b36-3c57594dd215.webp",
   "points": [
    "一般店头贩售，2027年3月发售"
   ],
   "url": "https://tamashiiweb.com/item/16020/"
  },
  {
   "date": "2026-09-06",
   "title": "岭高华武利 猫 尾戒",
   "price": "",
   "publisher": "Premium Bandai",
   "image": "https://bandai-a.akamaihd.net/bc/img/model/xl/1000256614_1.jpg",
   "points": [
    "剧中华武利戴的细款猫戒指",
    "9/6开订，11/10起又开了一轮受注"
   ],
   "url": "https://p-bandai.jp/item/item-1000256614/"
  },
  {
   "date": "2026-09-06",
   "title": "岭高华武利 猫眼戒指",
   "price": "",
   "publisher": "Premium Bandai",
   "image": "https://bandai-a.akamaihd.net/bc/img/model/xl/1000256611_1.jpg",
   "points": [
    "戒面是黑底猫剪影的那款",
    "和尾戒同一批开订"
   ],
   "url": "https://p-bandai.jp/item/item-1000256611/"
  },
  {
   "date": "2026-08-28",
   "title": "Hero T恤（假面骑士Maou）",
   "price": "",
   "publisher": "Premium Bandai",
   "image": "https://bandai-a.akamaihd.net/bc/img/model/xl/1000256283_1.jpg",
   "points": [
    "黑底，印的是Maou",
    "Premium Bandai 受注"
   ],
   "url": "https://p-bandai.jp/item/item-1000256283/"
  },
  {
   "date": "2026-09-04",
   "title": "亚克力手机支架（假面骑士Maou）",
   "price": "550円（含税）",
   "publisher": "假面骑士商店 东京店・名古屋店",
   "image": "https://pbs.twimg.com/media/HRGk9GCbIAELQsv?format=jpg&name=large",
   "points": [
    "店铺限定，带钥匙扣，可以立手机",
    "Myth、Nox、Dawn也有"
   ],
   "url": "https://x.com/KamenRiderStore/status/2094696768076464195",
   "imagePos": "92% 78%"
  },
  {
   "date": "2026-09-06",
   "title": "朝日电视台限定 亚克力钥匙扣（假面骑士Maou）",
   "price": "",
   "publisher": "テレアサショップ 六本木店・东京站店",
   "image": "https://pbs.twimg.com/media/HRRe1m1bgAAjejN?format=jpg&name=large",
   "points": [
    "只在テレアサショップ两家店卖",
    "Myth、Kuroneko也有"
   ],
   "url": "https://x.com/tv_asahi_shop/status/2096395455735455915"
  },
  {
   "date": "2026-11-14",
   "title": "Rider Hero Series 重涂装版（假面骑士Maou）",
   "price": "",
   "publisher": "假面骑士商店",
   "image": "https://pbs.twimg.com/media/HXIcutVbsAASbNl?format=jpg&name=large",
   "points": [
    "店铺原创，和Rido一起加入",
    "盒背的图也好看，可以连盒摆"
   ],
   "url": "https://x.com/KamenRiderStore/status/2121790031400783919"
  }
 ],
 "channels": {
  "self": [
   {
    "name": "X（Twitter）",
    "handle": "@keisuke_higashi",
    "url": "https://x.com/keisuke_higashi",
    "note": "本人账号，工作告知与日常"
   },
   {
    "name": "Instagram",
    "handle": "keisuke_higashi_official",
    "url": "https://www.instagram.com/keisuke_higashi_official/",
    "note": "照片与直播"
   },
   {
    "name": "官方粉丝俱乐部",
    "handle": "waction.jp",
    "url": "https://waction.jp/higashi_keisuke/",
    "note": "会员内容请自行订阅"
   },
   {
    "name": "事务所资料页",
    "handle": "Watanabe Ent.",
    "url": "https://www.watanabepro.co.jp/mypage/10000062/",
    "note": "最新出演情报与经历"
   },
   {
    "name": "WE Goods Info（X）",
    "handle": "@we_goods_info",
    "url": "https://x.com/we_goods_info",
    "note": "事务所官方周边：生写真等预约告知"
   },
   {
    "name": "WE官方生写真（每月）",
    "handle": "7net · ワタナベ商店",
    "url": "https://7net.omni7.jp/general/watanabeprobro.html",
    "note": "每月新作生写真套装，限期预约"
   },
   {
    "name": "We!プレ（X）",
    "handle": "@wepremium",
    "url": "https://x.com/wepremium",
    "note": "事务所会员先行票务等资讯"
   },
   {
    "name": "事务所公演日程",
    "handle": "LIVE SCHEDULE",
    "url": "https://www.watanabepro.co.jp/liveinfo/?artist_id=10000062",
    "note": "按日查看演出"
   }
  ],
  "works": [
   {
    "name": "舞台《刀剑乱舞》",
    "url": "https://stage-toukenranbu.jp/"
   },
   {
    "name": "假面骑士麦斯 · 朝日电视台",
    "url": "https://www.tv-asahi.co.jp/my-th/"
   },
   {
    "name": "麦斯演员博客（东启介）",
    "url": "https://www.tv-asahi.co.jp/my-th/castblog/0016/"
   },
   {
    "name": "超英雄祭2027 官网",
    "url": "https://www.tv-asahi.co.jp/my-th/eiyusai2027/"
   },
   {
    "name": "写真集 · 东京新闻通信社",
    "url": "https://zasshi.tv/products/62295/"
   },
   {
    "name": "《Nostalgic Cabaret》· 东宝",
    "url": "https://www.tohostage.com/nostalgic_cabaret/"
   }
  ]
 },
 "says": [
  {
   "topic": "梦想与目标",
   "zh": "实现梦想的秘诀？他的答案是“别抱梦想”。梦想一实现就会卡在“接下来怎么办”，所以他只给自己定目标，一个接一个往前走。",
   "ja": "夢を持たないことだと思います",
   "date": "2017-01-18",
   "src": "模特新闻",
   "url": "https://mdpr.jp/interview/detail/1650040"
  },
  {
   "topic": "梦想与目标",
   "zh": "打网球受伤没法再打，朋友一句“去演艺圈换个方式打网球吧”，让出演网球王子音乐剧成了他的第一个梦想。",
   "ja": "夢じゃなくて目標にしたほうがおもしろい",
   "date": "2017-01-18",
   "src": "模特新闻",
   "url": "https://mdpr.jp/interview/detail/1650040"
  },
  {
   "topic": "梦想与目标",
   "zh": "21岁时立下的目标：30岁之前站上帝国剧场的舞台。结果24岁就借《吸血鬼之舞》提前完成了。",
   "ja": "30歳までに、帝国劇場のステージに立ちたいです",
   "date": "2017-01-18",
   "src": "模特新闻",
   "url": "https://mdpr.jp/interview/detail/1650040"
  },
  {
   "topic": "角色幕后",
   "zh": "他自己会打网球，挥拍姿势也很拿手——结果网王里分到的千岁千里是个左撇子，只好用左手从零练起。",
   "ja": "まさかの左利きのキャラで（笑）",
   "date": "2017-01-18",
   "src": "模特新闻",
   "url": "https://mdpr.jp/interview/detail/1650040"
  },
  {
   "topic": "角色幕后",
   "zh": "知道动画版苇木场拓斗由宫野真守配音，当场兴奋起来。",
   "ja": "テンションが上がりました！",
   "date": "2017-01-18",
   "src": "模特新闻",
   "url": "https://mdpr.jp/interview/detail/1650040"
  },
  {
   "topic": "私下小事",
   "zh": "书道六段。第一张DVD包装上的标题字是他自己写的。",
   "ja": "書道6段なんです",
   "date": "2017-01-18",
   "src": "模特新闻",
   "url": "https://mdpr.jp/interview/detail/1650040"
  },
  {
   "topic": "私下小事",
   "zh": "高中修学旅行二月去冲绳，又冷又阴没能下海。第一张DVD主动选了冲绳，总算把这个愿望补上了。",
   "ja": "海にも入れませんでした",
   "date": "2017-01-18",
   "src": "模特新闻",
   "url": "https://mdpr.jp/interview/detail/1650040"
  },
  {
   "topic": "恋爱观",
   "zh": "喜欢的类型：能开开心心跟上他节奏的人。因为他自己很自由、很我行我素。",
   "ja": "僕のペースに楽しんでついてきてくれる人",
   "date": "2017-01-18",
   "src": "模特新闻",
   "url": "https://mdpr.jp/interview/detail/1650040"
  },
  {
   "topic": "恋爱观",
   "zh": "自认“声音控”：声音对他来说特别重要，长相很可爱声音却很低的反差也可以。",
   "ja": "僕は、声です",
   "date": "2018-05-26",
   "src": "周刊女性PRIME",
   "url": "https://www.jprime.jp/articles/-/12438?page=4"
  },
  {
   "topic": "恋爱观",
   "zh": "理想的关系：休息日在家各做各的，却会在同一时刻笑出来。",
   "ja": "同じタイミングで笑えるみたいな関係",
   "date": "2018-05-26",
   "src": "周刊女性PRIME",
   "url": "https://www.jprime.jp/articles/-/12438?page=4"
  },
  {
   "topic": "私下小事",
   "zh": "去柳下大家就像回老家：大哥做饭，他什么都不帮，看着电视自顾自地放松。",
   "ja": "勝手にくつろいでます（笑）",
   "date": "2018-05-26",
   "src": "周刊女性PRIME",
   "url": "https://www.jprime.jp/articles/-/12438"
  },
  {
   "topic": "私下小事",
   "zh": "和人一熟就会猛地拉近距离，对方再忙也会问“一起吃饭吗”。",
   "ja": "すごく距離を詰めちゃうほうなので（笑）",
   "date": "2018-05-26",
   "src": "周刊女性PRIME",
   "url": "https://www.jprime.jp/articles/-/12438?page=6"
  },
  {
   "topic": "私下小事",
   "zh": "化妆间必备：美颜滚轮——但他用来滚脖子和头，唱完歌放松肌肉。常被问“是不是用错地方了”。",
   "ja": "「用途間違えてない？」って言われる",
   "date": "2018-05-26",
   "src": "周刊女性PRIME",
   "url": "https://www.jprime.jp/articles/-/12438?page=6"
  },
  {
   "topic": "舞台趣事",
   "zh": "在《BOY BAND》一人演十三个角色，排练时找不到感觉被导演指出，躲进厕所哭过。后来演出时演摄影师，上台才发现忘了带相机，只好临场圆过去。",
   "ja": "トイレで泣きましたし（笑）",
   "date": "2018-05-26",
   "src": "周刊女性PRIME",
   "url": "https://www.jprime.jp/articles/-/12438?page=6"
  },
  {
   "topic": "身高烦恼",
   "zh": "个子太高，普通直筒裤穿上去轮廓总不满意，所以固定穿紧身裤，想把腿型好好显出来。",
   "ja": "スキニーを履くようにしています",
   "date": "2019-01-16",
   "src": "FAST",
   "url": "https://fast-tokyo.com/keisuke-higashi-special-contents/"
  },
  {
   "topic": "私下小事",
   "zh": "包是他搭配里少不了的单品，托特包、斜挎包买了一堆。",
   "ja": "トートバッグやショルダーバックなど色々",
   "date": "2019-01-16",
   "src": "FAST",
   "url": "https://fast-tokyo.com/keisuke-higashi-special-contents/"
  },
  {
   "topic": "身高烦恼",
   "zh": "日历封面封底都是缩着身子的姿势？因为个子高，拍照时总有一种“必须缩起来才能进画面”的使命感。",
   "ja": "縮こまらないといけないという使命感にかられて…（笑）",
   "date": "2025-02-22",
   "src": "WEBザテレビジョン",
   "url": "https://thetv.jp/news/detail/1247697/"
  },
  {
   "topic": "私下小事",
   "zh": "喜欢老车老摩托。没有摩托驾照，但如果有，想骑去箱根、热海，一路拍照。",
   "ja": "僕も昔の車が好きなので",
   "date": "2025-02-22",
   "src": "WEBザテレビジョン",
   "url": "https://thetv.jp/news/detail/1247697/"
  },
  {
   "topic": "梦想与目标",
   "zh": "快30岁了，前辈们都说“30代就动不了了”，所以从现在开始注意身体，免得几年后真的动不了。",
   "ja": "「本当に動けなくなっちゃった…」となると困るので",
   "date": "2025-02-22",
   "src": "WEBザテレビジョン",
   "url": "https://thetv.jp/news/detail/1247697/"
  },
  {
   "topic": "角色幕后",
   "zh": "小时候看的假面骑士：空我看得最多，龙骑、555、剑也看过。",
   "ja": "『仮面ライダークウガ』をよく見ていました",
   "date": "2026-09-02",
   "src": "animate times",
   "url": "https://www.animatetimes.com/news/details.php?id=1788235894"
  },
  {
   "topic": "角色幕后",
   "zh": "假面骑士Maou强到不需要多余动作。打斗里要有“猫抓虫子玩”那样的恶作剧心，而不只是把人揍趴下。",
   "ja": "猫が虫を捕まえて遊ぶくらいのイタズラ心",
   "date": "2026-09-02",
   "src": "animate times",
   "url": "https://www.animatetimes.com/news/details.php?id=1788235894"
  },
  {
   "topic": "角色幕后",
   "zh": "演马狼照英，表情要像美杜莎一样，让人看一眼就僵住。",
   "ja": "メデューサじゃないですけど",
   "date": "2026-08-07",
   "src": "animate times",
   "url": "https://www.animatetimes.com/news/details.php?id=1785993354"
  },
  {
   "topic": "角色幕后",
   "zh": "马狼那句一直挂在嘴边的“へたくそ（菜鸟）”，他试了各种不同的说法。",
   "ja": "「へたくそ」はいろんな言い方しました",
   "date": "2026-08-07",
   "src": "animate times",
   "url": "https://www.animatetimes.com/news/details.php?id=1785993354"
  },
  {
   "topic": "角色幕后",
   "zh": "足球零基础，为《蓝色监狱》练了大约一年半，还被高桥文哉陪着加练。",
   "ja": "約1年半のサッカー練習",
   "date": "2026-08-07",
   "src": "animate times",
   "url": "https://www.animatetimes.com/news/details.php?id=1785993354"
  },
  {
   "topic": "身高烦恼",
   "zh": "拍《武士マック》时和演寿惠的佐藤真弓对戏，自己先吐槽：两人的身高差非常大。",
   "ja": "僕と、ものすごく身長差があります（笑）",
   "date": "2022-05-24",
   "src": "マイナビニュース",
   "url": "https://news.mynavi.jp/article/20220524-2349986/"
  },
  {
   "topic": "角色幕后",
   "zh": "以前常看《电车男》，能和主角伊藤淳史同台，觉得是非常难得的机会。",
   "ja": "『電車男』をよく見ていたので",
   "date": "2022-05-24",
   "src": "マイナビニュース",
   "url": "https://news.mynavi.jp/article/20220524-2349986/"
  },
  {
   "topic": "私下小事",
   "zh": "自己也玩游戏，接到《Chaser Game》时很开心能了解做游戏那一方，一口气把原作漫画读完了。",
   "ja": "原作を一気に読んでしまいました",
   "date": "2022-08-23",
   "src": "东京电视台官网",
   "url": "https://www.tv-tokyo.co.jp/chasergame/cast/"
  },
  {
   "topic": "私下小事",
   "zh": "“とんちゃん”这个爱称的由来：学校老师告诉他“东”也可以读成“とん”，之后老师就一直这么叫他。",
   "ja": "学校の先生が「東」を「とん」と読むと教えてくれて",
   "date": "2024-06-21",
   "src": "ワタナベエンターテインメント官方X",
   "url": "https://x.com/WatanabeEnt/status/1804065936887943392"
  },
  {
   "topic": "私下小事",
   "zh": "2024年日历的看点他卖了个关子：有一张会让人想“咦，这个站姿该不会是……？”",
   "ja": "「あれ、その立ち方はもしかして？」となるものがある",
   "date": "2024-01-12",
   "src": "TVガイドWeb",
   "url": "https://www.tvguide.or.jp/news/news-2659764/"
  },
  {
   "date": "2016-06-17",
   "src": "ライブドアニュース",
   "url": "https://news.livedoor.com/article/detail/11636628/",
   "topic": "梦想与目标",
   "zh": "原本的梦想是当网球教练，中学到高中一直打网球，高一快结束时受伤，休养期间看电视剧才对演戏产生兴趣。",
   "ja": "ずっとテニスのインストラクターになりたくて"
  },
  {
   "date": "2016-06-17",
   "src": "ライブドアニュース",
   "url": "https://news.livedoor.com/article/detail/11636628/",
   "topic": "私下小事",
   "zh": "以前很怕出风头，完全没想过上电视杂志。结果高中同学说“早觉得你会进演艺圈”——他自己的结论是：其实并不讨厌。",
   "ja": "結果、嫌いじゃなかった（笑）"
  },
  {
   "date": "2016-06-17",
   "src": "ライブドアニュース",
   "url": "https://news.livedoor.com/article/detail/11636628/",
   "topic": "角色幕后",
   "zh": "演苇木场拓斗时琢磨他为什么驼背：性格温柔、总配合别人、又有点胆小，于是一点点缩起了身子。",
   "ja": "なんで猫背なんだろうな？と"
  },
  {
   "date": "2016-06-17",
   "src": "ライブドアニュース",
   "url": "https://news.livedoor.com/article/detail/11636628/",
   "topic": "私下小事",
   "zh": "书桌旁边就摆着书法用具，在家闲下来就提笔写字，写完神清气爽。",
   "ja": "書いたらスッキリします"
  },
  {
   "date": "2016-06-17",
   "src": "ライブドアニュース",
   "url": "https://news.livedoor.com/article/detail/11636628/",
   "topic": "私下小事",
   "zh": "特别喜欢动画《穿越时空的少女》，有空就会重看；钢琴拿手曲是片中的奥华子《変わらないもの》，练到能边弹边唱。",
   "ja": "いまでも暇があったら見るくらい"
  },
  {
   "topic": "私下小事",
   "zh": "受哥哥影响，学生时代备考时一边听《SCHOOL OF LOCK!》和《All Night Nippon》一边复习。",
   "ja": "受験勉強とかテスト勉強をしていました",
   "date": "2018-10-10",
   "src": "ステージナタリー",
   "url": "https://natalie.mu/stage/news/303161"
  }
 ]
};
