import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBitcoin, FaEthereum, FaChartLine, FaSync } from 'react-icons/fa';
import { SiBinance, SiSolana } from 'react-icons/si';

// Simulated chart data component
const CryptoChart = ({ symbol, name, price, change, icon }: {
  symbol: string;
  name: string;
  price: string;
  change: number;
  icon: React.ReactNode;
}) => {
  const [loading, setLoading] = useState(false);

  // Simulate chart refresh
  const refreshChart = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900/50 rounded-xl border border-gray-800 overflow-hidden"
    >
      <div className="p-4 border-b border-gray-800 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="text-2xl">{icon}</div>
          <div>
            <h3 className="font-semibold text-neon">{name}</h3>
            <p className="text-sm text-gray-400">{symbol}</p>
          </div>
        </div>
        <button
          onClick={refreshChart}
          className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
          disabled={loading}
        >
          <FaSync className={`text-gray-400 ${loading ? 'animate-spin' : ''}`} />
        </button>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-semibold">${price}</span>
          <span className={`px-2 py-1 rounded text-sm ${change >= 0 ? 'bg-green-900/30 text-green-400' : 'bg-red-900/30 text-red-400'}`}>
            {change >= 0 ? '+' : ''}{change}%
          </span>
        </div>

        {/* Simulated Chart - Using SVG for illustration */}
        <div className="h-32 w-full relative">
          <svg
            className="w-full h-full"
            viewBox="0 0 200 100"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id={`gradient-${symbol}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3EB489" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#3EB489" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Random path to simulate chart */}
            <path
              d={generateRandomPath(symbol)}
              fill="none"
              stroke="#3EB489"
              strokeWidth="2"
            />

            {/* Area fill under the line */}
            <path
              d={generateRandomPath(symbol) + ' L 200,100 L 0,100 Z'}
              fill={`url(#gradient-${symbol})`}
            />
          </svg>

          {/* Chart Overlay when "refreshing" */}
          {loading && (
            <div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center">
              <FaChartLine className="text-mint animate-pulse text-2xl" />
            </div>
          )}
        </div>

        {/* Time Period Buttons */}
        <div className="flex mt-4 space-x-2">
          {['1H', '1D', '1W', '1M', 'ALL'].map((period) => (
            <button
              key={period}
              className={`px-2 py-1 text-xs rounded ${
                period === '1D'
                  ? 'bg-mint text-gray-900 font-medium'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Generate a random SVG path based on a seed (symbol) for consistent but varied charts
function generateRandomPath(seed: string) {
  // Use the seed to create a pseudo-random but consistent path
  const seedValue = seed.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  let path = 'M 0,';

  // Start position (higher number = lower on chart)
  const startY = 50 + (seedValue % 30);
  path += startY.toString();

  // Generate points for the path
  const points = 20;
  for (let i = 1; i <= points; i++) {
    const x = (i * 200) / points;

    // Use the seed and position to generate y values that look like a chart
    const noise = Math.sin((i + seedValue) * 0.5) * 20;

    // Different patterns based on the seed
    let y;
    if (seedValue % 4 === 0) {
      // Uptrend
      y = startY - (i * 20) / points + noise;
    } else if (seedValue % 4 === 1) {
      // Downtrend
      y = startY + (i * 15) / points + noise;
    } else if (seedValue % 4 === 2) {
      // Volatile
      y = startY + noise * 1.5;
    } else {
      // Sideways with slight uptrend
      y = startY - (i * 5) / points + noise;
    }

    // Keep within bounds
    y = Math.max(10, Math.min(90, y));

    path += ` L ${x},${y}`;
  }

  return path;
}

const ChartsSection = () => {
  // Chart data
  const cryptoData = [
    {
      symbol: 'BTC/USD',
      name: 'Bitcoin',
      price: '62,547.83',
      change: 2.43,
      icon: <FaBitcoin className="text-amber-500" />,
    },
    {
      symbol: 'ETH/USD',
      name: 'Ethereum',
      price: '3,421.97',
      change: -1.24,
      icon: <FaEthereum className="text-purple-500" />,
    },
    {
      symbol: 'BNB/USD',
      name: 'Binance Coin',
      price: '598.34',
      change: 0.76,
      icon: <SiBinance className="text-yellow-500" />,
    },
    {
      symbol: 'SOL/USD',
      name: 'Solana',
      price: '137.82',
      change: 5.12,
      icon: <SiSolana className="text-green-500" />,
    },
  ];

  return (
    <section id="charts" className="relative py-24 bg-midnight">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Live Crypto Charts</h2>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cryptoData.map((crypto, index) => (
                <CryptoChart
                  key={crypto.symbol}
                  symbol={crypto.symbol}
                  name={crypto.name}
                  price={crypto.price}
                  change={crypto.change}
                  icon={crypto.icon}
                />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 bg-gray-900/30 p-4 rounded-lg text-center text-sm text-gray-400"
            >
              <p>
                Charts are for illustrative purposes only. $TMINT aims to achieve significant growth
                upon launch. Join our presale to secure tokens at the best price.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChartsSection;
