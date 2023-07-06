
import { useForm } from "react-cool-form";

import "../styles/Regform.scss";

const Field = ({ label, id, error, ...rest }) => (
  <div className="form-div">
    <label htmlFor={id}>{label}</label>
    <input id={id} {...rest} />
    {error && <p>{error}</p>}
  </div>
);

const Form=()=> {
  const { form, use } = useForm({
    // (Strongly advise) Provide the default values just like we use React state
    defaultValues: { username: "", email: "", password: "" },
    // The event only triggered when the form is valid
    onSubmit: (values) => alert(JSON.stringify(values, undefined, 2))
  });
  // We can enable the "errorWithTouched" option to filter the error of an un-blurred field
  // Which helps the user focus on typing without being annoyed by the error message
  const errors = use("errors", { errorWithTouched: true });

  return (
    <form className="reg-form" ref={form} noValidate>
      <Field
        label="Username"
        id="username"
        name="username"
        // Support built-in validation
        required
        error={errors.username}
      />
      <Field
        label="Email"
        id="email"
        name="email"
        type="email"
        required
        error={errors.email}
      />
      <Field
        label="Password"
        id="password"
        name="password"
        type="password"
        required
        minLength={8}
        error={errors.password}
      />
      <input className="fsubmit" type="submit" />
    </form>
  );
}

export default Form;
