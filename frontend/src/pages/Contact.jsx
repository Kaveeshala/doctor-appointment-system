import React, { useState } from 'react'
import contactImage from '../assets/doctor-bg-2.jpg'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Briefcase } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return

    // Display confirmation
    setIsSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitted(false)
    }, 4000)
  }

  return (
    <div className='py-8 sm:py-12'>
      {/* Title Header */}
      <div className='text-center text-2xl sm:text-3xl font-semibold tracking-wide mb-10'>
        <p className='text-gray-300'>
          CONTACT <span className='text-med-accent font-bold'>US</span>
        </p>
        <p className='text-gray-400 text-sm font-normal mt-2 max-w-md mx-auto'>
          We are here to assist you. Reach out to our medical staff, customer support, or administration.
        </p>
      </div>

      {/* Main Office & Careers Showcase */}
      <div className='my-6 flex flex-col md:flex-row items-center gap-10 lg:gap-14 bg-med-card/30 border border-white/10 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-xl'>
        {/* Left Side Image */}
        <div className='w-full md:w-5/12 overflow-hidden rounded-2xl shadow-lg border border-white/10 bg-med-dark/50'>
          <img
            src={contactImage}
            alt='Prescripto Medical Office'
            className='w-full h-72 sm:h-80 md:h-[400px] object-cover object-center hover:scale-105 transition-transform duration-500'
          />
        </div>

        {/* Right Side Info */}
        <div className='flex flex-col justify-center gap-8 md:w-7/12 text-gray-300 text-sm sm:text-base'>
          {/* Office Info */}
          <div className='flex flex-col gap-3'>
            <h3 className='text-lg sm:text-xl font-bold text-white tracking-wide flex items-center gap-2'>
              <MapPin className='w-5 h-5 text-med-accent' />
              OUR OFFICE
            </h3>
            <p className='text-gray-300 leading-relaxed pl-7'>
              54709 Willms Station, Suite 350 <br />
              Washington, DC 20001, USA
            </p>
            <div className='pl-7 flex flex-col gap-2 mt-1'>
              <p className='flex items-center gap-2.5 text-gray-300'>
                <Phone className='w-4 h-4 text-med-accent' />
                <span>Tel: +1 (415) 555-0132</span>
              </p>
              <p className='flex items-center gap-2.5 text-gray-300'>
                <Mail className='w-4 h-4 text-med-accent' />
                <span>Email: contact@prescripto.com</span>
              </p>
              <p className='flex items-center gap-2.5 text-gray-300'>
                <Clock className='w-4 h-4 text-med-accent' />
                <span>Hours: Mon - Sat: 8:00 AM - 8:00 PM</span>
              </p>
            </div>
          </div>

          <hr className='border-white/10' />

          {/* Careers Info */}
          <div className='flex flex-col gap-3'>
            <h3 className='text-lg sm:text-xl font-bold text-white tracking-wide flex items-center gap-2'>
              <Briefcase className='w-5 h-5 text-med-accent' />
              CAREERS AT PRESCRIPTO
            </h3>
            <p className='text-gray-300 leading-relaxed pl-7'>
              Learn more about our clinical teams, technology engineering, and open healthcare positions.
            </p>
            <div className='pl-7 mt-2'>
              <button
                type='button'
                onClick={() => alert('Career portal opening soon! Please check back later.')}
                className='border border-white/20 hover:border-med-accent text-white hover:text-med-dark hover:bg-med-accent px-8 py-3 text-sm font-semibold rounded-xl transition-all duration-300 cursor-pointer shadow-md hover:shadow-med-accent/20'
              >
                Explore Jobs
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Contact Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 my-12'>
        <div className='bg-med-card/30 border border-white/10 rounded-2xl p-6 flex items-start gap-4 hover:border-med-accent/40 transition-all'>
          <div className='p-3 rounded-xl bg-med-accent/10 border border-med-accent/20 text-med-accent'>
            <Phone className='w-6 h-6' />
          </div>
          <div>
            <h4 className='text-white font-semibold text-base mb-1'>Emergency Line</h4>
            <p className='text-gray-400 text-xs sm:text-sm mb-1'>24/7 Immediate triage</p>
            <p className='text-med-accent font-medium text-sm'>+1 (800) 911-CARE</p>
          </div>
        </div>

        <div className='bg-med-card/30 border border-white/10 rounded-2xl p-6 flex items-start gap-4 hover:border-med-accent/40 transition-all'>
          <div className='p-3 rounded-xl bg-med-accent/10 border border-med-accent/20 text-med-accent'>
            <Mail className='w-6 h-6' />
          </div>
          <div>
            <h4 className='text-white font-semibold text-base mb-1'>General Enquiries</h4>
            <p className='text-gray-400 text-xs sm:text-sm mb-1'>Typically replies within 24h</p>
            <p className='text-med-accent font-medium text-sm'>info@prescripto.com</p>
          </div>
        </div>

        <div className='bg-med-card/30 border border-white/10 rounded-2xl p-6 flex items-start gap-4 hover:border-med-accent/40 transition-all'>
          <div className='p-3 rounded-xl bg-med-accent/10 border border-med-accent/20 text-med-accent'>
            <Clock className='w-6 h-6' />
          </div>
          <div>
            <h4 className='text-white font-semibold text-base mb-1'>Working Hours</h4>
            <p className='text-gray-400 text-xs sm:text-sm mb-1'>Sunday: Emergency Only</p>
            <p className='text-med-accent font-medium text-sm'>8:00 AM - 8:00 PM</p>
          </div>
        </div>
      </div>

      {/* Message Inquiry Form */}
      <div className='mt-16 bg-med-card/20 border border-white/10 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-xl'>
        <div className='max-w-2xl mx-auto'>
          <div className='text-center mb-8'>
            <h3 className='text-2xl font-bold text-white'>Send Us A Message</h3>
            <p className='text-gray-400 text-sm mt-1'>
              Have questions about doctor appointments or insurance coverage? Drop us a note.
            </p>
          </div>

          {isSubmitted && (
            <div className='mb-6 p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 flex items-center gap-3 text-sm'>
              <CheckCircle2 className='w-5 h-5 flex-shrink-0 text-emerald-400' />
              <span>Thank you! Your message has been received. Our team will get back to you shortly.</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
              <div className='flex flex-col gap-2'>
                <label className='text-xs font-medium text-gray-300'>Your Name *</label>
                <input
                  type='text'
                  name='name'
                  required
                  placeholder='e.g. John Doe'
                  value={formData.name}
                  onChange={handleChange}
                  className='w-full px-4 py-3 rounded-xl bg-med-dark/80 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-med-accent transition-colors text-sm'
                />
              </div>

              <div className='flex flex-col gap-2'>
                <label className='text-xs font-medium text-gray-300'>Your Email *</label>
                <input
                  type='email'
                  name='email'
                  required
                  placeholder='e.g. john@example.com'
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full px-4 py-3 rounded-xl bg-med-dark/80 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-med-accent transition-colors text-sm'
                />
              </div>
            </div>

            <div className='flex flex-col gap-2'>
              <label className='text-xs font-medium text-gray-300'>Subject</label>
              <input
                type='text'
                name='subject'
                placeholder='Appointment inquiry, feedback, or general question'
                value={formData.subject}
                onChange={handleChange}
                className='w-full px-4 py-3 rounded-xl bg-med-dark/80 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-med-accent transition-colors text-sm'
              />
            </div>

            <div className='flex flex-col gap-2'>
              <label className='text-xs font-medium text-gray-300'>Message *</label>
              <textarea
                name='message'
                required
                rows='4'
                placeholder='How can we help you today?'
                value={formData.message}
                onChange={handleChange}
                className='w-full px-4 py-3 rounded-xl bg-med-dark/80 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-med-accent transition-colors text-sm resize-none'
              />
            </div>

            <button
              type='submit'
              className='mt-2 w-full sm:w-auto flex items-center justify-center gap-2 bg-med-accent text-med-dark font-semibold px-8 py-3.5 rounded-xl hover:opacity-90 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-med-accent/30'
            >
              <Send className='w-4 h-4' />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact