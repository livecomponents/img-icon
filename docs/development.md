- [Main documentation](../README.md)

# Development

### Setup

To initialize this component for all supported browsers, you must add scripts to the head of the document that point to their location on the CDN.

#### Initialization HTML

```html
<!-- REQUIRED: main module for modern Evergreen browsers  (Safari, Edge, Chrome, Mobile Safari, and Firefox) -->
<script
  crossorigin
  type="module"
  src="https://unpkg.com/@live-components/img-icon/img-icon.js"
></script>

<!-- OPTIONAL: fallback module if basic styling and function support for older browsers is needed (IE11) -->
<script
  crossorigin
  nomodule
  type="text/javascript"
  src="https://unpkg.com/@live-components/img-icon@1.0.0/img-icon.nomodule.js"
></script>
```

### CSS Custom Properties (variables)

The base properties for color ans sizing are listed below.

| **Variable Name**           | **Default Value**        |
| --------------------------- | ------------------------ |
| `--img-icon--color`         | `currentColor`           |
| `--img-icon--outline-color` | `rgba(255, 255, 255, 0)` |
| `--img-icon--maxsize`       | `1rem`                   |
| `--img-icon--color-action`  | `currentColor`           |

### Attributes

| **Attribute Name** | **Default Value** | **Expected Value(s)** | ------------------ | ----------------- | ----- |
| `accessible` | `""` | when the component has accessibility properties this attribute should be set to 'true'. Internally it will set the SVG to have `aria-hidden` attribute with a value of 'true'. Do not use this attribute if you do not want the icon to be accessible. |
| `a11y-label` | `""` | when this attribute is set the SVG is assigned a `aria-label` attribute with the value of `a11y-label`. Do not use this attribute if you do not want the icon to have an accessible label. |
| `desc` | `""` | this attribute value becomes the the inner text for the SVG `<desc>` tag (if a value is present). Do not use this attribute if you do not want the icon to have this tag. |
| `icon-set` | `null` | JSON object with '_icons_' and '_viewBox_' values |
| `shape` | `star` | expected values are listed in the '_Icon Shapes_' section |
| `title` | `""` | this attribute value becomes the the inner text for the SVG `<title>` tag (if a value is present). Do not use this attribute if you do not want the icon to have this tag. |

### Slots

None

### Custom Event Hooks

None

## Fallback Dependencies

These are the dependencies for the optional `nomodule` script.
| **name** | **location** | **Override** | **swappable** |
| --- | --- | --- | --- |
| `Material Icon Web Fonts` | `https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.css` | Overrides the url when a `fallback` attribute value exists | ✅ |

## Customization

### Icon Shapes (based on Material Icons)

arrowDown, arrowLeft, arrowRight, arrowUp, addPhoto, alertCircle, alertTriangle, bell, bullhorn, car, chat, chevronUp, chevronDown, chevronLeft, chevronRight, checkmark, checkmarkCircle, checkmarkCircleOutline, clipboard, clock, close, cloudUp, creditCard, dashboard, description, directions, dotsVertical, download, earth, email, emailOutline, fileCSV, listCurled, filter, flag, fullscreen, fullscreenExit, heart, heartOutline, helpCircle, helpCircleOutline, home, infoCircle, infoCircleOutline, lock, location, menu, mobilePhone, money, minus, pencil, plus, phone, photoCollection, print, reply, replyAll, rotateLeft, rotateRight, save, search, star, starHalf, starOutline, shieldCheckmark, tools, trash, triangleArrowDown, triangleArrowUp, upload, userCircle, visibilityHide, visibilityShow, wrench, zoomIn, zoomOut

## NPM Scripts

| **command**     | **summary**                                          |
| --------------- | ---------------------------------------------------- |
| `npm run start` | runs an dev server to test the component (port 5000) |
