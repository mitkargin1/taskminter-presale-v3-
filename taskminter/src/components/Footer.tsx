import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaTwitter, FaTelegram, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-mint">$TMINT</span>
            </div>
            <p className="mb-4">
              TaskMinter is a Web3 Task-to-Earn platform where users earn crypto by completing tasks.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://x.com/TaskMinter"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-mint transition-colors"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://t.me/taskminter"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-mint transition-colors"
              >
                <FaTelegram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-neon">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Presale', 'Tokenomics', 'Roadmap', 'Charts'].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-400 hover:text-mint transition-colors cursor-pointer"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-neon">Legal</h3>
            <ul className="space-y-2">
              {[
                { name: 'Terms & Conditions', href: '/terms' },
                { name: 'Privacy Policy', href: '/privacy' },
                { name: 'Cookie Policy', href: '/cookies' },
                { name: 'Disclaimer', href: '/disclaimer' },
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-400 hover:text-mint transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-neon">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@taskminter.io" className="text-gray-400 hover:text-mint transition-colors">
                  info@taskminter.io
                </a>
              </li>
              <li>
                <a href="/support" className="text-gray-400 hover:text-mint transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="/partnerships" className="text-gray-400 hover:text-mint transition-colors">
                  Partnerships
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">© 2025 TaskMinter. All rights reserved.</p>

          <div className="mt-4 md:mt-0">
            <button
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });
              }}
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <FaArrowUp className="text-mint" />
            </button>
          </div>
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 p-4 border border-gray-800 rounded-lg text-xs text-gray-500 text-center"
        >
          <p>
            Cryptocurrency investments involve risk. This website does not constitute financial advice.
            Always conduct your own research before making any investment decisions.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
