import CTA from "../components/CTA";
import { Link } from "react-router-dom";

const Services = () => {

  const openChat = () => {
    console.log("Chat widget coming later");
  };

  return (
    <div className="px-6 max-w-6xl mx-auto py-20 space-y-20">

      <h1 className="text-4xl font-bold text-center">
        Our Services
      </h1>

      {/* BUY */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Buying a Home
        </h2>

        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Property discovery</li>
          <li>Market insights</li>
          <li>Guided property tours</li>
          <li>Negotiation assistance</li>
        </ul>

        <Link
          to="/contact"
          className="inline-block mt-4 text-blue-600 font-medium"
        >
          Contact Us →
        </Link>
      </section>

      {/* SELL */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Selling Your Home
        </h2>

        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Property valuation</li>
          <li>Professional listings</li>
          <li>Buyer matching</li>
          <li>Closing support</li>
        </ul>

        <Link
          to="/contact"
          className="inline-block mt-4 text-blue-600 font-medium"
        >
          Contact Us →
        </Link>
      </section>

      <CTA
        title="Need Help Choosing?"
        description="Talk to our assistant instantly."
        buttonText="Chat Now"
        onClick={openChat}
      />

    </div>
  );
};

export default Services;