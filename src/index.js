import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/normalize.scss';
import './styles/global.scss';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
	<App />,
	document.getElementById('root')
);

// import * as ReactDOMClient from 'react-dom/client';
// import React from 'react';
// import App from './App';
// import './styles/normalize.scss';
// import './styles/global.scss';
// import 'font-awesome/css/font-awesome.min.css';

// const container = document.querySelector('#root');
// const root = ReactDOMClient.createRoot(container);

// root.render(<App />);