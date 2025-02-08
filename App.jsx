import React from 'react';
import './App.css';
import Calendar from './calendar';
import { CALENDAR_SELECTION_TYPE } from '@skyscanner/backpack-web/bpk-component-calendar';


function App() {
  const selectionConfig = { type: CALENDAR_SELECTION_TYPE.single };

return (
<div>
<h1>Flight Schedule</h1>
<Calendar selectionConfiguration={selectionConfig}/>
<button onClick={() => alert('Continue')}>Click Me</button>
</div>
);
}

export default App;