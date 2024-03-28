import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

//Componentes
import NavCafetin from "../components/Nav/NavCafetin";
import NavMobileIndex from "../components/Nav/NavMobileIndex";
import FoodCard from "../components/FoodCard";

//Banners
import AlmuerzoPng from "/src/assets/Dishes/almuerzosPng.png";

//Imagenes
import Burrito from "/src/assets/index/burrito.jpg";

import Tortas from "/src/assets/index/Tortas.jpg";
import PolloAsado from "/src/assets/index/polloAsado.jpg";


export default function Desayunos() {
  const { t } = useTranslation();

  useEffect(() => {
    // Cuando el componente se monta, ajusta el scroll al principio de la página
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavCafetin />
      <NavMobileIndex />

      <div>
        <main>
          <section className="mb-[0em] md:mb-[0rem] animate-fade animate-ease-in-out animate-once animate-duration-[1000ms]">
            <div className="flex w-full h-[4rem] z-0 md:mb-[4rem]"></div>
            <div className="flex justify-between lg:items-center bg-[#5a2d96] xxsm:h-[11rem] md:h-[13rem] lg:h-[17rem] mt-[-1rem] md:px-7 md:pt-1 rounded-t-2xl drop-shadow-md animate-fade-up animate-ease-in-out animate-once animate-duration-[500ms] relative">
              <h1 className="text-4xl md:text-6xl font-bold xxsm:mt-[2rem] md:mt-[3rem] lg:mt-[0rem] pb-[1rem] xxsm:ml-7 md:ml-6 md:px-1 text-white">
                {t("almuerzo.lunch-title")}
              </h1>
              <div className="flex flex-col items-end absolute right-0 xxsm:top-[3.5rem] md:top-[1rem] lg:bottom-auto lg:top-[0rem] lg:right-[0rem]">
                <img
                  src={AlmuerzoPng}
                  className="xxsm:h-[10rem] md:h-[16rem] lg:h-[23rem]"
                />
              </div>
            </div>
          </section>
          <section className="bg-base-100 text-white mt-[-1rem] rounded-t-2xl items-center justify-between mx-0 xl:mx-[0rem] animate-fade-up animate-ease-in-out animate-once animate-duration-[500ms]">
            <h2 className="text-3xl md:text-5xl font-bold drop-shadow-2xl pt-12 px-8 text-center">
            {t("almuerzo.popular-title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 xl:mx-[6rem] gap-4 md:gap-8 xl:gap-12 px-8 pt-8 pb-[10rem]">
              <FoodCard
                name="Pollo Asado"
                photo={PolloAsado}
                cafetin="Maria Auxiliadora"
                precio="2.50"
                categoria="Almuerzos"
              />
              <FoodCard
                name="Tortas"
                photo={Tortas}
                cafetin="Don Bosco"
                precio="2.50"
                categoria="Almuerzos"
              />
              <FoodCard
                name="Burrito"
                photo={Burrito}
                cafetin="Maria Auxiliadora"
                precio="2.50"
                categoria="Almuerzos"
              />
              <FoodCard
                name="Pollo Asado"
                photo={PolloAsado}
                cafetin="Miguel Magone"
                precio="2.50"
                categoria="Almuerzos"
              />
            </div>
          </section>
          <br /> <br />
        </main>
      </div>
    </>
  );
}
