import Image from "next/image";


export default function CertifiedShowCase(){
    return(
        <div className="max-w-screen-lg mt-10 text-sm px-5 sm:text-base sm:px-0 w-full grid grid-cols-2 sm:grid-cols-4 text-center">
            <div className="flex justify-start mt-6 aspect-square flex-col items-center">
                <Image src="/assets/certified/1.png" alt="certified" width={150} height={150} className="object-cover" />
                <p className="uppercase font-bold mt-2">Formulated without harmful chemicals</p>
            </div>
            <div className="flex justify-start aspect-square flex-col items-center">
                <Image src="/assets/certified/2.png" alt="certified" width={120} height={120} />
                <p className="uppercase font-bold mt-2">Vegan</p>
            </div>
            <div className="flex justify-start sm:mt-5  aspect-square flex-col items-center">
                <Image src="/assets/certified/3.png" alt="certified" width={100} height={100} />
                <p className="uppercase font-bold mt-2">made in the usa</p>
            </div>
            <div className="flex justify-start mt-2 sm:mt-8 aspect-square flex-col items-center">
                <Image src="/assets/certified/4.png" alt="certified" width={100} height={100} />
                <p className="uppercase font-bold mt-2">Leaping-bunny certified</p>
            </div>
        </div>
    )
}