(async function runModule(window) {
  const CUSTOM_ELEMENT_NAME = 'img-icon';
  const { render, defaultIcons, attributes } = await import('./helpers.mjs');
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
            'fill',
          ];
        }

        get icons() {
          return Object.keys(this.iconSet);
        }

        constructor() {
          super();
          const { icons, viewBox } = defaultIcons();
          this.root = null;
          this.hasConnected = false;
          this.ariaHidden = true;
          this.a11yLabel = '';
          this.a11yTitle = '';
          this.desc = '';
          this.iconSet = icons;
          this.shape = 'star';
          this.fill = 100;
          this.viewBox = viewBox;
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
          attributes(name, newValue, this);
        }
      }
    );
  }
})(window);
