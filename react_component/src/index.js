import React from 'react';
import ReactDOM from 'react-dom';

class IndecisionApp extends React.Component {
  render() {
    const subtitle = 'put your life in the hands of computer'
    const options =['Thing one','Thing two','Thing three']

    return (
        <div>
          <Header title='Test value' subtitle={subtitle}/>
          <Action />
          <Options options={options}/>
          <AddOptions />
        </div>
      );
    };
  }

class Header extends React.Component {
    render() {
        return (
          <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
          </div>
        )
    }
}

class Action extends React.Component {
  handlePick() {
    alert('handlePick');
  }

    render() {
        return (
            <div>
              <button onClick={this.handlePick}>what should I submit ?</button>
            </div>
        );
    }
}

class Options extends React.Component {
  handleRemoveAll = () => {
    console.log(this.props.options)
    // alert('handleRemoveAll')
  }
    render() {
        return (
          <div>
            <button onClick={this.handleRemoveAll}>Remove</button>
            {
              this.props.options.map((option) => <Option key={option} optionText={option} />)
              }
          </div>
        );
      }
    }

class Option extends React.Component {
  render() {
    return (
      <div>
        Option:{ this.props.optionText }
      </div>
    );
  }
}




class AddOptions extends React.Component {
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    
    if (option) {
      alert("submit option")
    }
  }
    render() {
      return (
        <div>
          <form onSubmit={this.handleAddOption}>
            <input type="text" name="option" />
            <button>Add Option</button>
          </form>  
        </div>
      );
    }
  }


  
ReactDOM.render(
    <IndecisionApp />,
  document.querySelector('#root')
);
