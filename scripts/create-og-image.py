from PIL import Image, ImageDraw, ImageFont
import os

# Dimensions
W, H = 1200, 630

# Brand colors
BG = (36, 35, 33)        # dark warm gray
ACCENT = (223, 31, 46)    # #df1f2e
ACCENT_DARK = (161, 23, 35)  # #a11723
ACCENT_LIGHT = (255, 90, 90) # #ff5a5a
WHITE = (255, 255, 255)
MUTED = (180, 178, 175)

img = Image.new("RGB", (W, H), BG)
draw = ImageDraw.Draw(img)

# --- Accented top border ---
for y in range(6):
    t = y / 5
    r = int(ACCENT_LIGHT[0] + (ACCENT[0] - ACCENT_LIGHT[0]) * t)
    g = int(ACCENT_LIGHT[1] + (ACCENT[1] - ACCENT_LIGHT[1]) * t)
    b = int(ACCENT_LIGHT[2] + (ACCENT[2] - ACCENT_LIGHT[2]) * t)
    draw.rectangle([(0, y), (W, y + 1)], fill=(r, g, b))

# --- Accent bar at left ---
for x in range(6):
    t = x / 5
    r = int(ACCENT_LIGHT[0] + (ACCENT[0] - ACCENT_LIGHT[0]) * t)
    g = int(ACCENT_LIGHT[1] + (ACCENT[1] - ACCENT_LIGHT[1]) * t)
    b = int(ACCENT_LIGHT[2] + (ACCENT[2] - ACCENT_LIGHT[2]) * t)
    draw.rectangle([(x, 0), (x + 1, H)], fill=(r, g, b))

# --- Subtle decorative circles (like the site's hero pattern) ---
draw.ellipse([(800, -120), (1060, 140)], fill=(50, 48, 46), outline=None)
draw.ellipse([(920, 360), (1200, 640)], fill=(45, 43, 41), outline=None)
draw.ellipse([(60, 400), (260, 600)], fill=(45, 43, 41), outline=None)

# --- Gradient bar in the middle area ---
grad_h = 4
grad_y = 310
for x in range(300, 600):
    t = (x - 300) / 300
    r = int(ACCENT_LIGHT[0] + (ACCENT[0] - ACCENT_LIGHT[0]) * t)
    g = int(ACCENT_LIGHT[1] + (ACCENT[1] - ACCENT_LIGHT[1]) * t)
    b = int(ACCENT_LIGHT[2] + (ACCENT[2] - ACCENT_LIGHT[2]) * t)
    draw.rectangle([(x, grad_y), (x + 1, grad_y + grad_h)], fill=(r, g, b))

# --- Load logo if available ---
logo_path = "static/assets/logo-vtaquino-header.png"

# --- Title text ---
try:
    font_title = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 64)
    font_sub = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 28)
    font_meta = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 20)
except:
    font_title = ImageFont.load_default()
    font_sub = ImageFont.load_default()
    font_meta = ImageFont.load_default()

# --- VTAQUINO ---
draw.text((80, 100), "VTAQUINO", fill=ACCENT, font=font_title)

# --- Subtitle ---
draw.text((80, 180), "Engenharia de Proteção", fill=WHITE, font=font_sub)
draw.text((80, 215), "Contra Incêndio", fill=WHITE, font=font_sub)

# --- Tagline ---
draw.text((80, 270), "Prazos e economicidade — Metodologia BIM", fill=MUTED, font=font_meta)

# --- Paste logo watermark ---
if os.path.exists(logo_path):
    logo = Image.open(logo_path).convert("RGBA")
    logo = logo.resize((180, 72), Image.LANCZOS)
    # Position in bottom-right
    lx, ly = W - 230, H - 100
    img.paste(logo, (lx, ly), logo)

# --- Bottom accent gradient bar ---
for y in range(6):
    t = y / 5
    r = int(ACCENT[0] + (ACCENT_DARK[0] - ACCENT[0]) * t)
    g = int(ACCENT[1] + (ACCENT_DARK[1] - ACCENT[1]) * t)
    b = int(ACCENT[2] + (ACCENT_DARK[2] - ACCENT[2]) * t)
    draw.rectangle([(0, H - 6 + y), (W, H - 6 + y + 1)], fill=(r, g, b))

# Save
output_path = "static/assets/og-image.jpg"
img.save(output_path, "JPEG", quality=92)
print(f"OG image saved to {output_path}")
print(f"Dimensions: {img.size[0]}x{img.size[1]} px")
