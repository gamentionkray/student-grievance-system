import RegisterAndProfile from "../../components/common/RegisterAndProfile";
import Layout from "../../components/layout/Layout";

const RegisterPage = () => {
  return (
    <Layout pageTitle="Student Registration" banner="Student Registration">
      <RegisterAndProfile type="register" />
    </Layout>
  );
};

export default RegisterPage;
