import "../styles/about.css"
import logo3 from "../assets/logo3.png"
import AngleLeft from "../svgIcons/angle-left"

function About() {

    return (
        <div className="about-section">
            <div className="selected-option title-about">
                درباره ما :
            </div>
            <div className="about-text">
                <p>یک مشاوره خوب ارزشمند است! </p>
                <p>  این جمله هدف و مقصد شرکت ایده مقصد دوم فرتاک است. گاهی لازم است مشاوره بگیریم که به آنچه دوست دلریم برسیم و گاهی نیاز است مشاوره بگیریم
                    که یک متخصص بگوید، خواسته شما اشتباه است و از خسارت ها و هزینه های زیاد جلوگیری کند.
                </p>
                <p>  ماموریت ما
                    کمک و راهنمایی در خصوص انتخاب دانشگاه خوب و مورد تایید وزارت علوم ایران، رشته
                    مناسب با سابقه تحصیلات متقاضی و منطبق با الزامات سفارت کشور کانادا، ایتالیا و امارات متحده عربی است.
                </p>
                <div style={{ display: "flex", cursor:"pointer" }}>
                    <AngleLeft width="5%" height="5%" color="#2d4900" fontWight="bold" cursor="pointer" />
                    <span style={{color:"#2d4900"}}>بیشتر بخوانید</span>
                </div>
            </div>
            <div className="icon-about">
                <img src={logo3} />
            </div>

        </div>
    )
}

export default About