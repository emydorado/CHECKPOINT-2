import './components/export';
import { Attributes } from './components/card/card';
import getDataTxt from './services/dataFetchTxt';
import getDataImg from './services/dataFetchImg';
import styles from './index.css';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	async connectedCallback() {
		const dataTxt = await getDataTxt();
		const dataImg = await getDataImg('');
		console.log(dataTxt, dataImg);
		this.render(dataTxt, dataImg);
	}

	render(dataTxt: any, dataImg: any) {
		if (this.shadowRoot)
			this.shadowRoot.innerHTML = `
        <h1>CATS FACTS</h1>
        `;

		const card = this.ownerDocument.createElement('my-card');
		const factElement = dataTxt;
		const imageElement = dataImg;
		card.setAttribute(Attributes.fact, factElement.fact);

		const word = dataTxt.split(' ', 4);
		console.log(word);
		console.log(word.join(' '));

		card.setAttribute(Attributes.image, imageElement.image + `:` + word);

		this.shadowRoot?.appendChild(card);

		const button = this.ownerDocument.createElement('button');
		button.classList.add('boton');
		button.innerText = 'Get New Fact';
		button.addEventListener('click', () => {});
		this.shadowRoot?.appendChild(button);

		const styles = this.ownerDocument.createElement('styles');
	}
}

customElements.define('app-container', AppContainer);
