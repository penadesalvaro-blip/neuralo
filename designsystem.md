# Design System — Neuralo

## Identidad visual
Inspiración directa: https://hugin.io
Estilo: minimalista editorial, mucho espacio,
tipografía serif elegante, fondo verde sage,
todo en negro. Sin colores de acento.

## Typography Scale
Use a strict type system. Never random font sizes.

Display XL:  font-size: 5rem    / line-height: 1.0  / font-weight: 700 — Hero titles
Display L:   font-size: 3.5rem  / line-height: 1.05 / font-weight: 700 — Section titles
Display M:   font-size: 2.5rem  / line-height: 1.1  / font-weight: 600 — Sub-sections
Heading L:   font-size: 1.75rem / line-height: 1.2  / font-weight: 600 — Card titles
Heading M:   font-size: 1.25rem / line-height: 1.3  / font-weight: 500 — Labels
Body L:      font-size: 1.05rem / line-height: 1.7  / font-weight: 400 — Main body
Body M:      font-size: 0.9rem  / line-height: 1.6  / font-weight: 400 — Secondary body
Caption:     font-size: 0.75rem / line-height: 1.5  / font-weight: 500 — Tags, badges

Fonts:
- Playfair Display → Display XL, Display L, 
  Display M, todos los títulos y headings
- DM Sans → Body L, Body M, Caption, 
  navegación, botones, todo el cuerpo
- Never use: Montserrat, Inter, Roboto, 
  Arial, system-ui

## Spacing System
Base unit: 8px. Every spacing value must 
be a multiple of 8.

4px   → micro gaps
8px   → xs
16px  → sm
24px  → md
32px  → lg
48px  → xl
64px  → 2xl
96px  → 3xl (section vertical padding)
128px → 4xl (hero vertical padding)

## Color Tokens
Never use random hex codes. Always reference tokens.
NO accent colors. Only black, sage and white.

--color-sage:           #E8EDE5  → Primary background
--color-sage-dark:      #D8DED5  → Borders, dividers, 
                                   hover states
--color-sage-darker:    #C8CEC5  → Deep borders
--color-black:          #0A0A0A  → All text, logo, icons
--color-black-soft:     #1A1A1A  → Secondary text
--color-white:          #FFFFFF  → Cards, contrast sections
--color-text-primary:   #0A0A0A  → Main text
--color-text-secondary: #5A5A5A  → Muted text, descriptions
--color-text-muted:     #8A8A8A  → Very muted, captions

## Component Patterns

### Buttons
Primary:
  background: --color-black
  color: --color-white
  padding: 14px 28px
  border-radius: 4px
  font: DM Sans 500 0.9rem
  hover: background --color-black-soft, 
         translateY(-1px)

Secondary/Outline:
  background: transparent
  border: 1px solid --color-black
  color: --color-black
  padding: 14px 28px
  border-radius: 4px
  hover: background --color-black, 
         color --color-white

Ghost:
  background: transparent
  color: --color-black
  text-decoration: underline
  hover: opacity 0.6

### Cards
Structure:
  background: --color-white
  border: 1px solid --color-sage-dark
  border-radius: 8px
  padding: 32px 24px
  transition: all 0.3s ease

Hover state:
  translateY(-2px)
  box-shadow: 0 8px 32px rgba(0,0,0,0.08)
  border-color: --color-black

### Badges / Tags
  font: DM Sans 600 0.65rem uppercase
  letter-spacing: 0.08em
  padding: 4px 10px
  border-radius: 2px
  background: --color-black
  color: --color-white

  Urgent variant (Verifactu):
  background: --color-black
  color: --color-white
  border: none

### Form Layouts
  Input:
    background: --color-white
    border: 1px solid --color-sage-dark
    border-radius: 4px
    padding: 14px 18px
    font: DM Sans 400 0.9rem
    focus: border-color --color-black, no outline

  Label:
    font: DM Sans 600 0.75rem uppercase
    letter-spacing: 0.08em
    margin-bottom: 8px
    color: --color-text-secondary

### Section Structure
  Background: always --color-sage
  Exception: contrast sections use --color-white
  or --color-black for maximum impact
  
  Section padding: 96px 80px desktop, 
                   64px 24px mobile
  Section label: DM Sans uppercase 0.72rem, 
                 --color-text-secondary, 
                 centered
  Section title: Playfair Display, centered, 
                 letter-spacing -0.01em
  Section subtitle: DM Sans Body L, 
                    --color-text-secondary, 
                    centered, max-width 560px

### Hero Image
  Shape: organic blob/shield shape clip-path
  como la web de referencia Hugin
  Position: centered below title
  Max-width: 480px
  Border-radius: organic, not rectangular

## Layout Principles
- Centered layouts — todo centrado como Hugin
- Massive negative space — dejar respirar
- Titles first, then supporting elements
- No sidebars, no complex grids en hero
- Services: clean list with dividers, 
  not card grids
- Section labels always uppercase, small, 
  muted — above the main title

## Motion
- Subtle and slow — nothing flashy
- Fade up on scroll: 40px, 0.6s ease
- Hover: 0.2s ease, minimal movement
- No bouncing, no spring physics
- Page load: simple fade in 0.4s

## Avoid Generic AI Aesthetic
NEVER:
- Orange or colored CTAs
- Dark hero sections
- Gradient backgrounds
- Glassmorphism
- Flashy animations
- Card grids with equal padding
- Purple anything

ALWAYS:
- Sage green background everywhere
- Black text, black buttons
- Playfair Display for all titles
- Centered everything
- Massive whitespace
- One powerful image with organic shape
- Editorial rhythm between sections