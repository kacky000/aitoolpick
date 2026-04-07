# AIToolPick 改善レポート
## 万博GOサイト制作の知見に基づく監査

**作成日**: 2026-04-04
**対象サイト**: aitoolpick.org（Astro + Vercel）
**ブログ記事数**: 135本
**ツール数**: 22（tools.json）

---

## 1. AIっぽさの排除

### 1-1. デザイン面の問題

| # | 問題 | 深刻度 | 対応 |
|---|------|--------|------|
| D1 | **Interフォントを使用** — `global.css`の1行目で `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap')` を読み込んでいる。Inter は AI 生成サイトの定番フォントであり、万博GOの知見（KNOWLEDGE-VIBE-CODING.md 1-2項）でも明確に「Inter/Roboto 禁止」と記載されている | 高 | `system-ui, -apple-system, "Segoe UI", sans-serif` に変更するか、DM Sans / Source Sans 3 / Noto Sans 等の差別化できるフォントに切り替える |
| D2 | **カテゴリに絵文字アイコンを多用** — `categories.json` で全13カテゴリに絵文字（📋✅📝🧠🎨🤖✍️💬⚡💰🗄️🔧🖼️）を使用。KNOWLEDGE-VIBE-CODING.md で「絵文字アイコンの多用禁止（AIの典型パターン）」と指摘されている | 中 | SVGアイコン（Lucide, Heroicons等）に置き換える |
| D3 | **ブログカード画像未設定時のプレースホルダ** — `blog/index.astro` と `blog/[page].astro` で画像なしの場合に `linear-gradient(135deg, var(--primary), #6366f1)` の紫グラデーションを表示。紫〜青グラデーションはAI典型パターン | 低 | ソリッドカラーか、ツールのアイコンを使ったプレースホルダに変更 |
| D4 | **ヒーローセクションのダークグラデーション背景** — `linear-gradient(135deg, var(--dark) 0%, var(--dark-soft) 100%)` はAI生成サイトでよく見るパターンだが、ダーク→ダークなので視覚的には許容範囲 | 低 | 優先度は低いが、テクスチャやイラストを追加すると差別化できる |

### 1-2. 文章面の問題

135記事を横断検索した結果、以下のAI典型フレーズが検出された:

| フレーズ | 出現数 | 該当記事例 |
|---------|--------|-----------|
| `game-changer` | 5+ | chatgpt-pricing, best-ai-tools-for-freelancers, best-trello-alternatives, best-collaboration-tools-remote-teams |
| `revolutionize` / `revolutionized` | 3 | best-ai-tools-for-marketing, best-slack-alternatives, best-collaboration-tools-remote-teams |
| `supercharge` | 3 | best-note-taking-apps, best-ai-tools-for-freelancers, best-project-management-tools |
| `Whether you're a...` | 5+ | chatgpt-pricing, best-tools-for-content-creators, clickup-review, best-slack-alternatives |
| `unlock` | 1 | best-ai-tools-for-small-business |

**対策**: これらのフレーズを具体的な表現に置き換える。例: `game-changer` → 「月30時間の作業を5時間に減らせる」等の具体的数字。

---

## 2. SEOメタデータ

### 2-1. 良い点
- OGPタグ（og:type, og:url, og:title, og:description, og:image, og:site_name）が全ページで正しく設定されている
- Twitter Cardタグ（summary_large_image）が設定されている
- canonicalタグが動的に生成されている
- JSON-LDスキーマ（WebSite, Article, SoftwareApplication）が適切に設定されている
- サムネイル画像は1200x630pxで統一されている（OGP推奨サイズ）

### 2-2. 問題点

| # | 問題 | 深刻度 | 対応 |
|---|------|--------|------|
| S1 | **og:imageのデフォルト値が存在しない画像** — `BaseLayout.astro` で `image = '/og-default.png'` がデフォルトだが、`public/og-default.png` が存在しない。OGP画像がないページ（about, compare/index等）でSNSシェア時に画像が表示されない | 高 | `public/og-default.png`（1200x630px）を作成する |
| S2 | **比較ページのmeta descriptionがテンプレート的** — 全ての比較ページが `Compare {A} and {B} side-by-side...` の同一テンプレート。Googleが「重複コンテンツ」と判断するリスク | 中 | ツールごとの特徴を含むユニークなdescriptionに変更 |
| S3 | **alternativesページのmeta descriptionもテンプレート的** — 全て `Looking for {tool} alternatives? Compare {N} similar tools...` の同一構造 | 中 | 同上 |
| S4 | **robots.txt が最小限** — `public/robots.txt` の内容未確認だが、サイトマップURLの指定を確認すべき | 低 | `Sitemap: https://aitoolpick.org/sitemap-index.xml` を記載する |

