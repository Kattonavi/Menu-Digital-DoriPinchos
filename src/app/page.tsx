import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import DeliveryInfo from "@/components/DeliveryInfo";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Hero />
      <MenuSection />
      <DeliveryInfo />
      <Footer />
      <WhatsappButton />
    </main>
  );
}
