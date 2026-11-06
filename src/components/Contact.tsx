"use client";

import { useState } from "react";

function EmailIcon() {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23A11.51 11.51 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.48 5.922.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("sbniraj2006@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 px-6 border-t border-[#E8E5DF]">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#5C6E3A] mb-2">
            Inquiries &amp; Outreach
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-3"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Get in Touch
          </h2>
          <div className="w-12 h-0.5 bg-[#5C6E3A]" />
        </div>

        {/* Intro */}
        <p className="text-base text-[#4A4A4A] leading-relaxed max-w-2xl mb-12">
          I am actively seeking software engineering and applied AI internship and full-time opportunities.
          Whether you are a recruiter, engineering manager, or prospective collaborator, please reach out.
        </p>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Direct channels */}
          <div className="bg-[#EFEDE8] border border-[#E0DDD7] p-8 rounded-sm flex flex-col gap-6">
            <h3 className="text-xs font-bold tracking-widest uppercase text-[#5C6E3A]">
              Direct Contact
            </h3>

            {/* Email with copy button */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#E0DDD7]">
              <div className="flex items-center gap-4">
                <span className="text-[#5C6E3A]"><EmailIcon /></span>
                <div>
                  <p className="text-xs font-semibold uppercase text-[#6B6B6B]">Email</p>
                  <a
                    href="mailto:sbniraj2006@gmail.com"
                    className="text-sm font-medium text-[#1C1C1C] hover:text-[#5C6E3A] transition-colors"
                  >
                    sbniraj2006@gmail.com
                  </a>
                </div>
              </div>
              <button
                onClick={copyEmail}
                type="button"
                className="px-3 py-1 text-xs font-medium border border-[#1C1C1C] text-[#1C1C1C] hover:bg-[#1C1C1C] hover:text-[#F7F5F0] transition-colors rounded-sm flex-shrink-0"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 pb-4 border-b border-[#E0DDD7]">
              <span className="text-[#5C6E3A]"><PhoneIcon /></span>
              <div>
                <p className="text-xs font-semibold uppercase text-[#6B6B6B]">Phone</p>
                <a
                  href="tel:+918778613949"
                  className="text-sm font-medium text-[#1C1C1C] hover:text-[#5C6E3A] transition-colors"
                >
                  +91 8778613949
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <span className="text-[#5C6E3A]"><LocationIcon /></span>
              <div>
                <p className="text-xs font-semibold uppercase text-[#6B6B6B]">Location</p>
                <p className="text-sm font-medium text-[#1C1C1C]">
                  Guduvanchery, Chennai, Tamil Nadu, India
                </p>
              </div>
            </div>
          </div>

          {/* Professional profiles */}
          <div className="bg-[#EFEDE8] border border-[#E0DDD7] p-8 rounded-sm flex flex-col justify-between gap-6">
            <div>
              <h3 className="text-xs font-bold tracking-widest uppercase text-[#5C6E3A] mb-6">
                Professional Networks
              </h3>

              <div className="flex flex-col gap-5">
                <a
                  href="https://linkedin.com/in/niraj-s-b-48a9222a2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-[#F7F5F0] border border-[#E8E5DF] hover:border-[#5C6E3A] transition-colors rounded-sm group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[#5C6E3A]"><LinkedInIcon /></span>
                    <span className="text-sm font-semibold text-[#1C1C1C] group-hover:text-[#5C6E3A] transition-colors">
                      LinkedIn
                    </span>
                    <span className="text-xs text-[#6B6B6B]">
                      (niraj-s-b-48a9222a2)
                    </span>
                  </div>
                  <span className="text-xs text-[#5C6E3A]">↗</span>
                </a>

                <a
                  href="https://github.com/Zephyrgrimm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-[#F7F5F0] border border-[#E8E5DF] hover:border-[#5C6E3A] transition-colors rounded-sm group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[#5C6E3A]"><GitHubIcon /></span>
                    <span className="text-sm font-semibold text-[#1C1C1C] group-hover:text-[#5C6E3A] transition-colors">
                      GitHub
                    </span>
                    <span className="text-xs text-[#6B6B6B]">
                      (@Zephyrgrimm)
                    </span>
                  </div>
                  <span className="text-xs text-[#5C6E3A]">↗</span>
                </a>
              </div>
            </div>

            {/* Quick Action */}
            <div className="pt-4 border-t border-[#E0DDD7]">
              <a
                href="mailto:sbniraj2006@gmail.com?subject=Software%20Engineering%20Opportunity%20-%20Niraj%20SB"
                className="inline-block w-full text-center py-3 bg-[#5C6E3A] text-[#F7F5F0] text-sm font-semibold hover:bg-[#4a5a2e] transition-colors rounded-sm"
              >
                Send an Email Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
