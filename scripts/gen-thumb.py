#!/usr/bin/env python3
"""
AIToolPick サムネイル生成（グラデテンプレ方式）。
heroImageが指す /thumbs/<slug>.jpg が存在しない記事を自動検出し、
luma-ai-pricing 様式（ダークネイビーのグラデ + 装飾円 + カテゴリバッジ + 白タイトル + AIToolPick）で生成する。

使い方:
  python3 scripts/gen-thumb.py            # 壊れheroImageを全自動検出して生成
  python3 scripts/gen-thumb.py slug1 ...  # 指定slugのみ生成
"""
import os, re, sys, glob

from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BLOG = os.path.join(ROOT, "src", "content", "blog")
THUMBS = os.path.join(ROOT, "public", "thumbs")

W, H = 1200, 630
TOP = (14, 51, 95)      # グラデ上端
BOT = (22, 33, 63)      # グラデ下端
BADGE_BG = (139, 209, 219)
BADGE_FG = (12, 30, 52)
TITLE_FG = (245, 248, 252)
FOOTER_FG = (110, 200, 226)
CIRCLE = (30, 70, 78)   # 装飾円（うっすら緑青）

FONT_TITLE = "/System/Library/Fonts/Supplemental/Arial.ttf"
FONT_BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"


def badge_label(slug, tags):
    s = slug.lower()
    t = [x.lower() for x in tags]
    if "pricing" in t or "pricing" in s or "free-vs-paid" in s:
        return "PRICING GUIDE"
    if "-vs-" in s or "comparison" in t:
        return "COMPARISON"
    if "review" in t or s.endswith("-review-2026") or "-review-" in s:
        return "REVIEW"
    if s.startswith("best-"):
        return "BUYING GUIDE"
    if s.startswith("how-to-"):
        return "HOW-TO GUIDE"
    return "GUIDE"


def parse_frontmatter(path):
    txt = open(path, encoding="utf-8").read()
    title = ""
    tags = []
    mt = re.search(r'^title:\s*"?(.+?)"?\s*$', txt, re.M)
    if mt:
        title = mt.group(1).strip().strip('"')
    mg = re.search(r'^tags:\s*\[(.*?)\]', txt, re.M)
    if mg:
        tags = [x.strip().strip('"').strip("'") for x in mg.group(1).split(",") if x.strip()]
    return title, tags


def gradient():
    img = Image.new("RGB", (W, H), TOP)
    px = img.load()
    for y in range(H):
        f = y / (H - 1)
        r = round(TOP[0] + (BOT[0] - TOP[0]) * f)
        g = round(TOP[1] + (BOT[1] - TOP[1]) * f)
        b = round(TOP[2] + (BOT[2] - TOP[2]) * f)
        for x in range(W):
            px[x, y] = (r, g, b)
    return img


def add_circles(img):
    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(overlay)
    # 右上の大きな円
    d.ellipse([900, -40, 1180, 240], fill=CIRCLE + (70,))
    # 左下の小さな円
    d.ellipse([40, 430, 200, 590], fill=CIRCLE + (70,))
    return Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB")


def wrap(draw, text, font, max_w):
    words = text.split()
    lines, cur = [], ""
    for w in words:
        trial = (cur + " " + w).strip()
        if draw.textlength(trial, font=font) <= max_w:
            cur = trial
        else:
            if cur:
                lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines


def make(slug, title, tags):
    img = add_circles(gradient())
    d = ImageDraw.Draw(img)
    margin = 64

    # バッジ
    label = badge_label(slug, tags)
    bfont = ImageFont.truetype(FONT_BOLD, 22)
    bx0, by0 = margin, 96
    tw = d.textlength(label, font=bfont)
    pad_x, pad_y = 16, 9
    d.rounded_rectangle([bx0, by0, bx0 + tw + pad_x * 2, by0 + 22 + pad_y * 2],
                        radius=6, fill=BADGE_BG)
    d.text((bx0 + pad_x, by0 + pad_y - 1), label, font=bfont, fill=BADGE_FG)

    # タイトル（フォントサイズ自動調整）
    max_w = W - margin * 2 - 40
    for size in (60, 56, 52, 48, 44):
        tfont = ImageFont.truetype(FONT_TITLE, size)
        lines = wrap(d, title, tfont, max_w)
        if len(lines) <= 3:
            break
    line_h = int(size * 1.22)
    ty = by0 + 22 + pad_y * 2 + 34
    for ln in lines[:3]:
        d.text((margin, ty), ln, font=tfont, fill=TITLE_FG)
        ty += line_h

    # フッター
    ffont = ImageFont.truetype(FONT_BOLD, 24)
    d.text((margin, H - 70), "AIToolPick", font=ffont, fill=FOOTER_FG)

    out = os.path.join(THUMBS, f"{slug}.jpg")
    img.save(out, "JPEG", quality=90, progressive=True)
    return out


def find_broken():
    broken = []
    for f in glob.glob(os.path.join(BLOG, "*.md")):
        txt = open(f, encoding="utf-8").read()
        m = re.search(r'heroImage:\s*"?([^"\n]+)"?', txt)
        if not m:
            continue
        img = m.group(1).strip().strip('"')
        path = os.path.join(ROOT, "public" + img) if img.startswith("/") else os.path.join(ROOT, "public", img)
        if not os.path.isfile(path):
            broken.append(os.path.basename(f)[:-3])
    return sorted(broken)


def main():
    args = sys.argv[1:]
    slugs = args if args else find_broken()
    print(f"対象: {len(slugs)}件")
    done = 0
    for slug in slugs:
        path = os.path.join(BLOG, slug + ".md")
        if not os.path.isfile(path):
            print(f"  skip (記事なし): {slug}")
            continue
        title, tags = parse_frontmatter(path)
        if not title:
            print(f"  skip (title無): {slug}")
            continue
        make(slug, title, tags)
        done += 1
    print(f"生成完了: {done}件 → {THUMBS}")


if __name__ == "__main__":
    main()
