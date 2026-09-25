import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-10 laptop:mt-20 p-2 laptop:p-0">
        <div className="rounded-[28px] border border-[#c4d2e2] bg-[#d4e1f1] px-5 py-8 tablet:px-8 laptop:px-10 shadow-[0_18px_40px_rgba(54,76,101,0.12)]">
          <div className="flex flex-col gap-6 laptop:flex-row laptop:items-end laptop:justify-between">
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.22em] text-[#53657d]">
                Contact
              </p>
              <h1 className="text-3xl font-bold tracking-[-0.04em] text-[#1d1d1f] tablet:text-5xl laptop:text-6xl">
                Let&apos;s work
                <span className="block">together.</span>
              </h1>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="mailto:faithaleczes.c@gmail.com"
                className="inline-flex items-center justify-center rounded-full border border-[#bfd2ef] bg-white px-4 py-2 text-sm font-medium text-[#23415d] transition hover:bg-[#dfeaf7]"
              >
                Email
              </a>
              <a
                href="https://github.com/faith-cayacap"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#bfd2ef] bg-white px-4 py-2 text-sm font-medium text-[#23415d] transition hover:bg-[#dfeaf7]"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/faith-cayacap-0572f"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#bfd2ef] bg-white px-4 py-2 text-sm font-medium text-[#23415d] transition hover:bg-[#dfeaf7]"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="mt-8 border-t border-[#cfdfe9] pt-5">
            <div className="hidden" aria-hidden="true">
              <Socials />
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[#53657d]">
              All rights reserved 2026
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
