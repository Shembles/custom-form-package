import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  constructor(props) {
    super(props);

    const {
      validate,
      validateOnClick,
      form,
      input,
      button,
      error,
    } = this.props;

    this.state = {
      FormComponent: form,
      InputComponent: input,
      ButtonComponent: button,
      ErrorLabelComponent: error,
      data: {},
      validate,
      validateOnClick,
      formValid: false,
      buttonClicked: false,
    };

    this.handleOnFocus = this.handleOnFocus.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.setInitialState = this.setInitialState.bind(this);
    this.updateState = this.updateState.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.addField = this.addField.bind(this);
    this.removeField = this.removeField.bind(this);
    this.setButtonClicked = this.setButtonClicked.bind(this);
  }

  componentDidMount() {
    this.updateState();
  }


  setButtonClicked() {
    this.setState({
      buttonClicked: true,
    });
  }



  addField(fields) {
    const { data } = this.state;

    let fieldsArr;
    let newFields = {};

    if (!Array.isArray(fields)) {
      fieldsArr = [fields];
    } else {
      fieldsArr = fields;
    }

    fieldsArr.forEach((field) => {
      newFields = {
        ...newFields,
        [field.id]: {
          ...initialState(field, data),
        },
      };
    });

    this.setState({
      data: {
        ...data,
        ...newFields,
      },
    }, () => this.validateForm());
  }

  removeField(fieldIds) {
    const { data } = this.state;

    let fieldIdsArr;
    let newFields = {};

    if (!Array.isArray(fieldIds)) {
      fieldIdsArr = [fieldIds];
    } else {
      fieldIdsArr = fieldIds;
    }

    Object.keys((data)).forEach((d) => {
      if (!fieldIdsArr.includes(d)) {
        newFields = {
          ...newFields,
          [d]: data[d],
        };
      }
    });

    this.setState({
      data: newFields,
    }, () => this.validateForm());
  }

  updateState() {
    const { children } = this.props;
    const flatChilds = getNestedChilds(children, []);

    this.setInitialState(flatChilds);
  }

  validateForm(cb) {
    const { data } = this.state;
    const allFieldValidations = [];
    let newData = {
      ...data,
    };

    Object.keys(data).forEach((key) => {
      let oneValid = false;

      if (data[key].rules.sameAs) {
        oneValid = checkFormInput(data[key].rules, data[key].value, data);
        newData = {
          ...newData,
          [key]: {
            ...data[key],
            valid: oneValid,
            invalid: !oneValid,
          },
        };
      } else {
        oneValid = data[key].valid;
      }

      allFieldValidations.push(oneValid);
    });

    const allFieldsValid = allFieldValidations.every((val) => val);

    return (
      <Context.Provider value={{
        FormComponent,
        InputComponent,
        ButtonComponent,
        SelectComponent,
        CheckboxComponent,
        RadioGroupComponent,
        RadioGroupContainerComponent,
        TextareaComponent,
        ErrorLabelComponent,
        data,
        validate,
        validateOnClick,
        formValid,
        buttonClicked,
        handleOnFocus: this.handleOnFocus,
        handleOnChange: this.handleOnChange,
        handleOnBlur: this.handleOnBlur,
        addField: this.addField,
        removeField: this.removeField,
        setButtonClicked: this.setButtonClicked,
      }}
      >
        <FormComponent.type
          {...FormComponent.props}
          encType={encType}
        >
          {children}
        </FormComponent.type>
      </Context.Provider>
    );
  }
}
