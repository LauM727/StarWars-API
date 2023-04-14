import { AttributeButton } from "../button/button";
export enum AttributeCard {
    "name" = "name",
    "gender" = "gender",
    "eye_color" = "eye_color",
    "btext"="btext"
}

class Card extends HTMLElement {
    name: string = "";
    gender: string = "";
    eye_color: string = "";
    btext: string="";

    static get observedAttributes() {
        const attrs: Record<AttributeCard, null> = {
            name: null,
            gender: null,
            eye_color: null,
            btext:null
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: AttributeCard,
        _: unknown,
        newValue: string
    ) {
        switch (propName) {
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }

    constructor() {
        super();
        this.attachShadow({ mode: `open` });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = `
        <section class= "card">
        <section class= "info">
        <h1>Name:${this.name}</h1>
        <p>Gender:${this.gender}</p>
        <p>Eyes color:${this.eye_color}</p>
        </section>
        </section>
        `;

        const container = this.ownerDocument.createElement(`section`);
        const button=this.ownerDocument.createElement('app-button');
        button.setAttribute(AttributeButton.btext, this.btext);
        container.appendChild(button);

        this.shadowRoot?.appendChild(container);
        // const css = this.ownerDocument.createElement(`style`);
        // css.innerHTML= styles;
        // this.shadowRoot?.appendChild(css);

    }
}
customElements.define("app-card", Card);
export default Card;