import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button, Card, SectionHeading } from '../components';

const HowWeWork = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const workProjects = [
    {
      id: 1,
      title: 'Business Process Automation',
      category: 'automation',
      image: '/images/howwework-project-1.jpg',
      description: 'Streamlined enterprise workflow with 60% efficiency gain',
      details: 'Automated complex business processes for a Fortune 500 company, reducing manual work by 60% and improving accuracy.',
      results: ['60% efficiency gain', '40% cost reduction', '99.9% uptime'],
      technologies: ['Python', 'RPA', 'Cloud'],
    },
    {
      id: 2,
      title: 'AI-Powered Analytics Platform',
      category: 'ai',
      image: '/images/howwework-project-2.jpg',
      description: 'Real-time data insights with machine learning',
      details: 'Built a comprehensive analytics platform using machine learning to provide real-time insights and predictive analysis.',
      results: ['Real-time insights', '95% accuracy', '10x faster analysis'],
      technologies: ['Python', 'TensorFlow', 'React'],
    },
    {
      id: 3,
      title: 'Custom ERP System',
      category: 'custom',
      image: '/images/howwework-project-3.jpg',
      description: 'End-to-end enterprise resource planning solution',
      details: 'Developed a fully customized ERP system tailored to client\'s specific business needs with seamless integration.',
      results: ['100% integration', 'Multi-module system', 'Scalable architecture'],
      technologies: ['Node.js', 'React', 'PostgreSQL'],
    },
    {
      id: 4,
      title: 'Mobile App Development',
      category: 'mobile',
      image: '/images/howwework-project-4.jpg',
      description: 'Cross-platform mobile solution for iOS and Android',
      details: 'Created a feature-rich mobile application deployed on both iOS and Android with offline capabilities.',
      results: ['4.8Ã¢Ëœâ€¦ rating', '100K+ downloads', '95% retention'],
      technologies: ['React Native', 'Firebase', 'Node.js'],
    },
    {
      id: 5,
      title: 'Cloud Infrastructure Migration',
      category: 'infrastructure',
      image: '/images/howwework-project-5.jpg',
      description: 'Seamless migration to cloud with zero downtime',
      details: 'Migrated legacy systems to modern cloud infrastructure with zero downtime and improved performance.',
      results: ['Zero downtime', '3x performance', '40% cost savings'],
      technologies: ['AWS', 'Docker', 'Kubernetes'],
    },
    {
      id: 6,
      title: 'Web Application Suite',
      category: 'web',
      image: '/images/howwework-project-6.jpg',
      description: 'Comprehensive web platform with real-time collaboration',
      details: 'Built a modern web application suite with real-time collaboration features and advanced security protocols.',
      results: ['Real-time sync', 'Enterprise security', '99.95% uptime'],
      technologies: ['React', 'Node.js', 'WebSocket'],
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'automation', label: 'Automation' },
    { id: 'ai', label: 'AI Solutions' },
    { id: 'custom', label: 'Custom Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'infrastructure', label: 'Infrastructure' },
    { id: 'web', label: 'Web Apps' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? workProjects
    : workProjects.filter(project => project.category === selectedCategory);

  const process = [
    {
      step: '01',
      title: 'Discover',
      description: 'We start by understanding your business, your challenges, and what success looks like for you.',
      details: [
        'Initial consultation call',
        'Business requirements gathering',
        'Current systems assessment',
        'Goal definition and prioritization',
      ],
      duration: '1-2 weeks',
    },
    {
      step: '02',
      title: 'Design',
      description: 'We plan the technical approach and design the solution architecture before writing any code.',
      details: [
        'Technical specification',
        'System architecture design',
        'User experience planning',
        'Timeline and milestone planning',
      ],
      duration: '1-3 weeks',
    },
    {
      step: '03',
      title: 'Build',
      description: 'Development happens in iterative cycles with regular check-ins and working demos along the way.',
      details: [
        'Iterative development sprints',
        'Regular progress updates',
        'Working demos for feedback',
        'Continuous testing and quality assurance',
      ],
      duration: 'Varies by scope',
    },
    {
      step: '04',
      title: 'Deploy',
      description: 'We handle the deployment process and ensure everything runs smoothly in production.',
      details: [
        'Production environment setup',
        'Data migration if needed',
        'Performance optimization',
        'Security verification',
      ],
      duration: '1-2 weeks',
    },
    {
      step: '05',
      title: 'Support',
      description: 'Our relationship continues after launch with ongoing support, maintenance, and improvements.',
      details: [
        'Team training and documentation',
        'Bug fixes and maintenance',
        'Feature enhancements',
        'Performance monitoring',
      ],
      duration: 'Ongoing',
    },
  ];

  const expectations = [
    {
      title: 'Clear Communication',
      description: 'You\'ll always know where your project stands. Weekly updates, accessible team members, and no surprises.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      title: 'Honest Timelines',
      description: 'We give realistic estimates and flag potential delays early. No overpromising, no last-minute surprises.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Your Input Matters',
      description: 'This is a collaborative process. Your feedback shapes the project at every stage.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Quality Over Speed',
      description: 'We prioritize getting it right over getting it fast. Rushing leads to technical debt and problems down the road.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: 'Documentation',
      description: 'Every project comes with proper documentation so your team can understand and maintain the system.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: 'Long-term Thinking',
      description: 'We build systems designed to grow with your business, not solutions that need replacing in a year.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
  ];

  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary significantly based on scope. A simple web application might take 4-8 weeks, while a complex automation system could take 3-6 months. We\'ll give you a realistic estimate during the discovery phase.',
    },
    {
      question: 'Do you work with existing systems?',
      answer: 'Yes. We frequently integrate with or build upon existing systems. During discovery, we assess your current technology stack and plan how new solutions will work alongside what you already have.',
    },
    {
      question: 'What if requirements change during the project?',
      answer: 'Changes happen, and we expect them. Our iterative approach allows for adjustments along the way. Significant scope changes may affect timeline and cost, but we always discuss this openly before proceeding.',
    },
    {
      question: 'How do you handle project communication?',
      answer: 'We provide weekly progress updates and are available for questions throughout the project. Most teams use a combination of email, scheduled calls, and a project management tool to stay aligned.',
    },
    {
      question: 'What happens after the project launches?',
      answer: 'We offer ongoing support and maintenance packages. Even without a formal support agreement, we\'re available for bug fixes and questions. Your success with the system matters to us.',
    },
  ];

  return (
    <div className="pt-14 sm:pt-16 lg:pt-20">
      <Helmet>
        <title>How We Work | Bixxy Bee</title>
        <meta name="description" content="Our proven process from discovery to deployment. Learn how Bixxy Bee delivers projects with clear communication, honest timelines, and ongoing support." />
      </Helmet>
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-32 bg-hero-gradient bg-grid">
        <div className="absolute inset-0 overflow-hidden hidden sm:block">
          <div className="absolute top-1/3 right-1/4 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-bee-yellow/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-bee-yellow font-medium text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4">
              How We Work
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-bee-white leading-tight mb-4 sm:mb-6">
              A Process Built for{' '}
              <span className="text-highlight">Results</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-bee-slate-400 leading-relaxed">
              We follow a structured yet flexible approach that keeps projects on track while allowing room for the inevitable discoveries and adjustments along the way.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-bee-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Our Process"
            title="From Idea to Implementation"
            description="Every successful project follows a clear path. Here's how we take your idea from concept to reality."
            className="mb-10 sm:mb-16"
          />

          <div className="relative">
            {/* Timeline Line - Hidden on mobile/tablet */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-bee-slate-600 -translate-x-1/2"></div>

            <div className="space-y-6 sm:space-y-8 lg:space-y-0">
              {process.map((step, index) => (
                <div
                  key={index}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-12 ${
                    index !== process.length - 1 ? 'lg:pb-24' : ''
                  }`}
                >
                  {/* Timeline Dot - Hidden on mobile */}
                  <div className="hidden lg:block absolute left-1/2 top-0 w-4 h-4 bg-bee-yellow rounded-full -translate-x-1/2 z-10">
                    <div className="absolute inset-0 bg-bee-yellow rounded-full animate-ping opacity-20"></div>
                  </div>

                  {/* Content */}
                  <div
                    className={`${
                      index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:col-start-2 lg:pl-16'
                    }`}
                  >
                    <Card padding="lg">
                      <div className={`flex items-start gap-3 sm:gap-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                        <div className="flex-shrink-0 text-4xl sm:text-5xl font-bold text-bee-slate-700">
                          {step.step}
                        </div>
                        <div className={index % 2 === 0 ? 'lg:text-right' : ''}>
                          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                            <h3 className="text-lg sm:text-xl font-semibold text-bee-white-100">{step.title}</h3>
                            <span className="text-[10px] sm:text-xs text-bee-slate-500 bg-bee-slate-700 px-2 py-1 rounded">
                              {step.duration}
                            </span>
                          </div>
                          <p className="text-bee-slate-400 mb-3 sm:mb-4 text-sm sm:text-base">{step.description}</p>
                          <ul className={`space-y-1.5 sm:space-y-2 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                            {step.details.map((detail, detailIndex) => (
                              <li
                                key={detailIndex}
                                className={`flex items-center text-xs sm:text-sm text-bee-slate-500 ${
                                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                                }`}
                              >
                                <svg
                                  className={`w-3.5 h-3.5 sm:w-4 sm:h-4 text-bee-yellow flex-shrink-0 ${
                                    index % 2 === 0 ? 'lg:ml-2' : 'mr-2'
                                  }`}
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-bee-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Portfolio"
            title="Our Work"
            description="Showcasing successful projects where we've helped businesses transform, automate, and scale with intelligent solutions."
            className="mb-10 sm:mb-16"
          />

          {/* Category Filter */}
          <div className="mb-12 sm:mb-16">
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-sm sm:text-base font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-bee-yellow text-bee-darker'
                      : 'bg-bee-slate-600/50 text-bee-slate-300 hover:bg-bee-slate-600'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-2xl overflow-hidden bg-bee-slate-700/50 border border-bee-slate-700/50 hover:border-bee-yellow/30 transition-all duration-300 hover:shadow-lg hover:shadow-bee-yellow/10"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden h-64 sm:h-56 lg:h-64 bg-bee-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bee-darker via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-5 lg:p-6">
                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-bee-yellow/10 border border-bee-yellow/20 rounded-full text-xs font-medium text-bee-yellow">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-base lg:text-lg font-bold text-bee-white mb-2 group-hover:text-bee-yellow transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-bee-slate-400 mb-4">
                    {project.description}
                  </p>

                  {/* Details */}
                  <p className="text-xs sm:text-xs lg:text-sm text-bee-slate-500 mb-4 line-clamp-2">
                    {project.details}
                  </p>

                  {/* Results */}
                  <div className="mb-4 space-y-1">
                    {project.results.map((result, idx) => (
                      <div key={idx} className="flex items-center text-xs sm:text-xs lg:text-sm text-bee-slate-400">
                        <svg className="w-3 h-3 mr-2 text-bee-yellow" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {result}
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-bee-slate-600/50 rounded text-xs text-bee-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-bee-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Common Questions"
            title="Frequently Asked Questions"
            className="mb-10 sm:mb-16"
          />

          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} padding="md">
                <h4 className="text-base sm:text-lg font-semibold text-bee-white-100 mb-1 sm:mb-2">{faq.question}</h4>
                <p className="text-bee-slate-400 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-bee-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Working Together"
            title="What to Expect"
            description="When you work with Bixxy Bee, here's what you can count on throughout the process."
            className="mb-10 sm:mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {expectations.map((item, index) => (
              <Card key={index} className="group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-bee-yellow/10 border border-bee-yellow/20 rounded-lg flex items-center justify-center text-bee-yellow mb-3 sm:mb-4 group-hover:bg-bee-yellow/20 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-bee-white-100 mb-1 sm:mb-2">{item.title}</h3>
                <p className="text-bee-slate-400 text-xs sm:text-sm leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-bee-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <SectionHeading
              subtitle="Ready to Start?"
              title="Let's Discuss Your Project"
              description="Every project begins with a conversation. Tell us about your challenges and let's explore how we can help."
              className="mb-8 sm:mb-10"
            />
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Button to="/contact" size="lg" fullWidthMobile>
                Start the Conversation
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <Button to="/solutions" variant="outline" size="lg" fullWidthMobile>
                View Our Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWeWork;
