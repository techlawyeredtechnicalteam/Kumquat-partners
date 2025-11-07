import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";

// Animations
const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" }
  })
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i = 1) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" }
  })
};

export default function AboutUs() {
  const focusAreas = [
    {
      title: "Commercial Litigation",
      description:
        "We represent businesses in complex commercial disputes, delivering swift, strategic courtroom advocacy to protect commercial interests."
    },
    {
      title: "Arbitration & Alternative Dispute Resolution",
      description:
        "Offering efficient, confidential, and cost-effective resolution of disputes through domestic and international arbitration, mediation, and negotiation."
    },
    {
      title: "Criminal Law & Fundamental Rights Enforcement",
      description:
        "Defending individuals and entities against criminal allegations while protecting constitutional rights through strategic, rights-based legal action."
    },
    {
      title: "Real Estate & Land Disputes",
      description:
        "Advising on land transactions, title disputes, and development issues with a deep understanding of Nigeria’s property laws and regulatory landscape."
    },
    {
      title: "Matrimonial & Child Custody Matters",
      description:
        "Providing compassionate, discreet, and results-driven legal support in sensitive family matters including divorce, custody, and support disputes."
    },
    {
      title: "Employment & Labour Disputes",
      description:
        "Guiding employers and employees through workplace disputes, wrongful terminations, and regulatory compliance before the National Industrial Court."
    },
    {
      title: "Tax Claims & Appeals",
      description:
        "Strategic resolution of complex tax disputes, including representation before tax authorities and tribunals in contentious and appellate matters."
    },
    {
      title: "Intellectual Property Litigation",
      description:
        "Protecting creativity and innovation through aggressive enforcement of IP rights and strategic action against infringement and counterfeiting."
    },
    {
      title: "Energy & Environmental Disputes",
      description:
        "Advising on regulatory compliance, licensing, and litigation in the energy sector, with a focus on sustainable development and environmental stewardship."
    },
    {
      title: "Insolvency, Business Recovery & Receivership",
      description:
        "Supporting distressed businesses and creditors with strategic insolvency advice, restructuring, and recovery solutions to maximize value."
    },
    {
      title: "Maritime & Admiralty Claims",
      description:
        "Representing clients in maritime-related disputes involving cargo, vessel arrest, charter agreements, and marine insurance claims."
    },
    {
      title: "Election Petitions & Political Disputes",
      description:
        "Offering strong, principled legal representation in high-stakes political and electoral disputes at every level of the judicial process."
    },
    {
      title: "Probate and Estate Matters",
      description:
        "Assisting individuals and families with the administration of estates, probate proceedings, and inheritance-related litigation."
    },
    {
      title: "Pre- and Post M&A Disputes",
      description:
        "Resolving transactional disputes arising before and after mergers, acquisitions, and joint ventures, ensuring business continuity and legal clarity."
    },
    {
      title: "Professional Disciplinary Proceedings & Appeals",
      description:
        "Representing clients before regulatory and disciplinary bodies, defending reputation and licensing across professional sectors."
    },
    {
      title: "Shareholder Conflicts and Company Winding-up Actions",
      description:
        "Providing sound legal guidance in shareholder disputes, boardroom battles, and winding-up processes with a focus on protecting business value."
    },
    {
      title: "Product Counterfeiting & Brand Protection Enforcement",
      description:
        "Helping local and multinational brands safeguard their products and reputation through aggressive anti-counterfeiting strategies and enforcement."
    }
  ];

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen py-20 px-6">
        <Head>
          <title>Kumquat Partners | About Us</title>
        </Head>

        <div className="max-w-7xl mx-auto space-y-24">
          {/* Hero Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-garamond">
              About Kumquat Partners
            </h1>
            <div className="mt-6 text-lg text-gray-600 max-w-7xl mx-auto text-justify">
              Kumquat Partners is a boutique law firm delivering bespoke legal
              solutions to individuals, corporations, and government
              institutions with a sharp focus on business litigation,
              arbitration, and alternative dispute resolution (ADR). Our firm is
              built on a foundation of excellence, precision, and strategic
              thinking—tailored to meet the dynamic needs of modern businesses.
              <p className="mb-4 pt-4">
                At Kumquat Partners, we bring together a team of highly skilled,
                motivated, and forward-thinking legal professionals who are
                committed to delivering real-time, practical, and impactful
                solutions. Whether in the courtroom, at the negotiating table,
                or across the arbitration aisle, our lawyers thrive on the
                challenge of complex commercial disputes and are relentless in
                the pursuit of our clients&apos; interests. Founded with a clear
                vision, Kumquat Partners was established to offer top-tier legal
                services comparable to those of Nigeria&apos;s most prestigious
                law firms—but with the accessibility, responsiveness, and
                cost-efficiency that only a focused, client-driven boutique firm
                can provide.
              </p>{" "}
              <p className="mb-4">
                We are not just legal technicians—we are trusted advisors and
                strategic partners to businesses navigating legal risk in a
                fast-paced commercial environment. Kumquat Partners is also
                significantly experienced in the field of criminal litigation in
                Nigeria. Kumquat Partners is a go to firm for criminal law and
                is adept in handling white-collar crime. In addition to
                white-collar crime, we compeently handle a variety of cases
                covering issues such as violent crimes, crimes against property,
                cyber-crime, medical negligence, etc.
              </p>
              <p className="mb-4">
                Our lawyers have vast experience in advising and/or representing
                clients in all Courts in Nigeria, from the Supreme Court and
                State High Courts/Federal High Court to the Magistrates' Courts,
                as well as before investigative, law enforcement and
                adjudicating authorities/agencies. Our lawyers are proficient in
                criminal law and are experts in every area of private defence.
                Our lawyers' experience in the field of white-collar crime has
                grown significantly over the past years, especially with respect
                to money laundering cases.
              </p>
              In the other areas of criminal litigation, our lawyers have
              expertise in advising and representing clients from the beginning
              of an investigation, straight through to the appellate stage. We
              have successfully represented clients in a sizable number of
              criminal matters.
            </div>
          </motion.section>

          {/* Mission, Vision, Values */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Our Mission",
                text: "To deliver client-focused legal services rooted in deep industry insight, responsiveness, and a strong commitment to excellence and ethical standards.",
                image: "/mission.png"
              },
              {
                title: "Our Vision",
                text: "To be Nigeria’s leading boutique law firm recognized for excellence, innovation, and impact in delivering smart, practical, and strategic legal solutions.",
                image: "/vision.png"
              },
              {
                title: "Our Values",
                text: "Integrity, Client-Centricity, Excellence, Innovation and Confidentiality are the core principles that guide every aspect of our practice.",
                image: "/values.png"
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="h-52 relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </section>

          {/* Focus Areas Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-garamond mb-8">
              Our Focus Areas
            </h2>

            <div className="h-72 w-full relative rounded-2xl overflow-hidden shadow-md mb-14">
              <Image
                src="/focus.png"
                alt="Our Practice Areas"
                fill
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {focusAreas.map((area, i) => (
                <motion.div
                  key={area.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={scaleIn}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <h4 className="text-xl font-bold text-primary-300">
                    {area.title}
                  </h4>
                  <p className="mt-2 text-sm text-gray-700 text-pretty">
                    {area.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </Layout>
  );
}
