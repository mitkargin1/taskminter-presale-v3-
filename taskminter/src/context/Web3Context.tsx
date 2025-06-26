import { createContext, useState, useEffect, useContext, type ReactNode } from 'react';
import { ethers } from 'ethers';

interface Web3ContextType {
  account: string | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  isConnecting: boolean;
  provider: ethers.providers.Web3Provider | null;
  networkName: string | null;
  displayAccount: string | null;
}

const Web3Context = createContext<Web3ContextType>({
  account: null,
  connectWallet: async () => {},
  disconnectWallet: () => {},
  isConnecting: false,
  provider: null,
  networkName: null,
  displayAccount: null,
});

export const useWeb3 = () => useContext(Web3Context);

interface Web3ProviderProps {
  children: ReactNode;
}

export const Web3Provider = ({ children }: Web3ProviderProps) => {
  const [account, setAccount] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);
  const [networkName, setNetworkName] = useState<string | null>(null);
  const [displayAccount, setDisplayAccount] = useState<string | null>(null);

  // Handle account changes
  const handleAccountsChanged = (accounts: string[]) => {
    if (accounts.length === 0) {
      // User disconnected their wallet
      disconnectWallet();
    } else if (accounts[0] !== account) {
      setAccount(accounts[0]);
      setDisplayAccount(formatAddress(accounts[0]));
    }
  };

  // Handle chain/network changes
  const handleChainChanged = (_chainId: string) => {
    window.location.reload();
  };

  // Format the address for display
  const formatAddress = (address: string): string => {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  // Connect wallet
  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("MetaMask is not installed. Please install MetaMask to connect your wallet.");
      return;
    }

    setIsConnecting(true);

    try {
      // Request account access
      const ethProvider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(ethProvider);

      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

      // Get network information
      const network = await ethProvider.getNetwork();
      setNetworkName(network.name);

      // Set account
      setAccount(accounts[0]);
      setDisplayAccount(formatAddress(accounts[0]));
    } catch (error) {
      console.error("Error connecting wallet:", error);
    } finally {
      setIsConnecting(false);
    }
  };

  // Disconnect wallet
  const disconnectWallet = () => {
    setAccount(null);
    setDisplayAccount(null);
    setNetworkName(null);
    setProvider(null);
  };

  // Set up event listeners
  useEffect(() => {
    // Check if MetaMask is installed
    if (window.ethereum) {
      // Set up event listeners
      window.ethereum.on('accountsChanged', handleAccountsChanged);
      window.ethereum.on('chainChanged', handleChainChanged);

      // Cleanup
      return () => {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
        window.ethereum.removeListener('chainChanged', handleChainChanged);
      };
    }
  }, [account]);

  return (
    <Web3Context.Provider
      value={{
        account,
        connectWallet,
        disconnectWallet,
        isConnecting,
        provider,
        networkName,
        displayAccount
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};

// Add type definitions for window.ethereum
declare global {
  interface Window {
    ethereum: any;
  }
}
