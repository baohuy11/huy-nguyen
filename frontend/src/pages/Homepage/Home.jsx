import Education from './Education.jsx';

const Introduction = () => (
  <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg max-w-5xl mx-auto">
    <p className="text-lg text-gray-800 dark:text-gray-300">
      I am a pre-final year student, studying Artificial Intelligence, with a focus on Machine Learning, Deep Learning, and Large Language Models.
    </p>
    <p className="text-lg text-gray-800 dark:text-gray-300 mt-4">
      I am passionate about reading books and research papers in my field.
    </p>
    <p className="text-lg text-gray-800 dark:text-gray-300 mt-4">
      My goal is to become an AI Engineer or a researcher in Artificial Intelligence.
    </p>
  </div>
);

const Section = ({ title, children }) => (
  <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{title}</h3>
    {children}
  </div>
);

export default function Home() {
  return (
    <div className="space-y-8">
      <Introduction />

      <div className="space-y-8 max-w-5xl mx-auto">
        <Section title="Background">
          <Education />
        </Section>

        <Section title="Blogs">
          <p className="text-gray-600 dark:text-gray-400">
            I am passionate about sharing my knowledge and insights with the community. I plan to write articles on various topics related to AI, including tutorials, research summaries, and opinion pieces. Stay tuned for my upcoming blog posts!
          </p>
        </Section>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Projects</h3>
          <p className="text-gray-600 dark:text-gray-400">
            I am constantly working on new projects to apply my skills and learn new things. My portfolio showcases a range of projects, from small-scale experiments to larger, more complex applications. I am always open to collaboration and new ideas, so feel free to reach out if you have a project in mind.
          </p>
        </div>
      </div>

      {/* Fifth Block: Achievements */}
      {/*
    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg max-w-5xl mx-auto">
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Achievements</h3>
      <p className="text-gray-600 dark:text-gray-400">
        I am proud of the progress I have made in my academic and personal projects. I am always striving to improve and achieve new goals. This section will be updated with my latest accomplishments.
      </p>
    </div>
    */}

      {/* Sixth Block: Certificates */}
      {/*
    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg max-w-5xl mx-auto">
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Certificates</h3>
      <p className="text-gray-600 dark:text-gray-400">
        I have earned a certificate from the Matsuo-Iwasawa Research lab for my contributions to a research project on Large Language Models. I am always seeking new opportunities to learn and grow, and I will be adding more certificates to this section as I acquire them.
      </p>
    </div> 
    */}
    </div>
  );
}
