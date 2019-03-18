import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';


class ConcreteMediator extends PolymerElement {
  static get template() {
    return html`
      <style>
      :host {
        width:100%;
        height:100%;
      }
      .concrete-mediator{
        display:flex;
        flex-direction:column;
        justify-content:flex-start;
        border:solid black 2px;
      }
      .selected{
          border:dashed #55A754 2px;
      }
      </style>

      <div class$='concrete-mediator [[_concreteMediatorIsSelectedClass(isSelected)]]'>

        <h3> [[_isConcreteMediator(isSelected)]]</h3>
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
        concreteMediatorTitle: {
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
  _isConcreteMediator(isSelected){
    return (isSelected) ? this.concreteMediatorTitle + ' is Selected!' : this.concreteMediatorTitle + ' not Selected :(';
  }
  _concreteMediatorIsSelectedClass(isSelected){
    return (isSelected) ? 'selected' : '';
  }

  constructor() {
    super();
  }
}

customElements.define('concrete-mediator', ConcreteMediator);
