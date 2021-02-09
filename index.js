/* 
React;
ReactDOM;
 */
class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    console.log(this);
    this.state.counter++; // мутация состояние - very bad
  }

  decrement() {
    console.log(this.state.counter);
    this.state.counter--;
  }

  render() {
    const { counter } = this.state;
    return React.createElement(
      React.Fragment,
      null,
      React.createElement('h1', null, counter),
      React.createElement(
        'button',
        {
          onClick: this.decrement,
        },
        '-'
      ),
      React.createElement(
        'button',
        {
          onClick: this.increment,
        },
        '+'
      )
    );
  }
}

const reactElement = React.createElement(Counter);

ReactDOM.render(reactElement, document.getElementById('root'));
