import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import FeaturedArticle from './components/FeaturedArticle';
import CancerData from './components/CancerData';
import ArticleGrid from './components/ArticleGrid';
import ResearchTimeline from './components/ResearchTimeline';
import DrugPipeline from './components/DrugPipeline';
import NewsletterCTA from './components/NewsletterCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{minHeight:'100vh',background:'var(--bg)'}}>
      <div className="noise-overlay" />
      <Navbar />
      <Hero />
      <StatsBar />
      <FeaturedArticle />
      <CancerData />
      <ArticleGrid />
      <ResearchTimeline />
      <DrugPipeline />
      <NewsletterCTA />
      <Footer />
    </div>
  );
}