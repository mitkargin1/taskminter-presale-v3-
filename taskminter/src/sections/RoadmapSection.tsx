import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaCheckCircle, FaSpinner, FaHourglass } from 'react-icons/fa';

// Roadmap phases data
const roadmapData = [
  {
    phase: 'Phase 1: Foundation',
    status: 'completed', // completed, in-progress, upcoming
    timeframe: 'Q2 2025',
    description: 'Establishing the core foundations of the TaskMinter ecosystem.',
    items: [
      { text: 'Build website and landing page', status: 'completed' },
      { text: 'Develop token smart contract', status: 'completed' },
      { text: 'Launch presale campaign', status: 'completed' },
      { text: 'Begin community building', status: 'completed' },
    ],
  },
  {
    phase: 'Phase 2: Growth',
    status: 'in-progress',
    timeframe: 'Q3 2025',
    description: 'Expanding our reach and building the community ecosystem.',
    items: [
      { text: 'Community marketing campaigns', status: 'in-progress' },
      { text: 'Influencer partnerships', status: 'in-progress' },
      { text: 'Audit and security enhancements', status: 'upcoming' },
      { text: 'Initial DEX listings', status: 'upcoming' },
      { text: 'Launch ambassador program', status: 'upcoming' },
    ],
  },
  {
    phase: 'Phase 3: Development',
    status: 'upcoming',
    timeframe: 'Q4 2025',
    description: 'Building and deploying the core TaskMinter platform.',
    items: [
      { text: 'DApp beta launch', status: 'upcoming' },
      { text: 'Web3 task marketplace', status: 'upcoming' },
      { text: 'CEX listings', status: 'upcoming' },
      { text: 'Mobile app development', status: 'upcoming' },
      { text: 'Expand community moderation', status: 'upcoming' },
    ],
  },
  {
    phase: 'Phase 4: Expansion',
    status: 'upcoming',
    timeframe: 'Q1 2026',
    description: 'Scaling the platform and implementing advanced features.',
    items: [
      { text: 'DAO governance implementation', status: 'upcoming' },
      { text: 'Staking rewards program', status: 'upcoming' },
      { text: 'Cross-chain integrations', status: 'upcoming' },
      { text: 'Enterprise partnerships', status: 'upcoming' },
      { text: 'Global marketing campaign', status: 'upcoming' },
    ],
  },
];

// Status icon component
const StatusIcon = ({ status }: { status: string }) => {
  switch (status) {
    case 'completed':
      return <FaCheckCircle className="text-mint" />;
    case 'in-progress':
      return <FaSpinner className="text-yellow-400 animate-spin" />;
    default:
      return <FaHourglass className="text-gray-400" />;
  }
};

const RoadmapSection = () => {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(0); // Default to first phase expanded

  const togglePhase = (index: number) => {
    setExpandedPhase(expandedPhase === index ? null : index);
  };

  return (
    <section id="roadmap" className="relative py-24 bg-gradient-to-b from-gray-900 to-midnight">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Roadmap</h2>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {roadmapData.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`border rounded-xl overflow-hidden ${
                    phase.status === 'completed'
                      ? 'border-mint/50 bg-mint/5'
                      : phase.status === 'in-progress'
                      ? 'border-yellow-500/50 bg-yellow-500/5'
                      : 'border-gray-700 bg-gray-900/30'
                  }`}
                >
                  {/* Phase Header (Always Visible) */}
                  <div
                    className="p-5 flex items-center justify-between cursor-pointer"
                    onClick={() => togglePhase(index)}
                  >
                    <div className="flex items-center space-x-4">
                      <StatusIcon status={phase.status} />
                      <div>
                        <h3 className="text-lg font-medium text-neon">{phase.phase}</h3>
                        <p className="text-sm text-gray-400">{phase.timeframe}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        phase.status === 'completed'
                          ? 'bg-mint/20 text-mint'
                          : phase.status === 'in-progress'
                          ? 'bg-yellow-500/20 text-yellow-400'
                          : 'bg-gray-800 text-gray-400'
                      }`}>
                        {phase.status === 'completed'
                          ? 'Completed'
                          : phase.status === 'in-progress'
                          ? 'In Progress'
                          : 'Upcoming'}
                      </span>
                      <motion.div
                        animate={{ rotate: expandedPhase === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FaChevronDown className="text-gray-400" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Phase Details (Expandable) */}
                  <AnimatePresence>
                    {expandedPhase === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-0">
                          <div className="h-px w-full bg-gray-800 mb-4" />
                          <p className="text-gray-300 mb-4">{phase.description}</p>

                          <ul className="space-y-3">
                            {phase.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start">
                                <StatusIcon status={item.status} />
                                <span className="ml-3 text-gray-300">{item.text}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RoadmapSection;
