import BusinessDescription from "@/components/business-description";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col min-h-screen max-w-screen-xl mx-auto blended-background">
      <Header />
      <div className="flex flex-col my-[133px] items-center justify-center">
        <BusinessDescription />
      </div>
      <Footer />
    </div>
  );
}
