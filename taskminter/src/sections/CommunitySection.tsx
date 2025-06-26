import { motion } from 'framer-motion';
import { FaTwitter, FaTelegram, FaDiscord, FaReddit, FaUsers } from 'react-icons/fa';

// Social media data
const socialLinks = [
  {
    name: 'Twitter',
    icon: <FaTwitter className="text-2xl" />,
    url: 'https://x.com/TaskMinter',
    color: 'bg-blue-500 hover:bg-blue-600',
    stats: '5.2K Followers',
  },
  {
    name: 'Telegram',
    icon: <FaTelegram className="text-2xl" />,
    url: 'https://t.me/taskminter',
    color: 'bg-sky-500 hover:bg-sky-600',
    stats: '12.7K Members',
  },
  {
    name: 'Discord',
    icon: <FaDiscord className="text-2xl" />,
    url: '#',
    color: 'bg-indigo-500 hover:bg-indigo-600',
    stats: 'Coming Soon',
    disabled: true,
  },
  {
    name: 'Reddit',
    icon: <FaReddit className="text-2xl" />,
    url: '#',
    color: 'bg-orange-500 hover:bg-orange-600',
    stats: 'Coming Soon',
    disabled: true,
  },
];

// Community stats
const communityStats = [
  {
    title: 'Community Members',
    value: '18,000+',
    icon: <FaUsers className="text-mint text-3xl" />,
  },
  {
    title: 'Countries',
    value: '45+',
    icon: <span className="text-3xl">🌎</span>,
  },
  {
    title: 'Tasks Completed',
    value: '120,000+',
    icon: <span className="text-3xl">✅</span>,
  },
];

const CommunitySection = () => {
  return (
    <section id="community" className="relative py-24 bg-gradient-to-b from-midnight to-gray-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Join Our Community</h2>

          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-300">
              Be part of the TaskMinter community and stay updated with the latest news,
              announcements, and discussions about our ecosystem.
            </p>
          </div>

          {/* Community Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {communityStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 text-center"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <h3 className="text-3xl font-bold text-neon mb-1">{stat.value}</h3>
                <p className="text-gray-400">{stat.title}</p>
              </motion.div>
            ))}
          </div>

          {/* Social Media Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialLinks.map((social, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="rounded-xl overflow-hidden shadow-lg"
              >
                <a
                  href={social.disabled ? '#' : social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block ${social.disabled ? 'opacity-70 cursor-default' : ''}`}
                >
                  <div className={`${social.color} text-white p-8 text-center transition-colors duration-300`}>
                    <div className="flex justify-center mb-3">
                      {social.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{social.name}</h3>
                    <p className="text-sm opacity-90">{social.stats}</p>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Signup - Optional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 bg-gray-900/30 backdrop-blur-sm p-8 rounded-xl border border-gray-800 max-w-3xl mx-auto"
          >
            <h3 className="text-xl font-semibold mb-4 text-center">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 text-center mb-6">
              Get the latest updates, news and announcements delivered to your inbox.
            </p>

            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-neon focus:outline-none focus:border-mint transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary sm:px-8"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;
