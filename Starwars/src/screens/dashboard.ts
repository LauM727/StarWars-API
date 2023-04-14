import { get_api } from "../services/data";
import{AttributeCard} from "../components/Card/card"
import { ApiType } from "../components/types/apiType";

class Dashboard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    async connectedCallback(){
        const urlStarwars = await get_api();
        this.render(urlStarwars)
        console.log({urlStarwars})
    }

    render(urlStarwars:any){
        if(this.shadowRoot) this.shadowRoot.innerHTML=``;
        urlStarwars?.forEach((e:ApiType) => {
            const card = this.ownerDocument.createElement(`app-card`);
            card.setAttribute(AttributeCard.name,e.name);
            card.setAttribute(AttributeCard.gender,e.gender);
            card.setAttribute(AttributeCard.eye_color,e.eye_color);
            this.shadowRoot?.appendChild(card);

        })
    }
}

customElements.define("app-dashboard",Dashboard);