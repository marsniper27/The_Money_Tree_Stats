import React, { useState, useEffect } from 'react';
import { useContractRead  } from 'wagmi'
import { CONTRACT_ABI} from '@/components/utils/config';

interface ContractData {
  group: number;
  deposited: boolean;
  totalReceived: bigint;
  availableToClaim: bigint;
  numberOfReferrals: bigint;
  lastEpochAddReferrals: bigint;
  winner: boolean;
  depositTimestamp: bigint;
}

interface UserInfoProps {
  userAddress: string;
}

const UserInfo: React.FC<UserInfoProps> = ({userAddress}) => {
  const [userData, setUserData] = useState<ContractData | null>(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await useContractRead({
            address: "0xEaE382adf90e28603b9D9f49E4207bc5051370c9",
            abi: CONTRACT_ABI,
            functionName: 'userInfo',
            args: ["0x1f42ad4c83ff23fd1a7bf5527fd74b731083cfab"],
        });

        const dataArray = data as [
          number,
          boolean,
          bigint,
          bigint,
          bigint,
          bigint,
          boolean,
          bigint
        ];

        if (dataArray.length === 8) {
          const [
            group,
            deposited,
            totalReceived,
            availableToClaim,
            numberOfReferrals,
            lastEpochAddReferrals,
            winner,
            depositTimestamp,
          ] = dataArray;

          const userData: ContractData = {
            group,
            deposited,
            totalReceived,
            availableToClaim,
            numberOfReferrals,
            lastEpochAddReferrals,
            winner,
            depositTimestamp,
          };

          setUserData(userData);
        }
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [userAddress]);

  if (isLoading) {
    "isLoading"
    // return <div>Loading...</div>;
  }

  if (isError) {
    "isError"
    // return <div>Error fetching data</div>;
  }

  if (!userData) {
    return null;
  }

  return (
    userData
    // <div>
    //   <h1>Investment Tier: {userData.group}</h1>
    //   {/* Render other user data here */}
    // </div>
  );
};

export default UserInfo;
