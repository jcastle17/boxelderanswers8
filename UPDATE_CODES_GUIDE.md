# Box Elder Answers v8 — Modular Control System

The normal update file is:

`content-codes.js`

This version is built so you can later update routine things by changing one file, not by hunting through every HTML page.

## What can now be changed in one file

### 1. Main wording
Edit the `HOME` section:
- `HERO_TITLE`
- `HERO_LEAD`
- `MISSION_TITLE`
- `MISSION_P1`
- `MISSION_P2`
- `MISSION_P3`
- `PUBLIC_ASK_TEXT`
- `CTA_TEXT`

### 2. Colors
Edit the `THEME` section:
- `SOFT_RED`
- `SOFT_BLUE`
- `DEEP_BLUE`
- `DEEP_BLUE_2`

### 3. Live background across all pages
Edit:

```js
GLOBAL_BACKGROUND_IMAGE: "your-image-url-here",
GLOBAL_BACKGROUND_OPACITY: ".10"
```

### 4. Hero background images
Edit:

```js
HERO_BACKGROUND_1: "...",
HERO_BACKGROUND_2: "...",
HERO_BACKGROUND_3: "..."
```

### 5. Page background images
Edit the `PAGE_BACKGROUNDS` list:

```js
"water.html": "your-new-water-page-image.jpg"
```

### 6. Social media links
Edit the `SOCIAL` section:

```js
FACEBOOK: "https://facebook.com/yourpage",
INSTAGRAM: "https://instagram.com/yourpage",
YOUTUBE: "https://youtube.com/@yourchannel"
```

Leave a social link blank if you do not want it to appear.

### 7. Dropdown menu
Edit the `MENU` section.

Example:

```js
{
  label: "Issues",
  items: [
    ["Water", "water.html"],
    ["Power & Air", "power-air.html"]
  ]
}
```

### 8. Add videos later
Turn this on:

```js
VIDEOS: {
  SHOW_SECTION: true,
```

Then add video cards:

```js
ITEMS: [
  {
    title: `Public meeting clip`,
    description: `A short explanation of why residents are asking for records first.`,
    embedUrl: `https://www.youtube.com/embed/VIDEO_ID`
  }
]
```

### 9. Add pictures later
Turn this on:

```js
GALLERY: {
  SHOW_SECTION: true,
```

Then add image cards:

```js
ITEMS: [
  {
    title: `Tremonton mountain view`,
    description: `Local landscape visual for the public education page.`,
    imageUrl: `assets/images/tremonton.jpg`
  }
]
```

## What still needs a real file edit

This control system is strong for normal edits. But these still need HTML/CSS help:
- creating an entirely new page
- changing the whole layout structure
- adding a new custom animation system
- moving sections into a totally different order across all pages

For most routine updates, you should only need `content-codes.js`.
