import { useState, useEffect } from "react";
const useFormStaff = (callback, validate) => {
  const [staff, setStaff] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
    birthday: new Date(),
    sex: "",
    email: "",
    fullname: "",
  });

  const [errors, setErrors] = useState({});
  useEffect(() => {
    console.log(errors);

    //Validate Success
    if (isSubmitting && Object.keys(errors).length === 0) {
      callback();
    }
  }, [errors]);
  const [isSubmitting, setIsSubmiting] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setStaff((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleChangeBirthday = (birthday) => {
    setStaff((prev) => {
      return { ...prev, birthday: birthday };
    });
  };
  const handleSubmit = (e) => {
    //check program whether have error or not, if have error then setError
    //if no error then submit form
    e.preventDefault();
    setIsSubmiting(true);
    //validate(values)
    setErrors(validate(staff));
  };

  return { handleChange, handleChangeBirthday, handleSubmit, staff, errors };
};
export default useFormStaff;
