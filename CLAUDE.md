# AIToolPick（aitoolpick.org）— プロジェクト指示書

**全ての応答・ログは日本語（記事コンテンツは英語）。確認質問は禁止、即実行。**
横断ルール（git安全規定R11等）は親 `business-system/CLAUDE.md` に従う。

## 現状（2026-09-03〜）: 維持モード＋AdSense収益化テスト中
- Organic 380〜414 sess/週で安定（価格系ロングテール記事が資産化）
- **更新cronは週1（毎週月曜3:00）に減頻済み**。需要なき量産はしない
- **収益化テスト（2026-09-03〜10-03）**: 従来はAdSenseローダーのみで広告枠ゼロ＝収益0円だった。ads.txt＋blog記事にtop/bottom 2枠を設置済み（スロットはexpo2025と共用。AdSenseレポートはby_domainでaitoolpick.org分を分離評価）。**30日観測して月数百円未満なら完全放置モード、伸びればユニット増設を検討**
- ⚠️ AdSense管理画面で aitoolpick.org が「サイト」として承認済みか未確認（OAuthトークン失効でAPI確認不可）。未承認なら広告は配信されない → かっきーの管理画面確認が必要
- **GA4のDirect流入（約9割）はbot水増し。評価はOrganic Search + SCクリックのみで行う**

## git運用の注意（事故歴あり）
- 記事1000本超のため **`git add *.md` は引数長エラー** → 変更ファイルを個別パス指定で add する
- push前に事前キャッシュクリーン＋ `git pull --rebase`
- 3.5万URLの巨大sitemapへのbot巡回がVercel Edge Requestsを浪費（月1.78M）。robots.txt強化済み。根本対策はcompareページ2.6万件の削減

## 生産ルール
- 型: pricing / cost / 比較のロングテール（実証済みの勝ちパターン）
- 検索需要の裏付けがない量産はしない
