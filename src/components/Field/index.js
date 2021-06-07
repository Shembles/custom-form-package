import React from 'react';
import PropTypes from 'prop-types';
import { Error } from '../Error';
import { Context } from '../Context';

const Field = (props) => {
  const {
    id,
    type,
    rows,
    cols,
    onFocus,
    onBlur,
    dynamic,
    field,
    bindTo,
    bindToAlways,
    bindToCallback,
    preOnChange,
    onChange,
    errorMessage,
    children,
    sameAs,
    validate,
    ...rest
  } = props;

  return (
    <Context.Consumer>
      {(state) => {
        const {
          data,
          InputComponent,
          CheckboxComponent,
          TextareaComponent,
          ErrorLabelComponent,
          handleOnFocus,
          handleOnChange,
          handleOnBlur,
          validateOnClick,
          buttonClicked,
        } = state;
        let MyInputComponent;

        if (!isDataValid(data, props)) {
          return null;
        }

        if (data[id].rules.type === 'checkbox') {
          MyInputComponent = CheckboxComponent;
        } else if (data[id].rules.type === 'textarea') {
          MyInputComponent = TextareaComponent;
        } else {
          MyInputComponent = InputComponent;
        }

        return (
          <>
            <MyInputComponent.type
              {...MyInputComponent.props}
              {...rest}
              id={id}
              type={type}
              checked={data[id].checked}
              value={data[id].value}
              rows={rows}
              cols={cols}
              onFocus={(e) => handleOnFocus(e, onFocus)}
              onBlur={(e) => handleOnBlur(e, onBlur)}
              onChange={(e) => handleOnChange(
                e,
                data[id].rules,
                {
                  dynamic,
                  field,
                  bindTo,
                  bindToAlways,
                  bindToCallback,
                  preOnChange,
                },
                onChange,
              )}
            />
            <Error
              data={data}
              id={id}
              errorMessage={errorMessage}
              ErrorLabelComponent={ErrorLabelComponent}
              validateOnClick={validateOnClick}
              buttonClicked={buttonClicked}
            />
          </>
        );
      }}
    </Context.Consumer>
  );
};

Field.displayName = 'Field';

Field.defaultProps = {
  rows: undefined,
  cols: undefined,
  onFocus: undefined,
  onBlur: undefined,
  validate: undefined,
  dynamic: false,
  field: undefined,
  bindTo: undefined,
  bindToAlways: false,
  bindToCallback: undefined,
  preOnChange: undefined,
  onChange: undefined,
  sameAs: undefined,
  errorMessage: '',
};

Field.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  rows: PropTypes.string,
  cols: PropTypes.string,
  sameAs: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  validate: PropTypes.func,
  dynamic: PropTypes.bool,
  field: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
    })),
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
    }),
  ]),
  bindTo: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  bindToAlways: PropTypes.bool,
  bindToCallback: PropTypes.func,
  preOnChange: PropTypes.func,
  onChange: PropTypes.func,
  errorMessage: PropTypes.string,
  children: PropTypes.any, // eslint-disable-line
};

export { Field };
import React from 'react';
import PropTypes from 'prop-types';
import { Error } from '../Error';
import { Context } from '../Context';

const Field = (props) => {
  const {
    id,
    type,
    rows,
    cols,
    onFocus,
    onBlur,
    dynamic,
    field,
    bindTo,
    bindToAlways,
    bindToCallback,
    preOnChange,
    onChange,
    errorMessage,
    children,
    sameAs,
    validate,
    ...rest
  } = props;

  return (
    <Context.Consumer>
      {(state) => {
        const {
          data,
          InputComponent,
          CheckboxComponent,
          TextareaComponent,
          ErrorLabelComponent,
          handleOnFocus,
          handleOnChange,
          handleOnBlur,
          validateOnClick,
          buttonClicked,
        } = state;
        let MyInputComponent;

        if (!isDataValid(data, props)) {
          return null;
        }

        if (data[id].rules.type === 'checkbox') {
          MyInputComponent = CheckboxComponent;
        } else if (data[id].rules.type === 'textarea') {
          MyInputComponent = TextareaComponent;
        } else {
          MyInputComponent = InputComponent;
        }

        return (
          <>
            <MyInputComponent.type
              {...MyInputComponent.props}
              {...rest}
              id={id}
              type={type}
              checked={data[id].checked}
              value={data[id].value}
              rows={rows}
              cols={cols}
              onFocus={(e) => handleOnFocus(e, onFocus)}
              onBlur={(e) => handleOnBlur(e, onBlur)}
              onChange={(e) => handleOnChange(
                e,
                data[id].rules,
                {
                  dynamic,
                  field,
                  bindTo,
                  bindToAlways,
                  bindToCallback,
                  preOnChange,
                },
                onChange,
              )}
            />
            <Error
              data={data}
              id={id}
              errorMessage={errorMessage}
              ErrorLabelComponent={ErrorLabelComponent}
              validateOnClick={validateOnClick}
              buttonClicked={buttonClicked}
            />
          </>
        );
      }}
    </Context.Consumer>
  );
};

Field.displayName = 'Field';

Field.defaultProps = {
  rows: undefined,
  cols: undefined,
  onFocus: undefined,
  onBlur: undefined,
  validate: undefined,
  dynamic: false,
  field: undefined,
  bindTo: undefined,
  bindToAlways: false,
  bindToCallback: undefined,
  preOnChange: undefined,
  onChange: undefined,
  sameAs: undefined,
  errorMessage: '',
};

Field.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  rows: PropTypes.string,
  cols: PropTypes.string,
  sameAs: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  validate: PropTypes.func,
  dynamic: PropTypes.bool,
  field: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
    })),
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
    }),
  ]),
  bindTo: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  bindToAlways: PropTypes.bool,
  bindToCallback: PropTypes.func,
  preOnChange: PropTypes.func,
  onChange: PropTypes.func,
  errorMessage: PropTypes.string,
  children: PropTypes.any, // eslint-disable-line
};

export { Field };
