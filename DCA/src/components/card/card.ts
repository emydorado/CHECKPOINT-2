export enum Attributes {
	'fact' = 'fact',
	'image' = 'image',
}

class Card extends HTMLElement {
	fact?: string;
	image?: string;

	static get observedAttributes() {
		const attrs: Record<Attributes, null> = {
			fact: null,
			image: null,
		};
		return Object.keys(attrs);
	}

	constructor() {
		super();
		this.shadowRoot;
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback(propName: Attributes, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			default:
				this[propName] = newValue;
				break;
		}
	}
	render() {
		if (this.shadowRoot)
			this.shadowRoot.innerHTML = `
    <p>${this.fact}</p>
    `;
	}
}

export default Card;
customElements.define('my-card', Card);
