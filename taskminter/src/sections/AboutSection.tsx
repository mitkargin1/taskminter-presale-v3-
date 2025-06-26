import { motion } from 'framer-motion';
import { FaTasks, FaCoins, FaUsers, FaLock } from 'react-icons/fa';

const features = [
  {
    icon: <FaTasks className="text-mint text-3xl" />,
    title: 'Task-Based Rewards',
    description: 'Complete various tasks ranging from community engagement to skill-based challenges and earn tokens.'
  },
  {
    icon: <FaCoins className="text-mint text-3xl" />,
    title: 'Crypto Earnings',
    description: 'Earn $TMINT tokens directly to your wallet as you complete tasks and contribute to the ecosystem.'
  },
  {
    icon: <FaUsers className="text-mint text-3xl" />,
    title: 'Community-Driven',
    description: 'Join a vibrant community of contributors and earn together in our decentralized ecosystem.'
  },
  {
    icon: <FaLock className="text-mint text-3xl" />,
    title: 'Secure & Transparent',
    description: 'All transactions and task completions are verified and recorded on the blockchain for transparency.'
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 bg-midnight">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">What is TaskMinter?</h2>

          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-gray-300 leading-relaxed">
              TaskMinter is a revolutionary Web3 task-to-earn platform that rewards users with cryptocurrency for completing tasks.
              Our ecosystem creates value by connecting task providers with skilled contributors, all powered by the $TMINT token.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-mint transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start">
                  <div className="bg-gray-800 p-3 rounded-lg mr-4">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-neon">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* How It Works */}
          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-center mb-10 text-mint">How It Works</h3>

            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex-1 text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-mint text-midnight font-bold text-2xl mb-4">1</div>
                <h4 className="text-xl font-semibold mb-2">Connect Wallet</h4>
                <p className="text-gray-400">Link your cryptocurrency wallet to our platform to get started.</p>
              </div>

              <div className="hidden md:block w-12 h-1 md:w-1 md:h-32 bg-mint/30 rounded-full"></div>

              <div className="flex-1 text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-mint text-midnight font-bold text-2xl mb-4">2</div>
                <h4 className="text-xl font-semibold mb-2">Browse Tasks</h4>
                <p className="text-gray-400">Find tasks that match your skills and interests in our marketplace.</p>
              </div>

              <div className="hidden md:block w-12 h-1 md:w-1 md:h-32 bg-mint/30 rounded-full"></div>

              <div className="flex-1 text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-mint text-midnight font-bold text-2xl mb-4">3</div>
                <h4 className="text-xl font-semibold mb-2">Complete Tasks</h4>
                <p className="text-gray-400">Work on tasks and submit your work for verification.</p>
              </div>

              <div className="hidden md:block w-12 h-1 md:w-1 md:h-32 bg-mint/30 rounded-full"></div>

              <div className="flex-1 text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-mint text-midnight font-bold text-2xl mb-4">4</div>
                <h4 className="text-xl font-semibold mb-2">Earn $TMINT</h4>
                <p className="text-gray-400">Receive $TMINT tokens as rewards directly to your wallet.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
