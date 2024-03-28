// Importamos datos
import useCafeterias from '../hooks/useCafeterias';

//Traduccion
import { useTranslation } from "react-i18next";

// Components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { CgSpinner } from "react-icons/cg";

// Importacion de estilos de swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// importacion de modulos requeridos
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Carrousel() {
    // Extraemos datos del ccontext
    const { cafeterias } = useCafeterias();
    const { t } = useTranslation();

    return (
        <>
            <Swiper
                spaceBetween={30} centeredSlides={true} loop={true}
                autoplay={{ delay: 4000, disableOnInteraction: true, }}
                pagination={{ clickable: true, }}
                navigation={true} modules={[Autoplay, Pagination, Navigation]}
                className="w-full h-[26rem] lg:h-[40rem] md:h-[32rem] text-white"
            >

                {cafeterias?.length ? cafeterias.map((cafe, i) => (
                    <SwiperSlide key={i}
                        style={{ backgroundImage: `url(/assets/cafeterias/${cafe.cafe_wallp})` }}
                        className={`bg-cover bg-center img`}>

                        <div className="h-full flex md:justify-start md:items-end justify-center items-center bg-black/50 px-24 md:pb-20 pt-20 pb-0 md:pt-0">
                            <div className="max-w-md md:text-start text-center">
                                <h1 className="mb-5 text-5xl md:text-7xl font-bold">{cafe.nombre}</h1>
                                <p className="mb-5 text-xl md:text-2xl">{/* Bachillerato y Tercer Ciclo*/}
                                                                            {t("carrousel.area-title")}</p>

                                <Link to={`/cafeteria/${cafe.id}`} className="btn btn-primary" >
                                    {/* Ver Cafetin */}
                                {t("carrousel.see-cafeteria")}
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                )) : <SwiperSlide>
                        <div className='h-full flex justify-center items-center bg-black/50'>
                            <CgSpinner className="loading-icon mr-2" size={100} />
                        </div>
                    </SwiperSlide>}
            </Swiper >
        </>
    )
}
