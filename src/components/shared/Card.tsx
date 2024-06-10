import Image from "next/image";

interface Props {
    alt: string;
    title: string;
    description: string;
    icon: string;
    isFilled?: boolean;
}

export default function Card({title, description, icon, alt, isFilled}: Props){
    if (isFilled)
        return (
            <>
            <div className={`h-full w-full bg-gradient-to-br from-startCardGrident to-endCardGrident  p-[14px] rounded-[12px] md:rounded-[20px] xl:py-[20px]  md:py-[30px] md:px-[20px] shadow-[2px_4px_10px_1px_rgba(22,82,69,0.6)] md:shadow-[3px_6px_15px_1px_rgba(22,82,69,0.6)] text-white`}>
                <Image
                    alt={alt}
                    src={icon}
                    width={200}
                    height={200}
                    className="h-[42px] w-[42px] md:h-[38px] md:w-[38px] 2xl:h-[60px] 2xl:w-[60px]"
                />

                <h1 className="text-[16px] font-bold mt-[9px] mb-[9px] md:text-[20px] xl:text-[15px] 2xl:text-[22px] md:mt-[24px] xl:mt-[20px] 2xl:mt-[24px] md:mb-[14px] xl:mb-[10px] 2xl:mb-[14px]">
                {title}
                </h1>

                <p className="text-[12px] md:text-[13px]  xl:text-[11px] 2xl:text-[15px]  leading-[19px] md:leading-[30px] xl:leading-[20px]">
                {description}
                </p>
            </div>
            </>
        );

  
  return (
    <>
      <div className={`h-full w-full bg-white px-[10px] py-[24px] rounded-[12px] md:rounded-[20px] md:py-[20px] 2xl:py-[30px] md:px-[30px] border-b-[4px] md:border-b-[9px] border-b-[#73B9AB] shadow-[2px_4px_10px_0px_rgba(10,72,62,0.6)] md:shadow-[3px_6px_15px_0px_rgba(10,72,62,0.6)]`}>
        <Image
          alt={alt}
          src={icon}
          width={200}
          height={200}
          className="h-[42px] w-[42px]  md:h-[50px] md:w-[50px] 2xl:h-[60px] 2xl:w-[60px]"
        />

        <h1 className="text-[16px] text-primary font-bold mt-[10px] mb-[15px] md:text-[20px] xl:text-[15px] 2xl:text-[22px] md:mt-[28px] md:mb-[20px]">
          {title}
        </h1>

        <p className="text-[12px] md:text-[13px] 2xl:text-[15px] xl:text-[11px] text-[#4B4B4B] leading-[19px] md:leading-[30px] xl:leading-[20px]">
          {description}
        </p>
      </div>
    </>
  );
}