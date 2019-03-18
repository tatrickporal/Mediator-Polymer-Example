import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class MediatorBottom extends PolymerElement {
  static get template() {
    return html`
      <style>
      :host {
        width:100%;
        height:100%;
      }
      .mediator-bottom-container{
        display:flex;
        flex-direction:column;
        justify-content:flex-start;
        border:solid black 2px;
      }
      .selected{
          border:dashed #55A754 2px;
      }
      </style>

      <div class$='mediator-bottom-container [[_isMediatorSelectedClass(isSelected)]]'>

        <h3> [[_isMediatorSelected(isSelected)]]</h3>
        <div class='concrete-mediator-buttons'>
            <colleague-participant title='Colleague-3' colleague-selection={{colleagueSelection}}></colleague-participant>
            <colleague-participant title='Colleague-4' colleague-selection={{colleagueSelection}}></colleague-participant>
        <div>

      </div>
    `;
  }

  static get properties () {
    return {
        colleagueSelection: {
            type: String,
            notify:true,
            observer: '_checkForColleague'
        },
        mediatorBottomTitle: {
            type: String,
        },
        isSelected: {
            type: Boolean,
            value: false,
            notify:true
        },
    };
  }

  _checkForColleague(newVal, oldVal){
    if((newVal == 'Colleague-3') || (newVal == 'Colleague-4')){
        this.isSelected = true;
    } else { 
        this.isSelected = false; 
    }
  }

  _isMediatorSelected(isSelected){
    return (isSelected) ? this.mediatorBottomTitle + ' is Selected!' : this.mediatorBottomTitle + ' not Selected :(';
  }
  _isMediatorSelectedClass(isSelected){
    return (isSelected) ? 'selected' : '';
  }

  constructor() {
    super();
  }
}

customElements.define('mediator-bottom', MediatorBottom);
