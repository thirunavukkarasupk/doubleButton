const increaseCount = ({ state, data }) => ({
	count: state.count + data,
});
const decreaseCount = ({ state, data }) => ({
	count: state.count - data,
});

const actions = {
	increaseCount,
	decreaseCount,
};

export default actions;
