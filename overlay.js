import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class InterfaceOverlay extends PolymerElement {
    static get template() {
        return html`
        <style>
            :host{
                display: inline-block;
                height:100vh;
                width:100vw;
                background-color:#7F9AB5;
            }
        </style>
        
        `;
    }

    static get properties() {
        return {
          isSessionActive: {
              type: Boolean,
              value: false,              
          },
        }
    }

    constructor() {
        super();
    }
    _activeSession(isActive){
        return (isActive == true) ? 'on' : 'off';
    }
  }
  customElements.define('interface-overlay', InterfaceOverlay)