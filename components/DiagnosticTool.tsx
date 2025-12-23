'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type DiagnosticAnswers = {
  monthlyProduction: number;
  insuranceMethod: 'manual' | 'software' | 'arrival' | null;
  afterHours: 'voicemail' | 'service' | 'ai' | null;
  ghostPatients: 'under100' | '100-500' | '500+' | null;
  noShowHandling: 'call' | 'text' | 'none' | null;
};

type LeakBreakdown = {
  insuranceLeak: number;
  afterHoursLeak: number;
  databaseLeak: number;
  noShowLeak: number;
  totalMonthlyLeak: number;
  percentageOfRevenue: number;
};

const questions = [
  {
    id: 'monthlyProduction',
    title: 'First, what is your average monthly production?',
    subtitle: 'This helps us calculate your specific revenue recovery potential',
    type: 'input' as const,
    placeholder: '$150,000',
  },
  {
    id: 'insuranceMethod',
    title: 'How does your staff currently verify insurance eligibility?',
    subtitle: 'This is the #1 revenue leak in most practices',
    type: 'choice' as const,
    options: [
      { value: 'manual', label: 'Manual phone calls to insurance', leak: 'high', icon: '📞' },
      { value: 'software', label: 'Software-based verification', leak: 'low', icon: '💻' },
      { value: 'arrival', label: 'We verify when they arrive', leak: 'critical', icon: '🚨' },
    ],
  },
  {
    id: 'afterHours',
    title: 'What happens when a patient calls after 5:00 PM?',
    subtitle: 'Emergency cases are your highest-value leads',
    type: 'choice' as const,
    options: [
      { value: 'voicemail', label: 'Goes to voicemail', leak: 'high', icon: '📨' },
      { value: 'service', label: 'Answering service takes message', leak: 'medium', icon: '📱' },
      { value: 'ai', label: '24/7 AI booking system', leak: 'zero', icon: '🤖' },
    ],
  },
  {
    id: 'ghostPatients',
    title: 'How many "Ghost Patients" are in your database?',
    subtitle: 'Patients who haven\'t been scheduled in 6+ months',
    type: 'choice' as const,
    options: [
      { value: 'under100', label: 'Under 100 patients', leak: 'low', icon: '👻' },
      { value: '100-500', label: '100-500 patients', leak: 'medium', icon: '👻👻' },
      { value: '500+', label: '500+ patients', leak: 'high', icon: '👻👻👻' },
    ],
  },
  {
    id: 'noShowHandling',
    title: 'How do you handle no-shows?',
    subtitle: 'Most practices lose 10-15% of revenue here',
    type: 'choice' as const,
    options: [
      { value: 'call', label: 'We call them later to reschedule', leak: 'medium', icon: '☎️' },
      { value: 'text', label: 'Send one reminder text', leak: 'medium', icon: '💬' },
      { value: 'none', label: 'No formal follow-up process', leak: 'high', icon: '❌' },
    ],
  },
];

