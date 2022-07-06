import { React } from 'react';
import config from '../core/config';
import context from '../core/context';

const decrementButton = () =>

	<button
		onClick={ () => context.actions.decreaseCount(config.decrement) }
	>
		Decrement!
	</button>;

export default decrementButton;
