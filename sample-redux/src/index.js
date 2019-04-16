import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

const store = createStore((state = {count: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
          count: state.count + incrementBy
      };
    case 'DECREMENT':
      return {
          count: state.count - 1
      };
    default:
      return state;  
  }
});

console.log(store.getState());

store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
  });

store.dispatch({
  type: 'INCREMENT'
});

console.log(store.getState());

const book = {
  title: 'Ego',
  author: 'tanaka',
  publisher: {
    //name: "Bookpublisher"
  }
};

const {name: publishername = 'Self'} = book.publisher 
console.log(publishername)

const address = ['1299', 'Philadelphia','tokyo','1911']
const [,city, state = 'New York'] = address
console.log(`You are in ${city} ${state}`)


class App extends React.Component {
    render() {
        return (
          <div>
          </div>
        )
    }
}

ReactDOM.render(<App />,document.getElementById('root'));
