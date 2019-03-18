import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';


class ColleagueParticipant extends PolymerElement {
  static get template() {
    return html`
      <style>
      :host {
        width: 100%;
        height:100%;
      }
      button{
          height:50px;
          width:100px;
          border-radius:12px;
          margin-top:5px;
      }
      .button-on{
        color:white;
        background-color:#55A754;
      }
      .button-off{
        background-color:lightgrey;
        color:black;
      }
      </style>
  
      <button id='selectionButton'  class$='{{_getButtonClass(selectedColleague)}}'> [[title]] </button>
    `;
  }

  static get properties () {
    return {
        title: String,
        selectedColleague: {
            type: String,
            notify:true
        }
    };
  }

  constructor() {
    super();
  }
  ready(){
    super.ready();
    this.$.selectionButton.addEventListener('click', this._buttonSelect.bind(this));
  }

  _buttonSelect() {
    this.selectedColleague = this.title;
  }

  _getButtonClass(selection){
    return (selection == this.title) ? 'button-on' : 'button-off';
  } 
}

customElements.define('colleague-participant', ColleagueParticipant);
