import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import doctorBg1 from '../assets/doctor-bg1.jpg'
import doctorBg2 from '../assets/doctor-bg-2.jpg'
import doctorBg3 from '../assets/doctor-bg-3.jpg'

const slides = [
  {
    image: doctorBg1,
    tag: "Trusted Healthcare Specialists",
    title: "Book Appointments With 100+ Trusted Doctors",
    description: "Browse certified medical practitioners, read patient reviews, and book hassle-free consultations in minutes.",
    cta: "Book Appointment",
  },
  {
    image: doctorBg2,
    tag: "Compassionate & Comprehensive Care",
    title: "Experienced Specialists For Your Entire Family",
    description: "Connect with board-certified physicians across diverse specialties committed to personalized treatments.",
    cta: "Find Doctors",
  },
  {
    image: doctorBg3,
    tag: "Modern Clinical Expertise",
    title: "Your Health Journey Begins With Expert Care",
    description: "Seamless online scheduling, instant confirmations, and dedicated medical support for peace of mind.",
    cta: "Explore Specialists",
  },
]

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative w-full h-[400px] sm:h-[460px] md:h-[520px] overflow-hidden rounded-2xl md:rounded-3xl shadow-xl group">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover rounded-2xl md:rounded-3xl"
          />

          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-t from-med-dark via-med-dark/80 to-transparent sm:bg-gradient-to-r sm:from-med-dark sm:via-med-dark/85 sm:to-transparent flex flex-col justify-end sm:justify-center p-5 sm:p-10 md:p-16">
            <div className="max-w-xl text-white pb-6 sm:pb-0">
              {/* Badge / Tag */}
              <span className="inline-block px-3 py-1 text-[11px] sm:text-xs font-semibold tracking-wide uppercase bg-med-card text-med-accent rounded-full mb-2 sm:mb-3 border border-med-slate/40">
                {slide.tag}
              </span>

              {/* Heading */}
              <h1 className="text-xl sm:text-3xl md:text-5xl font-bold leading-snug sm:leading-tight mb-2 sm:mb-3 text-white drop-shadow-sm">
                {slide.title}
              </h1>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm md:text-base text-gray-200 mb-4 sm:mb-6 line-clamp-2 sm:line-clamp-none max-w-lg leading-relaxed">
                {slide.description}
              </p>

              {/* CTA Button */}
              <button
                onClick={() => navigate('/doctors')}
                className="bg-med-accent text-med-dark font-semibold px-5 sm:px-8 py-2.5 sm:py-3 rounded-full hover:opacity-90 hover:shadow-lg transition-all cursor-pointer inline-flex items-center gap-2 text-xs sm:text-base"
              >
                <span>{slide.cta}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Previous Button */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-med-dark/70 hover:bg-med-dark text-white border border-med-slate/30 flex items-center justify-center transition-all opacity-80 group-hover:opacity-100 hover:scale-105 cursor-pointer backdrop-blur-xs"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next Button */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-med-dark/70 hover:bg-med-dark text-white border border-med-slate/30 flex items-center justify-center transition-all opacity-80 group-hover:opacity-100 hover:scale-105 cursor-pointer backdrop-blur-xs"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators / Dots */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 sm:gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentSlide
                ? "w-6 sm:w-8 bg-med-accent"
                : "w-2 sm:w-2.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default Header
