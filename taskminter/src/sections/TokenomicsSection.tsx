import { motion } from 'framer-motion';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

// Define the context type for the chart
interface ChartContext {
  label?: string;
  formattedValue?: string;
}

const TokenomicsSection = () => {
  // Token distribution data
  const tokenDistribution = {
    labels: ['Presale', 'Team', 'Marketing', 'Development', 'Liquidity', 'Staking Rewards'],
    datasets: [
      {
        data: [40, 20, 15, 10, 10, 5],
        backgroundColor: [
          '#3EB489', // Mint Green (Primary)
          '#2A7D5E', // Darker mint
          '#1A4D38', // Even darker mint
          '#5ED4A8', // Lighter mint
          '#7EEDC6', // Even lighter mint
          '#98F0D5', // Lightest mint
        ],
        borderColor: '#111111',
        borderWidth: 2,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          color: '#FFFFFF',
          font: {
            family: 'Inter',
            size: 12,
          },
          padding: 20,
        },
      },
      tooltip: {
        backgroundColor: 'rgba(17, 17, 17, 0.8)',
        titleColor: '#FFFFFF',
        bodyColor: '#FFFFFF',
        borderColor: '#3EB489',
        borderWidth: 1,
        padding: 12,
        displayColors: true,
        callbacks: {
          label: function(context: ChartContext) {
            const label = context.label || '';
            const value = context.formattedValue || '';
            return `${label}: ${value}%`;
          }
        }
      }
    },
    layout: {
      padding: 20
    },
    responsive: true,
    maintainAspectRatio: true,
  };

  // Token details
  const tokenDetails = [
    { id: 1, label: 'Token Name', value: 'TaskMinter' },
    { id: 2, label: 'Token Symbol', value: '$TMINT' },
    { id: 3, label: 'Total Supply', value: '1,000,000,000 TMINT' },
    { id: 4, label: 'Blockchain', value: 'Ethereum (ERC-20)' },
    { id: 5, label: 'Initial Market Cap', value: '~$500,000' },
  ];

  return (
    <section id="tokenomics" className="relative py-24 bg-midnight">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Tokenomics</h2>

          {/* Token Details */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
            {tokenDetails.map((item) => (
              <motion.div
                key={item.id}
                className="bg-gray-900/50 p-4 rounded-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item.id * 0.1 }}
              >
                <h4 className="text-gray-400 text-sm mb-1">{item.label}</h4>
                <p className="text-neon font-medium">{item.value}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Pie Chart */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800"
            >
              <h3 className="text-xl font-semibold mb-6 text-center">Token Allocation</h3>
              <div className="max-w-md mx-auto h-80">
                <Pie data={tokenDistribution} options={chartOptions} />
              </div>
            </motion.div>

            {/* Token Utility */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800"
            >
              <h3 className="text-xl font-semibold mb-6 text-center">Token Utility</h3>

              <ul className="space-y-4">
                <li className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-mint flex items-center justify-center text-midnight font-bold">1</div>
                  </div>
                  <div>
                    <h4 className="text-neon font-medium">Task Rewards</h4>
                    <p className="text-gray-400 text-sm">Earn $TMINT by completing tasks on the platform.</p>
                  </div>
                </li>

                <li className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-mint flex items-center justify-center text-midnight font-bold">2</div>
                  </div>
                  <div>
                    <h4 className="text-neon font-medium">Governance</h4>
                    <p className="text-gray-400 text-sm">Vote on platform proposals and feature updates.</p>
                  </div>
                </li>

                <li className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-mint flex items-center justify-center text-midnight font-bold">3</div>
                  </div>
                  <div>
                    <h4 className="text-neon font-medium">Staking Rewards</h4>
                    <p className="text-gray-400 text-sm">Lock your tokens to earn passive income through staking.</p>
                  </div>
                </li>

                <li className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-mint flex items-center justify-center text-midnight font-bold">4</div>
                  </div>
                  <div>
                    <h4 className="text-neon font-medium">Premium Features</h4>
                    <p className="text-gray-400 text-sm">Access exclusive tasks and platform features.</p>
                  </div>
                </li>

                <li className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-mint flex items-center justify-center text-midnight font-bold">5</div>
                  </div>
                  <div>
                    <h4 className="text-neon font-medium">Marketplace Transactions</h4>
                    <p className="text-gray-400 text-sm">Use $TMINT for transactions in the TaskMinter ecosystem.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