---

## 3. モバイル対応

### 3-1. フォントサイズ

CSSを全て確認した結果、**14px未満のフォントサイズ指定は存在しない**（remベースで指定されており、最小は `0.8rem` = 12.8px）。

| セレクタ | サイズ | 実効値 | 判定 |
|---------|--------|--------|------|
| `.post-card-date` | 0.8rem | 12.8px | NG（14px未満） |
| `.card-tag` | 0.8rem | 12.8px | NG（14px未満） |
| `.footer-bottom p` | 0.85rem | 13.6px | NG（14px未満） |
| `.footer-col a` | 0.9rem | 14.4px | OK |
| `.card-description` | 0.95rem | 15.2px | OK |

**対策**: `.post-card-date`, `.card-tag`, `.footer-bottom p` を `0.875rem`（14px）以上に変更。

### 3-2. タップターゲット

| # | 問題 | 深刻度 | 対応 |
|---|------|--------|------|
| M1 | **ナビゲーションのハンバーガーメニュー** — `.nav-toggle` にはサイズ指定がない。`font-size: 1.5rem` のみで、padding未指定のため、タップ領域が小さい可能性がある | 中 | `min-width: 44px; min-height: 44px; display: flex; align-items: center; justify-content: center;` を追加 |
| M2 | **ページネーションリンク** — `.pagination-link` は `width: 2.5rem; height: 2.5rem` = 40px。44px未満 | 中 | 44px（2.75rem）に変更 |
| M3 | **フッターのリンク** — `.footer-col li` は `margin-bottom: 0.5rem` のみで、リンク自体のpadding不足。隣接リンクが密接している | 中 | `padding: 0.5rem 0` を `.footer-col a` に追加 |
| M4 | **カテゴリカード** — `.category-card` は `padding: 1rem 1.25rem` で十分な高さがある。OK | - | 問題なし |

---

## 4. 画像の正確性

### 4-1. ツールアイコン

`public/icons/` に22個のアイコン画像が存在する。ただし:

| # | 問題 | 深刻度 | 対応 |
|---|------|--------|------|
| I1 | **canva.pngが実はJPEG** — `file` コマンドで確認したところ `canva.png: JPEG image data` と判定された。ブラウザは通常表示するが、厳密には拡張子が不正 | 低 | 正しいPNG形式に変換するか、拡張子を.jpgに変更 |
| I2 | **アイコンサイズが不統一** — airtable/asanaは48x48px、canvaは128x128px。表示上はwidth/height属性で制御しているが、ファイルサイズの最適化のため統一すべき | 低 | 全アイコンを48x48 or 64x64 PNGに統一 |

### 4-2. ブログサムネイル

- 135記事中、全記事に `/thumbs/xxx.jpg` が設定されている（heroImage未設定の記事は未検出）
- サイズは1200x630pxで統一（3ファイルのサンプルで確認）
- **ただし、サムネイルの画像内容が正しいかはPlaywrightでは確認不可能**（万博GOの教訓: Section 4）。目視確認が必要

### 4-3. ツール紹介の画像

**ツール詳細ページにスクリーンショットが一切ない。** 比較ページ（`[...slug].astro`）もalternativesページも、テキストとテーブルのみでスクリーンショットが含まれていない。

| # | 問題 | 深刻度 | 対応 |
|---|------|--------|------|
| I3 | **比較ページにツールのUIスクリーンショットがない** — ユーザーはUIを見て判断したいが、テーブルデータのみ。万博GOの知見「テキストだけは絶対NG」に違反 | 高 | 各ツールのUIスクリーンショットを追加（公式サイトから取得、ローカル保存） |
| I4 | **ブログ記事にも画像がサムネイル1枚のみ** — 記事内にインラインの画像やスクリーンショットが含まれていない。「画像5-8枚以上」の基準を満たしていない | 高 | 記事内にツールのUI画像、比較表の視覚化、ワークフロー図等を追加 |

---

## 5. ページの長さとUX

### 5-1. 比較ページ一覧（compare/index.astro）

22ツールの全組み合わせ（22C2 = 231通り）がカテゴリ別にリスト表示される。ただし比較リンクは折りたたまれておらず、ページが長くなる。

