import React, { Component } from 'react';

class Input extends Component {
  static defaultProps = {
    wrapperClassName: '',
  }

  render() {
    const { label, wrapperClassName, error, ...props } = this.props;
    return (
      <div className={`inputWrapper ${wrapperClassName} ${error ? 'error' : ''}`}>
        {label ? <span className="label">{label}</span> : null}
        <input type="text" {...props} />
        {error ? <span className="error">{error}</span> : null}
      </div>
    );
  }
}

export default Input;
