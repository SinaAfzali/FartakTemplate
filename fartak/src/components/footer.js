import "../styles/footer.css"
import logo2 from "../assets/logo2.png"
import media1 from "../assets/media1.png"
import media2 from "../assets/media2.png"
import media3 from "../assets/media3.png"
import media4 from "../assets/media4.png"
import namad from "../assets/namad.png"
import phone from "../assets/phone.png"
import whatsapp from "../assets/whatsapp.png"
import AngleLeft from "../svgIcons/angle-left"

function Footer() {
    return (
        <div className="footer-section">
            <div className="footer-address">
                <div>
                    <img src={logo2} />
                </div>
                <div>
                    <p>
                        مشهد، ملک آباد، خیابان بزرگمهر جنوبی، حد فاصل بزرگمر 9 و 11 ، پلاک 175
                    </p>
                </div>
                <div style={{ display: "flex", width: "50%" }}>
                    <img src={media1} style={{cursor:"pointer"}} width="25%" />
                    <img src={media2} style={{cursor:"pointer"}} width="25%" />
                    <img src={media3} style={{cursor:"pointer"}} width="25%" />
                    <img src={media4} style={{cursor:"pointer"}} width="25%" />
                </div>
            </div>
            <div className="footer-numbers">
                <div>
                    <img src={namad} />
                </div>
                <div>
                    <img src={phone} />
                    <span>تلفن : 7-37600546-051</span>
                </div>
                <div>
                    <img src={whatsapp} />
                    <span>واتساپ : 09103158201</span>
                </div>
                <span style={{ marginRight: "15%" }}>
                    info@studyadvisor.ir
                </span>
            </div>
            <div className="footer-options1">
                <div>
                    <AngleLeft width="10%" height="10%" color="yellow" fontWight="bold" cursor="pointer" />
                    <span>مشاوره تحصیلی</span>
                </div>
                <div>
                    <AngleLeft width="10%" height="10%" color="yellow" fontWight="bold" cursor="pointer" />
                    <span>پذیرش تحصیلی کانادا</span>
                </div>
                <div>
                    <AngleLeft width="10%" height="10%" color="yellow" fontWight="bold" cursor="pointer" />
                    <span>ویزای تحصیلی کانادا</span>
                </div>
                <div>
                    <AngleLeft width="10%" height="10%" color="yellow" fontWight="bold" cursor="pointer" />
                    <span>ویزای تحصیلی ایتالیا</span>
                </div>
            </div>
            <div className="footer-options2">
                <div>
                    <AngleLeft width="10%" height="10%" color="yellow" fontWight="bold" cursor="pointer" />
                    <span>وقت سفارت آمریکا</span>
                </div>
                <div>
                    <AngleLeft width="10%" height="10%" color="yellow" fontWight="bold" cursor="pointer" />
                    <span>پیکاپ ویزا</span>
                </div>
                <div>
                    <AngleLeft width="10%" height="10%" color="yellow" fontWight="bold" cursor="pointer" />
                    <span>نوت آفیسر</span>
                </div>
            </div>
        </div>
    )
}

export default Footer