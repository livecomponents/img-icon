- [Main documentation](../README.md)

# Development
### Setup
To initialize this component for all supported browsers, you must add scripts to the head of the document that point to their location on the CDN.

#### Initialization HTML
```html
<!-- OPTIONAL: preloaded dependency for a performance boost -->
<link rel="preload" crossorigin href="https://unpkg.com/@live-components/img-icon@1.1.0/partials/iconConfigs.mjs" crossorigin as="script"/>

<!-- REQUIRED: main module for modern Evergreen browsers  (Safari, Edge, Chrome, Mobile Safari, and Firefox) -->
<script crossorigin type="module" src="https://unpkg.com/@live-components/img-icon@1.0.0/img-icon.mjs"></script>

<!-- OPTIONAL: fallback module if basic styling and function support for older browsers is needed (IE11) -->
<script crossorigin nomodule type="text/javascript" src="https://unpkg.com/@live-components/img-icon@1.0.0/img-icon.js"></script>
```

### CSS Custom Properties (variables)
The base color property is for the background color and color is the foreground.

| **Variable Name** | **Default Value** |
| --- | --- |
| `--img-icon--base-color` | `#e0e0e0` |
| `--img-icon--color` | `#fff` |

### Attributes
| **Attribute Name** | **Default Value** | **Expected Value(s)** |
| --- | --- | --- |
| `fill`  | `0` | expected values are 0 - 100 representing the percentage of foreground color shown |
| `shape` | `star` | expected values are listed in the '*Icon Shapes*' section |

### Slots
| **name** | **summary** | **type** | **SEO Requirement** |
| --- | --- | --- | --- |
| `ii:fallback` | basic fallback image in case of errors and/or component failure | static |  ❌ |
 <!-- ✅ ❌ -->

### Custom Event Hooks
| **name** | **detail data** | **summary** |
| --- | --- | --- |
| `ph:userchange` | `{ userIsLoggedIn: boolean, userName: string }` | triggers when user name is updated |

## Fallback Dependencies
These are the dependencies for the optional `nomodule` script.
| **name** | **location** | **Override** | **swappable** |
| --- | --- | --- | --- |
| `Material Icon Web Fonts` | `https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.css` | Overrides the url when a `fallback` attribute value exists | ✅ |

## Customization

### Icon Shapes (based on Material Icons)
arrowDown, arrowLeft, arrowRight, arrowUp, addPhoto, alertCircle, alertTriangle, bell, bullhorn, car, chat, chatWithStar, chevronUp, chevronDown, chevronLeft, chevronRight, checkmark, checkmarkCircle, checkmarkCircleOutline, clipboard, clock, close, cloudUp, creditCard, dashboard, description, directions, dotsVertical, download, earth, email, emailOutline, fileCSV, listCurled, filter, flag, fullscreen, fullscreenExit, heart, heartOutline, helpCircle, helpCircleOutline, home, infoCircle, infoCircleOutline, lock, location, menu, mobilePhone, money, minus, pencil, plus, phone, photoCollection, print, reply, replyAll, rotateLeft, rotateRight, save, search, star, starHalf, starOutline, shieldCheckmark, tools, trash, triangleArrowDown, triangleArrowUp, upload, userCircle, visibilityHide, visibilityShow, wrench, zoomIn, zoomOut

## NPM Scripts
| **command** | **summary** |
| --- | --- |
| `npm run compress` | handles compression. The main file is compressed to brotli and the fallback file (or 'nomodule' file) is compressed to gzip |
| `npm run test` | runs unit tests | 
| `npm run start` | runs an dev server to test the component (port 5000) |
