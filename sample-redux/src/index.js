import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({count}) =>({
  type: 'SET',
  count
});

const resetCount = () =>({
  type: 'RESET'
});





const store = createStore((state = {count: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
          count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.count
      };
    case 'RESET':
      return {
        count: 0
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

store.dispatch(incrementCount());

store.dispatch(incrementCount({incrementBy: 5}));

console.log(store.getState());


store.dispatch(decrementCount({decrementBy: 5}));

console.log(store.getState());

store.dispatch(setCount({count: 101}));

console.log(store.getState());

store.dispatch(resetCount());

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
