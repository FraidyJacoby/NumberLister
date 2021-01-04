import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDom from 'react-dom';
import NumberLister from './components/NumberLister';

ReactDom.render(<NumberLister />, document.getElementById('root'));

//when add is clicked, the whole page disappears...