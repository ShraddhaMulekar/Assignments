import React, { useState } from "react";
import { base_url } from "../config/base_url";

const initialForm = {
  height: 1.75,
  weight: 70,
  age: 30,
  gender: "male",
  weightGoal: "lose",
  activityLevel: "sedentary",
  fitnessGoal: "",
};

const Home = () => {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [plan, setPlan] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const adjustNumberField = (field, delta) => {
    setForm((prev) => ({
      ...prev,
      [field]: Number(prev[field] || 0) + delta,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setPlan(null);
    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/generate-plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          height: Number(form.height),
          weight: Number(form.weight),
          age: Number(form.age),
          gender: form.gender,
          activity_level: form.activityLevel,
          goal: form.fitnessGoal,
        }),
      });

      const data = await res.json();
      console.log({data})
      setPlan(data.plan);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  {
    loading && <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 text-white">
      <main className="px-4 pb-16 pt-8 md:px-8">
        <div className="mx-auto max-w-5xl">
          {/* HEADER */}
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              AI Fitness Planner
            </h1>

            <p className="mt-3 text-slate-300">
              Generate personalized workout & diet plans using AI
            </p>
          </div>

          {/* CARD */}
          <section className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-8 shadow-2xl">
            <h3 className="mb-6 text-xl font-semibold text-indigo-300">
              Your Information
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {/* Height */}
                <div>
                  <label className="text-xs text-slate-400">
                    Height (meters)
                  </label>
                  <input
                    type="number"
                    name="height"
                    value={form.height}
                    onChange={handleChange}
                    step="0.01"
                    className="mt-1 w-full rounded-lg bg-slate-800 px-3 py-2 focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                {/* Weight */}
                <div>
                  <label className="text-xs text-slate-400">Weight (kg)</label>
                  <input
                    type="number"
                    name="weight"
                    value={form.weight}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg bg-slate-800 px-3 py-2 focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                {/* Age */}
                <div>
                  <label className="text-xs text-slate-400">Age</label>
                  <input
                    type="number"
                    name="age"
                    value={form.age}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg bg-slate-800 px-3 py-2 focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                {/* Gender */}
                <div>
                  <label className="text-xs text-slate-400">Gender</label>
                  <select
                    name="gender"
                    value={form.gender}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg bg-slate-800 px-3 py-2"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                {/* Weight Goal */}
                <div>
                  <label className="text-xs text-slate-400">Weight Goal</label>
                  <select
                    name="weightGoal"
                    value={form.weightGoal}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg bg-slate-800 px-3 py-2"
                  >
                    <option value="lose">Lose Weight</option>
                    <option value="gain">Gain Weight</option>
                    <option value="maintain">Maintain</option>
                  </select>
                </div>

                {/* Activity */}
                <div>
                  <label className="text-xs text-slate-400">
                    Activity Level
                  </label>
                  <select
                    name="activityLevel"
                    value={form.activityLevel}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg bg-slate-800 px-3 py-2"
                  >
                    <option value="sedentary">Sedentary</option>
                    <option value="lightly_active">Lightly Active</option>
                    <option value="moderately_active">Moderate</option>
                    <option value="very_active">Very Active</option>
                  </select>
                </div>
              </div>

              {/* Fitness Goal */}
              <div>
                <label className="text-xs text-slate-400">Fitness Goal</label>
                <input
                  type="text"
                  name="fitnessGoal"
                  value={form.fitnessGoal}
                  onChange={handleChange}
                  placeholder="lose weight, build muscle..."
                  className="mt-1 w-full rounded-lg bg-slate-800 px-3 py-2 focus:ring-2 focus:ring-pink-500"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 py-3 font-semibold shadow-lg transition hover:scale-105"
              >
                {loading ? "Generating AI Plan..." : "Generate My Fitness Plan"}
              </button>
            </form>

            {/* RESPONSE */}
            {plan && (
              <div className="max-w-6xl mx-auto mt-10">
                {/* SUCCESS */}
                <div className="bg-green-900 text-green-300 p-3 rounded mb-6">
                  Your personalized fitness plan is ready!
                </div>

                {/* HEALTH METRICS */}
                <h2 className="text-3xl font-bold mb-4">Health Metrics</h2>

                <div className="bg-gray-900 border border-blue-500 p-5 rounded mb-10">
                  <h3 className="text-blue-400 text-xl mb-2">
                    Your Health Analysis
                  </h3>

                  <p className="text-gray-300">{plan}</p>
                </div>

                {/* 7 DAY PLANS */}
                <h2 className="text-3xl font-bold mb-6">Your 7-Day Plans</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* WORKOUT PLAN */}
                  <div className="bg-gray-900 border border-green-500 p-5 rounded-lg max-h-[500px] overflow-y-scroll">
                    <h3 className="text-green-400 text-xl font-semibold mb-4">
                      Workout Plan
                    </h3>

                    <p className="text-gray-300 whitespace-pre-line">{plan}</p>
                  </div>

                  {/* DIET PLAN */}
                  <div className="bg-gray-900 border border-red-500 p-5 rounded-lg max-h-[500px] overflow-y-scroll">
                    <h3 className="text-red-400 text-xl font-semibold mb-4">
                      Diet Plan
                    </h3>

                    <p className="text-gray-300 whitespace-pre-line">{plan}</p>
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
