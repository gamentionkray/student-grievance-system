import Layout from "../../components/layout/Layout";
import RegisterAndProfile from "../../components/common/RegisterAndProfile";

const Profile = () => {
  return (
    <Layout banner="Student Profile">
      <RegisterAndProfile type="profile" />
    </Layout>
  );
};

export default Profile;
