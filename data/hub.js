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
    "190cm（2021年初之前官方资料写的是187cm）"
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
  ],
  "photos": [
   [
    "2016–2017",
    "assets/img/profile/2016.jpg",
    "刀舞、弱虫踏板那两年"
   ],
   [
    "2017–2020",
    "assets/img/profile/2017.jpg",
    "用得最久的一张"
   ],
   [
    "2021–2025",
    "assets/img/profile/2021.jpg",
    "身高改成190cm的同一时期换上"
   ],
   [
    "2025–",
    "https://web.archive.org/web/20251124192748id_/https://www.watanabepro.co.jp/img/profile/10000062.jpg",
    "现在的官方照"
   ]
  ]
 },
 "now": [
  {
   "title": "舞台《刀剑乱舞》陽伝 月亮、太阳与繁星",
   "ja": "舞台『刀剣乱舞』陽伝 月と太陽と星々よ",
   "role": "烛台切光忠（燭台切光忠・しょくだいきり みつただ）",
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
   "role": "岭高华武利（嶺髙華武利・みねたか かむり）／假面骑士Maou（仮面ライダーマオウ）",
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
   ],
   "image2": "https://www.tv-asahi.co.jp/my-th/character/minetaka/img/img_main02.webp"
  }
 ],
 "recent": [
  {
   "title": "舞台《王者天下Ⅱ：继承》",
   "role": "庞煖（龐煖・ほうけん）",
   "date": "2026/8/9–10/13",
   "image": "https://www.tohostage.com/kingdom2/images/gallery_solo_higashi.jpg",
   "imageNote": "官网舞台剧照",
   "url": "https://www.tohostage.com/kingdom2/"
  },
  {
   "title": "电影《蓝色监狱》",
   "role": "马狼照英（馬狼照英・ばろう しょうえい）",
   "date": "2026/8/7 上映",
   "image": "https://bluelock-movie.jp/assets/img/cast/cast-face4-5.jpg",
   "imageNote": "官网角色公式照：马狼照英",
   "url": "https://bluelock-movie.jp/"
  },
  {
   "title": "《SWAN：Ballet cross Reading》",
   "role": "草壁飞翔（草壁飛翔）",
   "date": "2026/9/4–9/9",
   "image": "https://swan-balletcrossreading.com/images/top/cast_img3-1.jpg",
   "imageNote": "官网演员照",
   "url": "https://swan-balletcrossreading.com/"
  }
 ],
 "news": [
  {
   "date": "2026-11-16",
   "tag": "采访",
   "title": "刀舞《陽伝》官网更新媒体露出一览",
   "text": "收录各媒体陽伝相关采访的发布日期和链接，会持续追加。",
   "url": "https://stage-toukenranbu.jp/news/hiden2/4184"
  },
  {
   "date": "2026-11-15",
   "tag": "活动",
   "title": "确定出演《超英雄祭2027》DAY2（2027/1/21 横滨Arena）",
   "text": "以岭高华武利／假面骑士Maou身份与《麦斯》演员同台；门票 11/15 起一般发售。",
   "url": "https://www.tv-asahi.co.jp/my-th/eiyusai2027/"
  },
  {
   "date": "2026-11-12",
   "tag": "影视",
   "title": "街机《假面骑士 Ganba Legends》第5弹上线，假面骑士Maou参战",
   "text": "Maou 的变身语音是他配的，万代官方宣传片里能听到。",
   "url": "https://www.youtube.com/watch?v=9VPedwZW6vg"
  },
  {
   "date": "2026-11-11",
   "tag": "舞台",
   "title": "刀舞《陽伝》东京明治座正式公演开幕",
   "text": "东京至11月29日，之后大阪新歌舞伎座、东京凯旋。",
   "url": "https://stage-toukenranbu.jp/stage/"
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
   "date": "2026-11-02",
   "tag": "周边",
   "title": "WE官方生写真〈2026年11月〉开放预约",
   "text": "Watanabe商店（7net）受理至11/15，12/2前后发货。",
   "url": "https://x.com/we_goods_info/status/2117089419144622119"
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
   "tag": "综艺",
   "title": "《玉城裕规的月下美人》第八十三夜 7周年BBQ特别篇 嘉宾出演",
   "text": "与和田琢磨一同作为嘉宾；niconico 有前10分钟免费片段。",
   "url": "https://www.nicovideo.jp/watch/so46942722"
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
   "date": "2026-09-18",
   "tag": "舞台",
   "title": "刀舞《陽伝》公开故事梗概与追加卡司",
   "text": "前后编两部作，11月10日明治座预演开始。",
   "url": "https://www.toukenranbu.jp/topics/5695/"
  },
  {
   "date": "2026-09-13",
   "tag": "舞台",
   "title": "《王者天下Ⅱ：继承》东京公演落幕",
   "text": "Brillia HALL；9月21日起转战大阪新歌舞伎座。",
   "url": "https://www.tohostage.com/kingdom2/"
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
   "date": "2026-09-04",
   "tag": "舞台",
   "title": "朗读剧《SWAN：Ballet cross Reading》开演",
   "text": "新国立剧场 中剧场，至9月9日；饰演草壁飞翔。",
   "url": "https://swan-balletcrossreading.com/"
  },
  {
   "date": "2026-09-02",
   "tag": "采访",
   "title": "Animate Times｜华武利与Maou的“顽皮魅力”",
   "text": "谈角色存在感、和皮套演员的配合，以及第一次拍特摄的体验。",
   "url": "https://www.animatetimes.com/news/details.php?id=1788235894"
  },
  {
   "date": "2026-08-31",
   "tag": "采访",
   "title": "演剧媒体Audience｜东启介×西野辽《SWAN》对谈",
   "text": "目标是“跨越芭蕾与戏剧界线的瞬间”。",
   "url": "https://engeki-audience.com/article/detail/23194/"
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
  },
  {
   "date": "2026-07-17",
   "tag": "舞台",
   "title": "刀舞《陽伝》主视觉、角色视觉公开",
   "text": "燭台切光忠时隔八年回归；同时公布票务信息。",
   "url": "https://www.toukenranbu.jp/topics/5304/"
  },
  {
   "date": "2026-07-10",
   "tag": "采访",
   "title": "《SWAN》官方演员访谈视频公开",
   "text": "东启介谈草壁飞翔一角。",
   "url": "https://www.youtube.com/watch?v=0hsF8IqwY1o"
  },
  {
   "date": "2026-05-22",
   "tag": "舞台",
   "title": "确定出演《王者天下Ⅱ：继承》，饰演庞煖",
   "text": "与章平双卡司。东京、大阪、福冈三地上演。",
   "url": "https://www.tohostage.com/kingdom2/castsche.html"
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
     "u": "https://7net.omni7.jp/detail/2110671822.html",
     "href": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/dwbf62c4fb/033131/2110671822.jpg"
    },
    {
     "t": "亚克力钥匙扣",
     "st": "已结束",
     "img": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/dw1191a1ac/033131/2110671824.jpg",
     "u": "https://7net.omni7.jp/detail/2110671824.html",
     "href": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/dw1191a1ac/033131/2110671824.jpg"
    },
    {
     "t": "收纳包",
     "st": "",
     "img": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/dwdd5cce4b/033131/2110671823.jpg",
     "u": "https://7net.omni7.jp/detail/2110671823.html",
     "href": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/dwdd5cce4b/033131/2110671823.jpg"
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
     "u": "https://7net.omni7.jp/detail/2110656753.html",
     "href": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/dwc9f2ab5e/033131/2110656753.jpg"
    },
    {
     "t": "きゃっとん。长袖T",
     "st": "有货",
     "img": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/dwed06940c/033131/2110656751.jpg",
     "u": "https://7net.omni7.jp/detail/2110656751.html",
     "href": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/dwed06940c/033131/2110656751.jpg"
    },
    {
     "t": "半身生写真套组",
     "st": "缺货",
     "img": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/dwd2d08859/033131/2110656754.jpg",
     "u": "https://7net.omni7.jp/detail/2110656754.html",
     "href": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/dwd2d08859/033131/2110656754.jpg"
    },
    {
     "t": "贴纸套组",
     "st": "",
     "img": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/dw58de1e49/033131/2110656755.jpg",
     "u": "https://7net.omni7.jp/detail/2110656755.html",
     "href": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/dw58de1e49/033131/2110656755.jpg"
    }
   ]
  },
  {
   "date": "2024-06-01",
   "title": "JBB Concert Tour 2024 巡演周边",
   "status": "已结束",
   "price": "场刊 3,000円 · 荧光棒 3,000円 · T恤 3,000円 · 亚克力立牌 3,000円 · 扁平收纳盒 2,000円 · 巾着托特 2,000円 · 镭射钥匙扣 1,500円 · 葛饰限定贴纸 500円",
   "image": "assets/img/goods/jbb2024_goods.jpg",
   "points": [
    "场刊30页B5，收录四人对谈和录音现场，附A4棉质托特包；Hall场版夹着当场的歌单",
    "荧光棒2024，灯头是JBB的logo",
    "亚克力立牌四人一套，底座是拼图式，可以换顺序",
    "扁平收纳盒上的四只小熊分别以四个人为原型",
    "T恤藏青色S–XL，巡演终场贩售；巾着托特为Hall场限定，另有各地限定贴纸（图中是葛饰版）"
   ],
   "url": "https://x.com/jbb0524/status/1828990959511843230",
   "publisher": "JBB 官方",
   "items": [
    {
     "t": "场刊（附托特包）",
     "st": "缺货",
     "img": "https://booth.pximg.net/7b6ba865-5b86-4790-a400-77fb8f3fedb5/i/5961437/2b3b35ec-e5f1-4928-828c-0a231556d393_base_resized.jpg",
     "u": "https://booth.pm/ja/items/5961437",
     "href": "https://booth.pximg.net/7b6ba865-5b86-4790-a400-77fb8f3fedb5/i/5961437/2b3b35ec-e5f1-4928-828c-0a231556d393_base_resized.jpg"
    },
    {
     "t": "原创T恤",
     "st": "缺货",
     "img": "https://booth.pximg.net/7b6ba865-5b86-4790-a400-77fb8f3fedb5/i/6204064/2c4888a3-0282-4d76-a2fb-b0e63621239d_base_resized.jpg",
     "u": "https://booth.pm/ja/items/6204064",
     "href": "https://booth.pximg.net/7b6ba865-5b86-4790-a400-77fb8f3fedb5/i/6204064/2c4888a3-0282-4d76-a2fb-b0e63621239d_base_resized.jpg"
    },
    {
     "t": "亚克力立牌（4人1套）",
     "st": "缺货",
     "img": "https://booth.pximg.net/7b6ba865-5b86-4790-a400-77fb8f3fedb5/i/5962114/82347b6d-26ac-480d-b671-8bb5104674d7_base_resized.jpg",
     "u": "https://booth.pm/ja/items/5962114",
     "href": "https://booth.pximg.net/7b6ba865-5b86-4790-a400-77fb8f3fedb5/i/5962114/82347b6d-26ac-480d-b671-8bb5104674d7_base_resized.jpg"
    },
    {
     "t": "扁平收纳盒",
     "st": "有货",
     "img": "https://booth.pximg.net/7b6ba865-5b86-4790-a400-77fb8f3fedb5/i/5961517/9e3c3222-20e7-4d97-ac8a-97a806057714_base_resized.jpg",
     "u": "https://booth.pm/ja/items/5961517",
     "href": "https://booth.pximg.net/7b6ba865-5b86-4790-a400-77fb8f3fedb5/i/5961517/9e3c3222-20e7-4d97-ac8a-97a806057714_base_resized.jpg"
    },
    {
     "t": "镭射钥匙扣",
     "st": "缺货",
     "img": "https://booth.pximg.net/7b6ba865-5b86-4790-a400-77fb8f3fedb5/i/5961867/e23a0083-1e94-4a7c-8bbc-49236316281f_base_resized.jpg",
     "u": "https://booth.pm/ja/items/5961867",
     "href": "https://booth.pximg.net/7b6ba865-5b86-4790-a400-77fb8f3fedb5/i/5961867/e23a0083-1e94-4a7c-8bbc-49236316281f_base_resized.jpg"
    },
    {
     "t": "Hall限定 巾着托特",
     "st": "缺货",
     "img": "https://booth.pximg.net/7b6ba865-5b86-4790-a400-77fb8f3fedb5/i/5962137/cdd1dd3d-805f-434b-9b4c-8167c7e8c621_base_resized.jpg",
     "u": "https://booth.pm/ja/items/5962137",
     "href": "https://booth.pximg.net/7b6ba865-5b86-4790-a400-77fb8f3fedb5/i/5962137/cdd1dd3d-805f-434b-9b4c-8167c7e8c621_base_resized.jpg"
    },
    {
     "t": "Billboard限定 环保袋",
     "st": "缺货",
     "img": "https://booth.pximg.net/7b6ba865-5b86-4790-a400-77fb8f3fedb5/i/5961882/d9a7085e-59ea-4cba-baa3-6f9b6e1c4b7e_base_resized.jpg",
     "u": "https://booth.pm/ja/items/5961882",
     "href": "https://booth.pximg.net/7b6ba865-5b86-4790-a400-77fb8f3fedb5/i/5961882/d9a7085e-59ea-4cba-baa3-6f9b6e1c4b7e_base_resized.jpg"
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
     "u": "https://7net.omni7.jp/detail/2110647487.html",
     "href": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/dwe08ed40c/033131/2110647487.jpg"
    },
    {
     "t": "亚克力立牌",
     "st": "缺货",
     "img": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/dw6289048a/033131/2110647485.jpg",
     "u": "https://7net.omni7.jp/detail/2110647485.html",
     "href": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/dw6289048a/033131/2110647485.jpg"
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
   "publisher": "产经新闻社 Matisowa",
   "items": [
    {
     "t": "亚克力卡（2种）",
     "img": "https://matisowa.jp/wp-content/uploads/2023/06/higashi-_BDL_goods2.jpg",
     "href": "https://matisowa.jp/wp-content/uploads/2023/06/higashi-_BDL_goods2.jpg"
    },
    {
     "t": "A4文件夹",
     "img": "https://matisowa.jp/wp-content/uploads/2023/06/higashi-_BDL_goods1.jpg",
     "href": "https://matisowa.jp/wp-content/uploads/2023/06/higashi-_BDL_goods1.jpg"
    },
    {
     "t": "生写真（预约6枚）",
     "img": "https://matisowa.jp/wp-content/uploads/2023/06/higashi-_BDL_goods3.jpg",
     "href": "https://matisowa.jp/wp-content/uploads/2023/06/higashi-_BDL_goods3.jpg"
    }
   ]
  },
  {
   "date": "2022-11-14",
   "title": "《东启介と聴活》原创T恤",
   "status": "已结束（受注生产）",
   "price": "2,800円（含税）",
   "image": "https://matisowa.jp/wp-content/uploads/2023/01/mtsw271.jpg",
   "points": [
    "连载《东启介と聴活》圣诞活动（2022.12.25）纪念T恤，红色，S／M／L",
    "\"CHOKATSU（聴活）\"也有\"超勝\"的意思"
   ],
   "url": "https://matisowa.jp/382/",
   "publisher": "产经新闻社 Matisowa",
   "items": [
    {
     "t": "T恤（样品）",
     "img": "https://matisowa.jp/wp-content/uploads/metro/Higashi_T_sample.jpg",
     "href": "https://matisowa.jp/wp-content/uploads/metro/Higashi_T_sample.jpg"
    }
   ]
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
     "u": "https://7net.omni7.jp/detail/1301466158.html",
     "href": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/dwc07bb608/033131/1301466158.jpg"
    },
    {
     "t": "长袖T 白",
     "st": "有货",
     "img": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/dw8d68dc3a/033131/1301466161.jpg",
     "u": "https://7net.omni7.jp/detail/1301466161.html",
     "href": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/dw8d68dc3a/033131/1301466161.jpg"
    },
    {
     "t": "文件夹套组",
     "st": "缺货",
     "img": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/dw769d9c5d/033131/1301466156.jpg",
     "u": "https://7net.omni7.jp/detail/1301466156.html",
     "href": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/dw769d9c5d/033131/1301466156.jpg"
    },
    {
     "t": "手巾 自然色",
     "st": "缺货",
     "img": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/dw022fb874/033131/1301466165.jpg",
     "u": "https://7net.omni7.jp/detail/1301466165.html",
     "href": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/dw022fb874/033131/1301466165.jpg"
    },
    {
     "t": "手巾 竹色",
     "st": "",
     "img": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/dw6e0cde84/033131/1301466164.jpg",
     "u": "https://7net.omni7.jp/detail/1301466164.html",
     "href": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/dw6e0cde84/033131/1301466164.jpg"
    },
    {
     "t": "随行杯",
     "st": "",
     "img": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/dw5df3db39/033131/1301466157.jpg",
     "u": "https://7net.omni7.jp/detail/1301466157.html",
     "href": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/dw5df3db39/033131/1301466157.jpg"
    }
   ]
  },
  {
   "date": "2020-01-24",
   "title": "「东启介ソロイベント2020」周边",
   "status": "已售罄",
   "price": "2L生写真2枚 800円 · L判生写真6枚 1,200円 · 卫衣 6,000円 · 迷你托特 1,500円",
   "image": "https://stat.ameba.jp/user_images/20200117/12/we-goodsinfo/50/12/j/o0900127314697511352.jpg",
   "points": [
    "2020.1.24 表参道GROUND 个人活动，会场当天完售",
    "完售后1/31–2/9开放受注：L判6枚＝会场AB两套合在一起",
    "卫衣是套头加绒款（L）；迷你托特 宽约30cm"
   ],
   "url": "https://ameblo.jp/we-goodsinfo/entry-12570700741.html",
   "publisher": "WE SHOP／ワタナベ商店",
   "items": [
    {
     "t": "2L生写真2枚",
     "img": "https://stat.ameba.jp/user_images/20200128/19/we-goodsinfo/a6/99/j/o0356030014703823387.jpg",
     "href": "https://stat.ameba.jp/user_images/20200128/19/we-goodsinfo/a6/99/j/o0356030014703823387.jpg"
    },
    {
     "t": "L判生写真6枚",
     "img": "https://stat.ameba.jp/user_images/20200128/19/we-goodsinfo/13/05/j/o0364033414703823392.jpg",
     "href": "https://stat.ameba.jp/user_images/20200128/19/we-goodsinfo/13/05/j/o0364033414703823392.jpg"
    },
    {
     "t": "卫衣",
     "img": "https://stat.ameba.jp/user_images/20200128/19/we-goodsinfo/cb/52/j/o0700068014703823394.jpg",
     "href": "https://stat.ameba.jp/user_images/20200128/19/we-goodsinfo/cb/52/j/o0700068014703823394.jpg"
    },
    {
     "t": "迷你托特",
     "img": "https://stat.ameba.jp/user_images/20200128/19/we-goodsinfo/84/dc/j/o0600058314703823397.jpg",
     "href": "https://stat.ameba.jp/user_images/20200128/19/we-goodsinfo/84/dc/j/o0600058314703823397.jpg"
    }
   ]
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
     "u": "https://7net.omni7.jp/detail/1301392057.html",
     "href": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/dwdaab4b3e/033131/1301392057.jpg"
    },
    {
     "t": "生写真套组A（L判3枚）",
     "st": "缺货",
     "img": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/dwac59f311/033131/1301392056.jpg",
     "u": "https://7net.omni7.jp/detail/1301392056.html",
     "href": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/dwac59f311/033131/1301392056.jpg"
    },
    {
     "t": "生写真（2L判2枚）",
     "st": "缺货",
     "img": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/dw620e5940/033131/1301392055.jpg",
     "u": "https://7net.omni7.jp/detail/1301392055.html",
     "href": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/dw620e5940/033131/1301392055.jpg"
    },
    {
     "t": "生写真文件册",
     "st": "缺货",
     "img": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/dw393f8ccb/033131/1301392058.jpg",
     "u": "https://7net.omni7.jp/detail/1301392058.html",
     "href": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/dw393f8ccb/033131/1301392058.jpg"
    },
    {
     "t": "票夹",
     "st": "缺货",
     "img": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/dw85cab129/033131/1301392059.jpg",
     "u": "https://7net.omni7.jp/detail/1301392059.html",
     "href": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/dw85cab129/033131/1301392059.jpg"
    },
    {
     "t": "とん缶",
     "st": "缺货",
     "img": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/dwb7ad4681/033131/1301392060.jpg",
     "u": "https://7net.omni7.jp/detail/1301392060.html",
     "href": "https://7net.omni7.jp/dw/image/v2/BLHS_PRD/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/dwb7ad4681/033131/1301392060.jpg"
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
    "本人\"想自己用\"而监制的翻盖手机壳，iPhone／Android多机型通用",
    "印着「KEEP SMILING」，内里象牙白，卡位小3大1"
   ],
   "url": "https://ameblo.jp/we-goodsinfo/entry-12369630263.html",
   "publisher": "WE SHOP／ワタナベ商店",
   "items": [
    {
     "t": "外观",
     "img": "https://stat.ameba.jp/user_images/20180419/19/we-goodsinfo/ce/4d/j/o0595076414173755795.jpg",
     "href": "https://stat.ameba.jp/user_images/20180419/19/we-goodsinfo/ce/4d/j/o0595076414173755795.jpg"
    },
    {
     "t": "内侧",
     "img": "https://stat.ameba.jp/user_images/20180419/19/we-goodsinfo/7f/0a/j/o0595034914173755801.jpg",
     "href": "https://stat.ameba.jp/user_images/20180419/19/we-goodsinfo/7f/0a/j/o0595034914173755801.jpg"
    }
   ]
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
   "price": "2L生写真 350円 · L判4枚 700円 · 卷袖T 3,000円 · 托特包 1,500円 · 手环灯 500円 · とん缶 1回300円",
   "image": "https://stat.ameba.jp/user_images/20170426/11/we-goodsinfo/c0/9d/j/o0250024913922579089.jpg",
   "points": [
    "第一次自己监制周边，活动Logo是本人亲笔",
    "2L生写真印着亲笔留言和签名；卷袖T是浅薄荷绿",
    "とん缶全15种：6色12种角色照（含2种\"性感\"隐藏款）＋3种本人设计图案"
   ],
   "url": "https://ameblo.jp/we-goodsinfo/entry-12268879951.html",
   "publisher": "WE SHOP／ワタナベ商店",
   "items": [
    {
     "t": "2L生写真",
     "img": "https://stat.ameba.jp/user_images/20170426/11/we-goodsinfo/db/6c/j/o0211015613922579086.jpg",
     "href": "https://stat.ameba.jp/user_images/20170426/11/we-goodsinfo/db/6c/j/o0211015613922579086.jpg"
    },
    {
     "t": "L判4枚套组",
     "img": "https://stat.ameba.jp/user_images/20170426/11/we-goodsinfo/c0/9d/j/o0250024913922579089.jpg",
     "href": "https://stat.ameba.jp/user_images/20170426/11/we-goodsinfo/c0/9d/j/o0250024913922579089.jpg"
    },
    {
     "t": "卷袖T",
     "img": "https://stat.ameba.jp/user_images/20170426/11/we-goodsinfo/93/6c/j/o0425042513922579092.jpg",
     "href": "https://stat.ameba.jp/user_images/20170426/11/we-goodsinfo/93/6c/j/o0425042513922579092.jpg"
    },
    {
     "t": "托特包",
     "img": "https://stat.ameba.jp/user_images/20170426/11/we-goodsinfo/45/25/j/o0425042513922579096.jpg",
     "href": "https://stat.ameba.jp/user_images/20170426/11/we-goodsinfo/45/25/j/o0425042513922579096.jpg"
    },
    {
     "t": "手环灯 粉",
     "img": "https://stat.ameba.jp/user_images/20170426/11/we-goodsinfo/40/be/j/o0600060013922579104.jpg",
     "href": "https://stat.ameba.jp/user_images/20170426/11/we-goodsinfo/40/be/j/o0600060013922579104.jpg"
    },
    {
     "t": "とん缶",
     "img": "https://stat.ameba.jp/user_images/20170426/11/we-goodsinfo/8f/12/j/o0400026413922579102.jpg",
     "href": "https://stat.ameba.jp/user_images/20170426/11/we-goodsinfo/8f/12/j/o0400026413922579102.jpg"
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
    "同龄\"凸凹组合\"的清爽双人照",
    "每套3枚：双人1枚＋两人单人各1枚，〔IN〕〔OUT〕两种",
    "WE SHOP表参道店、アニメイト梅田・天王寺出张店和7net同时贩售"
   ],
   "url": "https://ameblo.jp/we-goodsinfo/entry-12226803496.html",
   "publisher": "WE SHOP／ワタナベ商店",
   "stage": 1,
   "items": [
    {
     "t": "〔IN〕〔OUT〕",
     "img": "https://stat.ameba.jp/user_images/20161208/16/we-goodsinfo/b5/6f/j/o0313031313816663047.jpg",
     "href": "https://stat.ameba.jp/user_images/20161208/16/we-goodsinfo/b5/6f/j/o0313031313816663047.jpg"
    }
   ]
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
   "publisher": "WE SHOP／ワタナベ商店",
   "items": [
    {
     "t": "特大A4（印刷签名留言）",
     "img": "https://stat.ameba.jp/user_images/20160818/14/we-goodsinfo/89/8f/j/o0350024813726329585.jpg",
     "href": "https://stat.ameba.jp/user_images/20160818/14/we-goodsinfo/89/8f/j/o0350024813726329585.jpg"
    },
    {
     "t": "L判3枚套组",
     "img": "https://stat.ameba.jp/user_images/20160818/14/we-goodsinfo/24/e3/j/o0500026513726329586.jpg",
     "href": "https://stat.ameba.jp/user_images/20160818/14/we-goodsinfo/24/e3/j/o0500026513726329586.jpg"
    }
   ]
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
  },
  {
   "date": "2015-05-23",
   "title": "音乐剧《薄樱鬼》黎明录 公演周边",
   "price": "原田个人ブロマイド 3枚 600円 · 全员13枚 2,400円 · 随机ブロマイド 200円 · 场刊 2,100円",
   "image": "https://www.marv.jp/special/m-hakuoki-reimeiroku/images/goods/kojin_blog.jpg",
   "points": [
    "他的是「原田セット」：原田左之助个人ブロマイド3枚一组",
    "个人套组9种全买送13人集合2L大图",
    "场刊A4 40页，有角色介绍和后台花絮"
   ],
   "url": "https://www.marv.jp/special/m-hakuoki-reimeiroku/goods.html",
   "publisher": "薄ミュ 官网",
   "status": "已结束",
   "stage": 1
  },
  {
   "date": "2016-01-04",
   "title": "音乐剧《薄樱鬼》新选组奇谭 公演周边",
   "price": "原田个人ブロマイド 600円 · 全员14枚 2,700円 · 随机ブロマイド 200円 · 随机手机擦挂件 400円",
   "image": "https://www.marv.jp/special/m-hakuoki-shinsengumikitan/images/goods/kojin.jpg",
   "points": [
    "原田左之助个人ブロマイド3枚一组",
    "随机手机擦挂件（モバイルクリーナーストラップ）里有原田",
    "高级票特典是和纸风文件夹"
   ],
   "url": "https://www.marv.jp/special/m-hakuoki-shinsengumikitan/goods.html",
   "publisher": "薄ミュ 官网",
   "status": "已结束",
   "stage": 1
  },
  {
   "date": "2016-03-04",
   "title": "舞台《飙速宅男》总北新世代，启动 公演周边",
   "price": "苇木场个人ブロマイド 600円 · 随机徽章 200円 · 随机亚克力钥匙扣 600円",
   "image": "",
   "points": [
    "苇木场拓斗个人ブロマイド3枚：比赛服、制服、演员情景照各一",
    "随机徽章、随机亚克力钥匙扣都有苇木场",
    "另有箱学·京伏合体亚克力钥匙扣 1,000円"
   ],
   "url": "https://www.marv.jp/special/pedal_2016-03/#goods",
   "publisher": "舞台『弱虫ペダル』官网",
   "status": "已结束",
   "stage": 1
  },
  {
   "date": "2016-05-03",
   "title": "舞台《刀剑乱舞》虚传 燃烧的本能寺 公演周边",
   "price": "烛台切个人ブロマイド 600円 · 亚克力钥匙扣 800円 · 随机ブロマイド 200円 · 随机徽章 300円",
   "image": "https://stage-toukenranbu.jp/archive/kyoden/images/goods/single.jpg",
   "points": [
    "烛台切光忠个人ブロマイド3枚一组",
    "亚克力钥匙扣12种可以直接挑烛台切",
    "高级票特典是罐装镜子"
   ],
   "url": "https://stage-toukenranbu.jp/archive/kyoden/goods.html",
   "publisher": "刀ステ 官网",
   "status": "已结束",
   "stage": 1
  },
  {
   "date": "2016-08-12",
   "title": "音乐剧《薄樱鬼》HAKU-MYU LIVE 2 周边",
   "price": "原田个人ブロマイド 600円 · 随机ブロマイド 200円 · 随机迷你色纸 500円 · 荧光棒 2,500円",
   "image": "https://www.marv.jp/special/m-hakuoki-live2/images/goods/person.jpg",
   "points": [
    "随机迷你色纸带演员亲笔留言，里面有原田",
    "荧光棒10色，原田是红色",
    "另有团扇、毛巾、托特包"
   ],
   "url": "https://www.marv.jp/special/m-hakuoki-live2/goods.html",
   "publisher": "薄ミュ 官网",
   "status": "已结束",
   "stage": 1
  },
  {
   "date": "2016-09-30",
   "title": "舞台《飙速宅男》箱根学园新世代，启动 公演周边",
   "price": "苇木场个人ブロマイド 600円 · 随机ブロマイド 200円 · 随机徽章 200円 · 随机亚克力钥匙扣 600円",
   "image": "https://www.marv.jp/special/pedal_2016-11/images/goods/personal.jpg",
   "points": [
    "苇木场个人ブロマイド：角色照加演员照3枚一组",
    "看2次送一张指定演员的非卖生写真，看3次再送一张签名照"
   ],
   "url": "https://www.marv.jp/special/pedal_2016-11/#goods",
   "publisher": "舞台『弱虫ペダル』官网",
   "status": "已结束",
   "stage": 1
  },
  {
   "date": "2016-12-15",
   "title": "舞台《刀剑乱舞》虚传 再演 公演周边",
   "price": "烛台切个人ブロマイド 600円 · 发光IC卡贴 1,300円 · 随机内番亚克力钥匙扣 600円 · 随机徽章 400円",
   "image": "https://stage-toukenranbu.jp/archive/kyoden_saien/images/goods/single.jpg",
   "points": [
    "发光IC卡贴：刷交通卡时会亮，12种可以挑烛台切",
    "随机钥匙扣是内番服装版"
   ],
   "url": "https://stage-toukenranbu.jp/archive/kyoden_saien/goods.html",
   "publisher": "刀ステ 官网",
   "status": "已结束",
   "stage": 1
  },
  {
   "date": "2017-02-25",
   "title": "舞台《飙速宅男》新IH篇 起跑线 公演周边",
   "price": "苇木场个人ブロマイド 600円 · 随机ブロマイド 200円 · 随机亚克力钥匙扣 600円 · 随机徽章 400円",
   "image": "https://www.marv.jp/special/pedal_2017-023/images/goods/all.jpg",
   "points": [
    "苇木场个人ブロマイド3枚一组，16种全买送集合2L",
    "随机ブロマイド48种，每人3张"
   ],
   "url": "https://www.marv.jp/special/pedal_2017-023/goods.html",
   "publisher": "舞台『弱虫ペダル』官网",
   "status": "已结束",
   "stage": 1
  },
  {
   "date": "2017-04-14",
   "title": "音乐剧《薄樱鬼》原田左之助篇 公演周边",
   "price": "原田个人ブロマイド 600円 · 全员14枚 2,800円 · 随机ブロマイド 200円 · 随机徽章 400円",
   "image": "https://www.marv.jp/special/m-hakuoki-harada/images/goods/personal.jpg",
   "points": [
    "他当主角的一篇，全员ブロマイド第一张就是原田",
    "随机ブロマイド50种、随机徽章20种",
    "高级票特典是票夹"
   ],
   "url": "https://www.marv.jp/special/m-hakuoki-harada/goods.html",
   "publisher": "薄ミュ 官网",
   "status": "已结束",
   "stage": 1
  },
  {
   "date": "2017-06-01",
   "title": "舞台《刀剑乱舞》义传 黎明的独眼龙 公演周边",
   "price": "烛台切个人ブロマイド 600円 · 迷你屏风 700円 · 随机挂饰 600円 · 随机徽章 400円",
   "image": "https://stage-toukenranbu.jp/archive/giden/images/goods/person.jpg",
   "points": [
    "迷你屏风8种可以直接挑烛台切",
    "随机挂饰里有「番伞④（烛台切光忠）」"
   ],
   "url": "https://stage-toukenranbu.jp/archive/giden/goods.html",
   "publisher": "刀ステ 官网",
   "status": "已结束",
   "stage": 1
  },
  {
   "date": "2017-07-29",
   "title": "残酷剧《グランギニョル》公演周边",
   "price": "随机徽章 400円 · 场刊 2,500円 · 托特包 1,500円",
   "image": "https://cdn.amebaowndme.com/madrid-prd/madrid-web/images/sites/274887/438a26aec79d3fc66ea3ab752f6b03d7_f138b7e541bd277ecb70b5205f8d1551.jpg?width=477",
   "points": [
    "随机徽章38种，用役服装照和形象照，里面有他",
    "场刊有每位演员的单独访谈",
    "演出后在WE SHOP表参道店和ワタナベ商店再卖过，另有舞台照套组"
   ],
   "url": "https://grandguignol-170401.themedia.jp/posts/2881923",
   "publisher": "WE SHOP／ワタナベ商店",
   "status": "已结束",
   "stage": 1
  },
  {
   "date": "2018-06-02",
   "title": "舞台《刀剑乱舞》悲传 结之目的不如归 公演周边",
   "price": "烛台切个人ブロマイド 600円 · 舞台照ブロマイド 400円 · 随机迷你色纸 500円 · 随机迷你文件夹 400円",
   "image": "https://stage-toukenranbu.jp/archive/hiden/images/goods/person.jpg",
   "points": [
    "这次多了舞台照个人ブロマイド（2枚一组）",
    "随机徽章、迷你文件夹、迷你色纸都有烛台切"
   ],
   "url": "https://stage-toukenranbu.jp/archive/hiden/goods.html",
   "publisher": "刀ステ 官网",
   "status": "已结束",
   "stage": 1
  },
  {
   "id": "we_bromide_all",
   "date": "2026-11-01",
   "title": "WE官方生写真 历月一览",
   "status": "已结束",
   "price": "每月4张一套（L判）",
   "image": "https://7net.omni7.jp/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/033131/2190053499.jpg",
   "points": [
    "7net官方商品图，每月一张四张合拍，共56个月",
    "不是每个月都有他：2026年10月阵容里没有他",
    "点小图看大图"
   ],
   "url": "list.html?g=goods",
   "publisher": "WE SHOP／ワタナベ商店",
   "items": [
    {
     "t": "2026.11",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/033131/2190053499.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/033131/2190053499.jpg"
    },
    {
     "t": "2026.09",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/033131/2190050196.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/033131/2190050196.jpg"
    },
    {
     "t": "2026.08",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/033131/2110695272.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/033131/2110695272.jpg"
    },
    {
     "t": "2026.07",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/033131/2110693994.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/033131/2110693994.jpg"
    },
    {
     "t": "2026.06",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/033131/2110693068.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/033131/2110693068.jpg"
    },
    {
     "t": "2026.05",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/033131/2110690616.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/033131/2110690616.jpg"
    },
    {
     "t": "2026.04",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/033131/2110688644.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/033131/2110688644.jpg"
    },
    {
     "t": "2026.01",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/033131/2110681835.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/033131/2110681835.jpg"
    },
    {
     "t": "2025.12",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/033131/2110680987.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/033131/2110680987.jpg"
    },
    {
     "t": "2025.10",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/033131/2110676382.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/033131/2110676382.jpg"
    },
    {
     "t": "2025.07",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/033131/2110669215.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/033131/2110669215.jpg"
    },
    {
     "t": "2025.05",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/033131/2110665401.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/033131/2110665401.jpg"
    },
    {
     "t": "2025.03",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/033131/2110661625.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/033131/2110661625.jpg"
    },
    {
     "t": "2024.09",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/033131/2110654289.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/033131/2110654289.jpg"
    },
    {
     "t": "2024.03",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/033131/2110647337.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/033131/2110647337.jpg"
    },
    {
     "t": "2023.12",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/033131/2110644893.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/033131/2110644893.jpg"
    },
    {
     "t": "2023.09",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/033131/2110642291.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/033131/2110642291.jpg"
    },
    {
     "t": "2023.04",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/033131/2110637888.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/033131/2110637888.jpg"
    },
    {
     "t": "2023.01",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/033131/2110634988.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-goodsGame-m-catalog/ja_JP/033131/2110634988.jpg"
    },
    {
     "t": "2022.09",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301516194.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301516194.jpg"
    },
    {
     "t": "2022.06",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301509861.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301509861.jpg"
    },
    {
     "t": "2022.04",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301505621.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301505621.jpg"
    },
    {
     "t": "2022.02",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301500593.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301500593.jpg"
    },
    {
     "t": "2022.01",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301497383.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301497383.jpg"
    },
    {
     "t": "2021.11",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301493538.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301493538.jpg"
    },
    {
     "t": "2021.10",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301490992.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301490992.jpg"
    },
    {
     "t": "2021.08",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301486219.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301486219.jpg"
    },
    {
     "t": "2021.04",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301477326.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301477326.jpg"
    },
    {
     "t": "2021.01",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301470592.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301470592.jpg"
    },
    {
     "t": "2020.10",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301464245.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301464245.jpg"
    },
    {
     "t": "2020.09",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301461360.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301461360.jpg"
    },
    {
     "t": "2020.08",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301459724.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301459724.jpg"
    },
    {
     "t": "2020.07",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301457637.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301457637.jpg"
    },
    {
     "t": "2020.06",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301455708.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301455708.jpg"
    },
    {
     "t": "2020.05",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301453972.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301453972.jpg"
    },
    {
     "t": "2019.12",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301442556.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301442556.jpg"
    },
    {
     "t": "2019.10",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301437228.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301437228.jpg"
    },
    {
     "t": "2019.08",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301430196.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301430196.jpg"
    },
    {
     "t": "2019.07",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301427912.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301427912.jpg"
    },
    {
     "t": "2019.06",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301425383.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301425383.jpg"
    },
    {
     "t": "2019.03",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301417946.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301417946.jpg"
    },
    {
     "t": "2018.04",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301389133.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301389133.jpg"
    },
    {
     "t": "2018.02",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301384212.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301384212.jpg"
    },
    {
     "t": "2018.01",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301381805.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301381805.jpg"
    },
    {
     "t": "2017.12",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301379742.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301379742.jpg"
    },
    {
     "t": "2017.11",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301377319.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301377319.jpg"
    },
    {
     "t": "2017.10",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301375029.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301375029.jpg"
    },
    {
     "t": "2017.09",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301372413.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301372413.jpg"
    },
    {
     "t": "2017.08",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301369385.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301369385.jpg"
    },
    {
     "t": "2017.07",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301366687.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301366687.jpg"
    },
    {
     "t": "2017.06",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301364071.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301364071.jpg"
    },
    {
     "t": "2017.05",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301361075.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301361075.jpg"
    },
    {
     "t": "2017.03",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301356196.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301356196.jpg"
    },
    {
     "t": "2017.02",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301353617.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301353617.jpg"
    },
    {
     "t": "2016.11",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301345398.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301345398.jpg"
    },
    {
     "t": "2016.10",
     "img": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301343012.jpg",
     "href": "https://7net.omni7.jp/on/demandware.static/-/Sites-cd-m-catalog/ja_JP/033131/1301343012.jpg"
    }
   ]
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
   "url": "https://zasshi.tv/products/62295/",
   "cat": "写真集·杂志"
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
   "url": "https://stage-toukenranbu.jp/stage/",
   "cat": "影像"
  },
  {
   "title": "刀舞《陽伝》公演周边",
   "date": "2026-10-01",
   "price": "",
   "publisher": "舞台『刀剣乱舞』公式通販 · DMM通販",
   "image": "https://www.stage-toukenranbu.jp/wp-content/uploads/2026/09/5_%E9%99%BD%E4%BC%9D_%E7%87%AD%E5%8F%B0%E5%88%87%E5%85%89%E5%BF%A0.jpg",
   "points": [
    "10/1起官方通贩和DMM通贩开卖，会场11/10预演起卖",
    "燭台切光忠套组只在通贩卖；三个会场各有限定A4生写真"
   ],
   "url": "https://www.stage-toukenranbu.jp/goods/hiden2/",
   "items": [
    {
     "t": "燭台切套组",
     "img": "https://www.stage-toukenranbu.jp/wp-content/uploads/2026/09/5_%E9%99%BD%E4%BC%9D_%E7%87%AD%E5%8F%B0%E5%88%87%E5%85%89%E5%BF%A0.jpg",
     "href": "https://www.stage-toukenranbu.jp/wp-content/uploads/2026/09/5_%E9%99%BD%E4%BC%9D_%E7%87%AD%E5%8F%B0%E5%88%87%E5%85%89%E5%BF%A0.jpg"
    },
    {
     "t": "个人生写真",
     "img": "https://www.stage-toukenranbu.jp/wp-content/uploads/2026/09/2_%E9%99%BD%E4%BC%9D_%E5%80%8B%E4%BA%BA%E3%83%95%E3%82%99%E3%83%AD%E3%83%9E%E3%82%A4%E3%83%88%E3%82%99%E5%88%80%E5%89%A3%E7%94%B7%E5%A3%AB.jpg",
     "href": "https://www.stage-toukenranbu.jp/wp-content/uploads/2026/09/2_%E9%99%BD%E4%BC%9D_%E5%80%8B%E4%BA%BA%E3%83%95%E3%82%99%E3%83%AD%E3%83%9E%E3%82%A4%E3%83%88%E3%82%99%E5%88%80%E5%89%A3%E7%94%B7%E5%A3%AB.jpg"
    },
    {
     "t": "刀帐生写真",
     "img": "https://www.stage-toukenranbu.jp/wp-content/uploads/2026/09/4_%E9%99%BD%E4%BC%9D_%E5%88%80%E5%B8%B3%E3%83%95%E3%82%99%E3%83%AD%E3%83%9E%E3%82%A4%E3%83%88%E3%82%99.jpg",
     "href": "https://www.stage-toukenranbu.jp/wp-content/uploads/2026/09/4_%E9%99%BD%E4%BC%9D_%E5%88%80%E5%B8%B3%E3%83%95%E3%82%99%E3%83%AD%E3%83%9E%E3%82%A4%E3%83%88%E3%82%99.jpg"
    },
    {
     "t": "明治座限定A4",
     "img": "https://www.stage-toukenranbu.jp/wp-content/uploads/2026/09/5_%E9%99%BD%E4%BC%9D_%E4%BC%9A%E5%A0%B4%E9%99%90%E5%AE%9AA4%E6%9D%B1%E4%BA%AC.jpg",
     "href": "https://www.stage-toukenranbu.jp/wp-content/uploads/2026/09/5_%E9%99%BD%E4%BC%9D_%E4%BC%9A%E5%A0%B4%E9%99%90%E5%AE%9AA4%E6%9D%B1%E4%BA%AC.jpg"
    },
    {
     "t": "新歌舞伎座限定A4",
     "img": "https://www.stage-toukenranbu.jp/wp-content/uploads/2026/09/6_%E9%99%BD%E4%BC%9D_%E4%BC%9A%E5%A0%B4%E9%99%90%E5%AE%9AA4%E5%A4%A7%E9%98%AA.jpg",
     "href": "https://www.stage-toukenranbu.jp/wp-content/uploads/2026/09/6_%E9%99%BD%E4%BC%9D_%E4%BC%9A%E5%A0%B4%E9%99%90%E5%AE%9AA4%E5%A4%A7%E9%98%AA.jpg"
    },
    {
     "t": "随机生写真",
     "img": "https://www.stage-toukenranbu.jp/wp-content/uploads/2026/09/8_%E9%99%BD%E4%BC%9D_%E3%83%A9%E3%83%B3%E3%82%BF%E3%82%99%E3%83%A0%E3%83%95%E3%82%99%E3%83%AD%E3%83%9E%E3%82%A4%E3%83%88%E3%82%99_v2.jpg",
     "href": "https://www.stage-toukenranbu.jp/wp-content/uploads/2026/09/8_%E9%99%BD%E4%BC%9D_%E3%83%A9%E3%83%B3%E3%82%BF%E3%82%99%E3%83%A0%E3%83%95%E3%82%99%E3%83%AD%E3%83%9E%E3%82%A4%E3%83%88%E3%82%99_v2.jpg"
    },
    {
     "t": "祝装随机生写真",
     "img": "https://www.stage-toukenranbu.jp/wp-content/uploads/2026/09/9_%E9%99%BD%E4%BC%9D_%E3%83%A9%E3%83%B3%E3%82%BF%E3%82%99%E3%83%A0%E3%83%95%E3%82%99%E3%83%AD%E3%83%9E%E3%82%A4%E3%83%88%E3%82%99%E7%A5%9D%E8%A3%85ver.jpg",
     "href": "https://www.stage-toukenranbu.jp/wp-content/uploads/2026/09/9_%E9%99%BD%E4%BC%9D_%E3%83%A9%E3%83%B3%E3%82%BF%E3%82%99%E3%83%A0%E3%83%95%E3%82%99%E3%83%AD%E3%83%9E%E3%82%A4%E3%83%88%E3%82%99%E7%A5%9D%E8%A3%85ver.jpg"
    },
    {
     "t": "亚克力立牌",
     "img": "https://www.stage-toukenranbu.jp/wp-content/uploads/2026/09/11_%E9%99%BD%E4%BC%9D_%E3%82%A2%E3%82%AF%E3%83%AA%E3%83%AB%E3%82%B9%E3%82%BF%E3%83%B3%E3%83%88%E3%82%99.jpg",
     "href": "https://www.stage-toukenranbu.jp/wp-content/uploads/2026/09/11_%E9%99%BD%E4%BC%9D_%E3%82%A2%E3%82%AF%E3%83%AA%E3%83%AB%E3%82%B9%E3%82%BF%E3%83%B3%E3%83%88%E3%82%99.jpg"
    },
    {
     "t": "场刊",
     "img": "https://www.stage-toukenranbu.jp/wp-content/uploads/2026/09/1_%E9%99%BD%E4%BC%9D_%E5%85%AC%E6%BC%94%E3%83%8F%E3%82%9A%E3%83%B3%E3%83%95%E3%83%AC%E3%83%83%E3%83%88.jpg",
     "href": "https://www.stage-toukenranbu.jp/wp-content/uploads/2026/09/1_%E9%99%BD%E4%BC%9D_%E5%85%AC%E6%BC%94%E3%83%8F%E3%82%9A%E3%83%B3%E3%83%95%E3%83%AC%E3%83%83%E3%83%88.jpg"
    }
   ]
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
   "url": "https://toy.bandai.co.jp/ja/series/rider/item/01_21234/",
   "cat": "玩具",
   "work": "骑士"
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
   "url": "https://toy.bandai.co.jp/ja/series/rider/item/01_20954/",
   "cat": "玩具",
   "work": "骑士"
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
   "url": "https://toy.bandai.co.jp/ja/series/rider/item/01_20955/",
   "cat": "玩具",
   "work": "骑士"
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
   "url": "https://toy.bandai.co.jp/ja/series/rider/item/01_21232/",
   "cat": "玩具",
   "work": "骑士"
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
   "url": "https://toy.bandai.co.jp/ja/series/rider/item/01_21233/",
   "cat": "玩具",
   "work": "骑士"
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
   "url": "https://tamashiiweb.com/item/16020/",
   "cat": "玩具",
   "work": "骑士"
  },
  {
   "date": "2026-09-06",
   "title": "岭高华武利 猫 尾戒",
   "price": "8,250円（含税）",
   "publisher": "Premium Bandai",
   "image": "https://bandai-a.akamaihd.net/bc/img/model/xl/1000261104_1.jpg",
   "points": [
    "剧中华武利戴的细款猫戒指",
    "9/6开订，11/10起又开了一轮受注"
   ],
   "url": "https://p-bandai.jp/item/item-1000256614/",
   "items": [
    {
     "t": "正面",
     "img": "https://bandai-a.akamaihd.net/bc/img/model/xl/1000261104_1.jpg",
     "href": "https://bandai-a.akamaihd.net/bc/img/model/xl/1000261104_1.jpg"
    },
    {
     "t": "侧面",
     "img": "https://bandai-a.akamaihd.net/bc/img/model/xl/1000261104_2.jpg",
     "href": "https://bandai-a.akamaihd.net/bc/img/model/xl/1000261104_2.jpg"
    }
   ],
   "work": "骑士"
  },
  {
   "date": "2026-09-06",
   "title": "岭高华武利 猫眼戒指",
   "price": "13,230円（含税）",
   "publisher": "Premium Bandai",
   "image": "https://bandai-a.akamaihd.net/bc/img/model/xl/1000261105_1.jpg",
   "points": [
    "戒面是黑底猫剪影的那款",
    "和尾戒同一批开订"
   ],
   "url": "https://p-bandai.jp/item/item-1000256611/",
   "items": [
    {
     "t": "正面",
     "img": "https://bandai-a.akamaihd.net/bc/img/model/xl/1000261105_1.jpg",
     "href": "https://bandai-a.akamaihd.net/bc/img/model/xl/1000261105_1.jpg"
    },
    {
     "t": "侧面",
     "img": "https://bandai-a.akamaihd.net/bc/img/model/xl/1000261105_2.jpg",
     "href": "https://bandai-a.akamaihd.net/bc/img/model/xl/1000261105_2.jpg"
    }
   ],
   "work": "骑士"
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
   "url": "https://p-bandai.jp/item/item-1000256283/",
   "items": [
    {
     "t": "正面",
     "img": "https://bandai-a.akamaihd.net/bc/img/model/xl/1000256283_1.jpg",
     "href": "https://bandai-a.akamaihd.net/bc/img/model/xl/1000256283_1.jpg"
    },
    {
     "t": "细节",
     "img": "https://bandai-a.akamaihd.net/bc/img/model/xl/1000256283_2.jpg",
     "href": "https://bandai-a.akamaihd.net/bc/img/model/xl/1000256283_2.jpg"
    }
   ],
   "work": "骑士"
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
   "imagePos": "50% 100%",
   "work": "骑士"
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
   "url": "https://x.com/tv_asahi_shop/status/2096395455735455915",
   "work": "骑士"
  },
  {
   "date": "2026-11-14",
   "title": "Rider Hero Series 重涂装版（假面骑士Maou）",
   "price": "2,530円",
   "publisher": "假面骑士商店",
   "image": "https://pbs.twimg.com/media/HXIcutVbsAASbNl?format=jpg&name=large",
   "points": [
    "店铺原创，和Rido一起加入",
    "盒背的图也好看，可以连盒摆"
   ],
   "url": "https://x.com/KamenRiderStore/status/2121790031400783919",
   "cat": "玩具",
   "work": "骑士"
  },
  {
   "date": "2024-12-07",
   "title": "《我、我喜欢的他，以及你。》亚克力立牌（崎山亮二）",
   "price": "1,650円",
   "publisher": "テレ东本铺 WEB",
   "image": "https://shop.tv-tokyo.co.jp/img/goods/S/DBS009860_photo01.webp",
   "points": [
    "三人分开卖，他演的是崎山亮二",
    "三个底座能横着拼在一起，和饭岛宽骑、见津贤摆成一排",
    "先受注，2024/12/7起一般贩售"
   ],
   "url": "https://shop.tv-tokyo.co.jp/shop/g/gDBS009860/"
  },
  {
   "date": "2024-12-07",
   "title": "《我、我喜欢的他，以及你。》ブロマイド套组",
   "price": "1,100円",
   "publisher": "テレ东本铺 WEB",
   "image": "https://shop.tv-tokyo.co.jp/img/goods/L/DBS009863_photo01.webp",
   "points": [
    "L判4枚：三人各一张新拍的单人照，加一张三人合照",
    "先受注，2024/12/7起一般贩售"
   ],
   "url": "https://shop.tv-tokyo.co.jp/shop/g/gDBS009863/"
  },
  {
   "date": "2016-07-13",
   "title": "舞台《飙速宅男》总北新世代，启动",
   "cat": "影像",
   "price": "Blu-ray / DVD",
   "publisher": "",
   "image": "https://m.media-amazon.com/images/I/91+30d0cgML._AC_SL500_.jpg",
   "points": [
    "饰苇木场拓斗"
   ],
   "url": "https://www.hmv.co.jp/product/detail/6941917/"
  },
  {
   "date": "2016-09-07",
   "title": "舞台《刀剑乱舞》虚传 燃烧的本能寺",
   "cat": "影像·CD",
   "price": "Blu-ray / DVD ＋ 原声CD",
   "publisher": "Marvelous",
   "image": "https://img.hmv.co.jp/image/jacket/800/70/4/9/201.jpg",
   "points": [
    "饰烛台切光忠",
    "原声CD：2枚组：剧中BGM＋剧中歌现场音源"
   ],
   "url": "https://www.hmv.co.jp/product/detail/7049201/",
   "items": [
    {
     "t": "影像 2016.09.07",
     "img": "https://img.hmv.co.jp/image/jacket/800/70/4/9/201.jpg",
     "href": "https://img.hmv.co.jp/image/jacket/800/70/4/9/201.jpg"
    },
    {
     "t": "原声CD 2017.01.25",
     "img": "https://www.stage-toukenranbu.jp/wp-content/uploads/2021/08/刀ステサントラCD-1024x1010.jpg",
     "href": "https://www.stage-toukenranbu.jp/music/kyoden"
    }
   ]
  },
  {
   "date": "2017-02-22",
   "title": "舞台《飙速宅男》箱根学园新世代，启动",
   "cat": "影像",
   "price": "DVD",
   "publisher": "",
   "image": "https://img.hmv.co.jp/image/jacket/800/73/4/9/900.jpg",
   "points": [
    "饰苇木场拓斗"
   ],
   "url": "https://www.hmv.co.jp/product/detail/7349900/"
  },
  {
   "date": "2017-04-12",
   "title": "舞台《刀剑乱舞》虚传 再演",
   "cat": "影像",
   "price": "Blu-ray / DVD",
   "publisher": "",
   "image": "https://img.hmv.co.jp/image/jacket/800/75/0/2/924.jpg",
   "points": [
    "饰烛台切光忠"
   ],
   "url": "https://www.hmv.co.jp/product/detail/7502924/"
  },
  {
   "date": "2017-07-19",
   "title": "刀舞 蔵出し映像集 虚传再演篇",
   "cat": "影像",
   "price": "Blu-ray / DVD",
   "publisher": "",
   "image": "https://img.hmv.co.jp/image/jacket/800/78/9/9/787.jpg",
   "points": [
    "后台花絮合集"
   ],
   "url": "https://www.hmv.co.jp/product/detail/7899787/"
  },
  {
   "date": "2017-10-18",
   "title": "舞台《刀剑乱舞》义传 黎明的独眼龙",
   "cat": "影像·CD",
   "price": "Blu-ray / DVD ＋ 原声CD",
   "publisher": "Marvelous",
   "image": "https://img.hmv.co.jp/image/jacket/800/79/3/7/351.jpg",
   "points": [
    "饰烛台切光忠",
    "原声CD：2枚组：剧中BGM＋剧中歌现场音源"
   ],
   "url": "https://www.hmv.co.jp/product/detail/7937351/",
   "items": [
    {
     "t": "影像 2017.10.18",
     "img": "https://img.hmv.co.jp/image/jacket/800/79/3/7/351.jpg",
     "href": "https://img.hmv.co.jp/image/jacket/800/79/3/7/351.jpg"
    },
    {
     "t": "原声CD 2017.11.29",
     "img": "https://m.media-amazon.com/images/I/71Sngd-VSbL._AC_SL500_.jpg",
     "href": "https://www.stage-toukenranbu.jp/music/giden"
    }
   ]
  },
  {
   "date": "2017-11-29",
   "title": "《2.5次元男子推しTV》BOX",
   "cat": "影像",
   "price": "Blu-ray / DVD",
   "publisher": "",
   "image": "https://img.hmv.co.jp/image/jacket/800/81/6/4/898.jpg",
   "points": [
    "综艺节目合集"
   ],
   "url": "https://www.hmv.co.jp/product/detail/8164898/"
  },
  {
   "date": "2017-12-20",
   "title": "TRUMP系列《グランギニョル》",
   "cat": "影像",
   "price": "DVD",
   "publisher": "",
   "image": "https://img.hmv.co.jp/image/jacket/800/80/9/6/962.jpg",
   "points": [
    "饰李春林"
   ],
   "url": "https://www.hmv.co.jp/product/detail/8096962/"
  },
  {
   "date": "2018-09-19",
   "title": "摇滚音乐剧《5DAYS 边境的罗密欧与朱丽叶》",
   "cat": "影像",
   "price": "DVD",
   "publisher": "",
   "image": "https://img.hmv.co.jp/image/jacket/800/87/5/6/049.jpg",
   "points": [
    "饰哈瓦尔"
   ],
   "url": "https://www.hmv.co.jp/product/detail/8756049/"
  },
  {
   "date": "2018-09-26",
   "title": "刀舞 蔵出し映像集 义传／ジョ伝篇",
   "cat": "影像",
   "price": "Blu-ray / DVD",
   "publisher": "",
   "image": "https://img.hmv.co.jp/image/jacket/800/88/8/5/823.jpg",
   "points": [
    "后台花絮合集"
   ],
   "url": "https://www.hmv.co.jp/product/detail/8885823/"
  },
  {
   "date": "2018-10-31",
   "title": "舞台《刀剑乱舞》悲传 结之目的不如归",
   "cat": "影像·CD",
   "price": "Blu-ray / DVD ＋ 原声CD",
   "publisher": "Marvelous",
   "image": "https://img.hmv.co.jp/image/jacket/800/88/8/5/834.jpg",
   "points": [
    "饰烛台切光忠",
    "原声CD：2枚组：剧中BGM＋剧中歌现场音源"
   ],
   "url": "https://www.hmv.co.jp/product/detail/8885834/",
   "items": [
    {
     "t": "影像 2018.10.31",
     "img": "https://img.hmv.co.jp/image/jacket/800/88/8/5/834.jpg",
     "href": "https://img.hmv.co.jp/image/jacket/800/88/8/5/834.jpg"
    },
    {
     "t": "原声CD 2018.11.28",
     "img": "https://www.stage-toukenranbu.jp/wp-content/uploads/2021/08/悲伝OST_CD-1024x1013.jpg",
     "href": "https://www.stage-toukenranbu.jp/music/hiden"
    }
   ]
  },
  {
   "date": "2018-11-28",
   "title": "TRUMP系列 音乐剧《Marigold》",
   "cat": "影像",
   "price": "DVD",
   "publisher": "",
   "image": "https://img.hmv.co.jp/image/jacket/800/91/2/1/002.jpg",
   "points": [
    "饰科利乌斯；2021年出过Blu-ray复刻版"
   ],
   "url": "https://www.hmv.co.jp/product/detail/9121002/"
  },
  {
   "date": "2018-12-19",
   "title": "刀舞 悲传 密着纪录片 导演剪辑版",
   "cat": "影像",
   "price": "Blu-ray / DVD",
   "publisher": "",
   "image": "https://img.hmv.co.jp/image/jacket/800/90/4/0/567.jpg",
   "points": [
    "幕后纪录"
   ],
   "url": "https://www.hmv.co.jp/product/detail/9040567/"
  },
  {
   "date": "2019-03-20",
   "title": "动画电影《薄墨樱 -GARO-》",
   "cat": "影像",
   "price": "DVD",
   "publisher": "",
   "image": "https://img.hmv.co.jp/image/jacket/800/95/2/6/762.jpg",
   "points": [
    "为时丸配音"
   ],
   "url": "https://www.hmv.co.jp/product/detail/9526762/"
  },
  {
   "date": "2020-01-22",
   "title": "刀舞 蔵出し映像集 悲传篇",
   "cat": "影像",
   "price": "Blu-ray / DVD",
   "publisher": "",
   "image": "https://img.hmv.co.jp/image/jacket/800/0000102/3/1/719.jpg",
   "points": [
    "后台花絮合集"
   ],
   "url": "https://www.hmv.co.jp/product/detail/10231719/"
  },
  {
   "date": "2021-08-25",
   "title": "《我家女儿交不到男朋友!!》BOX",
   "cat": "影像",
   "price": "Blu-ray / DVD",
   "publisher": "",
   "image": "https://img.hmv.co.jp/image/jacket/400/0000117/0/8/572.jpg",
   "points": [
    "饰涉周一"
   ],
   "url": "https://www.hmv.co.jp/product/detail/11708572/"
  },
  {
   "date": "2022-04-20",
   "title": "剧场版 舞台《刀剑乱舞》虚传",
   "cat": "影像",
   "price": "Blu-ray / DVD",
   "publisher": "",
   "image": "https://img.hmv.co.jp/image/jacket/800/0000125/2/6/082.jpg",
   "points": [
    "剧场上映版"
   ],
   "url": "https://www.hmv.co.jp/product/detail/12526082/"
  },
  {
   "date": "2022-07-27",
   "title": "《Fight Song》BOX",
   "cat": "影像",
   "price": "Blu-ray / DVD",
   "publisher": "",
   "image": "https://img.hmv.co.jp/image/jacket/400/0000127/6/5/618.jpg",
   "points": [
    "饰乌丸薰"
   ],
   "url": "https://www.hmv.co.jp/product/detail/12765618/"
  },
  {
   "date": "2023-02-15",
   "title": "剧场版 舞台《刀剑乱舞》悲传",
   "cat": "影像",
   "price": "Blu-ray / DVD",
   "publisher": "",
   "image": "https://img.hmv.co.jp/image/jacket/800/0000133/4/7/401.jpg",
   "points": [
    "剧场上映版"
   ],
   "url": "https://www.hmv.co.jp/product/detail/13347401/"
  },
  {
   "date": "2024-05-22",
   "title": "JBB《JBB Concert 2023》",
   "cat": "CD",
   "price": "CD",
   "publisher": "",
   "image": "https://img.hmv.co.jp/image/jacket/400/0000148/5/8/426.jpg",
   "points": [
    "JBB第一张现场CD"
   ],
   "url": "https://www.hmv.co.jp/product/detail/14858426/"
  },
  {
   "date": "2025-08-20",
   "title": "JBB《JBB Concert 2024 in Tokyo》",
   "cat": "CD",
   "price": "CD",
   "publisher": "",
   "image": "https://m.media-amazon.com/images/I/71FaaACgKZL._AC_SL500_.jpg",
   "points": [
    "2024巡演东京场"
   ],
   "url": "https://www.hmv.co.jp/product/detail/16129155/"
  },
  {
   "date": "2025-12-10",
   "title": "电影《大叔的内裤穿什么都行吧！》",
   "cat": "影像",
   "price": "Blu-ray / DVD",
   "publisher": "",
   "image": "https://img.hmv.co.jp/image/jacket/400/0000162/5/3/617.jpg",
   "points": [
    "饰砂川圆"
   ],
   "url": "https://www.hmv.co.jp/product/detail/16253617/"
  },
  {
   "date": "2014-05-28",
   "title": "音乐剧《网球王子》青学vs四天宝寺",
   "cat": "影像·CD",
   "price": "DVD 8,800円+税 ＋ 原声CD",
   "publisher": "Marvelous",
   "image": "https://www.marv.jp/uploads/title/728/main.jpg",
   "points": [
    "饰千岁千里，他的出道作"
   ],
   "url": "https://www.marv.jp/titles/st/882/",
   "items": [
    {
     "t": "影像 2014.05.28",
     "img": "https://www.marv.jp/uploads/title/728/main.jpg",
     "href": "https://www.marv.jp/titles/st/882/"
    },
    {
     "t": "原声CD 2014.05.28",
     "img": "https://m.media-amazon.com/images/I/61BLElXP+WL._AC_SL500_.jpg",
     "href": "https://m.media-amazon.com/images/I/61BLElXP+WL._AC_SL500_.jpg"
    }
   ]
  },
  {
   "date": "2014-12-26",
   "title": "音乐剧《网球王子》全国大会 青学vs立海",
   "cat": "影像·CD",
   "price": "DVD 3枚组 ＋ 原声CD",
   "publisher": "Marvelous",
   "image": "https://www.tennimu.com/assets/img/discography/tennimu/second/mjbd-72095/dvd_2nd_2014rikkai.jpg",
   "points": [
    "饰千岁千里",
    "DVD发售活动的登台名单里有他"
   ],
   "url": "https://www.tennimu.com/discography/tennimu/second/mjbd-72095/",
   "items": [
    {
     "t": "影像 2014.12.26",
     "img": "https://www.tennimu.com/assets/img/discography/tennimu/second/mjbd-72095/dvd_2nd_2014rikkai.jpg",
     "href": "https://www.tennimu.com/discography/tennimu/second/mjbd-72095/"
    },
    {
     "t": "原声CD 2015.01.01",
     "img": "https://m.media-amazon.com/images/I/71+14ATpt1L._AC_SL500_.jpg",
     "href": "https://m.media-amazon.com/images/I/71+14ATpt1L._AC_SL500_.jpg"
    }
   ]
  },
  {
   "date": "2015-02-27",
   "title": "音乐剧《网球王子》Dream Live 2014",
   "cat": "影像·CD",
   "price": "DVD 2枚组 ＋ 原声CD",
   "publisher": "Marvelous",
   "image": "https://www.tennimu.com/assets/img/discography/tennimu/second/mjbd-72096/dvd_2nd_dl2014.jpg",
   "points": [
    "第二季毕业DL，收录后台和日替影像"
   ],
   "url": "https://www.tennimu.com/discography/tennimu/second/mjbd-72096/",
   "items": [
    {
     "t": "影像 2015.02.27",
     "img": "https://www.tennimu.com/assets/img/discography/tennimu/second/mjbd-72096/dvd_2nd_dl2014.jpg",
     "href": "https://www.tennimu.com/discography/tennimu/second/mjbd-72096/"
    },
    {
     "t": "原声CD 2015.03.04",
     "img": "https://m.media-amazon.com/images/I/71KEqkKpDNL._AC_SL500_.jpg",
     "href": "https://m.media-amazon.com/images/I/71KEqkKpDNL._AC_SL500_.jpg"
    }
   ]
  },
  {
   "date": "2015-10-26",
   "title": "音乐剧《薄樱鬼》黎明录",
   "cat": "影像·CD",
   "price": "DVD 8,800円+税 ＋ 原声CD",
   "publisher": "Marvelous",
   "image": "https://www.marv.jp/uploads/title/742/main.jpg",
   "points": [
    "饰原田左之助"
   ],
   "url": "https://www.marv.jp/titles/st/888/",
   "items": [
    {
     "t": "影像 2015.10.26",
     "img": "https://www.marv.jp/uploads/title/742/main.jpg",
     "href": "https://www.marv.jp/titles/st/888/"
    },
    {
     "t": "原声CD 2015.12.23",
     "img": "https://www.marv.jp/special/m-hakuoki-harada/images/disco/reimeiroku_cd.jpg",
     "href": "https://www.marv.jp/special/m-hakuoki-harada/disco.html"
    }
   ]
  },
  {
   "date": "2017-07-19",
   "title": "舞台《飙速宅男》新IH篇 起跑线",
   "cat": "影像",
   "price": "Blu-ray 9,800円+税 / DVD 8,800円+税",
   "publisher": "Marvelous",
   "image": "https://www.marv.jp/uploads/title/8665/s_pedalIHSL_KV-3.jpg",
   "points": [
    "饰苇木场拓斗"
   ],
   "url": "https://www.marv.jp/titles/st/9009/"
  },
  {
   "date": "2016-06-08",
   "title": "音乐剧《薄樱鬼》新选组奇谭",
   "cat": "影像",
   "price": "DVD",
   "publisher": "",
   "image": "https://www.marv.jp/special/m-hakuoki-harada/images/disco/kitan_dvd.jpg",
   "points": [
    "饰原田左之助"
   ],
   "url": "https://www.marv.jp/special/m-hakuoki-harada/disco.html"
  },
  {
   "date": "2016-11-30",
   "title": "《Club SLAZY -Another World-》",
   "cat": "影像·CD",
   "price": "DVD ＋ 原声CD",
   "publisher": "CLIE",
   "image": "https://m.media-amazon.com/images/I/61TrMFctbdL._AC_SL1443_.jpg",
   "points": [
    "饰Will"
   ],
   "url": "https://www.amazon.co.jp/dp/B01I9G01YG",
   "items": [
    {
     "t": "影像 2016.11.30",
     "img": "https://m.media-amazon.com/images/I/61TrMFctbdL._AC_SL1443_.jpg",
     "href": "https://m.media-amazon.com/images/I/61TrMFctbdL._AC_SL1443_.jpg"
    },
    {
     "t": "原声CD 2016.11.30",
     "img": "https://m.media-amazon.com/images/I/61FbxCeUPHL._AC_SL500_.jpg",
     "href": "https://m.media-amazon.com/images/I/61FbxCeUPHL._AC_SL500_.jpg"
    }
   ]
  },
  {
   "date": "2017-08-23",
   "title": "音乐剧《薄樱鬼》原田左之助篇",
   "cat": "影像",
   "price": "DVD",
   "publisher": "",
   "image": "https://m.media-amazon.com/images/I/41EAkoOY14L._AC_.jpg",
   "points": [
    "他担纲主演的一篇，饰原田左之助"
   ],
   "url": "https://www.amazon.co.jp/dp/B0798WPS4M"
  },
  {
   "date": "2015-09-11",
   "title": "舞台版《心灵侦探八云 祈祷之柩》",
   "cat": "影像",
   "price": "DVD",
   "publisher": "",
   "image": "https://m.media-amazon.com/images/I/91ODlQkYJpL._AC_SL1500_.jpg",
   "points": [
    "2015年公演，饰织田亮"
   ],
   "url": "https://www.amazon.co.jp/dp/B078HP7LGG"
  },
  {
   "date": "2015-08-12",
   "title": "妖～AYAKASHI～ 出道单曲《憑き夜に踊れ》",
   "cat": "CD",
   "price": "CD",
   "publisher": "EXIT TUNES",
   "image": "https://m.media-amazon.com/images/I/715r051Ks0L._AC_SL500_.jpg",
   "points": [
    "五人妖怪偶像组合，他是成员之一",
    "作词作曲蝶々P"
   ],
   "url": "https://www.youtube.com/watch?v=orJz2nBzkAs"
  },
  {
   "title": "1st DVD《東啓介、南へ行く。》",
   "date": "2017-01-18",
   "price": "",
   "publisher": "",
   "image": "https://m.media-amazon.com/images/I/81oA3IWoE9L._AC_SL500_.jpg",
   "points": [
    "个人第一张影像作品",
    "发售前公开了宣传PV"
   ],
   "url": "list.html?g=all#dvd_minami",
   "cat": "影像"
  },
  {
   "title": "1st写真集《K》",
   "date": "2017-03-15",
   "price": "",
   "publisher": "",
   "image": "https://tshop.r10s.jp/book/cabinet/2404/9784865292404.jpg?downsize=600:*",
   "points": [
    "Pony Canyon",
    "首本写真集，发售时办了见面会"
   ],
   "url": "list.html?g=all#e101",
   "cat": "写真集·杂志"
  },
  {
   "title": "写真集《何色》",
   "date": "2021-03-10",
   "price": "",
   "publisher": "",
   "image": "https://tshop.r10s.jp/book/cabinet/8492/9784048968492.jpg?downsize=600:*",
   "points": [
    "KADOKAWA",
    "第二本写真集"
   ],
   "url": "list.html?g=all#e102",
   "cat": "写真集·杂志"
  },
  {
   "title": "日历写真书 2021.04–2022.03",
   "date": "2021-03-02",
   "price": "",
   "publisher": "",
   "image": "https://tshop.r10s.jp/book/cabinet/5353/9784047365353.jpg?downsize=600:*",
   "points": [
    "KADOKAWA"
   ],
   "url": "list.html?g=all#cal_16609471",
   "cat": "写真集·杂志"
  },
  {
   "title": "日历写真书 2023.04–2024.03",
   "date": "2023-02-27",
   "price": "",
   "publisher": "",
   "image": "https://zasshi.tv/wp/wp-content/uploads/2023/01/20230227_higasikeisuke_cover_02.jpg",
   "points": [
    "东京新闻出版·TV指南"
   ],
   "url": "list.html?g=all#cal_17434046",
   "cat": "写真集·杂志"
  },
  {
   "title": "日历写真书 2024.04–2025.03",
   "date": "2024-02-29",
   "price": "",
   "publisher": "",
   "image": "https://zasshi.tv/wp/wp-content/uploads/2024/02/20240229_higasi_calendar_cover_02.jpg",
   "points": [
    "东京新闻出版·TV指南"
   ],
   "url": "list.html?g=all#cal_17792666",
   "cat": "写真集·杂志"
  },
  {
   "title": "日历写真书 2025.04–2026.03",
   "date": "2025-02-21",
   "price": "",
   "publisher": "",
   "image": "https://zasshi.tv/wp/wp-content/uploads/2025/01/20250221_higasi_calendarbook_2025_2026_main_02.jpg",
   "points": [
    "20代最后一本日历书"
   ],
   "url": "list.html?g=all#e103",
   "cat": "写真集·杂志"
  },
  {
   "title": "音乐剧《薄樱鬼》HAKU-MYU LIVE 2",
   "date": "2016-12-07",
   "price": "",
   "publisher": "Marvelous",
   "image": "https://www.marv.jp/special/m-hakuoki-harada/images/disco/live_dvd.jpg",
   "points": [
    "2016年8月演唱会，东启介以原田左之助出演",
    "Disc1 本篇／Disc2 特典映像"
   ],
   "url": "https://www.marv.jp/special/m-hakuoki-harada/disco.html",
   "cat": "影像"
  },
  {
   "title": "十二支同盟 斗篷风外套",
   "date": "2026-09-27",
   "price": "27,500円（含税）",
   "publisher": "Premium Bandai",
   "image": "https://bandai-a.akamaihd.net/bc/img/model/xl/1000258358_2.jpg",
   "points": [
    "照剧中十二支同盟的斗篷做的日常款，红色款对应猫（华武利），2027年1月发货",
    "魔术贴徽章可换，徽章另售（全12种，1,320円）"
   ],
   "url": "https://www.kamen-rider-official.com/news_articles/3268",
   "items": [
    {
     "t": "红色款",
     "img": "https://bandai-a.akamaihd.net/bc/img/model/xl/1000258358_2.jpg",
     "href": "https://bandai-a.akamaihd.net/bc/img/model/xl/1000258358_2.jpg"
    },
    {
     "t": "猫徽章（另售）",
     "img": "https://bandai-a.akamaihd.net/bc/img/model/xl/1000258391_2.jpg",
     "href": "https://bandai-a.akamaihd.net/bc/img/model/xl/1000258391_2.jpg"
    }
   ],
   "work": "骑士"
  },
  {
   "title": "猫纹样饰品（项链 · 戒指 · 耳饰）",
   "date": "2026-09-30",
   "price": "",
   "publisher": "Premium Bandai",
   "image": "https://bandai-a.akamaihd.net/bc/img/model/xl/1000260412_2.jpg",
   "points": [
    "十二支系列里红色那款就是猫（华武利／Maou）",
    "项链5,500円 · 戒指13,200円 · 耳饰6,600円"
   ],
   "url": "https://www.kamen-rider-official.com/news_articles/3267",
   "items": [
    {
     "t": "项链",
     "img": "https://bandai-a.akamaihd.net/bc/img/model/xl/1000260412_2.jpg",
     "href": "https://bandai-a.akamaihd.net/bc/img/model/xl/1000260412_2.jpg"
    },
    {
     "t": "戒指",
     "img": "https://bandai-a.akamaihd.net/bc/img/model/xl/1000260411_2.jpg",
     "href": "https://bandai-a.akamaihd.net/bc/img/model/xl/1000260411_2.jpg"
    },
    {
     "t": "耳饰",
     "img": "https://bandai-a.akamaihd.net/bc/img/model/xl/1000260409_2.jpg",
     "href": "https://bandai-a.akamaihd.net/bc/img/model/xl/1000260409_2.jpg"
    }
   ],
   "work": "骑士"
  },
  {
   "title": "刀舞 十周年纪念周边",
   "date": "2026-10",
   "price": "",
   "publisher": "舞台『刀剣乱舞』官网 GOODS",
   "image": "https://www.stage-toukenranbu.jp/wp-content/uploads/2026/10/01_raster_bromide.jpg",
   "points": [
    "和陽伝公演周边分开的一套，十周年专属",
    "烫金个人生写真、刀帐生写真、橡果钥匙扣（按组分）、雪花球"
   ],
   "url": "https://www.stage-toukenranbu.jp/goods/10th/",
   "items": [
    {
     "t": "烫金个人生写真",
     "img": "https://www.stage-toukenranbu.jp/wp-content/uploads/2026/10/01_raster_bromide.jpg",
     "href": "https://www.stage-toukenranbu.jp/wp-content/uploads/2026/10/01_raster_bromide.jpg"
    },
    {
     "t": "刀帐生写真",
     "img": "https://www.stage-toukenranbu.jp/wp-content/uploads/2026/10/%E5%8D%81%E5%91%A8%E5%B9%B4_%E5%88%80%E5%B8%B3%E3%83%95%E3%82%99%E3%83%AD_%E9%9B%86%E5%90%88.jpg",
     "href": "https://www.stage-toukenranbu.jp/wp-content/uploads/2026/10/%E5%8D%81%E5%91%A8%E5%B9%B4_%E5%88%80%E5%B8%B3%E3%83%95%E3%82%99%E3%83%AD_%E9%9B%86%E5%90%88.jpg"
    },
    {
     "t": "橡果钥匙扣",
     "img": "https://www.stage-toukenranbu.jp/wp-content/uploads/2026/10/02_keyholder__group_A.jpg",
     "href": "https://www.stage-toukenranbu.jp/wp-content/uploads/2026/10/02_keyholder__group_A.jpg"
    },
    {
     "t": "和纸风文件夹",
     "img": "https://www.stage-toukenranbu.jp/wp-content/uploads/2026/10/03_clearfile.jpg",
     "href": "https://www.stage-toukenranbu.jp/wp-content/uploads/2026/10/03_clearfile.jpg"
    },
    {
     "t": "雪花球",
     "img": "https://www.stage-toukenranbu.jp/wp-content/uploads/2026/10/%E5%8D%81%E5%91%A8%E5%B9%B4_%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%88%E3%82%99%E3%83%BC%E3%83%A0.jpg",
     "href": "https://www.stage-toukenranbu.jp/wp-content/uploads/2026/10/%E5%8D%81%E5%91%A8%E5%B9%B4_%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%88%E3%82%99%E3%83%BC%E3%83%A0.jpg"
    }
   ]
  },
  {
   "title": "Hero T恤 附限定Ride Exs（Maou款）",
   "date": "2026-11",
   "price": "",
   "publisher": "Premium Bandai",
   "image": "https://bandai-a.akamaihd.net/bc/img/model/xl/1000261492_3.jpg",
   "points": [
    "每件附一颗限定配色的Ride Exs",
    "骑士各一款，Maou是红色那件"
   ],
   "url": "",
   "items": [
    {
     "t": "全系列",
     "img": "https://bandai-a.akamaihd.net/bc/img/model/xl/1000261492_1.jpg",
     "href": "https://bandai-a.akamaihd.net/bc/img/model/xl/1000261492_1.jpg"
    },
    {
     "t": "Maou款",
     "img": "https://bandai-a.akamaihd.net/bc/img/model/xl/1000261492_3.jpg",
     "href": "https://bandai-a.akamaihd.net/bc/img/model/xl/1000261492_3.jpg"
    },
    {
     "t": "附带的Ride Exs",
     "img": "https://bandai-a.akamaihd.net/bc/img/model/xl/1000261492_12.jpg",
     "href": "https://bandai-a.akamaihd.net/bc/img/model/xl/1000261492_12.jpg"
    }
   ],
   "work": "骑士"
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
   "zh": "问他实现梦想有什么诀窍，他说：“别有梦想。”梦想一旦实现，人就会愣住，不知道下一步干嘛。所以他只定目标，达成一个就换下一个。",
   "ja": "夢を持たないことだと思います／夢じゃなくて目標にしたほうがおもしろい",
   "date": "2017-01-18",
   "src": "模特新闻",
   "url": "https://mdpr.jp/interview/detail/1650040"
  },
  {
   "topic": "梦想与目标",
   "zh": "他本来一直打网球，受伤打不了了，朋友跟他说：“那你进演艺圈，换个方式打网球呗。”于是“演网球王子音乐剧”成了他的第一个目标。",
   "ja": "",
   "date": "2017-01-18",
   "src": "模特新闻",
   "url": "https://mdpr.jp/interview/detail/1650040"
  },
  {
   "topic": "梦想与目标",
   "zh": "21岁那年说：“30岁之前，想站上帝国剧场的舞台。”结果24岁靠《吸血鬼之舞》就站上去了，提前六年。",
   "ja": "30歳までに、帝国劇場のステージに立ちたいです",
   "date": "2017-01-18",
   "src": "模特新闻",
   "url": "https://mdpr.jp/interview/detail/1650040"
  },
  {
   "topic": "角色幕后",
   "zh": "网球他是真会打，挥拍也挺有自信。结果网王给他的千岁千里——是个左撇子（笑）。只好拿左手从头练。",
   "ja": "まさかの左利きのキャラで（笑）",
   "date": "2017-01-18",
   "src": "模特新闻",
   "url": "https://mdpr.jp/interview/detail/1650040"
  },
  {
   "topic": "角色幕后",
   "zh": "听说动画里苇木场拓斗是宫野真守配的，他当场就嗨了。",
   "ja": "テンションが上がりました！",
   "date": "2017-01-18",
   "src": "模特新闻",
   "url": "https://mdpr.jp/interview/detail/1650040"
  },
  {
   "topic": "私下小事",
   "zh": "书道六段。第一张DVD封面上的标题字，就是他自己写的。",
   "ja": "書道6段なんです",
   "date": "2017-01-18",
   "src": "模特新闻",
   "url": "https://mdpr.jp/interview/detail/1650040"
  },
  {
   "topic": "私下小事",
   "zh": "高中修学旅行二月去的冲绳，又冷又阴，海都没下成。所以第一张DVD他自己挑了冲绳，算是把当年的遗憾补上了。",
   "ja": "海にも入れませんでした",
   "date": "2017-01-18",
   "src": "模特新闻",
   "url": "https://mdpr.jp/interview/detail/1650040"
  },
  {
   "topic": "恋爱观",
   "zh": "喜欢什么样的人？“能开开心心跟着我节奏走的人。”他说自己挺随性的，想到什么做什么。",
   "ja": "僕のペースに楽しんでついてきてくれる人",
   "date": "2017-01-18",
   "src": "模特新闻",
   "url": "https://mdpr.jp/interview/detail/1650040"
  },
  {
   "topic": "恋爱观",
   "zh": "“我啊，看声音。”自称声控。长得很可爱、一开口声音却很低的那种反差，他也很吃。",
   "ja": "僕は、声です",
   "date": "2018-05-26",
   "src": "周刊女性PRIME",
   "url": "https://www.jprime.jp/articles/-/12438?page=4"
  },
  {
   "topic": "恋爱观",
   "zh": "理想的相处是：休息日两个人在家各忙各的，却会在同一个瞬间一起笑出来。",
   "ja": "同じタイミングで笑えるみたいな関係",
   "date": "2018-05-26",
   "src": "周刊女性PRIME",
   "url": "https://www.jprime.jp/articles/-/12438?page=4"
  },
  {
   "topic": "私下小事",
   "zh": "去柳下大哥家就跟回自己家一样：大哥在做饭，他啥也不帮，开着电视自己瘫着（笑）。",
   "ja": "勝手にくつろいでます（笑）",
   "date": "2018-05-26",
   "src": "周刊女性PRIME",
   "url": "https://www.jprime.jp/articles/-/12438"
  },
  {
   "topic": "私下小事",
   "zh": "跟人一熟就会一下子贴上去，人家再忙他也要问一句“一起吃个饭？”。他自己也承认，距离拉得太快了（笑）。",
   "ja": "すごく距離を詰めちゃうほうなので（笑）",
   "date": "2018-05-26",
   "src": "周刊女性PRIME",
   "url": "https://www.jprime.jp/articles/-/12438?page=6"
  },
  {
   "topic": "私下小事",
   "zh": "化妆间必备美颜滚轮，但他是拿来滚脖子和头的，唱完歌松松肌肉。经常被人吐槽：“你是不是用错地方了？”",
   "ja": "「用途間違えてない？」って言われる",
   "date": "2018-05-26",
   "src": "周刊女性PRIME",
   "url": "https://www.jprime.jp/articles/-/12438?page=6"
  },
  {
   "topic": "舞台趣事",
   "zh": "《BOY BAND》里一个人演十三个角色。排练时怎么都找不到感觉，被导演点了，躲进厕所哭过（笑）。正式演出时演摄影师，上了台才发现相机忘带了，只能硬着头皮现场圆过去。",
   "ja": "トイレで泣きましたし（笑）",
   "date": "2018-05-26",
   "src": "周刊女性PRIME",
   "url": "https://www.jprime.jp/articles/-/12438?page=6"
  },
  {
   "topic": "身高烦恼",
   "zh": "个子太高，普通直筒裤穿起来轮廓怎么都不对，所以干脆一直穿紧身裤，让腿型清楚一点。",
   "ja": "スキニーを履くようにしています",
   "date": "2019-01-16",
   "src": "FAST",
   "url": "https://fast-tokyo.com/keisuke-higashi-special-contents/"
  },
  {
   "topic": "私下小事",
   "zh": "包是他穿搭里少不了的东西，托特包、斜挎包什么的，买了一堆。",
   "ja": "トートバッグやショルダーバックなど色々",
   "date": "2019-01-16",
   "src": "FAST",
   "url": "https://fast-tokyo.com/keisuke-higashi-special-contents/"
  },
  {
   "topic": "身高烦恼",
   "zh": "日历封面封底他怎么都缩着？因为个子高，一拍照就有种“我必须缩起来才进得了镜头”的使命感（笑）。",
   "ja": "縮こまらないといけないという使命感にかられて…（笑）",
   "date": "2025-02-22",
   "src": "WEBザテレビジョン",
   "url": "https://thetv.jp/news/detail/1247697/"
  },
  {
   "topic": "私下小事",
   "zh": "喜欢老车、老摩托。摩托驾照还没有，要是有了，想骑去箱根、热海，一路走一路拍。",
   "ja": "僕も昔の車が好きなので",
   "date": "2025-02-22",
   "src": "WEBザテレビジョン",
   "url": "https://thetv.jp/news/detail/1247697/"
  },
  {
   "topic": "梦想与目标",
   "zh": "快30了，前辈们都吓他“到了30代就动不了了”。他说要是过几年真的“动不了了……”可就麻烦了，所以现在就开始注意身体。",
   "ja": "「本当に動けなくなっちゃった…」となると困るので",
   "date": "2025-02-22",
   "src": "WEBザテレビジョン",
   "url": "https://thetv.jp/news/detail/1247697/"
  },
  {
   "topic": "角色幕后",
   "zh": "小时候看假面骑士，看得最多的是空我，龙骑、555、剑也都追过。",
   "ja": "『仮面ライダークウガ』をよく見ていました",
   "date": "2026-09-02",
   "src": "animate times",
   "url": "https://www.animatetimes.com/news/details.php?id=1788235894"
  },
  {
   "topic": "角色幕后",
   "zh": "他觉得Maou强到根本不用多余的动作。打起来要带点坏心眼，像猫逮到虫子拿来玩那样，不是单纯把人揍趴下就完事。",
   "ja": "猫が虫を捕まえて遊ぶくらいのイタズラ心",
   "date": "2026-09-02",
   "src": "animate times",
   "url": "https://www.animatetimes.com/news/details.php?id=1788235894"
  },
  {
   "topic": "角色幕后",
   "zh": "演马狼照英时，他想的是那种眼神——“倒也不是美杜莎啦”，但要让人看一眼就定住。",
   "ja": "メデューサじゃないですけど",
   "date": "2026-08-07",
   "src": "animate times",
   "url": "https://www.animatetimes.com/news/details.php?id=1785993354"
  },
  {
   "topic": "角色幕后",
   "zh": "马狼的口头禅“へたくそ（菜鸡）”，他试了好多种不同的说法。",
   "ja": "「へたくそ」はいろんな言い方しました",
   "date": "2026-08-07",
   "src": "animate times",
   "url": "https://www.animatetimes.com/news/details.php?id=1785993354"
  },
  {
   "topic": "角色幕后",
   "zh": "足球完全零基础，为了《蓝色监狱》练了差不多一年半，高桥文哉还陪他加练。",
   "ja": "約1年半のサッカー練習",
   "date": "2026-08-07",
   "src": "animate times",
   "url": "https://www.animatetimes.com/news/details.php?id=1785993354"
  },
  {
   "topic": "身高烦恼",
   "zh": "拍《武士マック》时跟演寿惠的佐藤真弓对戏，他自己先吐槽：“我们俩身高差超级大（笑）。”",
   "ja": "僕と、ものすごく身長差があります（笑）",
   "date": "2022-05-24",
   "src": "マイナビニュース",
   "url": "https://news.mynavi.jp/article/20220524-2349986/"
  },
  {
   "topic": "角色幕后",
   "zh": "以前常看电视剧版《电车男》，这次拍《武士マック》能跟剧里的主角伊藤淳史对戏，他觉得机会很难得。",
   "ja": "『電車男』をよく見ていたので",
   "date": "2022-05-24",
   "src": "マイナビニュース",
   "url": "https://news.mynavi.jp/article/20220524-2349986/"
  },
  {
   "topic": "私下小事",
   "zh": "他自己也玩游戏，所以接到《Chaser Game》很开心，能看看做游戏的人是什么样。原作漫画一口气就看完了。",
   "ja": "原作を一気に読んでしまいました",
   "date": "2022-08-23",
   "src": "东京电视台官网",
   "url": "https://www.tv-tokyo.co.jp/chasergame/cast/"
  },
  {
   "topic": "私下小事",
   "zh": "“とんちゃん”是怎么来的：学校老师跟他说“東”也能读成“とん”，后来老师就一直这么叫他。",
   "ja": "学校の先生が「東」を「とん」と読むと教えてくれて",
   "date": "2024-06-21",
   "src": "ワタナベエンターテインメント官方X",
   "url": "https://x.com/WatanabeEnt/status/1804065936887943392"
  },
  {
   "topic": "私下小事",
   "zh": "2024年日历有什么看点？他卖了个关子：有一张会让你想“咦，这个站姿该不会是……？”",
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
   "zh": "本来一直想当网球教练，初中到高中都在打网球。高一快结束时受了伤，养伤那阵子在家看电视剧，才对演戏有了兴趣。",
   "ja": "ずっとテニスのインストラクターになりたくて"
  },
  {
   "date": "2016-06-17",
   "src": "ライブドアニュース",
   "url": "https://news.livedoor.com/article/detail/11636628/",
   "topic": "私下小事",
   "zh": "以前特别怕出风头，压根没想过上电视、上杂志。结果高中同学说“早就觉得你会进演艺圈”。他的结论是：好像，也不讨厌（笑）。",
   "ja": "結果、嫌いじゃなかった（笑）"
  },
  {
   "date": "2016-06-17",
   "src": "ライブドアニュース",
   "url": "https://news.livedoor.com/article/detail/11636628/",
   "topic": "角色幕后",
   "zh": "演苇木场拓斗时，他一直在想这人为什么驼背：性子温柔、什么都迁就别人、胆子又有点小，就这么一点点把自己缩起来了。",
   "ja": "なんで猫背なんだろうな？と"
  },
  {
   "date": "2016-06-17",
   "src": "ライブドアニュース",
   "url": "https://news.livedoor.com/article/detail/11636628/",
   "topic": "私下小事",
   "zh": "书桌旁边就放着书法工具，在家闲下来就写两笔。写完整个人都清爽了。",
   "ja": "書いたらスッキリします"
  },
  {
   "date": "2016-06-17",
   "src": "ライブドアニュース",
   "url": "https://news.livedoor.com/article/detail/11636628/",
   "topic": "私下小事",
   "zh": "超喜欢动画《穿越时空的少女》，到现在有空还会翻出来看。钢琴拿手曲就是片里奥华子的《変わらないもの》，能边弹边唱。",
   "ja": "いまでも暇があったら見るくらい"
  },
  {
   "topic": "私下小事",
   "zh": "受哥哥影响，学生时代考前复习都开着《SCHOOL OF LOCK!》和《All Night Nippon》。",
   "ja": "受験勉強とかテスト勉強をしていました",
   "date": "2018-10-10",
   "src": "ステージナタリー",
   "url": "https://natalie.mu/stage/news/303161"
  },
  {
   "topic": "角色幕后",
   "zh": "没踢过足球，为了演马狼练了一年多。教练说球不离脚是捷径，他就在家里从客厅一路带球走到厕所。",
   "ja": "リビングからトイレに行くまでボールを触りながら",
   "date": "2026-08-07",
   "src": "Astage",
   "url": "https://www.astage-ent.com/cinema/bluelock-15.html"
  },
  {
   "topic": "角色幕后",
   "zh": "导演反复叮嘱别演成小混混：真正的老大什么都不用做，靠站姿和气场就够了。",
   "ja": "ボスこそ何もしない",
   "date": "2026-08-07",
   "src": "Astage",
   "url": "https://www.astage-ent.com/cinema/bluelock-15.html"
  },
  {
   "topic": "梦想与目标",
   "zh": "作为演员绝不让步的东西是唱歌。现在每个月还去上一两次课，一直在琢磨怎么让声音再“觉醒”一次。",
   "ja": "歌です",
   "date": "2026-08-07",
   "src": "Astage",
   "url": "https://www.astage-ent.com/cinema/bluelock-15.html"
  }
 ]
};
