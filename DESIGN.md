---
name: Artisanal Elegance
colors:
  surface: '#fbf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#fbf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ef'
  surface-container: '#efeeea'
  surface-container-high: '#eae8e4'
  surface-container-highest: '#e4e2de'
  on-surface: '#1b1c1a'
  on-surface-variant: '#404945'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f0ed'
  outline: '#717975'
  outline-variant: '#c0c8c4'
  surface-tint: '#396759'
  primary: '#154539'
  on-primary: '#ffffff'
  primary-container: '#2f5d50'
  on-primary-container: '#a3d4c3'
  inverse-primary: '#a0d1c0'
  secondary: '#745b17'
  on-secondary: '#ffffff'
  secondary-container: '#fedc8b'
  on-secondary-container: '#785f1c'
  tertiary: '#672d14'
  on-tertiary: '#ffffff'
  tertiary-container: '#844328'
  on-tertiary-container: '#ffbaa0'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#bceddc'
  primary-fixed-dim: '#a0d1c0'
  on-primary-fixed: '#002019'
  on-primary-fixed-variant: '#204f42'
  secondary-fixed: '#ffdf96'
  secondary-fixed-dim: '#e4c375'
  on-secondary-fixed: '#251a00'
  on-secondary-fixed-variant: '#5a4400'
  tertiary-fixed: '#ffdbce'
  tertiary-fixed-dim: '#ffb599'
  on-tertiary-fixed: '#370e00'
  on-tertiary-fixed-variant: '#72351b'
  background: '#fbf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e4e2de'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  subheading:
    fontFamily: ebGaramond
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Poppins
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Poppins
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Poppins
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  section-gap-desktop: 160px
  section-gap-mobile: 80px
  gutter: 24px
  margin-safe: 32px
---

## Brand & Style
The design system embodies a premium, editorial aesthetic tailored for the high-end artistry of Snehal Mehndi. The visual narrative centers on the intersection of ancient tradition and contemporary luxury. 

The style is a sophisticated blend of **Minimalism** and **Glassmorphism**, emphasizing high-quality negative space (whitespace) to allow the intricate details of the mehndi art to breathe. The emotional response should be one of serenity, exclusivity, and meticulous craftsmanship. Visual weight is balanced through delicate gold accents and rich, organic tones that evoke the natural origin of the henna leaf.

## Colors
The palette is rooted in the earth and elevated by luxury. 
- **Deep Mehndi Green** serves as the primary anchor, representing the raw henna and professional depth.
- **Luxury Gold** is used sparingly for interactive highlights, fine borders, and decorative flourishes to signal a premium service tiers.
- **Warm Terracotta** provides a grounded accent color, reminiscent of the dried stain and ceramic craftsmanship.
- **Ivory White** and **Soft Beige** create a layered background system, using subtle tonal shifts instead of harsh lines to define sections.

## Typography
The typographic hierarchy uses high-contrast serif faces for storytelling and clean sans-serif for functional clarity.
- **Display & Headlines:** Use Playfair Display to establish an editorial feel. Tighten letter-spacing on larger sizes for a high-fashion look.
- **Subheadings:** Use EB Garamond (as a sophisticated Garamond alternative) in italics to create a literary, bespoke feel for quotes or descriptive intros.
- **Body & UI:** Poppins provides a geometric, modern contrast, ensuring legibility in service menus and contact forms. Use wider line-heights (1.6) to maintain an airy, premium feel.

## Layout & Spacing
This design system utilizes a **Fixed Grid** for desktop and a **Fluid Content Model** for mobile. 
- **The Golden Ratio:** Use generous vertical padding between sections to create a sense of "luxury time"—never rushing the user from one piece of content to the next.
- **Asymmetric Balance:** Align images to a 12-column grid but use offset text blocks to mimic high-end magazine layouts.
- **Mobile:** Increase safe-area margins to 32px to ensure the interface feels spacious even on smaller glass surfaces.

## Elevation & Depth
Depth is handled through **Ambient Shadows** and **Glassmorphism**, avoiding heavy black shadows in favor of tinted diffusion.
- **Tonal Layering:** Use the Ivory White (#FFFDF9) for the primary background and Soft Beige (#F6F1EA) for "inset" cards or section breaks.
- **The "Silk" Shadow:** Shadows should use a very low opacity of the Primary Green or Terracotta (e.g., `rgba(47, 93, 80, 0.08)`) with a high blur radius (40px+) to simulate soft, natural lighting.
- **Glassmorphism:** Navigation bars and modal overlays should use a background-blur of 20px with a 40% transparent Ivory White fill and a 0.5px Gold (#C8A95E) border.

## Shapes
The shape language is organic and soft, mimicking the curves of traditional mehndi patterns.
- **Extreme Roundedness:** Apply 24px (rounded-2xl) to 32px (rounded-3xl) to all cards and containers.
- **Pill Shapes:** Buttons and interactive chips must be fully pill-shaped (rounded-full) to provide a soft, tactile touchpoint.
- **Image Treatment:** Portrait photography should utilize asymmetrical rounding (e.g., top-left and bottom-right 120px, others 24px) for an artistic, editorial frame.

## Components
- **Buttons:** Primary buttons feature a Deep Mehndi Green fill with Gold text. Secondary buttons are Ivory with a thin 1px Gold border. Hover states should include a slight scale-up (1.02x) and a deepened soft shadow.
- **Cards:** Use "Floating Cards"—no visible borders, just the "Silk" shadow and a background-blur if placed over images. 
- **Input Fields:** Minimalist design with only a bottom border in Soft Beige. Upon focus, the border transitions to Gold with a floating label in Luxury Gold.
- **Booking Calendar:** Use a high-contrast layout with Ivory backgrounds and Deep Green circles for selected dates.
- **Portfolio Masonry:** A variable-height grid for mehndi art photos with generous 32px gaps to prevent the intricate patterns from visually clashing.
- **Dividers:** Use very thin (0.5px) Gold lines or "The Leaf Dot"—a small primary green dot—to separate content sections.