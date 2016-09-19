import define from 'ensemblejs/lib/define';
import { key } from '../constants';
const bel = require('bel');

const overlay = () => bel`
<div>
  <div id="space" class="space">0</div>
  <div id="continuous" class="continuous">0</div>
</div>
`;

const setOnElement = (id, value) => (document.getElementById(id) && (document.getElementById(id).textContent = value));

const updateSpace = (current) => setOnElement('space', current);
const updateContinuous = (current) => setOnElement('continuous', current);

define('OnClientReady', ['StateTracker'], (tracker) => {
  document.getElementById('overlay').appendChild(overlay());

  return () => {
    tracker().onChangeOf(`${key}.space`, updateSpace);
    tracker().onChangeOf(`${key}.continuous`, updateContinuous);
  };
});