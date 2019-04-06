import React from 'react';
import ReactDOM from 'react-dom';

const user = {
              name:"田中", age: 26,
              location: "Japan",cities: ["Tokyo", "Nagoya", "Chiba"],
              printPlaceLived() {
                const cityMessage = this.cities.map((city) => {
                  return this.name + 'は' + city + 'に住んでいます! ';
                });
                return cityMessage;
              }
            };

console.log(user.printPlaceLived())


function getlocation(location){ if (location) {
  return location;
  } else {
  return "Unknown";
  }
}


const squareArrow = x => {return x * x;};

let visibility = false

const toggle = () => { 
  visibility = !visibility;
  render();
};

const App = () => {
  return (
        <div>
          <p1>{user.name}</p1>
          <p1>{user.age}</p1>
          <p1>{squareArrow(9)}</p1><br></br>
          <p2>{user.printPlaceLived()}</p2>
          <h1>Visibility Toggle</h1>
          <button onClick={toggle}>
            {visibility ? 'Hide' : 'Show'}
          </button>
            {visibility && (
              <div>
                <p>Hello</p>
              </div>  
            )}

        </div>
  );
};
  
ReactDOM.render(
  
    <App />,
  document.querySelector('#root')
);

render();
