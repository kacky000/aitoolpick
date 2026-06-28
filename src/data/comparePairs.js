import compareKeep from './compare-keep.json';

// compareページの生成対象を絞り込む共有ロジック。
// Astroの getStaticPaths はフロントマターのスコープを参照できないため、
// ここに切り出して getStaticPaths とコンポーネント本体の両方からimportして使う。
//
// 同一カテゴリを共有し、かつ次のいずれかを満たすペアのみ生成する:
//   - 両ツールとも高評価（rating >= RATING_THRESHOLD）
//   - Search Consoleで表示/クリック実績のあるページ（compare-keep.json）
// これで薄い総当たりページ（約2.6万→約3,657）を削減しつつ、検索流入のあるページは残す。
const RATING_THRESHOLD = 4.5;
const keepSet = new Set(compareKeep);

export function pairKey(a, b) {
  const [first, second] = a.id < b.id ? [a, b] : [b, a];
  return `${first.slug}-vs-${second.slug}`;
}

export function shouldGenerate(a, b) {
  if (!a.category.some((c) => b.category.includes(c))) return false;
  if (a.rating >= RATING_THRESHOLD && b.rating >= RATING_THRESHOLD) return true;
  return keepSet.has(pairKey(a, b));
}
