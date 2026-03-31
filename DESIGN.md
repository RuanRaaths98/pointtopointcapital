# Design System Document

## 1. Overview & Creative North Star
The visual identity for Point to Point Capital is rooted in a philosophy we call **"The Financial Atelier."** 

Standard fintech UI often relies on sterile, cold grids and generic components. This system moves in the opposite direction, treating the digital interface as a high-end, editorial experience. It balances the "stability" of a long-standing financial institution with the "forward-thinking" nature of modern capital management. We achieve this through a "Curated Asymmetry"—using expansive breathing room, overlapping elements, and a deep, forest-inspired palette that feels more like a private lounge than a bank branch.

**The Creative North Star: Editorial Authority**
Every layout should feel like a page from a bespoke financial monograph. We use wide margins, intentional white space (derived from the cream #F0EDE5 background), and a sophisticated hierarchy to guide the user’s eye without the need for loud, distracting structural lines.

---

## 2. Colors
Our palette is a study in tonal depth. We use varying shades of forest and moss to create a sense of organic permanence.

*   **Primary Background:** `surface` (#fcf9f1) / `surface-container` (#f1eee6).
*   **Typography & Structure:** `on-surface` (#1c1c17) and `primary-container` (#171e00).
*   **Action & Emphasis:** `on-primary-container` (#788c33) — used for primary CTAs to provide a vibrant, "living" contrast against the deep greens.

### The "No-Line" Rule
To maintain a premium, editorial feel, **1px solid borders are strictly prohibited for sectioning.** Do not use lines to separate content. Instead:
*   **Background Shifts:** Use `surface-container-low` (#f6f3eb) for a main section and `surface-container-highest` (#e5e2da) for an inset or secondary module.
*   **Vertical Space:** Use the Spacing Scale (specifically `12` or `16` units) to create clear, rhythmic separation between content blocks.

### Surface Hierarchy & Nesting
Think of the UI as physical layers of high-quality paper. 
*   **Level 0:** `surface` (The foundation).
*   **Level 1:** `surface-container-low` (Secondary content blocks).
*   **Level 2:** `surface-container-highest` (Interactive cards or prominent sidebars).

### The "Glass & Gradient" Rule
For floating navigational elements or "forward-thinking" modules, use Glassmorphism. Apply a `surface` color at 80% opacity with a `24px` backdrop-blur. For primary CTAs, apply a subtle linear gradient from `on-primary-container` (#788c33) to `primary-fixed-dim` (#bad06f) to add a tactile, high-end "glow."

---

## 3. Typography
We utilize a pairing of **Plus Jakarta Sans** for high-impact display moments and **Manrope** (standardized as a Poppins alternative per the JSON tokens) for functional clarity.

*   **Display (Plus Jakarta Sans):** Large, authoritative, and tracked-out. Use `display-lg` (3.5rem) for hero statements. Apply `30pt` kerning to headings as specified in the brand guide to create an airy, premium feel.
*   **Body (Manrope):** All body copy must use `body-lg` or `body-md` in **Light** weight. This creates a high-contrast relationship with the bold, heavy headlines.
*   **Labels (Manrope):** Use `label-md` for metadata. These should be in All-Caps with increased letter-spacing to mimic the typography of luxury watches or financial ledgers.

---

## 4. Elevation & Depth
Depth is achieved through **Tonal Layering** rather than structural shadows.

*   **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` background. This subtle shift in cream/off-white provides a soft "lift" that feels integrated into the page.
*   **Ambient Shadows:** If a card must float (e.g., a modal or dropdown), use an extra-diffused shadow. 
    *   *Value:* `0px 20px 40px rgba(28, 28, 23, 0.06)`. 
    *   Note the shadow uses the `on-surface` tint (#1c1c17) at a very low opacity to mimic natural light.
*   **The "Ghost Border":** For input fields or cards requiring accessibility definition, use the `outline-variant` (#c4c8c0) at **20% opacity**. It should be barely visible—a "whisper" of a boundary.

---

## 5. Components

### Buttons
*   **Primary:** Background `on-primary-container` (#788c33), Text `surface-container-lowest` (#ffffff). Shape: `xl` (0.75rem) or `full` for a modern pill shape.
*   **Secondary:** Ghost style. No background, `outline` (#747872) at 20% opacity. Text `on-surface`.
*   **Interaction:** On hover, primary buttons should transition to a slightly brighter gradient to signal "Forward-thinking" energy.

### Cards & Lists
*   **Forbid dividers.** Use `3.5rem` (10) padding between list items.
*   **Nesting:** Place list items inside a `surface-container-high` module to group them visually.

### Input Fields
*   **Styling:** Minimalist. No bottom line. Use a `surface-container-highest` background with `sm` (0.125rem) rounded corners.
*   **Labels:** Floating `label-sm` in `primary-fixed-variant` (#3d4c00) to maintain the forest green theme.

### Signature Component: The "Growth Metric" Card
Specifically for Point to Point Capital, metrics should be displayed using `display-sm` typography with an `on-primary-container` (#788c33) sparkline. The card should use the Glassmorphism rule to feel "forward-thinking."

---

## 6. Do's and Don'ts

### Do:
*   **Do** use asymmetrical layouts. Push a headline to the left and the body copy to the far right to create a "Signature Editorial" look.
*   **Do** embrace the cream (#F0EDE5). It is the soul of the brand; avoid making the UI feel "white" and "techy."
*   **Do** use the Spacing Scale strictly. Generous padding (`spacing-16`) is the hallmark of luxury.

### Don't:
*   **Don't** use high-contrast black (#000000). Always use the Primary Dark Green (#0E180E) for "black" text to maintain tonal warmth.
*   **Don't** use standard "drop shadows" with 20%+ opacity. They look cheap and dated.
*   **Don't** cram information. If a section feels full, increase the page height and add more breathing room. Luxury is the luxury of space.