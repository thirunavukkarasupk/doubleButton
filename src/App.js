import { React } from 'react';
import './App.scss';
import incrementButton from './components/incrementButton';

const App = ({ state: { count, refreshID }}) =>
	<div className="App" role="application">
		<div>Count: { count }</div>
		<div>{ incrementButton() }</div>
		<div>Refresh ID: { refreshID }</div>
	</div>;

export default App;
