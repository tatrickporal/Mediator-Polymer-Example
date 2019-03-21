import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icons/iron-icons.js';
import '../icon-toggle.js';
import '../colleague.js';
import '../mediator-bottom.js';


class MediatorParticipant extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          font-family: Tahoma;
          width:100vw;
          height:100vh;
          display:inline-block;
        }
        .mediator{
            display:flex;
            flex-direction:column;
            text-align:center;
            justify-content:space-evenly;
        }
        .paired-buttons-selected{
            border:solid green 2px;
        }
        .paired-buttons-not-selected{
            border:dashed black 2px;
        }

      </style>

        <div class='mediator'>
          <h1> Mediator Design Example </h1>
          <h2>Current Selection: [[selectedColleague]] [[_isSpecialSelected(isSpecialSelected)]]</h2>
          <div class='not-special'>
            <colleague-participant title='Colleague-1' selected-colleague={{selectedColleague}}></colleague-participant>
            <colleague-participant title='Colleague-2' selected-colleague={{selectedColleague}}></colleague-participant>
          </div>
          <div class$='[[_isSpecialSelectedClass(isSpecialSelected)]]'>
            <h3> [[_isSpecialSelected(isSpecialSelected)]] </h3>
            <colleague-participant title='Colleague-3' selected-colleague={{selectedColleague}}></colleague-participant>
            <colleague-participant title='Colleague-4' selected-colleague={{selectedColleague}}></colleague-participant>
          </div>
         <div>
    `;
  }

  static get properties () {
        return {
            selectedColleague: {
                type: String,
                notify: true,
                observer: '_onSelectionChange'
            },
            isSpecialSelected: {
                type: Boolean,
                computed: '_specialSelectionCheck(selectedColleague)'
            }
        };
  }

  constructor(){
    super();
  }

  _onSelectionChange(newVal, oldVal){
        alert('You are being notified by the mediator object that your selection will be ' + newVal + ' after clicking OK');
  }

  _specialSelectionCheck(selection){
    return ((selection == 'Colleague-3') || (selection == 'Colleague-4')) ? true : false ;
  }

  _isSpecialSelected(isSpecialSelected){
    return ((isSpecialSelected == true)) ? ' Special Colleague is Selected!': '' ;
  }
  _isSpecialSelectedClass(isSpecialSelected){
    return ((isSpecialSelected == true)) ? 'paired-buttons-selected': 'paired-buttons-not-selected' ;
  }
}
customElements.define('mediator-participant', MediatorParticipant);
