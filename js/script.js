var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },
	
	decrement: function() {
		this.setState({
			counter: this.state.counter -1
		});
	},
	// -----------------stany----------------------------
	componentWillMount: function() {
        console.log('Component is ready to mount...');
    },
    componentDidMount: function() {
        console.log('Component mounted!');
    },
    componentWillReceiveProps: function() {
        console.log('Component gets props.');
    },
    shouldComponentUpdate: function() {
        console.log('Component gets new state!');
        return true;
    },
    componentWillUpdate: function() {
        console.log('Updating component!');
    },
    componentDidUpdate: function() {
        console.log('Component updated.');
    },
    componentWillUnmount: function() {
        console.log('Component is ready to unmount...');
    },
	// -----------------stany----------------------------
	
    render: function() {
        return React.createElement('div', {},
            React.createElement('button', { onClick: this.increment, style: {
			backgroundColor: '#ffe5e5'} }, 'Increment'),
            React.createElement('button', { onClick: this.decrement, style: {
			backgroundColor: '#e5ffe5' } }, 'Decrement'),
            React.createElement('span', {}, ' Counter: ' + this.state.counter)
        );
    }
});

var element =
    React.createElement('div', {},
        React.createElement(Counter, {}, ),
        React.createElement(Counter, {}, ),
		React.createElement(Counter, {}, ),
        React.createElement(Counter, {}, ),
        React.createElement(Counter, {}, )
    );

ReactDOM.render(element, document.getElementById('app'));