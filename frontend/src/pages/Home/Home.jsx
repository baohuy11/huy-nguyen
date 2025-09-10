import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, GraduationCap, Briefcase, BookOpen, Code, Award, Sparkles } from 'lucide-react';
import { fetchPosts } from '../../utils/blogUtils'; // Import fetchPosts
import BlogPostCard from '../../components/BlogPostCard/BlogPostCard'; // Import BlogPostCard
import { projects } from '../../config/content'; // Import projects data
import ProjectCard from '../../components/ProjectCard/ProjectCard'; // Import ProjectCard
import './Home.css';

const Introduction = () => (
  <div className="card">
    <p className="intro-greeting">
      Hi there, I am Huy!
    </p>
    <ul className="intro-list">
      <li>
        I am a pre-final year student studing Computer Science focus on AI/ML and LLMs.
      </li>
      <li>
        Build and fine-tune LLMs; re-implement classic AI/ML papers from scratch.
      </li>
      <li>
        Focus areas: Multimodal LLMs (vision, language) and RL for pre/post training paradigms.
      </li>
      <li>
        Looking for: Research Internship (academia / industrial) positions in my areas of interest. Open to AI Engineer roles for development of pipelines, RAGs, Fine Tuning and other AI/ML related projects.
      </li>
    </ul>
  </div>
);

const Section = ({ title, icon, children }) => (
  <div>
    <h3 className="main-section-title">
      {icon} {title}
    </h3>
    <div className="card">{children}</div>
  </div>
);

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const fetchedPosts = await fetchPosts();
        setPosts(fetchedPosts.slice(0, 4)); // Get only the first 4 posts
      } catch (err) {
        setError('Failed to load blog posts for homepage.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, []);

  return (
    <div className="home-container">
      <div className="content-wrapper">
        <h3 className="main-section-title">
          <User className="icon" /> About me
        </h3>
        <Introduction />
      </div>

      <div className="sections-container">
        <Section title="Education" icon={<GraduationCap className="icon" />}>
          <p className="education-school">
            Institute of Science Tokyo, Japan
          </p>
          <p className="education-time">
            2023-2027
          </p>
        </Section>

        <Section title="Skills" icon={<Sparkles className="icon" />}>
          <p className="skills-category">
            Programming languages
          </p>
          <div className="skills-tags">
            <span className="skill-tag">Python</span>
            <span className="skill-tag">Unix/Linux</span>
            <span className="skill-tag">C/C++</span>
          </div>

          <p className="skills-category">
            Tools & Frameworks
          </p>
          <div className="skills-tags">
            <span className="skill-tag">PyTorch</span>
            <span className="skill-tag">Docker</span>
            <span className="skill-tag">LangChain</span>
            <span className="skill-tag">Streamlit</span>
            <span className="skill-tag">Git</span>
            <span className="skill-tag">GitHub</span>
            <span className="skill-tag">Firebase</span>
            <span className="skill-tag">FAISS</span>
            <span className="skill-tag">HuggingFace</span>
          </div>

          <p className="skills-category">
            Experiences
          </p>
          <ul className="experiences-list">
            <li>Data Structure & Algorithm, Competitive programming using C/C++</li>
            <li>Build and finetune LLM, RAG</li>
            <li>Build model using Pytorch</li>
            <li>And other Machine Learning knowledge</li>
          </ul>
        </Section>

        <Section title="Working experience" icon={<Briefcase className="icon" />}>
          <p className="empty-content">
            None
          </p>
        </Section>

        <Section title="Achievements" icon={<Award className="icon" />}>
          <p className="empty-content">
            None
          </p>
        </Section>

        {/* Blogs Section */}
        <Section title="Blogs" icon={<BookOpen className="icon" />}>
          {loading ? (
            <div>Loading latest blog posts...</div>
          ) : error ? (
            <div style={{ color: 'red' }}>{error}</div>
          ) : posts.length === 0 ? (
            <div>No recent blog posts found.</div>
          ) : (
            <div className="homepage-blog-grid"> {/* New class for grid */}
              {posts.map(post => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
          <div className="more-link-container">
            <Link to="/blogs" className="more-link">More Blogs &rarr;</Link>
          </div>
        </Section>

        {/* Projects Section */}
        <Section title="Projects" icon={<Code className="icon" />}>
          <div className="homepage-blog-grid"> {/* Reuse blog grid class */}
            {projects.slice(0, 4).map(project => (
              <ProjectCard key={project.title} project={project} type="short" />
            ))}
          </div>
          <div className="more-link-container">
            <Link to="/projects" className="more-link">More Projects &rarr;</Link>
          </div>
        </Section>

      </div>
    </div>
  );
}
