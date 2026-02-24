import SectionTitle from "../components/SectionTitle";
import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <div className="px-6 max-w-5xl mx-auto py-20 space-y-20">

      <SectionTitle title="About Us" />

      {/* STORY */}
      <div className="text-gray-700 space-y-4">
        <p>
          Our journey started with a simple goal — make real estate
          transparent, simple, and accessible for everyone.
        </p>
        <p>
          We combine technology with human understanding to help buyers
          and sellers make confident decisions.
        </p>
      </div>

      {/* VALUES */}
      <div>
        <h3 className="text-2xl font-semibold mb-6">Our Values</h3>
        <ul className="space-y-4">
          {[
            "Transparency in every deal",
            "Customer-first mindset",
            "Innovation with simplicity",
            "Trust & long-term relationships",
          ].map((value, i) => (
            <li key={i} className="flex gap-3">
              <CheckCircle className="text-green-500" />
              {value}
            </li>
          ))}
        </ul>
      </div>

      {/* WHY CHOOSE US */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">
          Why Choose Us
        </h3>
        <p className="text-gray-600">
          Smart tools, expert support, and an AI-powered assistant help
          you navigate property decisions easily.
        </p>
      </div>

    </div>
  );
};

export default About;