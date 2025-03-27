// For Pages Router (pages/dashboard.js)
import { useAuth } from "../context/authContext";
import withAuth from "../hoc/withAuth";
import Logout from "../components/Logout";

function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Logout />
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">User Profile</h2>
        <div className="mb-2">
          <span className="font-medium">Email:</span> {user.email}
        </div>
        <div className="mb-2">
          <span className="font-medium">User ID:</span> {user.uid}
        </div>
      </div>

      {/* Add your dashboard content here */}
      <div className="bg-white shadow-md rounded-lg p-6 mt-6">
        <h2 className="text-xl font-semibold mb-4">My Content</h2>
        <p>
          Welcome to your dashboard. This is a protected page that only
          authenticated users can access.
        </p>
      </div>
    </div>
  );
}

export default withAuth(Dashboard);
