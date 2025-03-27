// hoc/withAuth.js
import { useEffect } from "react";
import { useRouter } from "next/router"; // Use 'next/navigation' for App Router
import { useAuth } from "../context/authContext";

export default function withAuth(Component) {
  return function ProtectedRoute(props) {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!loading && !user) {
        router.push("/login");
      }
    }, [user, loading, router]);

    // Show loading or null when the auth state is still being checked
    if (loading || !user) {
      return <div>Loading...</div>;
    }

    // If auth is complete and we have a user, render the component
    return <Component {...props} />;
  };
}
