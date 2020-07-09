(async function runModule(document, window) {
  const CUSTOM_ELEMENT_NAME = 'img-icon';
  const { iconConfigs } = await import('./partials/iconConfigs.mjs');
  const { template } = await import('./partials/templates.mjs');
  const icons = iconConfigs();
  if (!window.customElements.get(CUSTOM_ELEMENT_NAME)) {
    window.customElements.define(CUSTOM_ELEMENT_NAME,
      class ImgIcon extends HTMLElement {
        
        static get observedAttributes() { return ['fill', 'shape']; }
        static get shapes() { return Object.keys(icons); }
  
        constructor() {
          super();
          this.root = null;
          this.fill = 0;
          this.hasRendered = false;
          this.shape = 'star';
        }
  
        connectedCallback() {
          if (this.root === null) {
            this.root = this.attachShadow({ mode: "open" });
          }
          render(this);
        }
  
        attributeChangedCallback(name, oldValue, newValue) {
          if (newValue === oldValue) { return; }
          if (name === 'fill') { this.fill = parseInt(newValue, 10); }
          if (name === 'shape') { this.shape = newValue; }
          render(this);
        }
    });
  }

  function render(component) {
    if (component.root) {
      const $template = document.createElement('template');
      $template.innerHTML = template(component, icons);
      component.root.innerHTML = '';
      component.root.appendChild(document.importNode($template.content, true));
      component.hasRendered = true;
    }
  }

  })(document, window);