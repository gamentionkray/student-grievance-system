import { Container } from "react-bootstrap";
import Layout from "../../components/layout/Layout";
import Dashboard from "../../components/Dashboard/Dashboard";

const DashboardPage = () => {
  return (
    <Layout banner="Student Dashboard">
      <Dashboard />
    </Layout>
  );
};

export default DashboardPage;
