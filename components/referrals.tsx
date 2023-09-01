'use client'
import React,{ useState, useEffect} from 'react';
import { CONTRACT_ADDRESS, TIERS,initializeWeb3Instances} from '@/components/utils/config';

interface Referral{
    wallet:string;
    block:number;
    date: string;
    time:number;
}

interface ReferralsProps{
    address:string;
}

// const Referrals: React.FC<ReferralsProps> = ( {address} ) => {
export default function Referrals (address:any){
    const [referrals, setReferrals] = useState<Array<Referral>>([]);
    const [web3Instance, setWeb3] = useState<any>(null);

    
  
  async function initialize(){
    const newNeb3Instance = await initializeWeb3Instances();
    setWeb3(newNeb3Instance)
  }

  useEffect(() => {
    async function fetchReferrals() {
      if (!web3Instance) {
        await initialize();
      }
      if (web3Instance) {
        const currentBlock = await web3Instance.web3.eth.getBlockNumber()
        for (let x = 31166288; x <= currentBlock; x += 3001) {
          web3Instance.contract
            .getPastEvents('Deposited', {
              filter: { referrer: address.address },
              fromBlock: x,
              toBlock: x + 3000,
            })
            .then(async function (events: any) {
              setReferrals((prevRefs) => {
                let newRefs: any = [];
                for (let item = events.length-1; item >= 0; item--) {
                  // var standardDate
                  // const standardDate = web3Instance.web3.eth.getBlock(events[item].blockNumber).then((value:any) => {
                  //   const unixTimestamp = value.timestamp;
                  //   const date = new Date(unixTimestamp * 1000); // Convert to milliseconds by multiplying by 1000
                  //   return(date.toISOString()); // Convert to standard ISO date string
                   
                  // }) 
                  newRefs = [
                    ...newRefs,
                    {
                      wallet: events[item].returnValues.sender,
                      block: events[item].blockNumber,
                      date: "standardDate",
                      time: 0,
                    },
                  ];
                  
                }
                return [...prevRefs, ...newRefs];
              });
              // console.log(events);
            });
        }
      }
    }
    if (address && address.address !== '') {
      fetchReferrals();
    }
  }, [address, web3Instance]);

  return(
    <div>
      <h1 className="h1 mb-4" data-aos="fade-up">Referral info</h1>
      {/* Items */}
      {referrals.map((item, index) => (
                  <div key={index} className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                    <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay={index * 200}>
                      
                      {/* Items */}
                      <div className="tree-row">
                          <h4 className="tree-node h4">Wallet: </h4>
                          <h4 className="tree-node h4">{item.wallet}</h4>
                      </div>
                      <div className="tree-row">
                          <h4 className="tree-node h4">Block: </h4>
                          <h4 className="tree-node h4">{item.block}</h4>
                      </div>
                      {/* <div className="tree-row">
                          <h4 className="tree-node h4">Date: </h4>
                          <h4 className="tree-node h4">{item.date}</h4>
                      </div>
                      <div className="tree-row">
                          <h4 className="tree-node h4">Time: </h4>
                          <h4 className="tree-node h4">{item.time}</h4>
                      </div> */}
                    </div>
                  </div>
                ))}
    </div>
  )

}


// export default Referrals;