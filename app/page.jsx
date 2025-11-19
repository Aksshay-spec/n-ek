import Navigation from "@/components/navigator/Navigation";
import FooterNavigation from "@/components/navigator/FooterNavigation";
import HomeSlider from "@/components/home/HomeSlider";
import TrendingProducts from "@/components/home/TrendingProducts";
import SkuSection from "@/components/home/SkuSection";
import AboutSection from "@/components/home/AboutSection";
import AboutListings from "@/components/home/AboutListings";

export default function Home() {
  return (
    <main>
      <Navigation />
      <HomeSlider />
      <TrendingProducts />
      <SkuSection />
      <AboutSection />
      <AboutListings />
      <FooterNavigation />
    </main>
  );
}
