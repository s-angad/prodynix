import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button, Card, SectionHeading } from '../components';

const Products = () => {
  const productFeatures = [
    {
      title: 'Member Management',
      description: 'Complete member profiles, membership tracking, and automated renewal handling.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Check-in System',
      description: 'Quick check-ins via QR code, card swipe, or manual entry with real-time tracking.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Scheduling',
      description: 'Class schedules, trainer bookings, and facility reservations in one unified calendar.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Payment Tracking',
      description: 'Automated payment reminders, invoice generation, and financial reporting.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
    },
    {
      title: 'Attendance Reports',
      description: 'Detailed analytics on member activity, peak hours, and utilization trends.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: 'Staff Management',
      description: 'Employee scheduling, role-based access, and performance tracking tools.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
  ];

  const useCases = [
    {
      title: 'Gyms & Fitness Centers',
      description: 'Manage memberships, track attendance, schedule classes, and handle payments all in one place.',
    },
    {
      title: 'Sports Clubs',
      description: 'Facility booking, member check-ins, and team management for sports organizations.',
    },
    {
      title: 'Wellness Studios',
      description: 'Appointment scheduling, package tracking, and client management for yoga, pilates, and wellness centers.',
    },
    {
      title: 'Training Facilities',
      description: 'Personal training sessions, progress tracking, and schedule management for trainers and clients.',
    },
  ];

  return (
    <div className="pt-14 sm:pt-16 lg:pt-20">
      <Helmet>
        <title>Products | Bixxy Bee Platform</title>
        <meta name="description" content="Bixxy Bee Platform - Comprehensive gym and business automation. Member management, check-ins, scheduling, and payments all in one place." />
      </Helmet>
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-32 bg-hero-gradient bg-grid overflow-hidden">
        <div className="absolute inset-0 overflow-hidden hidden sm:block">
          <div className="absolute top-1/3 left-1/4 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-bee-yellow/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/3 w-48 sm:w-56 lg:w-64 h-48 sm:h-56 lg:h-64 bg-bee-yellow/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Content */}
            <div>
              <span className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-bee-yellow/10 border border-bee-yellow/20 rounded-full text-xs sm:text-sm text-bee-yellow mb-4 sm:mb-6">
                <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-bee-yellow rounded-full mr-2"></span>
                Our Flagship Product
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-bee-white leading-tight mb-4 sm:mb-6">
                Bixxy Bee{' '}
                <span className="text-highlight">Platform</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-bee-slate-400 leading-relaxed mb-6 sm:mb-8">
                A comprehensive automation platform designed for gyms, fitness centers, and businesses that need reliable member management, scheduling, and operational tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button to="/contact" size="lg" fullWidthMobile>
                  Request a Demo
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
                <Button to="/contact" variant="outline" size="lg" fullWidthMobile>
                  Talk to Sales
                </Button>
              </div>
            </div>

            {/* Product Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-bee-slate-800 to-bee-navy border border-bee-slate-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 card-glow">
                {/* Mock Dashboard Header */}
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-bee-yellow/20 rounded-lg flex items-center justify-center">
                      <span className="text-bee-yellow font-bold text-sm sm:text-base">P</span>
                    </div>
                    <span className="text-bee-white-100 font-semibold text-sm sm:text-base">Bixxy Bee Dashboard</span>
                  </div>
                  <div className="flex space-x-1.5 sm:space-x-2">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-bee-slate-500 rounded-full"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-bee-slate-500 rounded-full"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-bee-slate-500 rounded-full"></div>
                  </div>
                </div>

                {/* Mock Stats */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
                  {[
                    { label: 'Active Members', value: '---' },
                    { label: 'Check-ins Today', value: '---' },
                    { label: 'Classes Scheduled', value: '---' },
                  ].map((stat, index) => (
                    <div key={index} className="bg-bee-slate-700/50 rounded-lg p-2 sm:p-3 text-center">
                      <div className="text-lg sm:text-2xl font-bold text-bee-white-100">{stat.value}</div>
                      <div className="text-[10px] sm:text-xs text-bee-slate-500">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Mock Chart Area */}
                <div className="bg-bee-slate-700/30 rounded-lg p-3 sm:p-4">
                  <div className="flex items-end justify-between h-24 space-x-2">
                    {[40, 65, 45, 80, 55, 70, 60].map((height, index) => (
                      <div
                        key={index}
                        className="flex-1 bg-bee-yellow/30 rounded-t"
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-xs text-bee-slate-500">Mon</span>
                    <span className="text-xs text-bee-slate-500">Sun</span>
                  </div>
                </div>
              </div>

              {/* Floating Cards - Hidden on small screens */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-bee-slate-700 border border-bee-slate-700 rounded-lg p-2 sm:p-3 shadow-xl hidden sm:block">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-bee-white-100 text-xs sm:text-sm font-medium">System Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-bee-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Platform Features"
            title="Everything You Need to Run Your Business"
            description="Bixxy Bee combines essential tools into one cohesive platform, eliminating the need for multiple disconnected systems."
            className="mb-10 sm:mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {productFeatures.map((feature, index) => (
              <Card key={index} className="group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-bee-yellow/10 border border-bee-yellow/20 rounded-lg flex items-center justify-center text-bee-yellow mb-3 sm:mb-4 group-hover:bg-bee-yellow/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-bee-white-100 mb-1 sm:mb-2">{feature.title}</h3>
                <p className="text-bee-slate-400 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-bee-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Simple Setup"
            title="Up and Running in Days, Not Months"
            className="mb-10 sm:mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'We learn about your business, current processes, and specific requirements.',
              },
              {
                step: '02',
                title: 'Configuration',
                description: 'Bixxy Bee is configured to match your workflows, branding, and operational needs.',
              },
              {
                step: '03',
                title: 'Launch',
                description: 'Go live with training and support to ensure a smooth transition for your team.',
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-5xl sm:text-6xl font-bold text-bee-slate-800 mb-3 sm:mb-4">{item.step}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-bee-white-100 mb-2">{item.title}</h3>
                <p className="text-bee-slate-400 leading-relaxed text-sm sm:text-base">{item.description}</p>
                {index < 2 && (
                  <div className="hidden md:block absolute top-8 right-0 w-full h-px bg-bee-slate-600/50"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-bee-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Who It's For"
            title="Built for Businesses Like Yours"
            className="mb-10 sm:mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {useCases.map((useCase, index) => (
              <Card key={index} padding="lg" className="group">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-bee-yellow/10 rounded-lg flex items-center justify-center text-bee-yellow group-hover:bg-bee-yellow/20 transition-colors">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-bee-white-100 mb-1 sm:mb-2">{useCase.title}</h3>
                    <p className="text-bee-slate-400 leading-relaxed text-xs sm:text-sm">{useCase.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-bee-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gradient-to-br from-bee-slate-800 to-bee-darker border border-bee-slate-700/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-16 card-glow">
            <div className="absolute inset-0 bg-grid opacity-20 sm:opacity-30"></div>
            <div className="absolute top-0 right-0 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-bee-yellow/10 rounded-full blur-3xl hidden sm:block"></div>

            <div className="relative text-center max-w-3xl mx-auto">
              <SectionHeading
                subtitle="Ready to See Bixxy Bee in Action?"
                title="Schedule a Personalized Demo"
                description="See how Bixxy Bee can streamline your operations. We'll walk you through the platform and show you exactly how it fits your business."
                className="mb-8 sm:mb-10"
              />
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <Button to="/contact" size="lg" fullWidthMobile>
                  Request Demo
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
                <Button
                  href="https://wa.me/1234567890"
                  variant="secondary"
                  size="lg"
                  fullWidthMobile
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
