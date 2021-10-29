import React, { Component } from 'react';
import Modal from 'react-modal';
import _ from 'lodash';
import Input from "./form/Input";
import memoizeOne from "memoize-one";
import Validator from "../helpers/Validator";

class TicketForm extends Component {
  setFormValues = memoizeOne((fullName, phone) => {
    this.setState({ formData: { fullName, phone, about: ['Hello'] } })
  })

  constructor(props) {
    super(props);
    this.state = {

      className1: '',
      className2: '',
      errors: {},
      formData: {
        fullName: '',
        phone: '',
        about: [
          'Hello'
        ]
      },
    }
  }


  handleNameChange = (ev) => {
    const value = ev.target.value;
    this.setState({ fullName: value, className1: '' })
  }

  handlePhoneChange = (ev) => {
    const value = ev.target.value;
    this.setState({ phone: value, className2: '' })
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { formData } = this.state;
    const { row, set } = this.props;
    const errors = {}
    if (!Validator.nameCheck(formData.fullName)) {
      errors.fullName = 'Invalid first name'
    }

    if (!formData.phone) {
      errors.phone = 'phone is required'
    } else if (!Validator.phoneCheck(formData.phone)) {
      errors.phone = 'Invalid phone'
    }

    if (_.isEmpty(errors)) {
      this.props.onSubmit({
        fullName: formData.fullName, phone: formData.phone, row, set
      })
    }
    this.setState({ errors })

  }

  handleChange = (path, value) => {
    const { formData, errors } = this.state;
    _.set(formData, path, value);
    _.remove(formData, path);
    this.setState({ formData, errors });
  }


  render() {
    let { fullName, phone, className1, className2, errors, formData } = this.state;
    const { row, set } = this.props;
    fullName = fullName ? fullName : '';
    phone = phone ? phone : '';
    this.setFormValues(this.props.fullName, this.props.phone);
    console.log(formData)
    return (
      <Modal
        isOpen={_.isNumber(row) && _.isNumber(set)}
        onRequestClose={this.props.onClose}
        className="ticketForm"
        overlayClassName="ticketFormOverlay"
      >
        <form onSubmit={this.handleSubmit}>
          <Input label="Row" value={row} disabled />
          <Input label="Set" value={set} disabled />
          <Input
            label="Full Name"
            onChange={(ev) => this.handleChange('fullName', ev.target.value)}
            value={formData.fullName || ''}
            error={errors.fullName}
          />
          <Input
            label="Phone"
            onChange={(ev) => this.handleChange('phone', ev.target.value)}
            value={formData.phone || ''}
            className={className2}
            error={errors.phone}
          />
          <Input
            label="About"
            onChange={(ev) => this.handleChange('about[0]', ev.target.value)}
            value={formData.about[0]}
            error={errors.about}
          />
          <div className="buttonWrapper">
            {this.props.fullName === '' && this.props.phone === '' ? (
              <button>Save</button>
            ) : (
              <>
                <button type="submit">Update</button>
                <button type="button" onClick={() => {
                  this.props.onDelete(row, set)
                }}>Delete
                </button>
              </>
            )}
          </div>
        </form>
      </Modal>
    );
  }
}

export default TicketForm;

