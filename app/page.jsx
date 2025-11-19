import Navigation from "@/components/navigator/Navigation";
import FooterNavigation from "@/components/navigator/FooterNavigation";
import HomeSlider from "@/components/home/HomeSlider";
import TrendingProducts from "@/components/home/TrendingProducts";

export default function Home() {
  return (
    <main>
      <Navigation />
      <HomeSlider />
      <TrendingProducts />
      <FooterNavigation />
    </main>
  );
}
