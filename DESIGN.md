# Design System: Coffee & Code Portfolio

## 1. Visual Theme & Atmosphere

The "Coffee & Code" aesthetic combines a high-tech engineering feel with the warmth and sophistication of a premium coffee shop. It uses deep, earthy dark tones, crisp typography, and high-contrast highlights to communicate a "clean code, strong coffee" philosophy.

**Key Characteristics:**
- **Dark Coffee Palette:** Backgrounds that range from "almost black" beans to "creamy latte" surfaces.
- **Engineering Precision:** Use of `JetBrains Mono` for body text to emphasize the developer identity.
- **Sophisticated Personal Branding:** `Courgette` font for the name to add a human, signed touch.
- **Modern Headlines:** `Inter` for strong, legible headers.
- **Warm Highlights:** Amber/Caramel accents for interactive elements.

## 2. Color Palette (OKLCH System)

### Primary Backgrounds
- **Deep Espresso** (`oklch(12% 0.02 45)`): Primary background for the entire page.
- **Roasted Bean** (`oklch(18% 0.03 45)`): Secondary surfaces (Cards, specific sections).

### Text (The "Milk" Spectrum)
- **Cream** (`oklch(95% 0.02 50)`): Primary headings and high-priority text (Coffee with lots of milk).
- **Steamed Milk** (`oklch(85% 0.03 50)`): Secondary descriptions and meta-data.

### Interactive & Highlights
- **Caramel/Amber** (`oklch(65% 0.18 60)`): Buttons, links, and branding accents. Provides high-contrast highlights against dark backgrounds.

### Special Surfaces
- **About Gradient:** A "shiny coffee" linear gradient (135°) from `#2c1a11` (dark roast) to `#453225` (medium roast).

## 3. Typography Rules

| Role | Font Family | Size | Weight | Notes |
|------|-------------|------|--------|-------|
| Brand Name | `Courgette` | 32px | Normal | Script/Signature style |
| Headlines (H1-H3) | `Inter` | 24px–64px | 700–800 | Bold, modern feel |
| Body Text | `JetBrains Mono` | 14px–20px | 400–600 | Code-like, precise |
| Buttons/Labels | `JetBrains Mono` | 14px–16px | 600 | Consistent with body |

## 4. Layout & Grid

### General Spacing
- **Gaps:** 16px, 24px, 32px, 48px.
- **Section Padding:** 60px–120px (Desktop), 40px–60px (Mobile).
- **Corner Radius:** 8px–12px for cards and buttons; 24px for large image containers.

### Large Screen Strategy (> 1440px)
To ensure readability on ultra-wide displays (e.g., 2560px), the content must not span the full width of the viewport.
- **Max Content Width:** Limit the internal content container to **1280px**.
- **Dynamic Margins (Breathing Room):** As the screen size increases beyond 1440px, the side "respiro" (gutters) must increase proportionally to keep the content centered.
- **Visual Balance:** Content should never feel "lost" in a sea of empty space; use centered layouts for the Hero and Footer on ultra-wide screens if necessary.

### Mobile Strategy (390px)
- **Side Padding:** Constant **20px** "respiro" for all sections.
- **Project Carousel:** Instead of vertical stacking, projects must be arranged in a **horizontal scroll container** (carousel) to minimize vertical scrolling.
- **Stacked Elements:** Hero and About sections transition to a single-column vertical stack.

## 5. Component Stylings

### Project Cards
- **Background:** `bg-secondary` with a subtle border (`#3d312a`).
- **Interactive:** Must include a "Saiba mais" button with the Caramel accent.
- **Image:** 16:9 aspect ratio or similar, with subtle rounded corners (8px).

### Buttons
- **Style:** Solid Caramel background with white text.
- **Radius:** 8px for a modern, slightly rounded look.
- **Padding:** [16px, 32px] for desktop, scaled down for mobile.

## 6. Do's and Don'ts
- **Do:** Use OKLCH for color precision. Keep the "Coffee" mood consistent.
- **Don't:** Use generic blue or high-vibrancy "neon" colors. Avoid full-width text blocks on large screens.
- **Do:** Ensure JetBrains Mono is used for all "technical" information.
