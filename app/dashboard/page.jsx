// pages/dashboard.js
import withAuth from "../hoc/withAuth";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>This is a protected page.</p>
      {/* Your dashboard content here */}
    </div>
  );
}

export default withAuth(Dashboard);
