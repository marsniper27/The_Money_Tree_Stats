'use client'
import { useState, useEffect, useRef} from 'react';
import Cookies from 'js-cookie'; // Import the Cookies library


import TreeDisplay from './tree'
import Sidebar from './ui/sidebar';

export default function HeroFeatures() {
  const [numInputs, setNumInputs] = useState<number>(4);
  const [inputValues, setInputValues] = useState<string[]>(["Wallet 1","Wallet 2","Wallet 3","Wallet 4"]);
  const [trees, setTrees] = useState([{top:inputValues[0],left:inputValues[1],center:inputValues[2],right:inputValues[3]}]);
  const [reinvest, setReinvest] = useState(false);
  const [generateWallets, setGenerateWallets] = useState(false);
  const [tier, setTier] = useState('Leaves');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState<boolean>(false);
  const [fetchedCookies, setFetchedCookies] = useState(false);

  const trigger = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    function setMobile(){
    // Set initial sidebar visibility based on screen width
    if(window.innerWidth < 768){
      setIsMobileScreen(true); // Adjust the breakpoint as needed
      }
    }

    function getCookeis(){
      const storedNumInputs = Cookies.get('numInputs');
      if (storedNumInputs) {
        setNumInputs(parseInt(storedNumInputs));
      }

      const storedInputValues = Cookies.get('inputValues');
      if (storedInputValues) {
        setInputValues(JSON.parse(storedInputValues));
      }

      const storedTrees = Cookies.get('trees');
      if (storedTrees) {
        setTrees(JSON.parse(storedTrees));
      }
      
      setFetchedCookies(true)
    }

    getCookeis()
    setMobile()
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  
  const handleDropdownChange = (event:any) => {
    setTier(event.target.value);
  };

  const handleReinvestChange = (event:any) => {
    setReinvest(event.target.checked);
  };

  const handleGenerateWalletsChange = (event:any) => {
    setGenerateWallets(event.target.checked);
  };


  // useEffect(() => {
  //   function reinvestWallet() {
  //     if(reinvest){
  //       if(tier == "Leaves"){
  //         setNumInputs(numInputs+1);
  //       }
  //     }
  //     else{
  //       if(tier == "Leaves"){
  //         setNumInputs(numInputs-1);
  //       }
  //     }
  // }

  //   reinvestWallet();
  // }, [reinvest]);

  // Use useEffect to save cookies when values change
  useEffect(() => {
    function updateCookies() {
      if(fetchedCookies){
      // Save numInputs to a cookie
      Cookies.set('numInputs', numInputs.toString());

      // Save inputValues to a cookie
      Cookies.set('inputValues', JSON.stringify(inputValues));

      // Save trees to a cookie
      Cookies.set('trees', JSON.stringify(trees));
      }
    }
    updateCookies();
  }, [numInputs, inputValues, trees]);

  return (
    <section className="relative pt-32" >
      {/* <div className="flex pt-32"> */}
        {/* <Sidebar/> */}
        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} mobile={isMobileScreen} trees={trees} setTrees={setTrees} inputValues={inputValues} setInputValues={setInputValues} setNumInputs={setNumInputs} numInputs={numInputs}/>
        {isMobileScreen ?(
          <div>
            <button
              ref={trigger}
              className={`hamburger  ${isSidebarOpen && isMobileScreen && 'active'}`}
              aria-controls="mobile-nav"
              aria-expanded={isSidebarOpen}
              onClick={toggleSidebar} 
              style={{
                position: 'fixed',   // Set position to fixed
                top: '50vh',         // Adjust the desired top spacing
                left: '2px',        // Adjust the desired left spacing
                zIndex: 1000,        // Set a high z-index to ensure it's above other content
              }}
            >
              <span className="sr-only">Menu</span>
              <svg
                className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </button>
            <div className={`max-w-6xl mx-auto px-4 sm:px-6 relative`}>
              {/* Hero content */}
              <div className="relative pb-12 md:pb-20">
                {/* Content */}
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                  <h1 className="h1 mb-4" data-aos="fade-up">Tree Structure Generator</h1>
                  <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">Automatically create trees for you and your teams.</p>
                  <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">STILL A WORK IN PROGRESS.</p>
                  {/* <select className="dark-font-color" value={tier} onChange={handleDropdownChange}>
                    <option value="option1">Leaves</option>
                    <option value="option2">Stalk</option>
                    <option value="option3">Branch</option>
                  </select>
                  <div>
                    <input
                      type="checkbox"
                      id="reinvestCheckbox"
                      checked={reinvest}
                      onChange={handleReinvestChange}
                    />
                    <label htmlFor="myCheckbox">Allow Reinvesting for maxed out wallets </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="generateWalletsCheckbox"
                      checked={generateWallets}
                      onChange={handleGenerateWalletsChange}
                    />
                    <label htmlFor="myCheckbox">Generate new wallets with payouts</label>
                  </div> */}
                </div>
                {/* Items */}
                {trees.map((item, index) => (
                  <div key={index} className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                    <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay={index * 200}>
                      
                      {/* Items */}
                      <TreeDisplay
                        top={item.top}
                        left={item.left}
                        center={item.center}
                        right={item.right}
                      />
                    </div>
                  </div>
                ))}
              </div> 
            </div>
          </div>
        ):(
          <div className={`max-w-6xl mx-auto px-4 sm:px-6 relative overflow-wrap`} style={{left:'200px', maxWidth: "100%-200px", minWidth:"calc(100%-300px)"}}>
              {/* Content */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16 overflow-wrap">
                <h1 className="h1 mb-4 overflow-wrap" data-aos="fade-up">Tree Generator</h1>
                <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">Automatically create trees for you and your teams.</p>
                <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">STILL A WORK IN PROGRESS.</p>
                {/* <select className="dark-font-color" value={tier} onChange={handleDropdownChange}>
                  <option value="option1">Leaves</option>
                  <option value="option2">Stalk</option>
                  <option value="option3">Branch</option>
                </select>
                <div>
                  <input
                    type="checkbox"
                    id="reinvestCheckbox"
                    checked={reinvest}
                    onChange={handleReinvestChange}
                  />
                  <label htmlFor="myCheckbox">Allow Reinvesting for maxed out wallets </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="generateWalletsCheckbox"
                    checked={generateWallets}
                    onChange={handleGenerateWalletsChange}
                  />
                  <label htmlFor="myCheckbox">Generate new wallets with payouts</label>
                </div> */}
              </div>
              {/* Items */}
              {trees.map((item, index) => (
                <div key={index} className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                  <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay={index * 200}>
                    
                    {/* Items */}
                    <TreeDisplay
                      top={item.top}
                      left={item.left}
                      center={item.center}
                      right={item.right}
                    />
                  </div>
                </div>
              ))}
          </div>)}
        {/* <div className={`max-w-6xl mx-auto px-4 sm:px-6 relative`} style={{left:'200px', maxWidth: "100%-200px", minWidth:"calc(100%-300px)"}}>
          {/* Hero content */}
          {/* <div className="relative pb-12 md:pb-20"> */}
            {/* Content */}
            {/* <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="h1 mb-4" data-aos="fade-up">Tree Structure Generator</h1>
              <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">Automatically create trees for you and your teams.</p>
              <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">STILL A WORK IN PROGRESS.</p> */}
              {/* <select className="dark-font-color" value={tier} onChange={handleDropdownChange}>
                <option value="option1">Leaves</option>
                <option value="option2">Stalk</option>
                <option value="option3">Branch</option>
              </select>
              <div>
                <input
                  type="checkbox"
                  id="reinvestCheckbox"
                  checked={reinvest}
                  onChange={handleReinvestChange}
                />
                <label htmlFor="myCheckbox">Allow Reinvesting for maxed out wallets </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="generateWalletsCheckbox"
                  checked={generateWallets}
                  onChange={handleGenerateWalletsChange}
                />
                <label htmlFor="myCheckbox">Generate new wallets with payouts</label>
              </div> */}
            {/* </div> */}
            {/* Items */}
            {/* {trees.map((item, index) => (
              <div key={index} className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay={index * 200}> */}
                  
                  {/* Items */}
                  {/* <TreeDisplay
                    top={item.top}
                    left={item.left}
                    center={item.center}
                    right={item.right}
                  />
                </div>
              </div>
            ))}
          </div>  */}
        {/* </div> */}
      {/* </div> */}
    </section>
  )
}
