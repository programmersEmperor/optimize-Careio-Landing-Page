import ServiceMotion from "./SerivceMotion";
import ServiceRefrenceWrapper from "./ServiceReferenceWarpper";
import Card from '@/components/shared/Card'

interface Props {
    dict: any
}

export default function Service({dict}: Props){
    return <ServiceRefrenceWrapper>
        <div className="mt-[67px] md:mt-[96px] lg:mt-[50px]" id="Services">
            <ServiceMotion title={dict.Services_For_Your_Health} 
                card1={
                    <Card
                    icon="/icons/tby.png"
                    alt={`${dict.title_service1}`}
                    title={dict.title_service1}
                    description={dict.subtitle_service1}
                    isFilled/>
                }
                card2={
                    <Card
                    icon="/icons/cita.png"
                    alt={dict.title_service2}
                    title={dict.title_service2}
                    description={dict.subtitle_service2}
                    isFilled/>
                }
                card3={
                    <Card
                    icon="/icons/medicine.png"
                    alt={dict.title_service3}
                    title={dict.title_service3}
                    description={dict.subtitle_service3}
                    isFilled/>
                }
                card4={
                    <Card
                    icon="/icons/pay.png"
                    alt={dict.title_service4}
                    title={dict.title_service4}
                    description={dict.subtitle_service4}
                    isFilled/>
                } />
        </div>
    </ServiceRefrenceWrapper>
}