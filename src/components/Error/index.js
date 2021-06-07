import React from 'react';
import PropTypes from 'prop-types';
import {
  errorStyle,
  writeErrorMessage,
} from '../../helpers';

const Error = (props) => {
  const {
    data,
    id,
    errorMessage,
    ErrorLabelComponent,
    validateOnClick,
    buttonClicked,
  } = props;

  if (validateOnClick) {
    return (
      data[id].invalid && buttonClicked && (
        <ErrorLabelComponent.type
          {...ErrorLabelComponent.props}
          style={errorStyle}
        >
          {errorMessage || writeErrorMessage(data[id].rules)}
        </ErrorLabelComponent.type>
      )
    );
  }

  return (
    data[id].invalid && data[id].touched && (
      <ErrorLabelComponent.type
        {...ErrorLabelComponent.props}
        style={errorStyle}
      >
        {errorMessage || writeErrorMessage(data[id].rules)}
      </ErrorLabelComponent.type>
    )
  );
};

Error.defaultProps = {};

Error.propTypes = {
  id: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  ErrorLabelComponent: PropTypes.element.isRequired,
  data: PropTypes.any, // eslint-disable-line
  validateOnClick: PropTypes.bool.isRequired,
  buttonClicked: PropTypes.bool.isRequired,
};

export { Error };