| # | 問題 | 深刻度 | 対応 |
|---|------|--------|------|
| U1 | **compare/index.astro で全231比較が一覧表示** — カテゴリごとにグループ化されているが、スクロールが長い | 中 | カテゴリをアコーディオン化するか、「もっと見る」ボタンで段階的に表示 |

### 5-2. alternativesページ

ツールによっては代替ツールが20個以上表示される。テーブル + カードグリッドで2回表示しているため冗長。

| # | 問題 | 深刻度 | 対応 |
|---|------|--------|------|
| U2 | **同じツール一覧がテーブルとカードで2回表示** — Pricing Comparison テーブルの直後に All Alternatives グリッドがあり、情報が重複 | 中 | テーブルを削除してカードに統一、またはカードをテーブルの下に「詳細カード」として分離 |

### 5-3. フィルタ・ソート機能

| # | 問題 | 深刻度 | 対応 |
|---|------|--------|------|
| U3 | **検索バーが `disabled` になっている** — トップページのヒーロー検索が `<input ... disabled />` で無効化されたまま。ユーザーが検索しようとして反応しないのはUX上最悪 | 高 | 検索機能を実装するか、検索バーを削除する。中途半端な「飾り」の検索バーは信頼性を損なう |
| U4 | **比較ページにソート・フィルタなし** — 231の比較リストにフィルタ機能がない | 中 | カテゴリフィルタボタンを追加 |
| U5 | **alternativesページにソート機能なし** — 価格順・評価順でソートできない | 低 | JSでテーブルソートを追加 |

### 5-4. ブログ記事の長さ

最長記事は239行（trello-pricing-2026.md）。適切な範囲内で問題なし。

---

## 6. その他の発見

| # | 問題 | 深刻度 | 対応 |
|---|------|--------|------|
| O1 | **サイトURL不一致** — `astro.config.mjs` では `site: 'https://aitoolpick.org'` だが、CLAUDE.mdには `aitoolpick.vercel.app` と記載。vercel.jsonでリダイレクト設定済みなので動作は問題ないが、混乱の元 | 低 | CLAUDE.md を最新のドメインに更新 |
| O2 | **JSON-LDのSearchActionが未実装** — BaseLayout.astro で `SearchAction` のスキーマを定義しているが、`/search?q=` ページが存在しない。Googleに虚偽のスキーマを提供することになる | 高 | 検索ページを実装するか、SearchActionスキーマを削除 |
| O3 | **about.astro のメールアドレス** — `hello@aitoolpick.com` が記載されているが、ドメインは `aitoolpick.org`。メールが届かない可能性 | 中 | 正しいメールアドレスに修正、またはフォームに置き換え |
| O4 | **ブログ記事CTAが全て同じリンク** — BlogPost.astro の末尾CTAが全て `/compare/notion-vs-clickup/` にハードコード。記事の内容と無関係 | 中 | 記事のタグやカテゴリに基づいて関連比較ページにリンクする |

---

## 優先度順の対応リスト

### 即座に対応すべき（高）
1. **U3**: 検索バーのdisabled解除 or 削除
2. **O2**: SearchAction JSON-LDの削除（検索ページが存在しないため）
3. **D1**: Interフォントの変更
4. **S1**: og-default.png の作成
5. **I3/I4**: ツールUIスクリーンショットの追加（長期タスク）

### 近日中に対応すべき（中）
6. **D2**: 絵文字アイコン → SVGアイコン
7. **M1/M2/M3**: タップターゲット44px確保
8. **フォントサイズ**: 0.8rem → 0.875rem以上
9. **S2/S3**: meta descriptionのユニーク化
10. **O3**: メールアドレスの修正
11. **O4**: ブログCTAの動的化
12. **AI文体**: game-changer等のフレーズ置換

### 時間がある時に対応（低）
13. **U1/U2**: ページ長さの最適化
14. **U4/U5**: フィルタ・ソート機能
15. **I1/I2**: アイコン形式統一
16. **D3/D4**: プレースホルダ・背景のデザイン改善

---

## まとめ

AIToolPickは構造的にはしっかり作られているが、万博GOで得た知見と照らすと「AIが作ったサイト」の典型的な特徴がいくつか残っている。特に:

1. **Interフォント + 絵文字アイコン**: AI生成サイトの2大サイン
2. **検索バーが飾り**: 最悪のUXパターン
3. **画像の不足**: テキスト中心でスクリーンショットがない
4. **テンプレート的なmeta description**: SEO上の重複リスク
5. **AI典型フレーズの残存**: game-changer, revolutionize, supercharge等

これらを修正すれば、ユーザーから見て「ちゃんと人が運営しているサイト」という印象に近づく。
