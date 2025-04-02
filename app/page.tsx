import NavBar from "@/components/common/navbar";
import CallToAction from "@/components/landing-page/call-to-action";
import FeaturedArticles from "@/components/landing-page/featured-articles";
import NewBuildHomes from "@/components/landing-page/new-build-homes";
import SuccessStories from "@/components/landing-page/success-stories";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <CallToAction />

        {/* Featured Articles Section */}
        <FeaturedArticles />

        {/* New Build Homes Section */}
        <NewBuildHomes />

        {/* Success Stories Section */}
        <SuccessStories />
      </main>
    </div>
  );
}
