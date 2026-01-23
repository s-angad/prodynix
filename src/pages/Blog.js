import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SectionHeading, Card } from '../components';

const posts = [
  {
    title: 'How Automation Transforms Gyms',
    date: 'Jan 2026',
    excerpt: 'Discover how intelligent automation can streamline gym operations, improve member experience, and boost revenue.',
    link: '#',
  },
  {
    title: 'AI in Healthcare: Real-World Use Cases',
    date: 'Dec 2025',
    excerpt: 'Explore how clinics and healthcare providers are using AI to automate appointments, reminders, and patient management.',
    link: '#',
  },
  {
    title: 'Choosing the Right Business Dashboard',
    date: 'Nov 2025',
    excerpt: 'A guide to selecting and customizing dashboards for actionable business insights.',
    link: '#',
  },
];

const Blog = () => (
  <div className="pt-14 sm:pt-16 lg:pt-20">
    <Helmet>
      <title>Blog & Resources | Bixxy Bee</title>
      <meta name="description" content="Insights, guides, and resources on business automation, AI, and digital solutions." />
    </Helmet>
    <section className="py-16 sm:py-20 lg:py-32 bg-bee-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Resources"
          title="Blog & Insights"
          description="Latest articles, guides, and case studies from the Bixxy Bee team."
          align="center"
          className="mb-10 sm:mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, idx) => (
            <Card key={idx} padding="lg" className="group">
              <h3 className="text-xl font-bold text-bee-white-100 mb-2">{post.title}</h3>
              <p className="text-xs text-bee-slate-500 mb-2">{post.date}</p>
              <p className="text-bee-slate-400 mb-4">{post.excerpt}</p>
              <a href={post.link} className="text-bee-yellow hover:underline text-sm">Read More</a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Blog;
