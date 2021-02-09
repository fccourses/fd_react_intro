React;
ReactDOM;

const root = document.getElementById('root');

const reactElement = React.createElement(
  'h1',
  { title: 'Hello', tabIndex: 0, className: 'heading' },
  'Hello React.js'
);

ReactDOM.render(reactElement, root);
