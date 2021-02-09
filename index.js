/* 
React;
ReactDOM;
 */
class Heading extends React.Component {
  render() {
    const { title, children } = this.props; // пропсы - настройка компонента извне
    // this.props.title = 1; // ГРУБАЯ ОШИБКА
    console.log(this.props);
    return React.createElement(
      'h1',
      { title: `${title}_FROM HEADING`, tabIndex: 0, className: 'heading' },
      'Hello React.js',
      ...children
    );
  }
}

const reactElement = React.createElement(
  Heading,
  { title: 'Hello react' },
  ' str1',
  ' str2'
);

ReactDOM.render(reactElement, document.getElementById('root'));
