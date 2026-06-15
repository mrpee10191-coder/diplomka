import { useTranslation } from "react-i18next";
import { foot, ins, twitter } from "../utils/img";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="container footer__nav">

                <div className="footer__nav-div">

                    {/* LEFT */}
                    <div className="footer__left">

                        <div className="footer__left-title">
                            <span>{t("footer.needed")} </span>
                            <span>{t("footer.projects")}</span>
                        </div>

                        <div className="footer__left-desc">
                            {t("footer.together")}
                        </div>

                        <div className="footer__left-email">
                            <a href="mailto:mr.pee10191@gmail.com">
                                mr.pee10191@gmail.com
                            </a>
                        </div>

                        <div className="footer__left-media">
                            <img src={twitter} alt="" />
                            <img src={ins} alt="" />
                        </div>

                    </div>

                    {/* RIGHT */}
                    <div className="footer__right">
                        <img src={foot} alt="" />
                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;