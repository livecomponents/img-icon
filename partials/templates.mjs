export function template(component, iconConfigs){
  const BASE_ICON_COLOR = '#e0e0e0';
  const ICON_COLOR = '#fff';
  const fill = component.fill;
  const fillType = fill > 0 && fill < 100 ? 'gradient' : (fill >= 100 ? 'foreground-color' : 'background-color');

  return `
    <style>
      :host {
        overflow: hidden;
        display: inline-block;
        margin: 0;
        width: 100%;
        max-width: 100%;
        height: 100%;
        padding: 0;
        outline-color: var(--img-icon--outline, rgba(255,255,255,0));
      }
      
      ::slotted([slot="ii:fallback"]) {
        display: none;
      }

      .icon {
        stroke: none;
      }

      .background-stop-color {
        stop-color: var(--img-icon--base-color, ${BASE_ICON_COLOR});
      }

      .background-color {
        fill: var(--img-icon--base-color, ${BASE_ICON_COLOR});
      }

      .foreground-color {
        fill: var(--img-icon--color, ${ICON_COLOR});
      }

      .foreground-stop-color {
        stop-color: var(--img-icon--color, ${ICON_COLOR});
      }
      .gradient {
        fill: url(#gradient);
      }
    </style>
    <slot name="ii:fallback"></slot>
    <svg class="${fillType} icon" role="img" aria-hidden="true" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
      <defs>
        <linearGradient id="gradient">
          <stop class="foreground-stop-color" offset="${fill}%" />
          <stop class="background-stop-color" offset="${100 - fill}%" />
        </linearGradient>
      </defs>
      <g>
        <path d="${iconConfigs[component.shape]}" />
      </g>
    </svg>
  `;
}