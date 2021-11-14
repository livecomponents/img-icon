(async function runModule(window) {
  const CUSTOM_ELEMENT_NAME = 'img-icon';
  const { render, getIconConfig } = await import('./partials/helpers.mjs');
  if (!window.customElements.get(CUSTOM_ELEMENT_NAME)) {
    window.customElements.define(
      CUSTOM_ELEMENT_NAME,
      class ImgIcon extends HTMLElement {
        static get observedAttributes() {
          return [
            'icon-set',
            'shape',
            'title',
            'a11y-label',
            'desc',
            'accessible',
          ];
        }

        constructor() {
          super();
          this.root = null;
          this.hasConnected = false;
          this.ariaHidden = true;
          this.a11yLabel = '';
          this.a11yTitle = '';
          this.desc = '';
          this.iconSet = null;
          this.shape = 'star';
          this.viewBox = '0 0 512 512';
        }

        connectedCallback() {
          if (this.root === null) {
            this.root = this.attachShadow({ mode: 'open' });
          }
          render(this);
        }

        attributeChangedCallback(name, oldValue, newValue) {
          if (newValue === oldValue) {
            return;
          }
          switch (name) {
            case 'a11y-label':
              this.a11yLabel = newValue;
              break;
            case 'icon-set':
              const { icons, viewBox } = getIconConfig(newValue);
              this.iconSet = icons;
              this.viewBox = viewBox ? viewBox : '0 0 512 512';
              break;
            case 'accessible':
              this.ariaHidden = false;
              break;
            case 'desc':
              this.desc = newValue;
              break;
            case 'shape':
              this.shape = newValue;
              break;
            case 'title':
              this.a11yTitle = newValue;
              break;
            default:
              break;
          }
          render(this);
        }
      }
    );
  }
})(window);
