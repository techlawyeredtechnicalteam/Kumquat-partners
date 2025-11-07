import React from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import Layout from "../components/Layout";

const attorneys = [
  {
    name: "Olawale Adeliyi, Esq",
    title: "Partner",
    image: "/owner.png",
    bio: "Olawale was called to the Nigerian Bar in 2009 and went on to build a distinguished legal career, spending over eleven (11) years at one of Nigeria’s leading law firms. During his time there, he was an integral part of the firm’s Litigation, Arbitration, and Alternative Dispute Resolution Practice Group. His experience was enriched by extensive collaboration with highly regarded lawyers across various departments, giving him a well-rounded and robust understanding of diverse areas of law.\n\n Olawale holds several prestigious memberships and certifications. He is a Notary Public for Nigeria, an Associate Member of the Institute of Chartered Mediators and Conciliators (ICMC), an Associate Member of the Chartered Risk Management Institute of Nigeria (CRMI), and a member of the Business Recovery and Insolvency Practitioners Association of Nigeria (BRIPAN). He is also a Member of the Nigerian Institute of Chartered Arbitrators (MCArb)."
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const Attorneys = () => {
  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen py-20 px-4">
        <Head>
          <title>Kumquat Partners | Attorneys</title>
        </Head>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-garamond font-bold text-gray-900 mb-4">
              Meet Our Attorney
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A team of highly skilled, motivated, and forward-thinking legal
              professionals
            </p>
          </div>

          {/* Attorney Cards */}
          {attorneys.map((attorney, i) => (
            <motion.div
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              key={attorney.name}
              className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start"
            >
              {/* Profile Picture */}
              <div className="w-full lg:w-1/3 flex-shrink-0">
                <div className="relative w-full aspect-square max-w-sm mx-auto overflow-hidden rounded-2xl">
                  <Image
                    src={attorney.image}
                    alt={attorney.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold font-garamond text-gray-900 mb-6">
                  Our Story
                </h2>
                {attorney.bio.split("\n\n").map((paragraph, index) => (
                  <div
                    key={index}
                    className="space-y-4 text-gray-700 text-lg leading-relaxed mb-8 text-justify"
                  >
                    <p>{paragraph}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Attorneys;
