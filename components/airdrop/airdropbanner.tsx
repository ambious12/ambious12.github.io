import Image from "next/image"
import { AirdropData } from "@utils/types/nft.interface"
import { useQuery, useQueryClient } from 'react-query';
import { useCollection } from "@utils/hooks/useCollection"
import { LoadingSpinner2 } from "@components/common/loading"
import { AddressInput, EventTimer } from "./";


export const AirdropCurrent = ({ airdrop }: { airdrop: AirdropData }) => {
    const queryClient = useQueryClient();
    const { getCollection } = useCollection()

    const { data: collectionData, isLoading: collectionLoading } = useQuery(
        ['collection', airdrop?.NFTaddress],
        () => queryClient.fetchQuery(['collection', airdrop.NFTaddress], () => getCollection(airdrop.NFTaddress)),
        {
            enabled: !!airdrop,
        }
    );

    if (collectionLoading || !collectionData) return <LoadingSpinner2 />
    return (
        <>
            <div className="relative w-full lg:w-3/4 mx-auto from-transparent to-[#A259FF] bg-cover bg-no-repeat before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-gradient-to-b">
                <div className="w-full rounded-t-xl overflow-hidden">
                    <Image
                        src={collectionData.logo}
                        alt="image"
                        width={1000}
                        height={1000}
                        className="h-[660px] w-full object-cover"
                    />
                </div>
                <div className="absolute -bottom-[25%] left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-[30px] sm:-bottom-[10%] sm:gap-20 md:flex-row">
                    <div className="flex flex-col gap-3 lg:gap-4 lg:mt-4 text-white ">
                        <div className="max-w-[375px] text-start text-4xl font-semibold leading-[45px] sm:whitespace-nowrap">
                            {collectionData.name}
                        </div>
                        <div className="flex items-center">
                            <div className="w-10 h-10 flex-shrink-0 mr-2">
                                <Image
                                    className="rounded-full"
                                    src={collectionData!.logo}
                                    width={400}
                                    height={400}
                                    alt="collector"
                                />
                            </div>
                            <div className="font-medium text-md lg:text-xl">
                                {collectionData.name}
                            </div>
                        </div>
                    </div>
                    <EventTimer airdrop={airdrop} />
                </div>
            </div>
            <AddressInput airdrop={airdrop} />
        </>
    )
}