import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Input extends PureComponent {
  render() {
    const {
      name,
      email,
      placeholder,
      value,

      ...props
    } = this.props;
    return (
      <div className="col-lg-4">
        <label className="inputLab name">
          <input type="text" className="input" name={name} placeholder={placeholder} onChange={this.handleChange} value={value} />
        </label>
      </div>
    );
  }
}

Input.defaultProps = {
  type: 'text',
  error: '',
  required: false,
  autoComplete: 'off',
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  autoComplete: PropTypes.string,
  labelClass: PropTypes.string,
  inputClass: PropTypes.string,
};

export default Input;