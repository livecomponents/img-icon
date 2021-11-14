class ComponentStub extends HTMLElement {
  constructor() {
    super();
    this.root = null;
    this.hasConnected = false;
    this.ariaHidden = true;
    this.a11yLabel = '';
    this.a11yTitle = '';
    this.desc = '';
    this.iconSet = {
      chevronUp: ['M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z'],
      chevronDown: ['M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z'],
      chevronLeft: ['M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z'],
      chevronRight: ['M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z'],
    };
    this.shape = 'star';
    this.viewBox = '0 0 24 24';
  }

  get icons() {
    return Object.keys(this.iconSet);
  }

  connectedCallback() {
    this.root = this.attachShadow({ mode: 'open' });
  }
}

window.customElements.define('component-stub', ComponentStub);
