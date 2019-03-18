import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icons/iron-icons.js';
import '../icon-toggle.js';
import '../overlay.js';

class DemoElement extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          font-family: sans-serif;
        }
        #overlay{
          width:100%;
          height:100%;
          position:absolute;
          background-color:grey;
          opacity:0.5;
        }
        .on{
            animation-name: activate-interface;
            animation-duration: 1s;
            animation-fill-mode: forwards;
        }
        .off{
            pointer-events:none;
        }
        @keyframes activate-interface {
          100% {
            pointer-events:all;
            background-color:transparent;
            opacity:1;
          }
        }
      </style>
        <div id='overlay' class$='[[_activeSession(isSessionActive)]]'>

          <h3>Statically-configured icon-toggles</h3>
          <icon-toggle toggle-icon="star"></icon-toggle>
          <icon-toggle toggle-icon="star" pressed></icon-toggle>
            
          <h3>Data-bound icon-toggle</h3>
          <!-- use a computed binding to generate the message -->
          <div><span>[[_message(isFav)]]</span></div>
          <!-- curly brackets ({{}}} allow two-way binding --> 
          <icon-toggle toggle-icon="favorite" pressed="{{isFav}}"></icon-toggle>

        </div>
        
      
    `;
  }

  static get properties () {
      return {
        isSessionActive: {
          type: Boolean,
          value: false
        }
      ,
    };
  }
  constructor(){
    super();
    setTimeout(() => {
      this.isSessionActive = true;
    }, 3000);
  }

  _message(fav) {
    if (fav) {
      return 'You really like me!';
    } 
    else {
      return 'Do you like me?';
    }
  }

  _activeSession(isActive){
    return (isActive == true) ? 'on' : 'off';
  }   
}
customElements.define('demo-element', DemoElement);
