'use client'

import Image from "next/image"
import { MdClose } from "react-icons/md"
import { FaCheck } from "react-icons/fa6"

import CustomButton from "./CustomButton"

//import swiper components
import { Swiper, SwiperSlide } from "swiper/react"

//import required modules
import { Pagination } from "swiper/modules"

//swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const membership = [
    {
        title: 'Standard',
        price: '30',
        benefits: [
            {
                icon: FaCheck,
                text: 'Inclui associação'
            },
            {
                icon: FaCheck,
                text: 'Acesso a todas as instalações da academia'
            },
            {
                icon: MdClose,
                text: 'Plano de dieta incluído'
            },
            {
                icon: FaCheck,
                text: 'Dicas de saúde e condicionamento físico'
            },
            {
                icon: MdClose,
                text: 'Acesso à academia de segunda a sexta'
            },
            {
                icon: FaCheck,
                text: 'Acesso total a tudo'
            },
            {
                icon: MdClose,
                text: 'Sem comodidades adicionais'
            },
        ]
    },
    {
        title: 'Ultimate',
        price: '45',
        benefits: [
            {
                icon: FaCheck,
                text: 'Inclui associação'
            },
            {
                icon: FaCheck,
                text: 'Acesso a todas as instalações da academia'
            },
            {
                icon: FaCheck,
                text: 'Plano de dieta incluído'
            },
            {
                icon: FaCheck,
                text: 'Dicas de saúde e condicionamento físico'
            },
            {
                icon: FaCheck,
                text: 'Acesso à academia de segunda a sexta'
            },
            {
                icon: FaCheck,
                text: 'Acesso total a tudo'
            },
            {
                icon: MdClose,
                text: 'Sem comodidades adicionais'
            },
        ]
    },
    {
        title: 'Profissional',
        price: '60',
        benefits: [
            {
                icon: FaCheck,
                text: 'Inclui associação'
            },
            {
                icon: FaCheck,
                text: 'Acesso a todas as instalações da academia'
            },
            {
                icon: FaCheck,
                text: 'Plano de dieta incluído'
            },
            {
                icon: FaCheck,
                text: 'Dicas de saúde e condicionamento físico'
            },
            {
                icon: FaCheck,
                text: 'Acesso à academia de segunda a sexta'
            },
            {
                icon: FaCheck,
                text: 'Acesso total a tudo'
            },
            {
                icon: FaCheck,
                text: 'Sem comodidades adicionais'
            },
        ]
    },
]

const MembershipSlider = () => {
  return (
    <Swiper
        className="min-h-[680px]"
        slidesPerView={1}
        modules={[Pagination]}
        pagination={{
            clickable: true,
        }}
        breakpoints={{
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }}    
    >
        {membership.map((item, index) => {
            return(
                <SwiperSlide key={index}>
                    <div className="border border-accent hover:bg-primary-300/80 transition-all
                    duration-300 w-full max-w-sm xl:max-w-none mx-auto max-[400px]:max-w-[330px]">
                        <div className="py-3 px-[60px] border-b border-accent">
                            <h4 className="h4">{item.title}</h4>
                        </div>
                        {/* benefits */}
                        <div className="py-[25px] px-[60px]">
                            <ul className="flex flex-col gap-5 mb-7">
                                {item.benefits.map((item, index) => {
                                    return(
                                        <li className="flex items-center gap-2" key={index}>
                                            <item.icon className="text-accent text-lg" />
                                            {item.text}
                                        </li>
                                    )
                                })}
                            </ul>
                            {/* prices */}
                            <p className="text-accent mb-3 flex gap-1 items-center">
                                <sup className="text-4xl">R$</sup>
                                <strong className="text-6xl">{item.price}</strong>
                                <em className="self-end text-2xl">/mês</em>
                            </p>
                            <CustomButton
                                containerStyles="w-[192px] h-[62px] max-[400px]:w-[152px] h-[42px] max-[400px]:ml-5"
                                text="Compre agora!"
                             />
                        </div>
                    </div>
                </SwiperSlide>
            )
        })}
    </Swiper>
  )
}

export default MembershipSlider