import { ethers } from "ethers";
import LandRegistryABI from "../blockchain/build/contracts/LandRegistry.json"; // Path to your ABI

function App() {
  const [landData, setLandData] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState("");

  // Initialize Web3 and Contract
  const init = async () => {
    if (window.ethereum) {
      try {
        // Request account access
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);

        // Replace with your contract's deployed address
        const contractAddress = "0x123..."; // From `truffle migrate` output
        const landRegistry = new ethers.Contract(
          contractAddress,
          LandRegistryABI.abi,
          signer
        );
        setContract(landRegistry);

        console.log("Contract connected!");
      } catch (error) {
        console.error("Error connecting:", error);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  // Fetch land details
  const fetchLand = async (landId) => {
    const land = await contract.getLandDetails(landId);
    setLandData(land);
  };

  // Register new land (example)
  const registerLand = async () => {
    await contract.registerLand(1, account, "123 Main St");
    alert("Land registered!");
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div>
      <h1>Land Registry</h1>
      <p>Connected Account: {account}</p>
      <button onClick={registerLand}>Register Land</button>
      <button onClick={() => fetchLand(1)}>Get Land Details</button>
      {landData && (
        <div>
          <p>Land Owner: {landData.owner}</p>
          <p>Address: {landData.propertyAddress}</p>
        </div>
      )}
    </div>
  );
}

export default App;