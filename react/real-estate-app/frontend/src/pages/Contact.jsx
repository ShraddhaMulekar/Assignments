import { useState } from "react";

const Contact = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    alert("Message sent!");
  };

  return (
    <div className="px-6 max-w-4xl mx-auto py-20">

      <h1 className="text-4xl font-bold text-center mb-12">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-12">

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" placeholder="Name"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg" />

          <input name="email" placeholder="Email"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg" />

          <input name="subject" placeholder="Subject"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg" />

          <textarea name="message" placeholder="Message"
            rows="5"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg" />

          <button className="bg-black text-white px-6 py-3 rounded-lg">
            Send Message
          </button>
        </form>

        {/* OFFICE INFO */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Office</h3>
          <p>123 Business Street</p>
          <p>Bangalore, India</p>
          <p>Email: contact@yourcompany.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>

      </div>
    </div>
  );
};

export default Contact;