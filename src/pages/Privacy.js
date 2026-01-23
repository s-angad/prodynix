import React from 'react';
import { Helmet } from 'react-helmet-async';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Bixxy Bee</title>
        <meta name="description" content="Bixxy Bee Privacy Policy - Learn how we collect, use, and protect your personal information." />
      </Helmet>
      
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <section className="py-16 sm:py-20 lg:py-24 bg-bee-darker">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-bee-white mb-8">Privacy Policy</h1>
            
            <div className="prose prose-invert max-w-none space-y-8">
              <p className="text-bee-slate-400 text-base sm:text-lg leading-relaxed">
                Last updated: January 2026
              </p>

              <div className="space-y-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-bee-white-100 mb-3">1. Information We Collect</h2>
                  <p className="text-bee-slate-400 leading-relaxed">
                    We collect information you provide directly to us, such as when you fill out a contact form, 
                    request a demo, or communicate with us. This may include your name, email address, company name, 
                    and any other information you choose to provide.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-bee-white-100 mb-3">2. How We Use Your Information</h2>
                  <p className="text-bee-slate-400 leading-relaxed">
                    We use the information we collect to respond to your inquiries, provide our services, 
                    send you updates about our products (with your consent), and improve our website and services.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-bee-white-100 mb-3">3. Information Sharing</h2>
                  <p className="text-bee-slate-400 leading-relaxed">
                    We do not sell, trade, or otherwise transfer your personal information to third parties 
                    without your consent, except as necessary to provide our services or as required by law.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-bee-white-100 mb-3">4. Data Security</h2>
                  <p className="text-bee-slate-400 leading-relaxed">
                    We implement appropriate security measures to protect your personal information against 
                    unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-bee-white-100 mb-3">5. Contact Us</h2>
                  <p className="text-bee-slate-400 leading-relaxed">
                    If you have any questions about this Privacy Policy, please contact us at{' '}
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

export default Privacy;
