import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: ""
    },

    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string().min(6, "Min 6 chars").required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Required")
    }),

    onSubmit: () => navigate("/home")
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-md w-80"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>

        <input
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          className="w-full p-2 mb-2 border rounded"
        />
        {formik.errors.email && (
          <p className="text-red-500 text-sm">{formik.errors.email}</p>
        )}

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={formik.handleChange}
          className="w-full p-2 mt-2 mb-2 border rounded"
        />
        {formik.errors.password && (
          <p className="text-red-500 text-sm">{formik.errors.password}</p>
        )}

        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          onChange={formik.handleChange}
          className="w-full p-2 mt-2 mb-2 border rounded"
        />
        {formik.errors.confirmPassword && (
          <p className="text-red-500 text-sm">
            {formik.errors.confirmPassword}
          </p>
        )}

        <button className="w-full bg-green-500 text-white p-2 rounded mt-3 hover:bg-green-600">
          Signup
        </button>

        <p className="text-sm mt-3 text-center">
          Already have an account?{" "}
          <Link to="/" className="text-blue-500">Login</Link>
        </p>
      </form>
    </div>
  );
}