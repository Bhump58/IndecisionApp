import React from 'react';
import ReactDom from 'react-dom';

const template = React.createElement('h1', {}, 'testing');
const app = document.getElementById('app');
ReactDom.render(template, app);
