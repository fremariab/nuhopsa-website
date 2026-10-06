"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faHeart,
  faLock,
  faSchool,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

const presets = [50, 100, 250, 500, 1000];

const funds = [
  {
    id: "scholarship",
    icon: faGraduationCap,
    title: "Scholarship Fund",
    description:
      "Directly fund bursaries for deserving Holy Child students who need financial support to complete their education.",
  },
  {
    id: "general",
    icon: faSchool,
    title: "General NUHOPSA Fund",
    description:
      "Support day-to-day alumni operations, events, communications, and community initiatives.",
  },
  {
    id: "legacy",
    icon: faGlobe,
    title: "Legacy & Infrastructure",
    description:
      "Contribute to long-term projects that improve Holy Child School and College facilities for future generations.",
  },
];

type Status = "idle" | "loading" | "success" | "error";

export default function DonateClient() {
  const [amount,    setAmount]    = useState<number | "">(100);
  const [custom,    setCustom]    = useState(false);
  const [fund,      setFund]      = useState("scholarship");
  const [name,      setName]      = useState("");
  const [email,     setEmail]     = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [status,    setStatus]    = useState<Status>("idle");
  const [message,   setMessage]   = useState("");

  const handlePreset = (val: number) => {
    setAmount(val);
    setCustom(false);
  };

  const handleCustom = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setAmount(isNaN(val) ? "" : val);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || Number(amount) < 1) {
      setMessage("Please enter a valid donation amount.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setMessage("");

    // ── Paystack integration ──
    // When you have your key, replace this block:
    //
    // const handler = PaystackPop.setup({
    //   key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!,
    //   email,
    //   amount: Number(amount) * 100, // Paystack uses kobo/pesewas
    //   currency: "GHS",
    //   metadata: {
    //     name: anonymous ? "Anonymous" : name,
    //     fund,
    //     custom_fields: [
    //       { display_name: "Fund", variable_name: "fund", value: fund },
    //     ],
    //   },
    //   callback: (response) => {
    //     setStatus("success");
    //     setMessage(`Thank you! Your reference is ${response.reference}`);
    //   },
    //   onClose: () => {
    //     setStatus("idle");
    //   },
    // });
    // handler.openIframe();

    // Placeholder until key is ready:
    setTimeout(() => {
      setStatus("success");
      setMessage("Thank you for your generous donation!");
    }, 1200);
  };

  const selectedFund = funds.find((f) => f.id === fund);

  if (status === "success") {
    return (
      <section className="section-light donate-success-wrap">
        <div className="section-container donate-success">
          <div
            className="gi-success-icon"
            style={{ width: 64, height: 64, fontSize: "1.5rem" }}
          >
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <h2 className="reg-success-heading">Thank you!</h2>
          <p className="reg-success-msg">{message}</p>
          <p className="reg-success-msg" style={{ opacity: 0.6 }}>
            A receipt has been sent to <strong>{email}</strong>.
          </p>
          <div className="reg-success-actions">
            <a href="/" className="btn-primary">Back to home</a>
            <a href="/get-involved" className="btn-outline">Get more involved</a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-light donate-wrap">
      <div className="section-container donate-inner">

        {/* Left — fund picker + impact */}
        <div className="donate-left">

          <div>
            <span className="section-eyebrow">Choose a fund</span>
            <h2 className="donate-side-heading">Where would you like your donation to go?</h2>
          </div>

          <div className="donate-funds">
            {funds.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFund(f.id)}
                className={`donate-fund-card ${fund === f.id ? "donate-fund-active" : ""}`}
              >
                <span className="donate-fund-icon"><FontAwesomeIcon icon={f.icon} /></span>
                <div>
                  <div className="donate-fund-title">{f.title}</div>
                  <div className="donate-fund-desc">{f.description}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Impact block */}
          <div className="donate-impact">
            <span className="section-eyebrow">Your impact</span>
            <div className="donate-impact-list">
              {[
                { amount: "GHS 50",   impact: "Covers a student's textbooks for a term" },
                { amount: "GHS 100",  impact: "Funds a student's school supplies for a year" },
                { amount: "GHS 250",  impact: "Contributes to a full term's school fees" },
                { amount: "GHS 500",  impact: "Sponsors a student's full year of education" },
                { amount: "GHS 1000", impact: "Funds a full scholarship for a deserving student" },
              ].map((item) => (
                <div key={item.amount} className="donate-impact-item">
                  <span className="donate-impact-amount">{item.amount}</span>
                  <span className="donate-impact-text">{item.impact}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right — donation form */}
        <div className="donate-right">
          <div className="donate-form-card">
            <h3 className="donate-form-heading">
              Donating to:{" "}
              <span className="donate-form-fund">{selectedFund?.title}</span>
            </h3>

            <form onSubmit={handleSubmit} className="donate-form">

              {/* Amount presets */}
              <div className="gi-field">
                <label className="gi-label">Select an amount (GHS)</label>
                <div className="donate-presets">
                  {presets.map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => handlePreset(p)}
                      className={`donate-preset ${!custom && amount === p ? "donate-preset-active" : ""}`}
                    >
                      {p}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => { setCustom(true); setAmount(""); }}
                    className={`donate-preset ${custom ? "donate-preset-active" : ""}`}
                  >
                    Custom
                  </button>
                </div>
              </div>

              {/* Custom amount input */}
              {custom && (
                <div className="gi-field">
                  <label className="gi-label">Enter amount (GHS) *</label>
                  <div className="donate-custom-wrap">
                    <span className="donate-currency">GHS</span>
                    <input
                      type="number"
                      min="1"
                      value={amount}
                      onChange={handleCustom}
                      className="gi-input donate-custom-input"
                      placeholder="Enter amount"
                    />
                  </div>
                </div>
              )}

              {/* Donor details */}
              <div className="gi-field">
                <label className="reg-checkbox-label">
                  <input
                    type="checkbox"
                    checked={anonymous}
                    onChange={(e) => setAnonymous(e.target.checked)}
                    className="reg-checkbox"
                  />
                  Donate anonymously
                </label>
              </div>

              {!anonymous && (
                <div className="gi-field">
                  <label className="gi-label">Full name *</label>
                  <input
                    type="text"
                    required={!anonymous}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="gi-input"
                    placeholder="Your name"
                  />
                </div>
              )}

              <div className="gi-field">
                <label className="gi-label">Email address *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="gi-input"
                  placeholder="you@example.com"
                />
                <span className="donate-email-note">
                  Your receipt will be sent here.
                </span>
              </div>

              {/* Error */}
              {status === "error" && (
                <p className="donate-error">{message}</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="btn-primary donate-submit"
                disabled={status === "loading"}
              >
                {status === "loading"
                  ? "Processing..."
                  : `Donate GHS ${amount || "..."}`}
              </button>

              <p className="donate-secure">
                <FontAwesomeIcon icon={faLock} /> Payments are processed securely via Paystack
              </p>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
}