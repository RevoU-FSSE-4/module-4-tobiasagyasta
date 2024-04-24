import { Formik, Form, Field } from "formik";
import SingleInput from "./components/SingleInput";
import { useEffect, useState } from "react";

export const SignIn = () => {
  const [data, setData] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch!");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values, actions) => {
          // setFormData(values);
          alert(`You have submitted! \n` + JSON.stringify(values, null, 2));
          alert(JSON.stringify(data));
          actions.setSubmitting(false);
          actions.resetForm({ isValidating: true });
        }}
      >
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <Form>
              <Field
                as={SingleInput}
                type="email"
                name="email"
                placeholder="email"
              ></Field>
              <Field
                as={SingleInput}
                type="password"
                name="password"
                placeholder="password"
              ></Field>
              <button type="submit">Submit</button>
            </Form>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            {data !== null ? data.title : null}
          </div>
        </div>
      </Formik>
    </>
  );
};

export default SignIn;
