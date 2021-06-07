import React from 'react';
import PropTypes from 'prop-types';
import { Context } from '../Context';

const Button = (props) => {
  const {
    id,
    type,
    rfpRole,
    field,
    onClick,
    fieldId,
    onMouseEnter,
    onMouseLeave,
    children,
    ...rest
  } = props;

  return (
    <Context.Consumer>
      {(state) => {
        const {
          formValid,
          validate,
          validateOnClick,
          ButtonComponent,
          addField,
          removeField,
          setButtonClicked,
        } = state;

        return (
          <ButtonComponent.type
            {...ButtonComponent.props}
            {...rest}
            id={id}
            type={type}
            onClick={(e) => {
              e.preventDefault();

              if (validate && validateOnClick && !formValid) {
                setButtonClicked();
              }

              if (rfpRole === 'addField') {
                addField(field);
                if (onClick) {
                  onClick();
                }
              }
              if (rfpRole === 'removeField') {
                if (onClick) {
                  onClick();
                }
                removeField(fieldId);
              }
            }}
            disabled={validate && !rfpRole && !validateOnClick ? !formValid : false}
          >
            {children}
          </ButtonComponent.type>
        );
      }}
    </Context.Consumer>
  );
};

Button.displayName = 'Button';

Button.defaultProps = {
  rfpRole: undefined,
  field: undefined,
  onClick: undefined,
  fieldId: undefined,
  onMouseEnter: undefined,
  onMouseLeave: undefined,
};

Button.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  rfpRole: PropTypes.string,
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
  onClick: PropTypes.func,
  fieldId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  children: PropTypes.any, 
};


export { Button };
