import { Formik, Form, Field } from "formik";

export const SignIn = () => {
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => alert(values)}
      ></Formik>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Form>
            <Field type="email" name="email" placeholder="email">
              <input type="email">Insert email here.</input>
            </Field>
            <Field
              type="password"
              name="password"
              placeholder="password"
            ></Field>
          </Form>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"></div>
      </div>
    </>
  );
};

export default SignIn;
