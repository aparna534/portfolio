"use client";

import { useState } from "react";
import Image from "next/image";

export default function CaseStudies() {
  const [current, setCurrent] = useState(0);
  const total = 3;

  const goNext = () => setCurrent((c) => (c + 1) % total);
  const goPrev = () => setCurrent((c) => (c - 1 + total) % total);

  return (
    <section
      id="case-studies"
      className="min-h-screen w-full flex flex-col items-center justify-center py-20 font-sans"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-3 text-black">
        CASE STUDIES
      </h1>

      <p className="text-lg font-bold text-gray-800 mb-10">
        3 CASE STUDIES — USE THE ARROWS TO SWITCH
      </p>

      <div className="relative w-full flex justify-center items-center">
        <div
          className="relative w-full max-w-4xl rounded-2xl shadow-xl p-12 bg-cover bg-center"
          style={{ backgroundImage: "url('/bg2.jpg')" }}
        >
          {/* arrows */}
          <div className="absolute top-4 left-0 right-0 flex justify-between px-6">
            <button
              onClick={goPrev}
              className="text-4xl md:text-5xl font-bold text-black hover:scale-110 transition"
            >
              ←
            </button>
            <button
              onClick={goNext}
              className="text-4xl md:text-5xl font-bold text-black hover:scale-110 transition"
            >
              →
            </button>
          </div>

          <div className="text-center text-sm text-gray-700 mb-6 mt-10">
            CASE {current + 1} OF {total}
          </div>

          {/* ================= CASE 1 ================= */}
          {current === 0 && (
            <>
              <CaseHeader
                number="1"
                tag="STARTUP"
                title="B2B Workflow Platform for Distributed Operations"
              />

              <Section title="Context">
                A Series-A SaaS company providing workflow automation tools for
                distributed operations teams (support, logistics coordination,
                internal ops). Despite steady inbound growth, the company struggled
                to convert new accounts into sustained usage and long-term contracts.
              </Section>

              <Section title="Business Problem">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Strong sign-ups, weak sustained adoption</li>
                  <li>
                    Flat expansion revenue despite regular feature releases
                  </li>
                  <li>
                    Inconsistent engagement across teams within the same account
                  </li>
                </ul>
                <p className="mt-4">
                  Most stakeholders initially believed the problem was missing
                  functionality. Across teams, the common view was that adding more
                  advanced features would naturally increase adoption.
                </p>
              </Section>

              <Section title="My Framing">
                I challenged this assumption by reframing the problem as:
                <br />
                <span className="italic block mt-2">
                  “This is not a feature-gap issue. This is a value-realization
                  issue. Users are not failing because the product lacks capability
                  — they are failing because they don’t reach meaningful outcomes
                  early enough.”
                </span>
              </Section>

              <Section title="Diagnostic Approach">
                <p className="italic mb-4">
                  Account creation → Initial configuration → First workflow created
                  → First cross-team dependency managed → Ongoing operational
                  reliance
                </p>
                <p className="font-semibold mb-2">Key findings:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Setup required too many structural decisions before value was
                    visible
                  </li>
                  <li>
                    Users lacked clear examples of what “good” looked like
                  </li>
                  <li>
                    The system surfaced complexity before demonstrating benefit
                  </li>
                </ul>
              </Section>

              <Section title="Strategic Direction">
                Shift onboarding from capability exposure to outcome enablement.
                <br />
                Instead of:
                <br />
                <span className="italic block">
                  “Here is what the platform can do.”
                </span>
                The product needed to say:
                <br />
                <span className="italic block">
                  “Here is one operational outcome we will help you achieve in your
                  first session.”
                </span>
              </Section>

              <Section title="Solution">
                <p className="font-semibold mb-2">
                  Outcome-led activation framework
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Role-based entry paths (Ops Lead, Team Manager, Analyst)
                  </li>
                  <li>
                    Pre-configured workflow templates tied to real operational goals
                  </li>
                  <li>
                    Progressive disclosure of advanced features only after initial
                    success
                  </li>
                </ul>
              </Section>

              <Section title="Artifacts Produced">
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    PRD: Guided Activation Framework
                    <ul className="list-disc pl-6 mt-2">
                      <li>Objective: reduce time-to-first-workflow by 40%</li>
                      <li>
                        Defined success metrics and activation guardrails
                      </li>
                    </ul>
                  </li>
                  <li>Lifecycle funnel redesign</li>
                  <li>Experiment roadmap with staged rollout</li>
                </ul>
              </Section>

              <Section title="Why this reads as senior">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Product-led growth thinking</li>
                  <li>Comfort challenging dominant assumptions</li>
                  <li>
                    Understanding of adoption economics, not just UX polish
                  </li>
                </ul>
              </Section>

              <ImageRowEqual
                a="/case-studies/case1-a.png"
                b="/case-studies/case1-b.png"
                alt="Case Study 1 flows"
              />
            </>
          )}

          {/* ================= CASE 2 ================= */}
          {current === 1 && (
            <>
              <CaseHeader
                number="2"
                tag="MID-SIZED COMPANY"
                title="Consumer Fintech Platform — From Insight to Action"
              />

              <Section title="Context">
                A fast-growing personal finance platform offering spend analysis,
                subscription tracking, and budgeting tools. While user acquisition
                was strong, the product struggled to influence real financial
                behavior.
              </Section>

              <Section title="Business Problem">
                <ul className="list-disc pl-5 space-y-2">
                  <li>High dashboard engagement</li>
                  <li>Low downstream action rates</li>
                  <li>
                    Monetization dependent on depth of usage, not installs
                  </li>
                </ul>
                <p className="mt-4">
                  Across teams, the common view was that users wanted more detailed
                  insights. The prevailing response was to expand analytics and
                  visualization.
                </p>
              </Section>

              <Section title="My Framing">
                I reframed the issue as:
                <br />
                <span className="italic block mt-2">
                  “We do not have an information problem. We have a decision
                  friction problem.”
                </span>
                Users were seeing insights — but lacked:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>confidence</li>
                  <li>clarity</li>
                  <li>and low-effort paths to act</li>
                </ul>
              </Section>

              <Section title="Analytical Approach">
                <p className="italic mb-4">
                  Insight surfaced → Credibility assessed → Effort to act →
                  Perceived risk → Action taken
                </p>
                <p className="font-semibold mb-2">Primary breakdowns:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Low trust in insight relevance</li>
                  <li>High effort to execute actions</li>
                  <li>No signal of impact or confidence</li>
                </ul>
              </Section>

              <Section title="Strategic Direction">
                Shift the product experience from insight delivery to decision
                enablement.
              </Section>

              <Section title="Solution">
                <p className="font-semibold mb-2">
                  Decision-First Insight Layer
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Reframed insights as recommendations, not observations
                  </li>
                  <li>
                    Embedded one-tap actions (cancel, switch, optimize)
                  </li>
                  <li>
                    Added confidence indicators:
                    <ul className="list-disc pl-6 mt-2">
                      <li>data recency</li>
                      <li>sample size</li>
                      <li>projected savings impact</li>
                    </ul>
                  </li>
                </ul>
              </Section>

              <Section title="Artifacts Produced">
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    BRD
                    <ul className="list-disc pl-6 mt-2">
                      <li>
                        Business objective: increase action rate per MAU
                      </li>
                      <li>
                        Stakeholders: Product, Risk, Legal, Growth
                      </li>
                    </ul>
                  </li>
                  <li>
                    PRD
                    <ul className="list-disc pl-6 mt-2">
                      <li>Recommendation prioritization logic</li>
                      <li>Risk-aware UX guidelines</li>
                    </ul>
                  </li>
                  <li>
                    Measurement framework
                    <ul className="list-disc pl-6 mt-2">
                      <li>Insight-to-action conversion</li>
                      <li>
                        Retention uplift among engaged cohorts
                      </li>
                    </ul>
                  </li>
                </ul>
              </Section>

              <Section title="Why this reads as senior">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Behavioral economics awareness</li>
                  <li>Product + risk + compliance thinking</li>
                  <li>Monetization-aligned product strategy</li>
                </ul>
              </Section>

              <ImageRowTallSecond
                a="/case-studies/case2-a.png"
                b="/case-studies/case2-b.png"
                alt="Case Study 2 flows"
              />
            </>
          )}

          {/* ================= CASE 3 ================= */}
          {current === 2 && (
            <>
              <CaseHeader
                number="3"
                tag="MNC"
                title="Enterprise Knowledge Platform for a Global Services Organization"
              />

              <Section title="Context">
                A multinational professional services firm with thousands of
                employees across consulting, finance, and risk functions.
                Knowledge assets existed across multiple repositories, yet
                decision latency remained high.
              </Section>

              <Section title="Business Problem">
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Analysts spent excessive time locating reliable material
                  </li>
                  <li>
                    Compliance teams faced audit risk due to version ambiguity
                  </li>
                  <li>
                    Institutional knowledge remained trapped in individuals
                  </li>
                </ul>
                <p className="mt-4">
                  Most stakeholders initially believed the problem was poor
                  search functionality. Across teams, the common view was that a
                  better search engine would solve the issue.
                </p>
              </Section>

              <Section title="My Framing">
                I reframed the challenge as:
                <br />
                <span className="italic block mt-2">
                  “This is not a discovery problem. It is a trust, ownership, and
                  accountability problem.”
                </span>
                If users cannot trust what they find, they will not use what we
                build.
              </Section>

              <Section title="Diagnostic Approach">
                <p className="italic mb-4">
                  Discovery → Verification → Authorization → Application
                </p>
                <p className="font-semibold mb-2">Breakdowns occurred at:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Verification (Is this current?)</li>
                  <li>Authorization (Am I allowed to use this?)</li>
                  <li>Ownership (Who stands behind this?)</li>
                </ul>
              </Section>

              <Section title="Strategic Direction">
                Reposition the platform from document storage to decision
                infrastructure.
              </Section>

              <Section title="Solution">
                <p className="font-semibold mb-2">
                  Confidence-led knowledge system
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Clear ownership and accountability metadata
                  </li>
                  <li>
                    Trust indicators based on validation and usage patterns
                  </li>
                  <li>Role-based surfacing of material</li>
                  <li>Immutable audit trails for compliance</li>
                </ul>
              </Section>

              <Section title="Artifacts Produced">
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Stakeholder map: IT, Compliance, Legal, Business Heads
                  </li>
                  <li>
                    BRD
                    <ul className="list-disc pl-6 mt-2">
                      <li>Reduce time-to-decision</li>
                      <li>Improve audit readiness</li>
                    </ul>
                  </li>
                  <li>
                    PRD
                    <ul className="list-disc pl-6 mt-2">
                      <li>Ranking logic</li>
                      <li>Permission models</li>
                      <li>Governance workflows</li>
                    </ul>
                  </li>
                </ul>
              </Section>

              <Section title="Why this reads as senior">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Enterprise product maturity</li>
                  <li>Risk-aware system design</li>
                  <li>
                    Understanding of organizational behavior, not just UX
                  </li>
                </ul>
              </Section>

              <ImageRowTallSecond
                a="/case-studies/case3-a.png"
                b="/case-studies/case3-b.png"
                alt="Case Study 3 flows"
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------------- COMPONENTS ---------------- */

function CaseHeader({
  number,
  tag,
  title,
}: {
  number: string;
  tag: string;
  title: string;
}) {
  return (
    <div className="mb-10 text-center">
      <h2 className="text-sm uppercase tracking-widest text-gray-700 mb-2">
        CASE STUDY {number} — {tag}
      </h2>
      <h3 className="text-3xl md:text-4xl font-bold text-black">
        {title}
      </h3>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-10">
      <h3 className="text-xl font-bold mb-3 text-gray-900">
        {title}
      </h3>
      <div className="text-gray-900 leading-relaxed text-sm md:text-base">
        {children}
      </div>
    </div>
  );
}

/* IMAGE LAYOUTS */

function ImageRowEqual({
  a,
  b,
  alt,
}: {
  a: string;
  b: string;
  alt: string;
}) {
  return (
    <div className="grid grid-cols-2 gap-6 mt-14 items-stretch">
      {[a, b].map((src, i) => (
        <div
          key={i}
          className="bg-white rounded-lg shadow-md overflow-hidden flex items-center justify-center"
        >
          <Image
            src={src}
            alt={`${alt} ${i + 1}`}
            width={520}
            height={380}
            className="w-full h-auto object-contain"
          />
        </div>
      ))}
    </div>
  );
}

function ImageRowTallSecond({
  a,
  b,
  alt,
}: {
  a: string;
  b: string;
  alt: string;
}) {
  return (
    <div className="mt-14 flex flex-col items-center gap-6">

      {/* IMAGE 1 — SMALL, ON TOP */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden flex justify-center">
        <Image
          src={a}
          alt={`${alt} A`}
          width={300}   // 👈 smaller
          height={220}
          className="object-contain"
        />
      </div>

      {/* IMAGE 2 — BIG, BELOW */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden flex justify-center w-full">
        <Image
          src={b}
          alt={`${alt} B`}
          width={700}   // 👈 bigger
          height={480}
          className="object-contain"
        />
      </div>

    </div>
  );
}




