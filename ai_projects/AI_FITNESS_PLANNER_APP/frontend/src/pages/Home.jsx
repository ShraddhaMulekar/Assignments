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
      const res = await fetch(`${base_url}/generate-plan`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Failed to generate plan. Please try again.");
      }

      const data = await res.json();
      setPlan(data);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <header className="flex items-center justify-between px-6 py-4 md:px-10">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-rose-600 text-sm font-semibold shadow-lg shadow-rose-500/40">
            AI
          </span>
          <span className="text-sm font-medium text-slate-300">
            Fitness Planner
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs text-slate-400">
          <button
            type="button"
            className="inline-flex items-center gap-1 rounded-full bg-slate-800 px-3 py-1 hover:bg-slate-700"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>LangChain + Gemini AI</span>
          </button>
        </div>
      </header>

      <main className="px-4 pb-10 pt-4 md:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 md:mb-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              AI-Powered Fitness Planner
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-400 md:text-base">
              Generate personalized fitness and diet plans based on your health
              metrics using LangChain and Google Gemini AI.
            </p>
          </div>

          <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-xl shadow-black/40 md:p-8">
            <h3 className="mb-6 text-lg font-semibold text-slate-100 md:text-xl">
              Your Information
            </h3>

            <form
              onSubmit={handleSubmit}
              className="space-y-6 text-sm text-slate-200 md:text-base"
            >
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {/* Height */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="height"
                    className="block text-xs font-medium uppercase tracking-wide text-slate-400"
                  >
                    Height (meters)
                  </label>
                  <div className="flex items-center rounded-xl border border-slate-700 bg-slate-900/80">
                    <button
                      type="button"
                      onClick={() => adjustNumberField("height", -0.01)}
                      className="px-3 py-2 text-slate-300 hover:bg-slate-800"
                    >
                      -
                    </button>
                    <input
                      id="height"
                      name="height"
                      type="number"
                      step="0.01"
                      value={form.height}
                      onChange={handleChange}
                      className="h-10 w-full bg-transparent px-3 text-sm outline-none placeholder:text-slate-500"
                    />
                    <button
                      type="button"
                      onClick={() => adjustNumberField("height", 0.01)}
                      className="px-3 py-2 text-slate-300 hover:bg-slate-800"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Weight */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="weight"
                    className="block text-xs font-medium uppercase tracking-wide text-slate-400"
                  >
                    Weight (kg)
                  </label>
                  <div className="flex items-center rounded-xl border border-slate-700 bg-slate-900/80">
                    <button
                      type="button"
                      onClick={() => adjustNumberField("weight", -1)}
                      className="px-3 py-2 text-slate-300 hover:bg-slate-800"
                    >
                      -
                    </button>
                    <input
                      id="weight"
                      name="weight"
                      type="number"
                      step="0.1"
                      value={form.weight}
                      onChange={handleChange}
                      className="h-10 w-full bg-transparent px-3 text-sm outline-none placeholder:text-slate-500"
                    />
                    <button
                      type="button"
                      onClick={() => adjustNumberField("weight", 1)}
                      className="px-3 py-2 text-slate-300 hover:bg-slate-800"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Age */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="age"
                    className="block text-xs font-medium uppercase tracking-wide text-slate-400"
                  >
                    Age (years)
                  </label>
                  <div className="flex items-center rounded-xl border border-slate-700 bg-slate-900/80">
                    <button
                      type="button"
                      onClick={() => adjustNumberField("age", -1)}
                      className="px-3 py-2 text-slate-300 hover:bg-slate-800"
                    >
                      -
                    </button>
                    <input
                      id="age"
                      name="age"
                      type="number"
                      value={form.age}
                      onChange={handleChange}
                      className="h-10 w-full bg-transparent px-3 text-sm outline-none placeholder:text-slate-500"
                    />
                    <button
                      type="button"
                      onClick={() => adjustNumberField("age", 1)}
                      className="px-3 py-2 text-slate-300 hover:bg-slate-800"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Gender */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="gender"
                    className="block text-xs font-medium uppercase tracking-wide text-slate-400"
                  >
                    Gender
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={form.gender}
                    onChange={handleChange}
                    className="h-10 w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 text-sm text-slate-100 outline-none"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Weight Goal */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="weightGoal"
                    className="block text-xs font-medium uppercase tracking-wide text-slate-400"
                  >
                    Weight Goal
                  </label>
                  <select
                    id="weightGoal"
                    name="weightGoal"
                    value={form.weightGoal}
                    onChange={handleChange}
                    className="h-10 w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 text-sm text-slate-100 outline-none"
                  >
                    <option value="lose">Lose Weight</option>
                    <option value="gain">Gain Weight</option>
                    <option value="maintain">Maintain Weight</option>
                  </select>
                </div>

                {/* Activity Level */}
                <div className="space-y-1.5 md:col-span-2 lg:col-span-1">
                  <label
                    htmlFor="activityLevel"
                    className="block text-xs font-medium uppercase tracking-wide text-slate-400"
                  >
                    Activity Level
                  </label>
                  <select
                    id="activityLevel"
                    name="activityLevel"
                    value={form.activityLevel}
                    onChange={handleChange}
                    className="h-10 w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 text-sm text-slate-100 outline-none"
                  >
                    <option value="sedentary">
                      Sedentary (Little or no exercise)
                    </option>
                    <option value="lightly_active">
                      Lightly Active (light exercise 2-3 days/week)
                    </option>
                    <option value="moderately_active">
                      Moderately Active (3-5 days/week)
                    </option>
                    <option value="very_active">
                      Very Active (hard exercise 6-7 days/week)
                    </option>
                    <option value="extra_active">
                      Extra Active (very hard exercise, physical job)
                    </option>
                  </select>
                </div>
              </div>

              {/* Fitness Goal */}
              <div className="space-y-1.5">
                <label
                  htmlFor="fitnessGoal"
                  className="block text-xs font-medium uppercase tracking-wide text-slate-400"
                >
                  Fitness Goal
                </label>
                <input
                  id="fitnessGoal"
                  name="fitnessGoal"
                  type="text"
                  value={form.fitnessGoal}
                  onChange={handleChange}
                  placeholder="e.g., lose weight, build muscle, get fit"
                  className="h-11 w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 text-sm text-slate-100 outline-none placeholder:text-slate-500"
                />
              </div>

              {/* Submit + status */}
              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center rounded-xl bg-rose-600 px-6 py-2.5 text-sm font-semibold tracking-wide text-white shadow-lg shadow-rose-500/40 transition hover:bg-rose-500 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? "Generating Plan..." : "Generate My Fitness Plan"}
                </button>

                {error && (
                  <p className="text-xs text-rose-400 sm:text-sm">{error}</p>
                )}
              </div>
            </form>

            {plan && (
              <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900/90 p-4 text-sm text-slate-100">
                <h4 className="mb-2 text-sm font-semibold text-slate-200">
                  Your AI-Generated Plan
                </h4>
                <pre className="max-h-64 overflow-auto text-xs text-slate-300 md:text-sm">
                  {JSON.stringify(plan, null, 2)}
                </pre>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
