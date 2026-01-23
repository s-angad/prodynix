import React from 'react';
import { Helmet } from 'react-helmet-async';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Bixxy Bee</title>
        <meta name="description" content="Bixxy Bee Terms of Service - Read our terms and conditions for using our services." />
      </Helmet>
      
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <section className="py-16 sm:py-20 lg:py-24 bg-bee-darker">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-bee-white mb-8">Terms of Service</h1>
            
            <div className="prose prose-invert max-w-none space-y-8">
              <p className="text-bee-slate-400 text-base sm:text-lg leading-relaxed">
                Last updated: January 2026
              </p>

              <div className="space-y-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-bee-white-100 mb-3">1. Acceptance of Terms</h2>
                  <p className="text-bee-slate-400 leading-relaxed">
                    By accessing and using Bixxy Bee's website and services, you accept and agree to be bound by 
                    these Terms of Service. If you do not agree to these terms, please do not use our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-bee-white-100 mb-3">2. Services</h2>
                  <p className="text-bee-slate-400 leading-relaxed">
                    Bixxy Bee provides automation solutions, custom software development, and digital services. 
                    The specific terms of any service engagement will be outlined in a separate agreement.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-bee-white-100 mb-3">3. Intellectual Property</h2>
                  <p className="text-bee-slate-400 leading-relaxed">
                    All content on this website, including text, graphics, logos, and software, is the property 
                    of Bixxy Bee and is protected by intellectual property laws.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-bee-white-100 mb-3">4. Limitation of Liability</h2>
                  <p className="text-bee-slate-400 leading-relaxed">
                    Bixxy Bee shall not be liable for any indirect, incidental, special, or consequential damages 
                    arising from your use of our website or services.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-bee-white-100 mb-3">5. Changes to Terms</h2>
                  <p className="text-bee-slate-400 leading-relaxed">
                    We reserve the right to modify these terms at any time. Changes will be effective immediately 
                    upon posting to our website.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-bee-white-100 mb-3">6. Contact</h2>
                  <p className="text-bee-slate-400 leading-relaxed">
                    For questions about these Terms of Service, contact us at{' '}
                    <a href="mailto:contact@Bixxy Bee.com" className="text-bee-yellow hover:text-bee-yellow-light">
                      contact@Bixxy Bee.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Terms;
