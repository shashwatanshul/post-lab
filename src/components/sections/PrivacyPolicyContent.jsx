import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const privacyData = [
  {
    title: "Effective Date: May 1, 2025",
    content: (
      <>
        <p>
          PostLabs.com is owned and operated by Post Labs, Inc., and is the data
          controller for this Site. You can contact us at:
        </p>
        <p>
          Post Labs, Inc.
          <br />
          365 Bloor Street East
          <br />
          Toronto, Ontario, <br />
          M4W 3L4
          <br />
          Email:{" "}
          <a href="mailto:legal@postlabs.com" className="underline">
            legal@postlabs.com
          </a>
        </p>
        <p>
          We respect your privacy and are committed to protecting your personal
          information. This policy explains what information we collect, how we
          use it, and the choices you have regarding your data.
        </p>
      </>
    ),
  },
  {
    title: "Purpose",
    content: (
      <>
        <p>
          The purpose of this privacy policy is to inform users of our Site
          about:
        </p>
        <ol className="list-decimal list-inside space-y-2">
          <li>The personal data we collect;</li>
          <li>How we use collected data;</li>
          <li>Who has access to the data collected;</li>
          <li>The rights of Site users regarding their personal data.</li>
        </ol>
      </>
    ),
  },
  {
    title: "GDPR",
    content: (
      <p>
        Our business operates in Canada, and we comply with Canadian privacy
        laws. We do not process data under the European Union’s GDPR framework.
        If you are accessing our Site from the EU, please be aware of this.
      </p>
    ),
  },
  {
    title: "Consent",
    content: (
      <>
        <p>
          By using our Site, you agree to the terms of this privacy policy and
          consent to our collection and use of your data as described.
        </p>
        <p>
          If the legal basis for processing your personal data is your consent,
          you may withdraw your consent at any time. Please note that
          withdrawing your consent does not affect any processing we carried out
          before your withdrawal.
        </p>
        <p>
          To withdraw your consent, you can stop using our Site and contact us
          at{" "}
          <a href="mailto:legal@postlabs.com" className="underline">
            legal@postlabs.com
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: "Legal Basis for Processing",
    content: (
      <>
        <p>
          We process personal data as necessary for our legitimate business
          interests, which include:
        </p>
        <ol className="list-decimal list-inside space-y-2">
          <li>Operating and improving our Site and services;</li>
          <li>Responding to inquiries and potential business opportunities;</li>
          <li>Protecting our legal rights and ensuring Site security.</li>
        </ol>
      </>
    ),
  },
  {
    title: "Personal Data We Collect",
    content: (
      <p>
        We only collect data that helps us achieve the purposes outlined in this
        policy. We will not collect additional data without notifying you first.
      </p>
    ),
  },
  {
    title: "Data Collected Automatically",
    content: (
      <>
        <p>When you visit our Site, we automatically collect:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>General location (city or region)</li>
          <li>Device information (desktop, mobile, etc.)</li>
          <li>Analytics data through cookies and similar technologies</li>
        </ul>
      </>
    ),
  },
  {
    title: "Data Collected Directly from You",
    content: (
      <>
        <p>We use your personal data to:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Improve the performance, security, and usability of our Site;</li>
          <li>
            Understand user behaviour through analytics to improve our services;
          </li>
          <li>Respond to inquiries and provide customer support;</li>
          <li>Communicate with you, if you have asked us to.</li>
        </ul>
        <p>
          We will not use your data for any purposes not listed here without
          notifying you first.
        </p>
      </>
    ),
  },
  {
    title: "How We Use Personal Data",
    content: (
      <>
        <p>We collect personal data you voluntarily provide when:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>You fill out a form on our Site;</li>
          <li>You contact us directly by email.</li>
        </ul>
        <p>This may include:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Name</li>
          <li>Email address</li>
          <li>Any message or information you choose to submit</li>
        </ul>
      </>
    ),
  },
  {
    title: "Commercial Electronic Messages",
    content: (
      <p>
        If you provide us with your email address, we will only send you
        commercial electronic messages with your consent. You can unsubscribe at
        any time by following the instructions in the email or by contacting us
        at{" "}
        <a href="mailto:legal@postlabs.com" className="underline">
          legal@postlabs.com
        </a>
        .
      </p>
    ),
  },
  {
    title: "Who We Share Personal Data With",
    content: (
      <>
        <p>We only share your data when necessary, including:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Our employees, who require access to perform their job duties;
          </li>
          <li>
            External advisors and service providers under strict confidentiality
            agreements;
          </li>
          <li>
            Buyers or prospective buyers, if we sell or consider selling the
            company.
          </li>
        </ul>
        <p>We do not sell your personal data to third parties.</p>
        <p>We may disclose your data if required by law or if necessary to:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Comply with legal proceedings;</li>
          <li>Protect our legal rights;</li>
          <li>Prevent fraud or other illegal activities.</li>
        </ul>
      </>
    ),
  },
  {
    title: "How Long We Store Personal Data",
    content: (
      <p>
        We retain personal data only as long as necessary to achieve the
        purposes for which it was collected. Once the purpose is fulfilled, we
        delete or anonymize your data, unless legal obligations require us to
        retain it longer.
      </p>
    ),
  },
  {
    title: "How We Protect Your Data",
    content: (
      <>
        <p>We take reasonable precautions to protect your data:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>We use secure third-party cloud services;</li>
          <li>We limit access to data to those who need it;</li>
          <li>We monitor our systems for vulnerabilities.</li>
        </ul>
        <p>
          However, no method of transmission or storage is completely secure.
          While we do our best, we cannot guarantee absolute security.
        </p>
      </>
    ),
  },
  {
    title: "Cookies and Tracking Technologies",
    content: (
      <>
        <p>We use cookies and similar technologies to:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Understand how you use our Site;</li>
          <li>Improve performance and user experience;</li>
          <li>Provide insights through analytics.</li>
        </ul>
        <p>
          You can manage or disable cookies through your browser settings.
          Disabling cookies may affect your experience on our Site.
        </p>
      </>
    ),
  },
  {
    title: "Children’s Privacy",
    content: (
      <p>
        We do not knowingly collect or use personal data from anyone under 18
        years of age. If you are under 18, please do not use our Site or submit
        personal information
      </p>
    ),
  },
  {
    title: "Your Rights",
    content: (
      <>
        <p>Under Canadian privacy laws, you have the right to:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Access the personal data we hold about you;</li>
          <li>Request corrections to inaccurate or incomplete data;</li>
          <li>
            Request deletion of your personal data, subject to legal
            requirements.
          </li>
        </ul>
        <p>
          To exercise these rights, contact us at{" "}
          <a href="mailto:legal@postlabs.com" className="underline">
            legal@postlabs.com
          </a>
          . We will do our best to respond promptly.
        </p>
      </>
    ),
  },
  {
    title: "Complaints",
    content: (
      <>
        <p>
          If you have concerns about how we handle your personal data, please
          contact us at{" "}
          <a href="mailto:legal@postlabs.com" className="underline">
            legal@postlabs.com
          </a>
          .
        </p>
        <p>
          If you are not satisfied with our response, you may contact the Office
          of the Privacy Commissioner of Canada:
        </p>
        <p>
          Office of the Privacy Commissioner of Canada
          <br />
          Website:{" "}
          <a
            href="https://www.priv.gc.ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            https://www.priv.gc.ca/
          </a>
          <br />
          Phone:{" "}
          <a href="tel:1-800-282-1376" className="underline">
            1-800-282-1376
          </a>
        </p>
      </>
    ),
  },
  {
    title: "Changes to This Privacy Policy",
    content: (
      <p>
        We may update this privacy policy from time to time. When we do, we will
        post the updated version here and update the Effective Date at the top
        of this page. We encourage you to review it periodically.
      </p>
    ),
  },
  {
    title: "Contact Us",
    content: (
      <>
        <p>
          If you have any questions about this policy or how we handle your
          personal data, please contact:
        </p>
        <p>
          <strong>Post Labs, Inc.</strong>
          <br />
          Email:{" "}
          <a href="mailto:legal@postlabs.com" className="underline">
            legal@postlabs.com
          </a>
        </p>
      </>
    ),
  },
];

const PrivacySection = ({ title, content, headingRef }) => (
  <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 py-12">
    <div className="md:col-span-5 mb-4 md:mb-0">
      <h2
        ref={headingRef}
        className="text-2xl md:text-4xl pr-2 md:pr-[10px] h5 privacy-heading font-interTight"
      >
        {title}
      </h2>
    </div>
    <div className="md:col-span-5 md:col-start-8 rich-text w-richtext">
      <div className="space-y-4 text-gray-700">{content}</div>
    </div>
  </div>
);

const PrivacyPolicyContent = () => {
  const componentRef = useRef(null);
  const sectionRefs = useRef([]);
  const headingRefs = useRef([]);

  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, privacyData.length);
    headingRefs.current = headingRefs.current.slice(0, privacyData.length);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const triggers = headingRefs.current.map((heading, index) => {
        return ScrollTrigger.create({
          trigger: sectionRefs.current[index],
          start: "top top",
          end: () =>
            `+=${heading.parentElement.offsetHeight - heading.offsetHeight}`,
          pin: heading,
          pinSpacing: false,
          pinType: "transform",
          scrub: 1,
        });
      });
      return () => {
        triggers.forEach((trigger) => trigger.kill());
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={componentRef}
      className="privacy-section relative bg-white text-black"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="floating-grid h-full max-w-[1400px] mx-auto">
          <div className="floating-grid-col first"></div>
          <div className="floating-grid-col"></div>
          <div className="floating-grid-col"></div>
          <div className="floating-grid-col last"></div>
        </div>
      </div>
      <div className="relative z-10">
        {privacyData.map((item, index) => (
          <div
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="border-b border-gray-300"
          >
            <div className="max-w-[1400px] px-4 md:px-10">
              <PrivacySection
                title={item.title}
                content={item.content}
                headingRef={(el) => (headingRefs.current[index] = el)}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrivacyPolicyContent;
