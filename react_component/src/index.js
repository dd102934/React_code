import React from 'react';
import ReactDOM from 'react-dom';

class IndecisionApp extends React.Component {

  state = { options: []}

  handleDeleteOptions = () => {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }
    
    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      };
    })
  }

  

  render() {
    const subtitle = 'put your life in the hands of computer'
    

    return (
        <div>
          <Header title='Test value' subtitle={subtitle}/>
          <Action 
          hasOptions={this.state.options.length > 0} 
          handlePick={this.handlePick}
          />
          <Options 
          options={this.state.options} 
          handleDeleteOptions={this.handleDeleteOptions}
          />
          <AddOptions handleAddOption={this.handleAddOption} />
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
  

    render() {
        return (
            <div>
              <button onClick={this.props.handlePick}
              disabled={!this.props.hasOptions}>what should I submit ?</button>
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
            <button onClick={this.props.handleDeleteOptions}>Remove</button>
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

  state = {error: undefined};
  
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => {
      return {error};
    });
  }
    render() {
      return (
        <div>
          {this.state.error && <p>{this.state.error}</p>}
          <form onSubmit={this.props.handleAddOption}>
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
