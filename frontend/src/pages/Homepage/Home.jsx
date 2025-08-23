import { User, GraduationCap, Briefcase, BookOpen, Code, Award, Sparkles } from 'lucide-react';

const Introduction = () => (
  <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
    <p className="text-xl text-gray-800 dark:text-gray-300 font-semibold">
      Hi there, I am Huy!
    </p>
    <ul className="list-disc list-inside text-xl text-gray-800 dark:text-gray-300 mt-4 space-y-2">
      <li>
        I am a pre-final year student studing Computer Science focus on AI/ML and LLMs.
      </li>
      <li>
        Build and fine-tune LLMs; re-implement classic AI/ML papers from scratch.
      </li>
      <li>
        Focus areas: Multimodal LLMs (vision, language and audio) and RL for pre/post training paradigms.
      </li>
      <li>
        Looking for: Research Internship (academia / industrial) positions in my areas of interest. Open to AI Engineer roles for development of pipelines, RAGs, Fine Tuning and other AI/ML related projects.
      </li>
    </ul>
  </div>
);

const Section = ({ title, children }) => (
  <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
    <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">{title}</h3>
    {children}
  </div>
);

export default function Home({ setCurrentPage }) {
  return (
    <div className="space-y-8">
      <div className="max-w-5xl mx-auto">
        <h3 className="flex items-center text-2xl font-semibold pl-8">
          <User className="mr-2" /> About me
        </h3>
        <Introduction />
      </div>

      <div className="space-y-8 max-w-5xl mx-auto">
        <div>
          <h3 className="flex items-center text-2xl font-semibold pl-8">
            <GraduationCap className="mr-2" /> Education
          </h3>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <p className="text-xl font-semibold text-gray-900 dark:text-white">
              Institute of Science Tokyo, Japan
            </p>
            <p className="text-base text-gray-600 dark:text-gray-400 mt-1">
              2023-2027
            </p>
          </div>
        </div>

        <div>
          <h3 className="flex items-center text-2xl font-semibold pl-8">
            <Sparkles className="mr-2" /> Skills
          </h3>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <p className="text-xl font-semibold text-gray-900 dark:text-white">
              Programming languages
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="bg-indigo-100 text-indigo-800 text-base font-medium px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">Python</span>
              <span className="bg-indigo-100 text-indigo-800 text-base font-medium px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">C</span>
              <span className="bg-indigo-100 text-indigo-800 text-base font-medium px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">C++</span>
            </div>

            <p className="text-xl font-semibold text-gray-900 dark:text-white mt-4">
              Tools & Frameworks
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="bg-indigo-100 text-indigo-800 text-base font-medium px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">PyTorch</span>
              <span className="bg-indigo-100 text-indigo-800 text-base font-medium px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">Docker</span>
              <span className="bg-indigo-100 text-indigo-800 text-base font-medium px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">LangChain</span>
              <span className="bg-indigo-100 text-indigo-800 text-base font-medium px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">Streamlit</span>
              <span className="bg-indigo-100 text-indigo-800 text-base font-medium px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">Git</span>
              <span className="bg-indigo-100 text-indigo-800 text-base font-medium px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">GitHub</span>
              <span className="bg-indigo-100 text-indigo-800 text-base font-medium px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">Firebase</span>
              <span className="bg-indigo-100 text-indigo-800 text-base font-medium px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">FAISS</span>
              <span className="bg-indigo-100 text-indigo-800 text-base font-medium px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">HuggingFace</span>
            </div>

            <p className="text-xl font-semibold text-gray-900 dark:text-white mt-4">
              Experiences
            </p>
            <ul className="list-disc list-inside text-xl text-gray-800 dark:text-gray-300 mt-2 space-y-1">
              <li>Data Structure & Algorithm, Competitive programming using C/C++</li>
              <li>Build and finetune LLM, RAG</li>
              <li>Build model using Pytorch</li>
              <li>And other Machine Learning knowledge</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="flex items-center text-2xl font-semibold pl-8">
            <Briefcase className="mr-2" /> Working experience
          </h3>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <p className="text-xl text-gray-600 dark:text-gray-400">
              None
            </p>
          </div>
        </div>

        <div>
          <h3 className="flex items-center text-2xl font-semibold pl-8">
            <BookOpen className="mr-2" /> Blogs
          </h3>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Will write something in the future.
            </p>
          </div>
        </div>

        <div>
          <h3 className="flex items-center text-2xl font-semibold pl-8">
            <Code className="mr-2" /> Projects
          </h3>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Paper Implementations</h3>
              <p className="text-base text-gray-500 dark:text-gray-400 mt-2">August 23, 2025</p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">I have created a repository consisting of my implementations of AI/ML paper(s) from domains ranging from NLP to Computer Vision...</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="bg-indigo-100 text-indigo-800 text-base font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">Python</span>
                <span className="bg-indigo-100 text-indigo-800 text-base font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">PyTorch</span>
              </div>
              <a href="https://github.com/baohuy11/paper-implementations" className="text-lg text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-semibold mt-6 inline-block">View Project &rarr;</a>
            </div>
            <div className="text-right mt-4">
              <a onClick={() => setCurrentPage('works')} className="cursor-pointer text-lg text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-semibold">More &rarr;</a>
            </div>
          </div>
        </div>

        <div>
          <h3 className="flex items-center text-2xl font-semibold pl-8">
            <Award className="mr-2" /> Achievements
          </h3>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <p className="text-xl text-gray-600 dark:text-gray-400">
              None
            </p>
          </div>
        </div>
      </div>

      {/* Sixth Block: Certificates */}
      {/*
    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg max-w-5xl mx-auto">
      <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">Certificates</h3>
      <p className="text-xl text-gray-600 dark:text-gray-400">
        I have earned a certificate from the Matsuo-Iwasawa Research lab for my contributions to a research project on Large Language Models. I am always seeking new opportunities to learn and grow, and I will be adding more certificates to this section as I acquire them.
      </p>
    </div> 
    */}
    </div>
  );
}