export default function DiagnosticTool() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<DiagnosticAnswers>({
    monthlyProduction: 0,
    insuranceMethod: null,
    afterHours: null,
    ghostPatients: null,
    noShowHandling: null,
  });
  const [showResults, setShowResults] = useState(false);
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const calculateLeaks = (): LeakBreakdown => {
    const { monthlyProduction, insuranceMethod, afterHours, ghostPatients, noShowHandling } = answers;

    // Insurance Leak Calculation
    let insuranceLeak = 0;
    if (insuranceMethod === 'manual') insuranceLeak = monthlyProduction * 0.008; // 0.8%
    if (insuranceMethod === 'software') insuranceLeak = monthlyProduction * 0.002; // 0.2%
    if (insuranceMethod === 'arrival') insuranceLeak = monthlyProduction * 0.015; // 1.5%

    // After-Hours Leak (Emergency cases)
    let afterHoursLeak = 0;
    if (afterHours === 'voicemail') afterHoursLeak = monthlyProduction * 0.025; // 2.5%
    if (afterHours === 'service') afterHoursLeak = monthlyProduction * 0.012; // 1.2%
    if (afterHours === 'ai') afterHoursLeak = 0;

    // Database Leak (Ghost patients - hygiene revenue)
    let databaseLeak = 0;
    if (ghostPatients === 'under100') databaseLeak = monthlyProduction * 0.015; // 1.5%
    if (ghostPatients === '100-500') databaseLeak = monthlyProduction * 0.035; // 3.5%
    if (ghostPatients === '500+') databaseLeak = monthlyProduction * 0.055; // 5.5%

    // No-Show Leak
    let noShowLeak = 0;
    if (noShowHandling === 'call') noShowLeak = monthlyProduction * 0.08; // 8%
    if (noShowHandling === 'text') noShowLeak = monthlyProduction * 0.06; // 6%
    if (noShowHandling === 'none') noShowLeak = monthlyProduction * 0.12; // 12%

    const totalMonthlyLeak = insuranceLeak + afterHoursLeak + databaseLeak + noShowLeak;
    const percentageOfRevenue = (totalMonthlyLeak / monthlyProduction) * 100;

    return {
      insuranceLeak: Math.round(insuranceLeak),
      afterHoursLeak: Math.round(afterHoursLeak),
      databaseLeak: Math.round(databaseLeak),
      noShowLeak: Math.round(noShowLeak),
      totalMonthlyLeak: Math.round(totalMonthlyLeak),
      percentageOfRevenue: Math.round(percentageOfRevenue * 10) / 10,
    };
  };

  const handleSendEmail = async () => {
    if (!email || !email.includes('@')) return;

    setIsSending(true);

    try {
      const leakBreakdown = calculateLeaks();

      const response = await fetch('/api/send-recovery-plan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          leakBreakdown,
          monthlyProduction: answers.monthlyProduction,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setEmailSubmitted(true);
      } else {
        console.error('Failed to send email:', data.error);
        alert('Failed to send email. Please try again.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  const handleAnswer = (key: string, value: any) => {
    setAnswers({ ...answers, [key]: value });

    // Auto-advance for choice questions
    if (questions[currentStep].type === 'choice') {
      setTimeout(() => {
        if (currentStep < questions.length - 1) {
          setCurrentStep(currentStep + 1);
        } else {
          setShowResults(true);
        }
      }, 400);
    }
  };

  const handleContinue = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  if (showResults) {
    const leakBreakdown = calculateLeaks();

    return (
      <div className="p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-4">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span className="text-xs font-bold text-red-400 uppercase tracking-widest">Diagnostic Complete</span>
            </div>
            <h3 className="text-3xl font-serif font-bold text-white mb-2">
              Your Revenue Leak Map
            </h3>
            <p className="text-slate-400">
              Based on your operational friction points
            </p>
          </div>

          {/* Leak Breakdown */}
          <div className="space-y-3 mb-8">
            {[
              { label: 'Insurance Verification Leak', amount: leakBreakdown.insuranceLeak, color: 'from-red-500 to-orange-500' },
              { label: 'After-Hours Lead Leak', amount: leakBreakdown.afterHoursLeak, color: 'from-orange-500 to-amber-500' },
              { label: 'Ghost Patient Database Leak', amount: leakBreakdown.databaseLeak, color: 'from-amber-500 to-yellow-500' },
              { label: 'No-Show Recovery Leak', amount: leakBreakdown.noShowLeak, color: 'from-yellow-500 to-gold-500' },
            ].map((leak, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between p-4 bg-navy-800/50 border border-navy-700/50 rounded-xl"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-1 h-12 rounded-full bg-gradient-to-b ${leak.color}`}></div>
                  <span className="text-slate-200 font-medium">{leak.label}</span>
                </div>
                <span className="text-2xl font-bold text-white">${leak.amount.toLocaleString()}/mo</span>
              </motion.div>
            ))}
          </div>

          {/* Total */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="relative overflow-hidden rounded-2xl border-2 border-gold-500/50 bg-gradient-to-br from-gold-500/20 via-gold-600/10 to-transparent p-8"
          >
            <div className="text-center relative z-10">
              <p className="text-xs font-bold text-gold-400 uppercase tracking-widest mb-2">
                Total Monthly Recovery Potential
              </p>
              <div className="text-5xl font-bold text-white mb-2">
                ${leakBreakdown.totalMonthlyLeak.toLocaleString()}
              </div>
              <p className="text-lg text-slate-300 mb-1">
                That's <span className="font-bold text-gold-400">{leakBreakdown.percentageOfRevenue}%</span> of your monthly revenue
              </p>
              <p className="text-sm text-slate-400 mb-6">
                Annual Impact: <span className="font-bold text-white">${(leakBreakdown.totalMonthlyLeak * 12).toLocaleString()}</span>
              </p>

              {!showEmailCapture && !emailSubmitted && (
                <motion.button
                  onClick={() => setShowEmailCapture(true)}
                  className="bg-white text-navy-950 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:bg-gold-50 shadow-2xl w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Your Custom Recovery Plan →
                </motion.button>
              )}

              {showEmailCapture && !emailSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <div className="text-center mb-4">
                    <p className="text-sm text-slate-300 font-medium">
                      Enter your email to receive your personalized recovery plan
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="flex-1 px-4 py-3 bg-navy-800/50 border border-gold-500/30 rounded-lg text-white placeholder-slate-500 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all outline-none"
                    />
                    <motion.button
                      onClick={handleSendEmail}
                      disabled={!email || !email.includes('@') || isSending}
                      className="px-6 py-3 bg-white text-navy-950 rounded-lg font-bold hover:bg-gold-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSending ? 'Sending...' : 'Send Plan →'}
                    </motion.button>
                  </div>
                  <p className="text-xs text-slate-500 text-center">
                    We'll email your detailed recovery plan + book your discovery call
                  </p>
                </motion.div>
              )}

              {emailSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-teal-500/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-white font-bold text-lg">Recovery Plan Sent to {email}!</p>
                  <p className="text-slate-400 text-sm">
                    Check your inbox for your personalized report.<br />
                    Now let's schedule your discovery call.
                  </p>
                  <motion.a
                    href="#book-call"
                    onClick={() => {
                      // Smooth scroll to booking section
                      const bookingSection = document.getElementById('book-call');
                      bookingSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className="inline-block bg-teal-500 text-navy-950 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:bg-teal-400 shadow-2xl w-full mt-4"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book Your Discovery Call →
                  </motion.a>
                </motion.div>
              )}
            </div>
          </motion.div>

          <button
            onClick={() => {
              setShowResults(false);
              setCurrentStep(0);
              setAnswers({
                monthlyProduction: 0,
                insuranceMethod: null,
                afterHours: null,
                ghostPatients: null,
                noShowHandling: null,
              });
            }}
            className="mt-6 text-sm text-slate-400 hover:text-white transition-colors w-full text-center"
          >
            ← Start Over
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="p-8">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">
            Question {currentStep + 1} of {questions.length}
          </span>
          <span className="text-xs text-slate-500">{Math.round(progress)}% Complete</span>
        </div>
        <div className="w-full bg-navy-800 rounded-full h-1.5 overflow-hidden">
          <motion.div
            className="bg-gradient-to-r from-teal-500 to-blue-500 h-full rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-white mb-2">
            {currentQuestion.title}
          </h3>
          <p className="text-slate-400 text-sm mb-8">
            {currentQuestion.subtitle}
          </p>

          {currentQuestion.type === 'input' ? (
            <div>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-xl">$</span>
                <input
                  type="number"
                  value={answers.monthlyProduction || ''}
                  onChange={(e) => handleAnswer('monthlyProduction', parseInt(e.target.value) || 0)}
                  className="w-full pl-10 pr-4 py-4 bg-navy-800 border border-navy-700/50 rounded-xl text-white text-2xl placeholder-slate-500 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none"
                  placeholder="150000"
                />
              </div>
              <button
                onClick={handleContinue}
                disabled={!answers.monthlyProduction}
                className="mt-6 w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-400 hover:to-blue-400 disabled:opacity-50 disabled:cursor-not-allowed text-navy-950 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg"
              >
                Continue →
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {currentQuestion.options?.map((option) => (
                <motion.button
                  key={option.value}
                  onClick={() => handleAnswer(currentQuestion.id, option.value)}
                  className={`w-full p-5 rounded-xl border-2 transition-all text-left flex items-center gap-4 group ${
                    answers[currentQuestion.id as keyof DiagnosticAnswers] === option.value
                      ? 'border-teal-500 bg-teal-500/10'
                      : 'border-navy-700/50 bg-navy-800/30 hover:border-teal-500/50 hover:bg-navy-800/50'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-3xl">{option.icon}</span>
                  <div className="flex-1">
                    <div className="font-bold text-white text-lg mb-1">{option.label}</div>
                    <div className={`text-xs uppercase tracking-wide font-bold ${
                      option.leak === 'critical' ? 'text-red-400' :
                      option.leak === 'high' ? 'text-orange-400' :
                      option.leak === 'medium' ? 'text-yellow-400' :
                      option.leak === 'low' ? 'text-teal-400' :
                      'text-green-400'
                    }`}>
                      {option.leak === 'zero' ? '✓ No Leak' : `${option.leak} Leak`}
                    </div>
                  </div>
                  <svg className="w-6 h-6 text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
