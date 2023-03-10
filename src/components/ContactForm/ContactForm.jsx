import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import 'yup-phone';
import PropTypes from 'prop-types';
import {
  ContactFormWrap,
  ContactFormButton,
  ContactInput,
  ContactText,
  Error,
} from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup
    .string()
    .required()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  number: yup.string().phone('UA').required(),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <ContactFormWrap autoComplete="off">
        <ContactText htmlFor="name">
          Name
          <ContactInput type="text" name="name" />
          <Error name="name" component="div" />
        </ContactText>
        <ContactText htmlFor="number">
          Number
          <ContactInput type="tel" name="number" placeholder="+380XXXXXXXXX"/>
          <Error name="number" component="div" />
        </ContactText>
        <ContactFormButton type="submit">Add contact</ContactFormButton>
      </ContactFormWrap>
    </Formik>
  );
};
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default ContactForm;

// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = event => {
//     const { name, value } = event.currentTarget;
//     this.setState({
//       [name]: value,
//     });
//   };

// handleSubmit = event => {
//   event.preventDefault();
//   this.props.onSubmit(this.state);
//   this.reset();
// };

//   reset = () => {
//     this.setState({
//       name: '',
//       number: '',
//     });
//   };

//   render() {
//     const { name, number } = this.state;
//     const handleSubmit = (values, actions) => {
//       console.log(values);
//       console
//     };

//     return (
//       <Formik initialValues={initialValues} onSubmit={this.handleSubmit}>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Name
//             <input
//               type="text"
//               name="name"
//               value={name}
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//               onChange={this.handleChange}
//             />
//           </label>
//           <label>
//             Phone:
//             <input
//               type="tel"
//               name="number"
//               value={number}
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//               onChange={this.handleChange}
//             />
//           </label>
//           <button type="submit">Add contact</button>
//         </form>
//       </Formik>
//     );
//   }
// }
