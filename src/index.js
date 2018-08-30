import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ShoppingList from './ShoppingList';
import AddColorForm from './AddColorForm';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<ShoppingList name="Justin" />, document.getElementById('shopping-list'));
ReactDOM.render(<AddColorForm />, document.getElementById('add-color-form'));
registerServiceWorker();



