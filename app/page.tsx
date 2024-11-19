import GlowingMovingLines from "@/components/Lines/lines";
import { Hero, PortfolioHeader, Footer } from "@/components/index"
export default function Home() {
  return (

    <div className="bg-black">
      <GlowingMovingLines>
        <PortfolioHeader />
        <Hero />
        <Footer/>
      </GlowingMovingLines>

    </div>
  );
}
