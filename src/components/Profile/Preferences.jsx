import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Icons
import { MdOutlineAlternateEmail, MdLockOutline } from "react-icons/md";
import { HiOutlineWallet } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";

export default function Preferences(props) {
    const { user } = props;
    const { t } = useTranslation();

    return (
        <>
            <div className="mb-10 fa-custom animate-fade">
                <ul className="w-10/12 m-auto ">
                    <div>
                        <li className="li-elem !mb-4">
                            <MdOutlineAlternateEmail size={"25"} />
                            <div className="flex justify-between w-full">
                                <span className="px-2 overflow-ellipsis min-w-[13.8rem] sm:w-full overflow-hidden">
                                    {user?.email}
                                </span>
                            </div>
                        </li>
                    </div>

                    <Link to="/profile/logs/">
                        <li className="li-elem">
                            <HiOutlineWallet size={"25"} />
                            <div className="flex justify-between w-full">
                                <span className="px-2"> {t("info.funds-logs")} </span>
                                <IoIosArrowForward size={"25"} className="fu-custom animate-fade-right" />
                            </div>
                        </li>
                    </Link>
                </ul>
            </div>
        </>


    );
}
