'use client';
import { useState } from 'react';
import { motion } from 'motion/react';
import { containerVariants, itemVariants } from '@/constants/motionVariants';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqListProps {
  faq: FaqItem[];
}

const FaqList = ({ faq }: FaqListProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFaq = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.ul
      variants={containerVariants as any}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {faq.map(({ question, answer }, index) => (
        <motion.li
          key={index}
          className="p-4 border border-neutral-300 mb-4 rounded-lg mx-auto xl:w-4/5"
          variants={itemVariants as any}
        >
          <button
            className="flex justify-between w-full"
            onClick={() => toggleFaq(index)}
            aria-expanded={openIndex === index}
          >
            <span className="text-left text-md text-neutral-900">
              {question}
            </span>
            <svg
              className="fill-[#1B4B9B] shrink-0 ml-8 cursor-pointer"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className={`transform origin-center transition duration-200 ease-out ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                  openIndex === index ? '!rotate-180' : ''
                }`}
              />
            </svg>
          </button>
          <div
            className={`grid overflow-hidden transition-all duration-300 ease-in-out text-gray-700 text-md ${
              openIndex === index
                ? 'grid-rows-[1fr] opacity-100 mt-4 mb-2'
                : 'grid-rows-[0fr] opacity-0'
            }`}
          >
            <p className="overflow-hidden">{answer}</p>
          </div>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default FaqList;
