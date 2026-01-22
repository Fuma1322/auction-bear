"use client"

import { useRef, useState } from "react"

interface FaqItem {
  q: string
  a: string
}

interface FaqsCardProps {
  item: FaqItem
  idx: number
}

const FaqsCard = ({ item, idx }: FaqsCardProps) => {
  const answerElRef = useRef<HTMLDivElement | null>(null)
  const [open, setOpen] = useState(false)
  const [height, setHeight] = useState("0px")

  const toggleAnswer = () => {
    if (!answerElRef.current) return

    const scrollHeight = answerElRef.current.scrollHeight
    setOpen((prev) => !prev)
    setHeight(!open ? `${scrollHeight}px` : "0px")
  }

  return (
    <div
      key={idx}
      className="mt-5 overflow-hidden border-b"
      onClick={toggleAnswer}
    >
      <h4 className="flex cursor-pointer items-center justify-between pb-5 text-lg font-medium text-gray-700">
        {item.q}
        {open ? (
          <svg className="h-5 w-5 text-gray-500" viewBox="0 0 24 24">
            <path d="M20 12H4" stroke="currentColor" strokeWidth="2" />
          </svg>
        ) : (
          <svg className="h-5 w-5 text-gray-500" viewBox="0 0 24 24">
            <path d="M12 4v16m8-8H4" stroke="currentColor" strokeWidth="2" />
          </svg>
        )}
      </h4>

      <div
        ref={answerElRef}
        className="transition-all duration-300"
        style={{ height }}
      >
        <p className="pb-5 text-gray-500">{item.a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const faqsList: FaqItem[] = [
    {
      q: "What are some random questions to ask?",
      a: "That's exactly the reason we created this random question generator."
    },
    {
      q: "Do you include common questions?",
      a: "This generator doesn't include most common questions."
    },
    {
      q: "Can I use this for 21 questions?",
      a: "Yes! You can generate questions specifically for that."
    },
    {
      q: "Are these questions gender specific?",
      a: "No, all questions are gender neutral."
    }
  ]

  return (
    <section className="mx-auto mt-12 max-w-screen-xl px-4 leading-relaxed md:px-8">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl font-semibold text-gray-800">
          Frequently Asked Questions
        </h1>
        <p className="mx-auto max-w-lg text-lg text-gray-600">
          Answered all frequently asked questions. Still confused? Contact us.
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-2xl">
        {faqsList.map((item, idx) => (
          <FaqsCard key={idx} item={item} idx={idx} />
        ))}
      </div>
    </section>
  )
}