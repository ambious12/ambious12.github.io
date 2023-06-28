import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import request from "@utils/request";
import { useMarket } from "@utils/hooks/useMarket";
import Category from "./styled/category";
import Collection from "./styled/collection";
import Slide from "./styled/slide";
import { useCoinGecko } from "@utils/hooks/useCoingecko";

const Main = () => {
  const { market } = useMarket();
  const [randomAddress, setRandomAddress] = useState<string | undefined>('');
  const {maticHistoryPrice} = useCoinGecko()

  const getAllCollections = async () => {
    try {
      const { data } = await request.get(`collection`);
      return data;
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  };

  const getNfts = async (collectionAddress: string) => {
    try {
      const response = await market.getAllTokensInCollection(collectionAddress);
      const result = response.map((proxy: any) => {
        const obj = {
          id: Number(proxy[0]),
          seller: proxy[1],
          NFTaddress: proxy[2],
          tokenId: Number(proxy[3]),
          price: Number(proxy[4]),
          metadata: proxy[5],
          sold: proxy[6],
          creatorFee: Number(proxy[7]),
          openingPrice: Number(proxy[8]),
          auctionEndTime: Number(proxy[9]),
          highestBidder: proxy[10],
          highestBid: Number(proxy[11]),
        };
        return obj;
      });

      return result;
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  };

  const { data: collectionDatas, isLoading: collectionLoading } = useQuery(
    ["collection"],
    () => getAllCollections(),
    {
      cacheTime: 60 * 24 * 1000,
    },
  );

  const getRandomAddress = () => {
    const randomIndex = Math.floor(Math.random() * collectionDatas.length);
    return collectionDatas[randomIndex]?.address;
  };

  const { data: tokenData, isLoading: nftsLoading } = useQuery(
    ["nfts", randomAddress],
    () => getNfts(randomAddress as string),
    {
      cacheTime: 60 * 24 * 1000,
      enabled: !!market && !!randomAddress,
    },
  );

  useEffect(() => {
    if (!collectionLoading) {
      const randomAddress = getRandomAddress();
      setRandomAddress(randomAddress);
    }
  }, [collectionLoading]);

  const isLoading = collectionLoading || nftsLoading;

  if (isLoading) return <p>Loading...</p>; // 로딩 컴포넌트 필요
  return (
    <div className="mx-auto flex flex-col items-center">
      <div>History Price : {maticHistoryPrice}</div>
      <Slide tokenData={tokenData} />
      <Category collectionDatas={collectionDatas} />
      <Collection collectionDatas={collectionDatas} />
    </div>
  );
};

export default Main;
