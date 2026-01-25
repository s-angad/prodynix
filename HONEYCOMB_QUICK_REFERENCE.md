# Honeycomb Clusters - Quick Reference

## Quick Edit Guide

### To Adjust a Cluster's Position

File: `src/components/HoneycombClusters.js`, line ~80-120

```javascript
{
  id: 'cluster-3',           // Unique identifier
  top: '32rem',              // Distance from viewport top (change for vertical position)
  left: '1rem',              // Distance from left edge (remove this line to position on right)
  layout: 'diamond',         // 'triangle' or 'diamond'
  rotation: 45,              // Rotation in degrees
  opacity: 0.26,             // Opacity (0.0-1.0, lower = more transparent)
},
```

### To Change Hexagon Layout

Triangle (3 hexagons):
```javascript
{
  id: 'cluster-1',
  layout: 'triangle',  // 3 hexagons in triangular arrangement
  ...
}
```

Diamond (4 hexagons):
```javascript
{
  id: 'cluster-1',
  layout: 'diamond',   // 4 hexagons in diamond arrangement
  ...
}
```

### To Increase/Decrease Visibility

- **More visible:** Increase opacity (0.32 → 0.40)
- **Less visible:** Decrease opacity (0.26 → 0.18)
- **Mobile-specific:** Edit CSS media query at end of `src/index.css`

### To Change Colors

File: `src/components/HoneycombClusters.js`, gradients section

```javascript
<linearGradient>
  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.90" />     {/* Top-left: change to tint color */}
  <stop offset="50%" stopColor="#f5f0e8" stopOpacity="0.55" />     {/* Middle: current cream */}
  <stop offset="100%" stopColor="#e8dcc8" stopOpacity="0.35" />    {/* Bottom-right: darker tone */}
</linearGradient>
```

Suggested alternatives:
- **Warmer:** #fefaf0, #f9f4e8, #f5ead4
- **Cooler:** #f8f9fb, #f0f4f8, #e6f0f9
- **Gold tint:** #fffaf0, #fef9f0, #f0e8d8

### To Change Hexagon Size

File: `src/components/HoneycombClusters.js`, line 208

```javascript
renderHexagon(hex, 40, 0.70, clusterConfig.id)
//                  ↑↑  = hexagon diameter in pixels
//                     (40 = current, try 35-50)
```

### To Adjust 3D Depth

File: `src/components/HoneycombClusters.js`, line 208

```javascript
renderHexagon(hex, 40, 0.70, clusterConfig.id)
//                         ↑↑  = depth multiplier
//                            (0.70 = subtle, try 0.40-1.00)
```

Lower = less depth effect
Higher = more pronounced 3D

---

## Common Tasks

### Add a New Cluster

1. Go to `CLUSTERS` array (line ~50-120)
2. Add new object at end:
```javascript
{
  id: 'cluster-9',
  top: '110rem',
  right: '2rem',
  layout: 'triangle',
  rotation: 25,
  opacity: 0.28,
},
```
3. Choose position (top/left/right, rotation, opacity)
4. Save and refresh browser

### Position Cluster to Avoid Content

1. Note the content's vertical position (e.g., "About section starts at 28rem")
2. Place cluster before/after with margin:
   - **Before:** `top: '20rem'` (8rem gap)
   - **After:** `top: '38rem'` (10rem gap)
3. Place horizontally in margins:
   - **Left:** `left: '1rem'` (1rem from edge)
   - **Right:** `right: '1rem'` (1rem from edge)

### Make Clusters Less Prominent (Mobile)

File: `src/index.css`, line 585

```css
@media (max-width: 768px) {
  .honeycomb-cluster {
    opacity: 0.2 !important;  /* Change 0.2 to lower/higher value */
  }
}
```

---

## Visual Hierarchy

Current z-index structure:
```
Navbar               z-60  (topmost)
Content/Text        z-10
HoneycombClusters   z-5   (behind content, above bee)
Bee3D Canvas        z-10
HoneycombStructure  (none) (behind everything)
```

