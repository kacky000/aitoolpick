# AIToolPick（aitoolpick.org）— プロジェクト指示書

**全ての応答・ログは日本語（記事コンテンツは英語）。確認質問は禁止、即実行。**
横断ルール（git安全規定R11等）は親 `business-system/CLAUDE.md` に従う。

## 現状（2026-09-03 時点）: 維持モード検討中
- Organic 380〜414 sess/週で安定（価格系ロングテール記事が資産化）
- ただし**収益は0円**: AdSenseにPVは計上されるが広告インプレッション0 = 広告ユニットが実質未設置。収益化テスト（広告設置→30日観測）を経てから Kill/Scale を最終判断する方針
- **GA4のDirect流入（約9割）はbot水増し。評価はOrganic Search + SCクリックのみで行う**

## git運用の注意（事故歴あり）
- 記事1000本超のため **`git add *.md` は引数長エラー** → 変更ファイルを個別パス指定で add する
- push前に事前キャッシュクリーン＋ `git pull --rebase`
- 3.5万URLの巨大sitemapへのbot巡回がVercel Edge Requestsを浪費（月1.78M）。robots.txt強化済み。根本対策はcompareページ2.6万件の削減

## 生産ルール
- 型: pricing / cost / 比較のロングテール（実証済みの勝ちパターン）
- 検索需要の裏付けがない量産はしない
