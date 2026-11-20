# 东启介资讯站（Keisuke Higashi Hub）

粉丝整理的非官方资讯站，内容包括舞台、影视、采访、杂志、广播、综艺和周边，另附完整编年档案。

- `index.html`：资讯首页（进行中、即将到来、最新动态、作品与露出、视频、周边、个人资料、官方渠道）
- `archive.html`：编年档案（原 Higashi_Keisuke_Chronicle 的拆分版）
- `data/hub.js`：首页数据，**日常更新主要改这个**
- `data/archive.js`：编年档案数据（作品、采访、杂志、广播、视频）
- `assets/img/`：编年档案用到的官方公开图片

页面都是纯静态的。双击 `index.html` 就能在本地打开，也可以直接放到 GitHub Pages 上。

## 手机版第一轮更新

- 首页只保留当前重点、三条近期安排和四个资料入口。消息更新在「近况」页切换查看。
- `index.html?view=works` 浏览作品；顶部可切换角色图鉴和原有「上方海报、下方角色」收藏卡。
- `index.html?view=goods` 浏览周边，手机分类分为两行。当前与过往周边都可进入独立详情，查看完整说明及已收录的套图。
- `detail.html?id=记录编号` 是作品、角色、日程、年表共用的资料详情；详情读取原来的数据文件，不再另建重复资料。
- 消息详情和周边详情同样从 `data/hub.js` 读取。周边通过「日期＋标题」定位，改这两个字段时旧详情链接也会改变。
- `assets/media-index.js` 记录站内图片副本及重复图片的识别信息，原始来源地址仍保留。补图来源可在详情底部的资料说明中查看。
- 返回列表会保留筛选与浏览位置。原 `archive.html` 和原有资料、图片均保留，主导航统一使用「演艺年表」。
- 本地校验：`node tools/check-mobile.cjs`。它检查全部资料、消息、周边详情及原图来源的保留情况。
- 「音像资料」入口：`list.html?g=audio`，集中收录音乐 CD、DVD／Blu-ray、数字发行。`assets/audio.js` 从原数据关联各版资料，`detail.html?audio=...` 展示日期、说明和版本图；原数据与原详情链接继续保留。写真与出版不再混排音像。

---

## 日常更新

改完文件后，在 GitHub Desktop 里写一句说明 → **Commit** → **Push**，网站 1–2 分钟后自动更新。

### 1. 加一条最新动态（`data/hub.js` → `news`）

把新消息加到 `news: [` 下面的**第一行**：

```js
{ date: "2026-12-06", tag: "舞台", title: "刀舞《陽伝》大阪公演开幕", text: "新歌舞伎座，演至12/23。", url: "https://stage-toukenranbu.jp/stage/" },
```

`tag` 可用：舞台 · 影视 · 采访 · 杂志 · 广播 · 综艺 · 周边 · 活动。

记得同时把文件最上面的 `updated:` 改成当天日期。

### 2. 加一个作品、采访、杂志、广播或综艺（`data/archive.js` → `events`）

复制一条已有的记录，改字段即可，常用字段：

| 字段 | 说明 |
|---|---|
| `id` | 不重复的英文编号，比如 `mag_xxx2701` |
| `date` / `end` | 开始日 / 结束日，格式 `2027-01-08`，没有结束日就留空 `""` |
| `category` | 舞台、电视剧、网络剧、电影、朗读剧、音乐会、活动、采访／连载、杂志、广播／音声、电视节目、写真／出版 |
| `title` / `japanese` | 中文题名 / 日文原题 |
| `role` | 角色名；本人出演写 `本人` |
| `url` | 官网或原文链接 |
| `note` | 补充说明 |
| `status` | 核对状态，比如 `官网／主办方已核对` |
| `images` | 图片，见下 |

首页的“即将到来”和“作品与媒体露出”会**自动**从这里读取，不用另外改首页。

### 3. 加视频（`data/archive.js` → `videos`）

```js
{ "id": "视频ID", "title": "标题", "channel": "频道名", "platform": "YouTube",
  "type": "采访／发布会", "sourceType": "官方／机构", "years": ["2026"],
  "url": "https://www.youtube.com/watch?v=视频ID",
  "thumbnail": "https://i.ytimg.com/vi/视频ID/hqdefault.jpg",
  "uploadDate": "2026-12-01", "playlists": [], "rel": "", "asset": "", "available": true, "duration": "" }
```

B站视频把 `platform` 改成 `"B站"`，`url` 写 `https://www.bilibili.com/video/BV号/`，`thumbnail` 留空即可。

### 4. 图片规则

- **有剧照就放剧照，没有就放官方海报或宣传图**。
- 写在 `images` 里：`{ "url": "图片地址", "caption": "官网舞台剧照：东启介饰××", "source": "出处页面", "asset": "", "resolution": "" }`
- 想把图片存进仓库，就把图片放到 `assets/img/`，`url` 写 `assets/img/文件名.jpg`。
- **粉丝俱乐部（FC）的会员图片和文字一律不放**，只放 FC 入口链接。
- 本人 X / Instagram 的日常内容不搬运，只在“官方渠道指路”里放链接。

---
