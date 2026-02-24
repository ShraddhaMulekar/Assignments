import { ArrowRight } from "lucide-react";

const HelpCard = ({ title, description, icon: Icon, image, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-lg"
    >
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="h-72 w-full object-cover group-hover:scale-110 transition duration-500"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 p-6 text-white">
        <Icon className="mb-3" size={32} />
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm opacity-90 mt-2">{description}</p>

        <div className="flex items-center gap-2 mt-4 text-sm font-medium">
          Learn More <ArrowRight size={16} />
        </div>
      </div>
    </div>
  );
};

export default HelpCard;