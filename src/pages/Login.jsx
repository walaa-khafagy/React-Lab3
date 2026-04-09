import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { email: "", password: "" },

    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string().min(6, "Min 6 chars").required("Required")
    }),

    onSubmit: () => navigate("/home")
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-md w-80"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="w-full p-2 mb-2 border rounded"
        />
        {formik.errors.email && (
          <p className="text-red-500 text-sm">{formik.errors.email}</p>
        )}

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
          className="w-full p-2 mt-2 mb-2 border rounded"
        />
        {formik.errors.password && (
          <p className="text-red-500 text-sm">{formik.errors.password}</p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded mt-3 hover:bg-blue-600"
        >
          Login
        </button>

        <p className="text-sm mt-3 text-center">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-500">Signup</Link>
        </p>
      </form>
    </div>
  );
}