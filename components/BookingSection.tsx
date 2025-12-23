'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import CalendlyWidget from './CalendlyWidget';

type BookingFormInputs = {
  name: string;
  email: string;
  phone: string;
  practiceName: string;
  monthlyPatients: string;
};

export default function BookingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { register, handleSubmit, formState: { errors }, reset } = useForm<BookingFormInputs>();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingMode, setBookingMode] = useState<'form' | 'calendly'>('calendly');

  const onSubmit = async (data: BookingFormInputs) => {
    // Here you would integrate with your booking system (Calendly, GoHighLevel, etc.)
    console.log('Booking data:', data);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    reset();

    // Reset after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="book-call" ref={ref} className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 skew-x-12 transform origin-top translate-x-32 -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-serif text-navy-900 mb-6">
            Ready to <span className="text-teal-600">Plug the Leak?</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Schedule your free discovery call and see exactly how much revenue you could recover in the next 30 days.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-navy-900 mb-8">
              On Your Discovery Call, You&apos;ll Get:
            </h3>

            <div className="space-y-8">
              {[
                {
                  title: 'Custom Revenue Analysis',
                  description: 'We\'ll calculate your exact monthly revenue leak based on your practice data',
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  )
                },
                {
                  title: 'Live System Demo',
                  description: 'See the AI in action handling calls, verifying insurance, and booking appointments',
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )
                },
                {
                  title: 'Integration Roadmap',
                  description: 'A step-by-step plan for seamless integration with your current PMS',
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  )
                },
                {
                  title: '30-Day Recovery Projection',
                  description: 'Exact revenue numbers you can expect in your first month',
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.3 + (i * 0.1) }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 mr-5 shadow-sm border border-teal-100">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 text-lg mb-1">{benefit.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 p-8 bg-slate-50 rounded-2xl border border-slate-200 relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-teal-500 rounded-l-2xl"></div>
              <p className="text-slate-700 italic text-lg leading-relaxed mb-4">
                &quot;The discovery call alone saved us $3,200/month by identifying our biggest revenue leaks. The ROI has been incredible.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-navy-900 text-white flex items-center justify-center font-bold font-serif">
                  SJ
                </div>
                <div>
                  <p className="font-bold text-navy-900">Dr. Sarah Johnson</p>
                  <p className="text-xs text-slate-500 uppercase tracking-wide">Smile Dental Group</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Booking Form/Calendly */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-3xl shadow-xl border border-slate-100 p-2"
          >
            <div className="bg-white rounded-[20px] p-6 sm:p-8">
              {/* Toggle Buttons */}
              <div className="flex p-1 bg-slate-100 rounded-xl mb-8">
                <button
                  type="button"
                  onClick={() => setBookingMode('calendly')}
                  className={`flex-1 px-4 py-3 rounded-lg font-bold text-sm transition-all ${bookingMode === 'calendly'
                      ? 'bg-white text-teal-600 shadow-sm'
                      : 'text-slate-500 hover:text-navy-900'
                    }`}
                >
                  📅 Book Directly
                </button>
                <button
                  type="button"
                  onClick={() => setBookingMode('form')}
                  className={`flex-1 px-4 py-3 rounded-lg font-bold text-sm transition-all ${bookingMode === 'form'
                      ? 'bg-white text-teal-600 shadow-sm'
                      : 'text-slate-500 hover:text-navy-900'
                    }`}
                >
                  📝 Request Callback
                </button>
              </div>

              {/* Calendly Widget */}
              {bookingMode === 'calendly' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <CalendlyWidget />
                </motion.div>
              )}

              {/* Form */}
              {bookingMode === 'form' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {!isSubmitted ? (
                    <>
                      <h3 className="text-2xl font-bold text-navy-900 mb-6 text-center">
                        Request a Priority Callback
                      </h3>

                      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        <div>
                          <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                            Your Name *
                          </label>
                          <input
                            {...register('name', { required: 'Name is required' })}
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none"
                            placeholder="Dr. John Smith"
                          />
                          {errors.name && (
                            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            {...register('email', {
                              required: 'Email is required',
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address'
                              }
                            })}
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none"
                            placeholder="john@dentalclinic.com"
                          />
                          {errors.email && (
                            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            {...register('phone', { required: 'Phone is required' })}
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none"
                            placeholder="(555) 123-4567"
                          />
                          {errors.phone && (
                            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                          )}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                              Practice Name *
                            </label>
                            <input
                              {...register('practiceName', { required: 'Practice name is required' })}
                              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none"
                              placeholder="Smile Dental"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                              Monthly Patients
                            </label>
                            <select
                              {...register('monthlyPatients', { required: 'Please select' })}
                              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none"
                            >
                              <option value="">Select...</option>
                              <option value="0-50">0-50</option>
                              <option value="51-100">51-100</option>
                              <option value="101-500">101-500</option>
                              <option value="500+">500+</option>
                            </select>
                          </div>
                        </div>

                        <motion.button
                          type="submit"
                          className="w-full bg-navy-900 hover:bg-navy-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl mt-4"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Book My Free Analysis →
                        </motion.button>

                        <p className="text-xs text-slate-400 text-center">
                          No credit card required. Zero obligation. 100% Confidential.
                        </p>
                      </form>
                    </>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-navy-900 mb-2">Request Received!</h3>
                      <p className="text-slate-600">
                        We&apos;ve received your information. A senior growth consultant will contact you within 24 hours.
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
