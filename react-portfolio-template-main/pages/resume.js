import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import ProjectResume from "../components/ProjectResume";
import Button from "../components/Button";
import data from "../data/portfolio.json";

const Resume = () => {
  const router = useRouter();
  const [mount, setMount] = useState(false);
  const resume = data.resume || {};

  useEffect(() => {
    setMount(true);
    if (!data.showResume) {
      router.push("/");
    }
  }, [router]);

  return (
    <>
      {data.showCursor && <Cursor />}

      <div className={`container mx-auto mb-10 ${data.showCursor && "cursor-none"}`}>
        <Header isBlog />

        {mount && (
          <div className="mt-10 flex justify-center px-3">
            <div className="w-full max-w-5xl rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_15px_40px_rgba(15,23,42,0.08)] md:p-10">
              <header className="border-b border-slate-200 pb-5">
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                  <div>
                    <h1 className="text-4xl font-bold tracking-tight text-slate-900">
                      {data.resumeName || data.name}
                    </h1>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-700">
                    <a href="mailto:faithaleczes.c@gmail.com" className="hover:text-slate-900">
                      faithaleczes.c@gmail.com
                    </a>
                    <span>|</span>
                    <a href="tel:+639062893153" className="hover:text-slate-900">
                      09062893153
                    </a>
                    <span>|</span>
                    <a
                      href="https://www.linkedin.com/in/faith-cayacap-0572f"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-slate-900"
                    >
                      linkedin.com/in/faith-cayacap-0572f
                    </a>
                  </div>
                </div>
              </header>

              <section className="mt-8">
                <div className="mb-3 flex items-center gap-3">
                  <h2 className="text-lg font-bold uppercase tracking-[0.12em] text-slate-800">
                    Education
                  </h2>
                  <div className="h-px flex-1 bg-slate-200" />
                </div>

                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-xl font-semibold text-slate-900">
                      {resume.education?.universityName}
                    </p>
                    <p className="text-base text-slate-600">
                      {resume.education?.universityPara}
                    </p>
                  </div>

                  <div className="text-sm font-medium text-slate-700 md:text-right">
                    {resume.education?.universityDate}
                  </div>
                </div>
              </section>

              <section className="mt-8">
                <div className="mb-3 flex items-center gap-3">
                  <h2 className="text-lg font-bold uppercase tracking-[0.12em] text-slate-800">
                    Professional Summary
                  </h2>
                  <div className="h-px flex-1 bg-slate-200" />
                </div>

                <p className="text-base leading-7 text-slate-700">
                  {resume.tagline}
                </p>
                <p className="mt-3 text-base leading-7 text-slate-700">
                  {resume.description}
                </p>
              </section>

              <section className="mt-8">
                <div className="mb-3 flex items-center gap-3">
                  <h2 className="text-lg font-bold uppercase tracking-[0.12em] text-slate-800">
                    Skills
                  </h2>
                  <div className="h-px flex-1 bg-slate-200" />
                </div>

                <div className="space-y-3 text-sm leading-6 text-slate-700">
                  {resume.languages && (
                    <div>
                      <span className="font-semibold text-slate-900">Design & Creative Tools:</span>{" "}
                      {resume.languages[0]}
                    </div>
                  )}
                  {resume.languages && (
                    <div>
                      <span className="font-semibold text-slate-900">UX Research & Design:</span>{" "}
                      {resume.languages[1]}
                    </div>
                  )}
                  {resume.languages && (
                    <div>
                      <span className="font-semibold text-slate-900">Productivity & Documentation:</span>{" "}
                      {resume.languages[2]}
                    </div>
                  )}
                  {resume.languages && (
                    <div>
                      <span className="font-semibold text-slate-900">Professional Qualities:</span>{" "}
                      {resume.languages[3]}
                    </div>
                  )}
                  {resume.languages && (
                    <div>
                      <span className="font-semibold text-slate-900">Technical Development:</span>{" "}
                      {resume.languages[4]}
                    </div>
                  )}
                </div>
              </section>

              <section className="mt-8">
                <div className="mb-4 flex items-center gap-3">
                  <h2 className="text-lg font-bold uppercase tracking-[0.12em] text-slate-800">
                    Project &amp; Design Experience
                  </h2>
                  <div className="h-px flex-1 bg-slate-200" />
                </div>

                <div className="space-y-6">
                  {resume.experiences?.map(({ id, dates, position, bullets }) => (
                    <ProjectResume
                      key={id}
                      dates={dates}
                      type=""
                      position={position}
                      bullets={bullets}
                    />
                  ))}
                </div>
              </section>

              <section className="mt-8">
                <div className="mb-3 flex items-center gap-3">
                  <h2 className="text-lg font-bold uppercase tracking-[0.12em] text-slate-800">
                    Organizational and Leadership Experience
                  </h2>
                  <div className="h-px flex-1 bg-slate-200" />
                </div>

                <div className="space-y-4 text-sm text-slate-700">
                  <div className="flex flex-col gap-2 md:flex-row md:justify-between">
                    <div>
                      <p className="font-semibold text-slate-900">Computer Science Society</p>
                      <p className="text-slate-700">Member - Sponsorship &amp; Partnership Lead - Secretariat Lead - Executive Secretary</p>
                    </div>
                    <span className="text-slate-600">Aug 2021 - Present</span>
                  </div>

                  <ul className="list-disc space-y-2 pl-5">
                    <li>Organized sponsorship data and partner tracking using Microsoft Excel to ensure project transparency.</li>
                    <li>Coordinated member communications and documented organizational workflows in Microsoft Word.</li>
                  </ul>

                  <div className="flex flex-col gap-2 md:flex-row md:justify-between">
                    <div>
                      <p className="font-semibold text-slate-900">AWS Cloud Club - Haribon</p>
                      <p className="text-slate-700">UI/UX and Documentation Member</p>
                    </div>
                    <span className="text-slate-600">Jan 2025 - May 2025</span>
                  </div>

                  <ul className="list-disc space-y-2 pl-5">
                    <li>There are projects for UI/UX design and social media content, and I assisted as a photographer and videographer for organizational events.</li>
                  </ul>
                </div>
              </section>

              <section className="mt-8">
                <div className="mb-3 flex items-center gap-3">
                  <h2 className="text-lg font-bold uppercase tracking-[0.12em] text-slate-800">
                    Certification
                  </h2>
                  <div className="h-px flex-1 bg-slate-200" />
                </div>

                <div className="space-y-3">
                  {resume.others?.map((item) => (
                    <div key={item.title} className="flex items-start justify-between gap-4 text-sm text-slate-700">
                      <p className="list-disc pl-5">
                        <span className="font-semibold text-slate-900">{item.title}</span>
                      </p>
                      <span className="whitespace-nowrap">{item.date}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Resume;
