import { useState } from "react"
import '../styles/articles.css'
import article1 from "../assets/article1.png"
import article2 from "../assets/article2.png"
import article3 from "../assets/article3.png"
function Articles() {

    const [article, setArticle] = useState(0)

    return (
        <>
            <div className="selected-option title-article" >
                گزیده مقالات :
            </div>
            <div className="articles-box">
                <div className="article">
                    <img src={article1} alt="article" onClick={() => setArticle(1)} />
                    <div>
                        <span>دانشگاه ریرسون</span>
                        <p>
                            ورم ایپسوم یا طرح نما(به انگلیسی : lorem ipsum) به متنی آزمایشی و بی معنی در صنعت چاپ، صفحه آرایی و طراحی گرافیک گفته میشود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن و صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر
                        </p>
                    </div>
                </div>

                <div className="article">
                    <img src={article2} alt="article" onClick={() => setArticle(2)} />
                    <div>
                        <span>دانشگاه آلبرتا</span>
                        <p>
                            ورم ایپسوم یا طرح نما(به انگلیسی : lorem ipsum) به متنی آزمایشی و بی معنی در صنعت چاپ، صفحه آرایی و طراحی گرافیک گفته میشود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن و صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر
                        </p>
                    </div>
                </div>
                <div className="article">
                    <img src={article3} alt="article" onClick={() => setArticle(3)} />
                    <div>
                        <span>دانشگاه کراندال</span>
                        <p>
                            ورم ایپسوم یا طرح نما(به انگلیسی : lorem ipsum) به متنی آزمایشی و بی معنی در صنعت چاپ، صفحه آرایی و طراحی گرافیک گفته میشود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن و صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Articles