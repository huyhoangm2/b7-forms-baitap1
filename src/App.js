import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  to: "",
  subject: "",
  message: "",
  attachment: null,
};

const validationSchema = Yup.object({
  to: Yup.string().email("Địa chỉ email không hợp lệ").required("Không được để trống"),
  subject: Yup.string().required("Không được để trống"),
  message: Yup.string().required("Không được để trống"),
});

const onSubmit = (values, { setSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
};

const EmailForm = () => {
  return (
    <div>
      <h1>Soạn thảo email</h1>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ isSubmitting, setFieldValue }) => (
          <Form>
            <div>
              <label htmlFor="to">Người nhận:</label>
              <Field type="email" name="to" id="to" />
              <ErrorMessage name="to" component="div" className="error-message" />
            </div>
            <div>
              <label htmlFor="subject">Chủ đề:</label>
              <Field type="text" name="subject" id="subject" />
              <ErrorMessage name="subject" component="div" className="error-message" />
            </div>
            <div>
              <label htmlFor="message">Nội dung:</label>
              <Field as="textarea" name="message" id="message" />
              <ErrorMessage name="message" component="div" className="error-message" />
            </div>
            <div>
              <label htmlFor="attachment">Upload file:</label>
              <input type="file" name="attachment" id="attachment" onChange={(event) => setFieldValue("attachment", event.target.files[0])} />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Gửi
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EmailForm;
