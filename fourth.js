import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

const App = () => (
	<Router>
		<Route exact path="/*" component={List} />
	</Router>
)

const List = () => <div className="list">
	<Route path={`/item/:id`} render={() => (
		<Preview />
	)} />
	{[{ id: 1, title: 'This is title' }, { id: 2, title: 'This is another one' }].map(I => <Link to={`/item/${I.id}`} key={'item' + I.id}>{I.title}</Link>)}
</div>,
	Preview = ({ item }) => <div>This is list item preview</div>;

export default App;