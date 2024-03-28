import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CgSpinner } from "react-icons/cg";

//Spinner
import Spinner from "../components/Spinner";

//Componentes
import Page404 from "../views/Page404";
import WiggleAlert from "../components/WiggleAlert";

// Contenido Variable
import useCafeterias from "../hooks/useCafeterias";

//Iconos
import { FaRegHeart } from "react-icons/fa";
import FoodCard from "../components/Cafeteria/FoodCard";
import { ValidURL } from "../helper/ValidURL";

export default function CafetinView() {
  const { t } = useTranslation();
  // Extraer parametro
  const {
    cafeterias,
    obtenerContenidoCafeteria,
    contenidoCafeteria,
    limpiarCafeteria,
  } = useCafeterias();
  const { cafeteriaId } = useParams();
  // Validar URL
  const { bool, error } = ValidURL(cafeteriaId);
  if (bool) return error;

  // Extraer contenido de la cafeteria actual al tener el ID
  useEffect(() => {
    limpiarCafeteria();
    obtenerContenidoCafeteria(cafeteriaId);
  }, []);

  // Contenido de la cafeteria
  const cafeteria = cafeterias?.find(
    (cafeteria) => cafeteria?.id == cafeteriaId
  );
  const { platillos } = contenidoCafeteria;
  
  // Filtrar platillos desactivos
  const activePlatillos = platillos?.filter((item) => item.active !== 0);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula una carga ficticia
    setTimeout(() => {
      setLoading(false);
    }, 300); // Tiempo que se mostrara el spinner
  }, []);

  return (
    <>
      <div>
        {loading ? (
          <Spinner />
        ) : (
          <main>
            <section className="mb-[0em] md:mb-[0rem] animate-fade animate-ease-in-out animate-once animate-duration-[1000ms]">
              <div className="flex w-full h-[15rem] z-0 md:mb-[9rem]">
                <img
                  src={`../assets/cafeterias/${cafeteria?.cafe_wallp}`}
                  className="bg-cover w-full md:min-h-screen filter brightness-50"
                />
              </div>
              <div className="flex justify-between items-center bg-green-600 h-full mt-[-1rem] md:px-7 md:pt-1 rounded-t-2xl drop-shadow-md animate-fade-up animate-ease-in-out animate-once animate-duration-[500ms]">
                <h1 className="text-4xl md:text-6xl font-bold my-10 pb-[1rem] ml-10 md:px-1 text-white">
                  {cafeteria?.nombre}
                </h1>
                <div className="stat flex flex-col items-end hidden">
                  <div className="stat-title text-xs md:text-lg text-white">
                    {/* Recomendado por */}
              {t("cafetin.recommended-title")}
                  </div>
                  <div className="flex items-center">
                    <div className="stat-figure text-white text-xs font-bold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block w-6 h-6 md:w-8 md:h-8 stroke-current"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        ></path>
                      </svg>
                    </div>
                    <div className="stat-value text-sm md:text-3xl ml-1 text-white hidden">
                      {cafeteria?.likes}
                    </div>
                  </div>
                  <div className="stat-desc text-sm md:text-lg text-white">
                    {/* Estudiantes*/}
              {t("cafetin.students")}
                  </div>
                </div>
              </div>
            </section>
            <section className="bg-base-100 text-white mt-[-1rem] min-h-screen rounded-t-2xl items-center justify-between mx-0 xl:mx-[0rem] animate-fade-up animate-ease-in-out animate-once animate-duration-[500ms]">
              <div className="flex items-center justify-between mb-10 animate-fade-down animate-ease-in-out animate-once animate-duration-[1000ms] animate-delay-[300ms]">
                <div>
                  <h2 className="text-2xl font-bold px-2 ml-6 md:ml-[3rem] mt-6 text-terc">
                    {/* ● Abierto*/}
              {t("cafetin.cafeteria-status")}
                  </h2>
                </div>
                <div className="flex items-center hidden">
                  <h2 className="text-2xl px-1 ml-6 md:ml-[3rem] mt-6 text-red-500">
                    171
                  </h2>
                  <FaRegHeart className="w-7 h-7 ml-2 mt-6 mr-6 md:mr-[3rem] text-red-500" />
                </div>
              </div>

              <section className="hidden mb-10 animate-fade-down animate-ease-in-out animate-once animate-duration-[1000ms] animate-delay-[900ms]">
                <WiggleAlert />
              </section>

              <section className="items-center justify-center hidden ">
                <div className="join">
                  <input
                    className="join-item btn bg-base-300"
                    type="radio"
                    name="options"
                    aria-label="Desayunos"
                  />
                  <input
                    className="join-item btn bg-base-300"
                    type="radio"
                    name="options"
                    aria-label="Almuerzos"
                  />
                  <input
                    className="join-item btn bg-base-300"
                    type="radio"
                    name="options"
                    aria-label="Bebidas"
                  />
                </div>
              </section>

              <h1 className="flex justify-center font-bold text-4xl pb-8 xxsm:mt-[6rem]">{/* Menu del dia*/}
              {t("cafetin.daily-specials")}</h1>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 xl:mx-[6rem] gap-4 md:gap-8 xl:gap-12 px-8 mb-12">
                {/* CONDICIONAL - ARREGLO DE PLATILLOS */}
                {activePlatillos?.length
                  ? activePlatillos.map((platillo, id) => (
                    <FoodCard
                      key={id}
                      name={platillo.name}
                      photo={platillo.img}
                      dishId={platillo.id}
                      cafeteriaId={cafeteriaId}
                    />
                  )): 
                  <div className="flex items-center justify-center col-span-2">
                    <CgSpinner className="loading-icon mr-2" /> Cargando menú...
                  </div>}
              </div>
              <br />
            </section>
            <br /> <br />
          </main>
        )}
      </div>
    </>
  );
}
