import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.css';

class Button extends Component {
  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };

  render() {
    const classNames = [
      'component-button',
      this.props.orange ? 'orange' : '',
      this.props.wide ? 'wide' : ''
    ];
    return (
      <div className={classNames.join(' ').trim()}>
        <button onClick={this.handleClick}>{this.props.name}</button>
      </div>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string,
  orange: PropTypes.bool,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func
};

export default Button;

// import React, { Component } from 'react';
// import './Button.css';

// class Button extends Component {
//   state = {
//     count: 0
//   };

//   handleClick = () => {
//     this.setState({ count: ++this.state.count });
//   };

//   render() {
//     return (
//       <div className="Button">
//         <header className="App-Header">
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">Random txt..</p>
//         <button type="button" onClick={this.handleClick}>
//           Click this..
//         </button>
//       </div>
//     );
//   }
// }

// export default Button;
