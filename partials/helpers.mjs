const JSON_OPTIONS = {
  method: 'GET',
  headers: { Accept: 'application/json' },
};

export function render(component) {
  if (component.root) {
    const $template = document.createElement('template');
    $template.innerHTML = template(component, icons);
    component.root.innerHTML = '';
    component.root.appendChild(document.importNode($template.content, true));
    component.hasRendered = true;
  }
}

export async function getIconConfig(path) {
  try {
    let response = { json: () => null };
    if (path && path.endsWith('.json')) {
      response = await fetch(path, JSON_OPTIONS);
    } else {
      response = await fetch('./partials/iconsSet.json', JSON_OPTIONS);
    }
    return response.json();
  } catch (e) {
    console.error(e);
  }
}

export function template(component) {
  if (!component) {
    return '';
  }
  const { ariaHidden, a11yLabel, a11yTitle, desc, iconSet, shape, viewBox } =
    component;
  return /* html */ `
    <style>
      :host {
        overflow: hidden;
        display: inline-block;
        margin: 0;
        padding: 0;
        width: var(--img-icon--maxsize, 1rem);
        min-width: var(--img-icon--maxsize, 1rem);
        height: var(--img-icon--maxsize, 1rem);
        min-height: var(--img-icon--maxsize, 1rem);
        max-width: var(--img-icon--maxsize, 1rem);
        max-height: var(--img-icon--maxsize, 1rem);
        fill: var(--img-icon--color, currentColor);
        outline-color: var(--img-icon--outline-color, rgba(255, 255, 255, 0));
      }

      :host(:focus),
      :host(:hover),
      :host(:active) {
        --img-icon--color: var(--img-icon--color-action, currentColor);
      }

      .icon {
        stroke: none;
      }
    </style>
    <svg
      role="img"
      class="icon"
      ${ariaHidden ? 'aria-hidden="true"' : ''}
      ${a11yLabel ? `aria-label="${a11yLabel}"` : ''}
      preserveAspectRatio="xMidYMid meet"
      viewBox="${viewBox}"
    >
      ${a11yTitle ? `<title>${a11yTitle}</title>` : ''}
      ${desc ? `<desc>${desc}</desc>` : ''}
      ${(iconSet[shape] || [])
        .map((iconPath) => `<path d="${iconPath}" />`)
        .join('\n')}
    </svg>
  `;
}
