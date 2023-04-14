export enum AttributeButton{
    "btext"= "btext",
}

class Button extends HTMLElement{
    btext?: string;

    static get observedAttributes(){
        const attrs: Record <AttributeButton,null>={
            btext:null,
        }
        return Object.keys(attrs);
    }

    attributeChangeCallback( propName: AttributeButton,
        _:unknown,
        newValue: string){
       switch(propName){
        default:
            this[propName]= newValue;
            break;
       }
    }

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();

    }

    render(){
        if (this.shadowRoot) this.shadowRoot.innerHTML = ``

        const button =this.ownerDocument.createElement('button');
        button.innerText='${this.btext}'
        button.addEventListener('click',()=>{
            button.innerText="like";
        })
        this.shadowRoot?.appendChild(button);
    }
}
customElements.define("app-button", Button);
export default Button;