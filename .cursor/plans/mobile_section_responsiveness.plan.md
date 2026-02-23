# Mobile Section Responsiveness Plan

## Current Behavior
On mobile, all sections collapse to: **Title → Supporting Text → Image**

## Desired Behavior

### Section 1 (Features) & Section 3 (Tools)
**Desktop:** Image | Text (or Text | Image)
**Mobile:** Title → Image → Supporting Text

### Section 2 (Communities - Middle)
**Desktop:** H2 left, paragraph right, 3 cards below
**Mobile:** Title → Swipeable Carousel (3 images) → Supporting Text

---

## Implementation Steps

### Step 1: Update Section 1 & Section 3 Mobile Order
**Files to update:**
- `src/app/_components/homepage/homepage.tsx` (Features & Tools sections)
- All 10 subpages (Section 1 and Section 3)

**Approach:**
- Use Tailwind's `order` classes to reorder on mobile
- On mobile (`order-1`, `order-2`, `order-3`) to achieve: Title → Image → Text
- Structure each section with 3 children: title wrapper, image, text wrapper
- Use `flex-col` on mobile with order classes

**New Structure:**
```tsx
<div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
  {/* Title - always first on mobile */}
  <h2 className="order-1 md:order-none ...">...</h2>
  
  {/* Image placeholder */}
  <div className="order-2 md:order-none ...">...</div>
  
  {/* Supporting text */}
  <p className="order-3 md:order-none ...">...</p>
</div>
```

Actually, since we have nested divs, we need a different approach:
- Wrap content in a single column flex on mobile
- Use CSS Grid `order` or restructure the HTML

**Better Approach - Restructure HTML:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
  {/* For Section 1 (Image Left on desktop): */}
  {/* Mobile: Title, Image, Text (use order classes) */}
  
  {/* Title block */}
  <div className="order-1 md:order-2">
    <h2>...</h2>
    <p className="hidden md:block">...</p> {/* Desktop only */}
  </div>
  
  {/* Image */}
  <div className="order-2 md:order-1">...</div>
  
  {/* Mobile-only text */}
  <p className="order-3 md:hidden">...</p>
</div>
```

### Step 2: Build Carousel Component for Section 2
**Create new component:** `src/app/_components/homepage/image-carousel.tsx`

**Features:**
- Touch/swipe support for mobile
- Dot indicators showing current slide
- Contains the 3 feature card placeholders
- Only shows carousel behavior on mobile, grid on desktop

**Implementation:**
- Use CSS scroll-snap for native swipe behavior
- `overflow-x-auto` with `scroll-snap-type: x mandatory`
- Each card gets `scroll-snap-align: center`
- Dot indicators below showing active slide
- Track scroll position with `IntersectionObserver` or scroll event

**Carousel Structure:**
```tsx
{/* Mobile: Carousel */}
<div className="md:hidden">
  <div className="flex overflow-x-auto scroll-snap-x snap-mandatory gap-4 pb-4 -mx-6 px-6">
    {cards.map((card, i) => (
      <div key={i} className="snap-center flex-shrink-0 w-[85%]">
        {/* Card content */}
      </div>
    ))}
  </div>
  {/* Dot indicators */}
  <div className="flex justify-center gap-2 mt-4">
    {[0, 1, 2].map(i => (
      <div key={i} className={`w-2 h-2 rounded-full ${active === i ? 'bg-white' : 'bg-white/30'}`} />
    ))}
  </div>
</div>

{/* Desktop: Grid */}
<div className="hidden md:grid md:grid-cols-3 gap-4 md:gap-6">
  {/* 3 cards */}
</div>
```

### Step 3: Update Section 2 Layout
**Files:**
- `src/app/_components/homepage/homepage.tsx` (Communities section)
- All 10 subpages (Section 2)

**Changes:**
- Mobile: Title → Carousel → Supporting Text
- Restructure to separate title, carousel, and text as flex items with order classes

---

## Files to Modify

### New File
1. `src/app/_components/homepage/image-carousel.tsx` - Reusable carousel component

### Existing Files (12 total)
1. `src/app/_components/homepage/homepage.tsx` - All 3 sections
2. `src/app/learning/page.tsx`
3. `src/app/communities/page.tsx`
4. `src/app/tools/page.tsx`
5. `src/app/insights/page.tsx`
6. `src/app/transformation/page.tsx`
7. `src/app/partners/public-service/page.tsx`
8. `src/app/partners/multilaterals/page.tsx`
9. `src/app/partners/foundations/page.tsx`
10. `src/app/partners/corporations/page.tsx`
11. `src/app/partners/academia/page.tsx`

---

## Execution Order
1. Create carousel component with scroll-snap
2. Update homepage Section 1 (Features) mobile order
3. Update homepage Section 2 (Communities) with carousel
4. Update homepage Section 3 (Tools) mobile order
5. Update all 10 subpages Section 1 mobile order
6. Update all 10 subpages Section 2 with carousel
7. Update all 10 subpages Section 3 mobile order
8. Test on mobile viewport

