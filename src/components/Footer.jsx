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
                            <a
                                href="https://x.com/firdavs2906"
                                target="_blank"
                                rel="noopener noreferrer">
                                <img src={twitter} alt="" />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/mr-pee-421aab416/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <img src={ins} alt="" />
                            </a>
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