import { React } from 'react';
import config from '../core/config';
import context from '../core/context';

const incrementButton = () =>

	<button
		onClick={ () => context.actions.increaseCount(config.increment) }
	>
		Increment!
	</button>;

export default incrementButton;
