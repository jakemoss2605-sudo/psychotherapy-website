import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Clock } from "lucide-react";

export default function PsychotherapyWebsite() {
  const [page, setPage] = useState("home");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ];

  const Nav = () => (
    <header className="border-b border-[#d9c2ad]/70 bg-[#fffaf6] sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <p className="text-lg font-semibold tracking-tight text-[#4a2e1f]">Jake Moss Psychotherapy</p>
          <p className="text-sm text-[#7b5b47]">Online Private Practice</p>
        </div>
        <nav className="flex gap-2 md:gap-3 text-sm text-[#6d4c39]">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              className={`rounded-full px-4 py-2 transition ${
                page === item.id
                  ? "bg-[#7a4b34] text-white"
                  : "hover:bg-[#f2e4d8]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );

  const Home = () => (
    <div className="px-6 py-14 max-w-7xl mx-auto">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-[#8a6248]">Online psychotherapy</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[1] tracking-tight text-[#3d2417] md:text-7xl">
            A calm, modern space to talk, think, and make sense of what has been difficult.
          </h1>
        </div>
        <div>
          <p className="max-w-md text-lg leading-8 text-[#684b39]">
            I offer online therapy for adults dealing with anxiety, OCD, low mood, relationship struggles, and self-worth difficulties. The work is shaped around you, because no two people need exactly the same thing.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              onClick={() => setPage("contact")}
              className="rounded-full bg-[#7a4b34] px-6 py-6 text-sm text-white hover:bg-[#653b28]"
            >
              Book a Consultation
            </Button>
            <Button
              onClick={() => setPage("about")}
              variant="outline"
              className="rounded-full border-[#c9ac95] bg-white/70 px-6 py-6 text-sm text-[#5a3a28] hover:bg-[#f5ebe2]"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] bg-[#6b4331] p-10 text-[#fff7f1] shadow-[0_20px_80px_rgba(61,36,23,0.18)]">
          <p className="text-sm uppercase tracking-[0.22em] text-[#e7d7cc]">What therapy is</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            A place to slow down and make sense of what has been hard.
          </h2>
          <p className="mt-5 text-base leading-8 text-[#f3e5dc] sm:text-lg">
            Therapy is a space to talk openly about what is going on in your life. It can help you feel more understood, notice patterns that keep repeating, and find a different way forward. Sometimes people come because life feels too much. Sometimes they come because they feel stuck and do not know why. Both are welcome.
          </p>
        </div>

        <div className="grid gap-5">
          <div className="rounded-[2rem] bg-[#7a4b34] text-white p-8 shadow-[0_20px_60px_rgba(61,36,23,0.14)]">
            <p className="text-sm uppercase tracking-[0.22em] text-[#ead9cf]">At a glance</p>
            <div className="mt-6 space-y-4">
              <div className="rounded-[1.5rem] bg-white/10 p-5">
                <p className="text-sm text-[#ead9cf]">Format</p>
                <p className="mt-1 text-xl font-medium text-white">Online only</p>
              </div>
              <div className="rounded-[1.5rem] bg-white/10 p-5">
                <p className="text-sm text-[#ead9cf]">Session length</p>
                <p className="mt-1 text-xl font-medium text-white">50 minutes</p>
              </div>
              <div className="rounded-[1.5rem] bg-white/10 p-5">
                <p className="text-sm text-[#ead9cf]">Approach</p>
                <p className="mt-1 text-xl font-medium text-white">Tailored to the person</p>
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] bg-[#f8f1ea] p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.2em] text-[#8a6248]">How I work</p>
            <p className="mt-4 text-base leading-7 text-[#684b39]">
              I do not believe everyone should be treated in exactly the same way. Some people need more space to reflect. Some need more structure. Some need both. I draw from different ways of working so therapy can feel right for the person sitting in front of me.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const About = () => (
    <div className="px-6 py-16 max-w-7xl mx-auto">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8a6248]">About</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#3d2417]">About me and my journey</h1>
        </div>
        <div className="grid gap-6 text-lg leading-8 text-[#684b39]">
          <p>
            I came to psychotherapy through both personal experience and a deep interest in understanding how people suffer, cope, and change. My own experiences have shaped the way I think about therapy: not as something cold or distant, but as a real human meeting where difficult things can be spoken about and understood.
          </p>
          <p>
            I have lived experience of OCD, and that has given me a special interest in this area of clinical work. I understand how exhausting intrusive thoughts, doubt, fear, and mental rituals can be, and how isolating it can feel when your mind will not let you rest.
          </p>
          <p>
            Alongside this, my training has helped me develop a way of working that is thoughtful, flexible, and grounded in relationship. I aim to offer a space where people can feel safe enough to be honest, curious about their inner world, and less alone with what they are carrying.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:col-span-2">
          <div className="rounded-[1.75rem] bg-[#fffaf6] p-7 shadow-sm">
            <p className="text-sm uppercase tracking-[0.2em] text-[#8a6248]">Special interest</p>
            <p className="mt-4 text-2xl font-semibold tracking-tight text-[#3d2417]">OCD</p>
            <p className="mt-3 leading-7 text-[#684b39]">
              Particular interest in intrusive thoughts, compulsions, shame, doubt, and the deeper emotional experience around OCD.
            </p>
          </div>
          <div className="rounded-[1.75rem] bg-[#fffaf6] p-7 shadow-sm">
            <p className="text-sm uppercase tracking-[0.2em] text-[#8a6248]">Style</p>
            <p className="mt-4 text-2xl font-semibold tracking-tight text-[#3d2417]">Warm and thoughtful</p>
            <p className="mt-3 leading-7 text-[#684b39]">
              A calm, collaborative approach that makes room for both reflection and change.
            </p>
          </div>
          <div className="rounded-[1.75rem] bg-[#fffaf6] p-7 shadow-sm">
            <p className="text-sm uppercase tracking-[0.2em] text-[#8a6248]">Format</p>
            <p className="mt-4 text-2xl font-semibold tracking-tight text-[#3d2417]">Online therapy</p>
            <p className="mt-3 leading-7 text-[#684b39]">
              Consistent, private online sessions for adults looking for support wherever they are based.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const Services = () => (
    <div className="px-6 py-16 max-w-7xl mx-auto">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8a6248]">Services</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#3d2417]">Areas of focus</h1>
        </div>
        <p className="max-w-xl text-[#7a5a46]">
          A mix of reflection, emotional understanding, and practical support, shaped around the person rather than a one-size-fits-all method.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <div className="rounded-[1.75rem] border border-[#ead8ca] bg-white/80 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold tracking-tight text-[#3d2417]">What therapy can be</h2>
          <p className="mt-4 leading-7 text-[#684b39]">
            Therapy is a space to slow down and talk honestly about what has been hard. Over time, it can help you notice patterns, understand yourself more clearly, and find a different way forward.
          </p>
        </div>
        <div className="rounded-[1.75rem] border border-[#ead8ca] bg-white/80 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold tracking-tight text-[#3d2417]">Shaped around you</h2>
          <p className="mt-4 leading-7 text-[#684b39]">
            No two people are the same. I draw from different ways of working so the therapy fits your needs, your pace, and what feels most useful for you.
          </p>
        </div>
        <div className="rounded-[1.75rem] border border-[#ead8ca] bg-white/80 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold tracking-tight text-[#3d2417]">Online for now</h2>
          <p className="mt-4 leading-7 text-[#684b39]">
            At the moment, I offer therapy online only. This can still feel personal, steady, and deeply supportive.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8a6248]">Who I work with</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#3d2417]">Support shaped around real difficulties</h2>
          </div>
          <p className="max-w-xl text-[#7a5a46]">
            Support for people who want therapy that feels thoughtful, personal, and responsive to what they are actually living through.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-[1.75rem] bg-[linear-gradient(180deg,#fffaf6_0%,#f4e5d8_100%)] p-8 shadow-sm">
            <h3 className="text-2xl font-semibold tracking-tight text-[#3d2417]">Anxiety and overthinking</h3>
            <p className="mt-4 leading-7 text-[#684b39]">
              For people who feel stuck in worry, self-doubt, panic, or loops of thought that are hard to switch off.
            </p>
          </div>
          <div className="rounded-[1.75rem] bg-[linear-gradient(180deg,#fffaf6_0%,#f4e5d8_100%)] p-8 shadow-sm">
            <h3 className="text-2xl font-semibold tracking-tight text-[#3d2417]">OCD</h3>
            <p className="mt-4 leading-7 text-[#684b39]">
              I have a particular interest in working with OCD, including intrusive thoughts, compulsive patterns, shame, doubt, and the exhaustion that can come from living in a constant state of mental checking.
            </p>
          </div>
          <div className="rounded-[1.75rem] bg-[linear-gradient(180deg,#fffaf6_0%,#f4e5d8_100%)] p-8 shadow-sm">
            <h3 className="text-2xl font-semibold tracking-tight text-[#3d2417]">Relationships and self-worth</h3>
            <p className="mt-4 leading-7 text-[#684b39]">
              For people who want to better understand their relationships, build steadier self-esteem, and make sense of repeating patterns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const Contact = () => (
    <div className="px-6 py-16 max-w-7xl mx-auto">
      <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8a6248]">Contact</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#3d2417]">Get in touch</h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-[#684b39]">
            If you would like to enquire about therapy, ask a question, or arrange an initial consultation, you are welcome to get in touch by email.
          </p>
          <div className="mt-8 grid gap-4">
            <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm">
              <Mail className="h-5 w-5 text-[#8a5439]" />
              <span className="text-[#4a2e1f]">jmosstherapy@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm">
              <Clock className="h-5 w-5 text-[#8a5439]" />
              <span className="text-[#4a2e1f]">Weekday daytime and evening online appointments</span>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#ead8ca] bg-white p-8 shadow-sm">
          <div className="grid gap-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-[#5d4030]">Name</label>
              <input
                className="w-full rounded-2xl border border-[#e1cbbb] px-4 py-3 outline-none transition focus:ring-2 focus:ring-[#b58163]"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-[#5d4030]">Email</label>
              <input
                className="w-full rounded-2xl border border-[#e1cbbb] px-4 py-3 outline-none transition focus:ring-2 focus:ring-[#b58163]"
                placeholder="Your email address"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-[#5d4030]">Message</label>
              <textarea
                className="min-h-[150px] w-full rounded-2xl border border-[#e1cbbb] px-4 py-3 outline-none transition focus:ring-2 focus:ring-[#b58163]"
                placeholder="How can I help?"
              />
            </div>
            <Button className="rounded-full bg-[#7a4b34] py-6 text-white hover:bg-[#653b28]">
              Send Enquiry
            </Button>
            <p className="text-sm leading-6 text-[#8a6a57]">
              This form can later be connected to your email or your preferred website form service when the site is published.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f7f0e8] text-[#3b2416]">
      <Nav />
      {page === "home" && <Home />}
      {page === "about" && <About />}
      {page === "services" && <Services />}
      {page === "contact" && <Contact />}
    </div>
  );
}
