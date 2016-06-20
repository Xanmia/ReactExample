import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return <p> Hello React!</p>;
  }
}

class Testapp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isChecked: "happy"};

      this.onChange = this.onChange.bind(this);
    }

    onChange() {
      this.setState({isChecked: "!this.state.isChecked"});
    }
	
  render() {
	  return (
	  	<div>
		  <h1> {this.state.isChecked}</h1>
		  {this.props.sometext}
		  <input type="text" onFocus={this.onChange} placeholder="Your name" />
		 
		</div>
	  );
  }
};

export default class Grouped extends React.Component {
  render () {
    return (
		<div>
			<App/>
			<Testapp sometext={this.props.sometext}/>
		</div>
	);
  }
}

//render(<Grouped sometext='asklfjlasdkjflsakdjf'>some stufffts</Grouped>, document.getElementById('app'));