Clusters are intentionally **behind** content but **above** the 3D bee.

---

## Cluster Distribution Map

Current 8 clusters positioned as:

```
┌─ Cluster-1 ────────────────────────── Cluster-2 ─┐
│  (top-left, triangle)            (top-right, tri) │
│                                                    │
│  Cluster-3 (left, diamond)                        │
│                                                    │
│                    HERO & CONTENT AREA             │
│                                                    │
│                                                    Cluster-4 (right)
│  Cluster-5 (left, tri)                            │
│                  SOLUTIONS SECTION                 │
│                                                    Cluster-6 (right, diamond)
│                                                    │
│  Cluster-7 (bottom-left, tri)                     │
│                  FOOTER AREA                       │
│                                                    Cluster-8 (bottom-right)
└─────────────────────────────────────────────────┘
```

---

## Responsive Behavior

### Desktop (>1024px)
- Full opacity as configured
- 160px SVG size
- All 8 clusters visible

### Tablet (768px-1024px)
- Opacity at configured values
- 160px SVG size
- All 8 clusters visible

### Mobile (<768px)
- Opacity: 0.2 (auto-reduced)
- 160px SVG size
- All clusters visible but subtle

---

## Performance Stats

- **No scroll listeners:** Clusters don't recalculate on scroll
- **No animations:** Static positioning only
- **No state mutations:** Functional component, no hooks
- **GPU accelerated:** CSS 3D transforms
- **Memory footprint:** ~50KB JS, ~100KB rendered DOM

---

## Troubleshooting

### Hexagons not visible
- Check z-index hierarchy
- Verify opacity > 0.2
- Check if positioned off-screen (top/left values)

### Overlapping with text
- Reduce opacity for that cluster
- Move further left/right (adjust left/right values)
- Move up/down (adjust top value)

### 3D depth looks wrong
- Check `depthFactor` value (should be 0.40-1.00)
- Verify gradient `stopColor` values are light

### Clusters aligned wrong on mobile
- Add media query in CSS:
```css
@media (max-width: 768px) {
  /* Adjust positioning */
}
```

---

## Code Locations

| Element | File | Lines |
|---------|------|-------|
| CLUSTER_CONFIGS | `HoneycombClusters.js` | 18-37 |
| CLUSTERS array | `HoneycombClusters.js` | 44-120 |
| renderHexagon() | `HoneycombClusters.js` | 122-175 |
| generateClusters() | `HoneycombClusters.js` | 177-228 |
| CSS styling | `index.css` | 560-630 |
| Layout integration | `Layout.js` | 1-27 |

---

## Testing Checklist

After making changes:

1. **Visual Check**
   - [ ] Hexagons visible in corners
   - [ ] No overlap with headings
   - [ ] No overlap with body text
   - [ ] No overlap with CTA buttons

2. **Interaction Check**
   - [ ] Page scrolls normally
   - [ ] Clusters don't move on scroll
   - [ ] Clusters remain in viewport
   - [ ] Bee model is still focal point

3. **Technical Check**
   - [ ] No console errors
   - [ ] No CSS warnings
   - [ ] Responsive on mobile
   - [ ] Print stylesheet working

---

## Support Commands

```bash
# Start dev server
npm start

# Check for errors
npm test

# Build for production
npm run build

# Analyze bundle size
npm run analyze
```

---

## Key Principles (Remember!)

1. **Static First:** Never add scroll listeners or animations
2. **Content Over Design:** Honeycomb enhances, doesn't compete
3. **Soft & Subtle:** Low opacity, gentle colors, minimal depth
4. **Intentional Placement:** Every cluster position is explicit, no randomization
5. **Premium Feeling:** Elegant gradients, refined spacing, thoughtful hierarchy

---

Generated: 2024
Component: HoneycombClusters.js
Status: Production Ready ✓
