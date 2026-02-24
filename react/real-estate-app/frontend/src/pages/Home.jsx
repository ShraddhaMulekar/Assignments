import SectionTitle from "../components/SectionTitle";
import HelpCard from "../components/HelpCard";
import CTA from "../components/CTA";
import { Home, KeyRound, MessageCircleQuestion } from "lucide-react";

const HomePage = () => {

  const openChat = () => {
    console.log("FAQ Chat will open later");
  };

  return (
    <div className="space-y-24">

      {/* HERO */}
      <section className="relative h-[80vh] flex items-center justify-center text-center">
        <img
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Find Your Dream Home
          </h1>
          <p className="mt-4 text-lg opacity-90">
            Buy, Sell or Ask anything — we make real estate simple.
          </p>

          <button
            onClick={openChat}
            className="mt-8 bg-white text-black px-8 py-3 rounded-xl font-semibold"
          >
            Ask Our Assistant
          </button>
        </div>
      </section>

      {/* HOW WE HELP */}
      <section className="px-6 max-w-7xl mx-auto">
        <SectionTitle
          title="How We Can Help"
          subtitle="Everything you need for your real estate journey."
        />

        <div className="grid md:grid-cols-3 gap-8">
          <HelpCard
            title="Buy a Home"
            description="Explore properties and find the perfect home."
            icon={Home}
            image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          />

          <HelpCard
            title="Sell a Home"
            description="List your property and reach buyers faster."
            icon={KeyRound}
            image="https://images.unsplash.com/photo-1582407947304-fd86f028f716"
          />

          <HelpCard
            title="FAQ Assistant"
            description="Ask questions instantly with our AI assistant."
            icon={MessageCircleQuestion}
            image="https://images.unsplash.com/photo-1521791136064-7986c2920216"
            onClick={openChat}
          />
        </div>
      </section>

      {/* CTA */}
      <div className="px-6 max-w-6xl mx-auto">
        <CTA
          title="Ready to Start?"
          description="Chat with our assistant and take the first step today."
          buttonText="Open Chat"
          onClick={openChat}
        />
      </div>

    </div>
  );
};

export default HomePage;