import { useTranslation } from "react-i18next";

// Icon
import "../../css/spinner.css";
import { ImSpinner } from "react-icons/im";

import { createRef, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
// Habilitando archivo para router link
import { Link } from "react-router-dom";
// Componente 
import Alert from '../../components/Alert';
// Images
import LogoImg from '../../assets/logo/wide_blue.png'
// Helper - Toastify
import Notify from '../../helper/Notify';

export default function Login() {
    const { t } = useTranslation();

    // Acceden al elemento input del DOM y su valor
    const emailRef = createRef();
    const passwordRef = createRef();

    const [errores, setErrores] = useState([]);
    const [iniciar, setIniciar] = useState(t("actions.to-login"));

    // Simulamos parametros de laravel para el hook
    const { login } = useAuth({
        middleware: 'guest',
        url: '/'
    });

    const handleSubmit = async e => {
        e.preventDefault();

        // Propiedades del objeto, según como los espera Laravel
        const datos = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }

        // Pasamos los datos necesarios a la función
        await login(datos, setErrores, NotiError, load);
    }

    const load = () => {
        setIniciar(<ImSpinner className="loading-icon" />)
    }

    // Toastify
    const toastErrorId = "error-noti";
    const NotiError = Notify(
        "error",
        toastErrorId,
        t("info.errors.bad-credentials"),
        "!bg-[#191E2B] !font-body !py-2"
    );

    return (
        <>

            <div className="content-form-center">

                {/* Imagen de Logo */}
                <a href="#" className="flex items-center mb-8  ">
                    <img className="w-auto h-2/5 sm:max-h-[12rem]" src={LogoImg} alt="logo" />
                </a>

                {/* Formulario e Inputs */}

                <div className="w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 bg-neutral">
                    <div className="p-6 space-y-4 sm:space-y-6 sm:p-8">

                        <h1 className="text-4xl text-center text-white font-title font-semibold py-4">
                            {t("actions.login")}
                        </h1>

                        {/* Impresión de errores */}
                        {errores ? errores.map((error, i) => <Alert key={i}>{error}</Alert>) : ''}

                        {/* Form Login */}
                        <form
                            className="space-y-4 md:space-y-6"
                            onSubmit={handleSubmit}
                            noValidate
                        >
                            {/* Input */}
                            <div className="form-control w-full">
                                <label className="label" htmlFor="email">
                                    <span className="label-text">{t("credentials.student-email")}</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="estudiante@cdb.edu.sv"
                                    className="input input-bordered w-full text-white bg-base-100"
                                    id="email"
                                    ref={emailRef}
                                />
                            </div>

                            {/* Input contraseña */}
                            <div className="form-control w-full">
                                <label className="label" htmlFor="password">
                                    <span className="label-text">{t("credentials.password")}</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="input input-bordered w-full text-white bg-base-100"
                                    id="password"
                                    ref={passwordRef}
                                />
                            </div>

                            <div className="pt-4">
                                <button
                                    className="btn no-animation w-full btn-success text-white font-plane"
                                    type="submit">
                                    {iniciar}
                                </button>
                            </div>

                        </form>

                        <p className="text-white">{t("auth.not-acc-msg")}
                            <span className="font-extrabold">
                                <Link to="/auth/register"> {t("auth.create-acc")}</Link>
                            </span>
                        </p>
                    </div>
                </div>
            </div>

        </>
    );
}
