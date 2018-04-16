import React from 'react';
import ReactDOM from 'react-dom';
// import './styling/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
