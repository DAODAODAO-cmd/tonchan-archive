# 东启介资讯站（Keisuke Higashi Hub）

粉丝整理的非官方资讯站，内容包括舞台、影视、采访、杂志、广播、综艺和周边，另附完整编年档案。

- `index.html`：资讯首页（进行中、即将到来、最新动态、作品与露出、视频、周边、个人资料、官方渠道）
- `archive.html`：编年档案（原 Higashi_Keisuke_Chronicle 的拆分版）
- `data/hub.js`：首页数据，**日常更新主要改这个**
- `data/archive.js`：编年档案数据（作品、采访、杂志、广播、视频）
- `assets/img/`：编年档案用到的官方公开图片

两个页面都是纯静态的。双击 `index.html` 就能在本地打开，也可以直接放到 GitHub Pages 上。

---

## 一、第一次挂到 GitHub Pages

方法 A：GitHub Desktop（最省事）

1. 安装 GitHub Desktop，登录 GitHub 账号。
2. File → Add local repository → 选择 `higashi-keisuke-hub` 文件夹。提示“不是仓库”时点 **create a repository**。
3. 点 **Publish repository**，取消勾选 “Keep this code private”（Pages 免费版需要公开仓库）。
4. 打开 GitHub 网页上的仓库 → Settings → Pages → Source 选 **Deploy from a branch**，Branch 选 `main` / `/ (root)` → Save。
5. 等 1–2 分钟，网址是 `https://你的用户名.github.io/higashi-keisuke-hub/`。

方法 B：命令行

```bash
cd higashi-keisuke-hub
git init -b main
git add .
git commit -m "first publish"
git remote add origin https://github.com/你的用户名/higashi-keisuke-hub.git
git push -u origin main
```

然后同样在 Settings → Pages 里开启。

> 网页上传也可以，但 `assets/img` 有 400 多张图，网页一次最多传 100 个文件，所以更推荐 A 或 B。

---

## 二、日常更新

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

## 三、改完先本地看一眼

双击 `index.html` 用浏览器打开。页面空白通常是 `hub.js` 或 `archive.js` 里少了逗号或引号：按 F12 打开 Console，看报错在第几行。
