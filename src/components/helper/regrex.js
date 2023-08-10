// Validation
const Validation = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Name is required";
  } else if (/^[A-Za-z. ]{3,30} $/.test(values.name)) {
  }
};


export default Validation;
