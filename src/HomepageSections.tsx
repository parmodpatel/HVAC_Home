import { useState } from "react";

const mono = "font-mono text-[10px] uppercase tracking-[1.6px]";
const buttonBase =
  "border-0 px-5 py-4 text-[11px] tracking-[.5px] transition-all duration-200 hover:-translate-y-0.5";

export function Pricing({ onOpenAudit }: { onOpenAudit: () => void }) {
  const [annual, setAnnual] = useState(false);
  const plans = [
    {
      name: "Launch",
      monthly: 1490,
      description: "For focused local HVAC teams",
      items: [
        "Local SEO foundation",
        "Google Business Profile",
        "Monthly content sprint",
      ],
    },
    {
      name: "Scale",
      monthly: 2490,
      description: "For teams ready to own a market",
      items: [
        "Everything in Launch",
        "Service-area SEO",
        "Review and conversion system",
      ],
    },
    {
      name: "Multi-market",
      monthly: 3990,
      description: "For ambitious multi-location brands",
      items: [
        "Everything in Scale",
        "Location page network",
        "Dedicated growth strategist",
      ],
    },
  ];
  return (
    <section
      className="bg-[#f1f0e9] px-[12vw] py-[120px] text-[#101817] max-[700px]:px-[8vw] max-[700px]:py-[85px]"
      id="pricing"
    >
      <div className="flex items-end justify-between max-[700px]:block">
        <div>
          <p className={`${mono} text-[#f07a4f]`}>04 / Transparent growth</p>
          <h2 className="mb-4 mt-0 text-[clamp(42px,5vw,70px)] font-medium leading-[.98] tracking-[-2px]">
            Clear scope.
            <br />
            <span className="text-[#50664f]">No mystery math.</span>
          </h2>
        </div>
        <div className="flex border border-[#adb5ad] p-1 text-[11px]">
          <button
            className={`border-0 px-4 py-2 ${!annual ? "bg-[#101817] text-[#f1f0e9]" : "bg-transparent"}`}
            onClick={() => setAnnual(false)}
          >
            Monthly
          </button>
          <button
            className={`border-0 px-4 py-2 ${annual ? "bg-[#101817] text-[#f1f0e9]" : "bg-transparent"}`}
            onClick={() => setAnnual(true)}
          >
            Annual <span className="text-[#f07a4f]">-15%</span>
          </button>
        </div>
      </div>
      <div className="mt-14 grid grid-cols-3 gap-4 max-[900px]:grid-cols-1">
        {plans.map((plan, index) => (
          <article
            className={`group flex flex-col border p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${index === 1 ? "border-[#f07a4f] bg-[#19201d] text-[#f1f0e9]" : "border-[#c7cec8]"}`}
            key={plan.name}
          >
            <p
              className={`${mono} ${index === 1 ? "text-[#f07a4f]" : "text-[#50664f]"}`}
            >
              {plan.name}
            </p>
            <p className="mt-5 text-sm text-[#59635d] group-hover:text-current">
              {plan.description}
            </p>
            <p className="my-7 text-4xl font-medium">
              $
              {annual
                ? Math.round(plan.monthly * 0.85).toLocaleString()
                : plan.monthly.toLocaleString()}
              <span className="text-sm text-[#aab3ab"> / mo</span>
            </p>
            <ul className="mb-9 space-y-3 text-[13px] text-[#59635d] group-hover:text-current">
              {plan.items.map((item) => (
                <li key={item}>
                  <span className="mr-2 text-[#f07a4f]">+</span>
                  {item}
                </li>
              ))}
            </ul>
            <button
              className={`${buttonBase} mt-auto self-start ${index === 1 ? "bg-[#f07a4f]" : "border border-[#101817] bg-transparent hover:bg-[#101817] hover:text-[#f1f0e9]"}`}
              onClick={onOpenAudit}
            >
              Talk about {plan.name} <span className="ml-3">↗</span>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Proof() {
  return (
    <section className="bg-[#d5e38f] px-[12vw] py-16 text-[#101817] max-[700px]:px-[8vw]">
      <div className="grid grid-cols-4 gap-8 max-[700px]:grid-cols-2">
        <div>
          <strong className="block text-4xl font-medium">2.8x</strong>
          <span className={`${mono} text-[#50664f]`}>More qualified calls</span>
        </div>
        <div>
          <strong className="block text-4xl font-medium">+42%</strong>
          <span className={`${mono} text-[#50664f]`}>Average lead lift</span>
        </div>
        <div>
          <strong className="block text-4xl font-medium">68</strong>
          <span className={`${mono} text-[#50664f]`}>HVAC markets served</span>
        </div>
        <div>
          <strong className="block text-4xl font-medium">11 yrs</strong>
          <span className={`${mono} text-[#50664f]`}>Industry experience</span>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const reviews = [
    {
      quote:
        "Airside helped us stop competing on price. We now show up first when homeowners search for the work we want.",
      name: "Marcus Reed",
      role: "Owner, Reed Air & Electric",
    },
    {
      quote:
        "The reporting is tied to booked calls, not clicks. That made it easy to see exactly where our growth was coming from.",
      name: "Dana Morales",
      role: "VP Marketing, Northline Mechanical",
    },
    {
      quote:
        "Within six months, our map visibility went from invisible to a dependable source of new maintenance agreements.",
      name: "Chris Dalton",
      role: "President, Dalton Comfort Co.",
    },
  ];
  const [active, setActive] = useState(0);
  const review = reviews[active];
  return (
    <section
      className="bg-[#19201d] px-[12vw] py-[120px] text-[#f1f0e9] max-[700px]:px-[8vw] max-[700px]:py-[85px]"
      id="testimonials"
    >
      <div className="flex items-end justify-between">
        <div>
          <p className={`${mono} text-[#f07a4f]`}>05 / In their words</p>
          <h2 className="mb-0 mt-0 text-[clamp(42px,5vw,70px)] font-medium leading-[.98] tracking-[-2px]">
            Proof beats
            <br />
            <span className="text-[#d5e38f]">promises.</span>
          </h2>
        </div>
        <div className="flex gap-2">
          <button
            className="h-10 w-10 border border-white/20 bg-transparent text-[#f1f0e9] transition-colors hover:border-[#f07a4f] hover:text-[#f07a4f]"
            onClick={() =>
              setActive((active + reviews.length - 1) % reviews.length)
            }
            aria-label="Previous testimonial"
          >
            ←
          </button>
          <button
            className="h-10 w-10 border border-white/20 bg-transparent text-[#f1f0e9] transition-colors hover:border-[#f07a4f] hover:text-[#f07a4f]"
            onClick={() => setActive((active + 1) % reviews.length)}
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>
      <div className="mt-16 max-w-3xl border-t border-white/15 pt-8">
        <p className="text-3xl font-medium leading-tight max-[700px]:text-2xl">
          “{review.quote}”
        </p>
        <p className={`${mono} mt-10 text-[#f07a4f]`}>
          {review.name} / <span className="text-[#aab3ab]">{review.role}</span>
        </p>
        <div className="mt-8 flex gap-2">
          {reviews.map((item, index) => (
            <button
              className={`h-1 transition-all ${index === active ? "w-12 bg-[#f07a4f]" : "w-5 bg-white/20"}`}
              key={item.name}
              onClick={() => setActive(index)}
              aria-label={`Show testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Resources() {
  const posts = [
    {
      category: "Local SEO",
      title: "The HVAC service-area page playbook",
      time: "7 min read",
    },
    {
      category: "Growth",
      title: "Which HVAC leads are actually profitable?",
      time: "5 min read",
    },
    {
      category: "Reputation",
      title: "How to turn every install into a five-star review",
      time: "6 min read",
    },
  ];
  return (
    <section
      className="bg-[#f1f0e9] px-[12vw] py-[120px] text-[#101817] max-[700px]:px-[8vw] max-[700px]:py-[85px]"
      id="resources"
    >
      <div className="flex items-end justify-between">
        <div>
          <p className={`${mono} text-[#f07a4f]`}>06 / The field notes</p>
          <h2 className="mb-0 mt-0 text-[clamp(42px,5vw,70px)] font-medium leading-[.98] tracking-[-2px]">
            Useful ideas.
            <br />
            <span className="text-[#50664f]">Zero fluff.</span>
          </h2>
        </div>
        <button className="hidden border-0 border-b border-[#adb5ad] bg-transparent pb-2 text-[11px] md:block">
          View all resources <span className="ml-3">↗</span>
        </button>
      </div>
      <div className="mt-14 grid grid-cols-3 gap-4 max-[800px]:grid-cols-1">
        {posts.map((post) => (
          <article
            className="group border-t border-[#adb5ad] pt-5 transition-colors hover:border-[#f07a4f]"
            key={post.title}
          >
            <p className={`${mono} text-[#f07a4f]`}>{post.category}</p>
            <h3 className="my-5 text-2xl font-medium leading-tight transition-colors group-hover:text-[#f07a4f]">
              {post.title}
            </h3>
            <p className="font-mono text-[10px] uppercase text-[#59635d]">
              {post.time}{" "}
              <span className="float-right text-[#f07a4f] transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const questions = [
    "How long before we see results?",
    "Do you work with HVAC companies in every state?",
    "What makes HVAC SEO different from regular SEO?",
    "Can you work with our existing marketing team?",
  ];
  const answers = [
    "Most clients see meaningful movement in 90 days, with compounding gains as content, authority, and local signals build.",
    "Yes. We work with residential, commercial, and specialty HVAC teams across the United States and build plans around each market.",
    "HVAC search is seasonal, service-area driven, and conversion sensitive. Our strategy accounts for all three, from emergency calls to replacement projects.",
    "Absolutely. We plug into your existing team and make responsibilities, reporting, and priorities clear from day one.",
  ];
  return (
    <section
      className="bg-[#e5e8df] px-[12vw] py-[120px] text-[#101817] max-[700px]:px-[8vw] max-[700px]:py-[85px]"
      id="faq"
    >
      <div className="grid grid-cols-[1fr_1.5fr] gap-20 max-[800px]:block">
        <div>
          <p className={`${mono} text-[#f07a4f]`}>07 / Good to know</p>
          <h2 className="mb-0 mt-5 text-[clamp(42px,5vw,70px)] font-medium leading-[.98] tracking-[-2px]">
            Questions,
            <br />
            <span className="text-[#50664f]">answered.</span>
          </h2>
        </div>
        <div>
          {questions.map((question, index) => (
            <div className="border-t border-[#adb5ad]" key={question}>
              <button
                className="flex w-full items-center justify-between border-0 bg-transparent py-5 text-left text-base font-medium"
                onClick={() => setOpen(open === index ? null : index)}
              >
                {question}
                <span
                  className={`text-2xl font-light text-[#f07a4f] transition-transform ${open === index ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
              <div
                className={`${open === index ? "grid grid-rows-[1fr] pb-5" : "grid grid-rows-[0fr]"} transition-all`}
              >
                <p className="overflow-hidden text-sm leading-[1.7] text-[#59635d]">
                  {answers[index]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact({ onOpenAudit }: { onOpenAudit: () => void }) {
  return (
    <section
      className="grid grid-cols-[1fr_1fr] gap-20 bg-[#101817] px-[12vw] py-[120px] text-[#f1f0e9] max-[800px]:block max-[700px]:px-[8vw] max-[700px]:py-[85px]"
      id="contact"
    >
      <div>
        <p className={`${mono} text-[#f07a4f]`}>08 / Contact</p>
        <h2 className="mb-6 mt-5 text-[clamp(42px,5vw,70px)] font-medium leading-[.98] tracking-[-2px]">
          Let's make
          <br />
          <em className="not-italic text-[#d5e38f]">growth practical.</em>
        </h2>
        <p className="max-w-sm text-sm leading-[1.7] text-[#aab3ab]">
          Tell us where you are now. We'll show you the clearest next move.
        </p>
        <div className="mt-10 space-y-3 font-mono text-[10px] uppercase tracking-[1px] text-[#aab3ab]">
          <a
            className="block transition-colors hover:text-[#f07a4f]"
            href="mailto:hello@airsidedigital.co"
          >
            hello@airsidedigital.co
          </a>
          <a
            className="block transition-colors hover:text-[#f07a4f]"
            href="tel:+18005550142"
          >
            +1 800 555 0142
          </a>
          <span>Serving HVAC teams nationwide</span>
        </div>
      </div>
      <form
        className="grid gap-3"
        onSubmit={(event) => {
          event.preventDefault();
          onOpenAudit();
        }}
      >
        <input
          className="border border-white/20 bg-transparent p-4 text-sm text-[#f1f0e9] outline-[#f07a4f] placeholder:text-[#aab3ab]"
          required
          placeholder="Your name"
        />
        <input
          className="border border-white/20 bg-transparent p-4 text-sm text-[#f1f0e9] outline-[#f07a4f] placeholder:text-[#aab3ab]"
          required
          type="email"
          placeholder="Work email"
        />
        <input
          className="border border-white/20 bg-transparent p-4 text-sm text-[#f1f0e9] outline-[#f07a4f] placeholder:text-[#aab3ab]"
          required
          placeholder="Company website"
        />
        <textarea
          className="resize-y border border-white/20 bg-transparent p-4 text-sm text-[#f1f0e9] outline-[#f07a4f] placeholder:text-[#aab3ab]"
          required
          placeholder="What would you like to grow?"
          rows={4}
        />
        <button
          className={`${buttonBase} mt-2 justify-self-start bg-[#f07a4f] text-[#101817]`}
          type="submit"
        >
          Start the conversation <span className="ml-3">↗</span>
        </button>
      </form>
    </section>
  );
}
