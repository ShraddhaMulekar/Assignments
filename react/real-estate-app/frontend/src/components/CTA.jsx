const CTA = ({ title, description, buttonText, onClick }) => {
  return (
    <section className="bg-gray-900 text-white py-16 rounded-3xl text-center px-6">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="mt-4 text-gray-300">{description}</p>

      <button
        onClick={onClick}
        className="mt-6 bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
      >
        {buttonText}
      </button>
    </section>
  );
};

export default CTA;