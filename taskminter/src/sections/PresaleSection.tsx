import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaWallet, FaCopy, FaExclamationCircle, FaCheckCircle } from 'react-icons/fa';
import { useWeb3 } from '../context/Web3Context';

const PresaleSection = () => {
  const { account, connectWallet, disconnectWallet, isConnecting, displayAccount } = useWeb3();

  const [presaleProgress, setPresaleProgress] = useState(37); // Simulated progress percentage
  const [copySuccess, setCopySuccess] = useState(false);
  const presaleWalletAddress = "0x4C1Ac26b72044300F1E8978e21583929731369F3";

  // Copy wallet address to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(presaleWalletAddress);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  // Simulated presale progress update
  useEffect(() => {
    const timer = setInterval(() => {
      setPresaleProgress((prevProgress) => {
        // Random small increment (0-0.5%)
        const increment = Math.random() * 0.5;
        return Math.min(prevProgress + increment, 100);
      });
    }, 5000); // Update every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="presale" className="relative py-24 bg-gradient-to-b from-midnight to-gray-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">$TMINT Token Presale</h2>

          <div className="max-w-3xl mx-auto">
            {/* Presale Card */}
            <div className="bg-gray-900/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 shadow-xl">
              {/* Presale Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-800/70 p-4 rounded-xl text-center">
                  <h4 className="text-gray-400 text-sm mb-1">Presale Price</h4>
                  <p className="text-xl font-bold text-mint">0.0001 BNB</p>
                </div>
                <div className="bg-gray-800/70 p-4 rounded-xl text-center">
                  <h4 className="text-gray-400 text-sm mb-1">Launch Price</h4>
                  <p className="text-xl font-bold text-mint">0.0003 BNB</p>
                </div>
                <div className="bg-gray-800/70 p-4 rounded-xl text-center">
                  <h4 className="text-gray-400 text-sm mb-1">Min Purchase</h4>
                  <p className="text-xl font-bold text-mint">0.05 BNB</p>
                </div>
              </div>

              {/* Presale Progress */}
              <div className="mb-8">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Progress</span>
                  <span className="text-mint font-medium">{presaleProgress.toFixed(2)}%</span>
                </div>
                <div className="w-full h-4 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-mint"
                    initial={{ width: 0 }}
                    animate={{ width: `${presaleProgress}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
                <div className="flex justify-between text-xs mt-2 text-gray-400">
                  <span>0 BNB</span>
                  <span>500 BNB</span>
                </div>
              </div>

              {/* Connect Wallet Section */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-center">Connect Your Wallet</h3>
                {account ? (
                  <div className="text-center">
                    <div className="bg-gray-800/70 p-4 rounded-xl inline-block mb-4">
                      <p className="text-gray-400 text-sm mb-1">Connected Wallet</p>
                      <p className="text-mint font-mono">{displayAccount}</p>
                    </div>
                    <div className="flex justify-center">
                      <button
                        onClick={disconnectWallet}
                        className="px-4 py-2 bg-gray-800 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors"
                      >
                        Disconnect
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={connectWallet}
                      disabled={isConnecting}
                      className="flex items-center space-x-2 bg-mint text-midnight px-6 py-3 rounded-lg font-semibold disabled:opacity-70"
                    >
                      <FaWallet />
                      <span>{isConnecting ? 'Connecting...' : 'Connect MetaMask'}</span>
                    </motion.button>
                  </div>
                )}
              </div>

              {/* Divider */}
              <div className="flex items-center my-8">
                <div className="flex-grow h-px bg-gray-800"></div>
                <span className="px-4 text-gray-400 text-sm">OR</span>
                <div className="flex-grow h-px bg-gray-800"></div>
              </div>

              {/* Manual Transfer Instructions */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-center">Manual Transfer</h3>
                <div className="bg-gray-800/50 p-5 rounded-xl mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-gray-400 text-sm">Send BNB to this address:</p>
                    <button
                      onClick={copyToClipboard}
                      className="text-mint hover:text-mint/80 transition-colors flex items-center text-sm"
                    >
                      {copySuccess ? (
                        <>
                          <FaCheckCircle className="mr-1" /> Copied!
                        </>
                      ) : (
                        <>
                          <FaCopy className="mr-1" /> Copy
                        </>
                      )}
                    </button>
                  </div>
                  <p className="font-mono text-neon break-all select-all">{presaleWalletAddress}</p>
                </div>

                {/* Warning */}
                <div className="bg-red-900/20 border border-red-800/50 rounded-lg p-4 flex items-start">
                  <FaExclamationCircle className="text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-300">
                    Only send BNB from a wallet that you control (not an exchange). Tokens will be sent to the same address that made the payment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PresaleSection;
