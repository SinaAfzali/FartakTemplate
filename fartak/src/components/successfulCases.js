import React, { useState } from "react"
import "../styles/successfulCases.css"
import kianaImage from "../assets/main-file-bg.png"
import AngleLeft from "../svgIcons/angle-left"
import AngleRight from "../svgIcons/angle-right.js"
import Circle from "../svgIcons/circle.js"
import file1 from "../assets/case1.png"
import file2 from "../assets/case2.png"


function SuccessfulCases() {

    const [mainFile, setMainFile] = useState(1);

    const clickHandler = (action) => {
        if (action === "R") {
            setMainFile(mainFile === 1 ? 4 : mainFile - 1)
        } else if (action === "L") {
            setMainFile(mainFile === 4 ? 1 : mainFile + 1)
        }
    }

    return (
        <div className="successful-cases">
            <div className="main-file-box">
                <div onClick={() => clickHandler("R")}>
                    <AngleRight width="50" height="50" color="white" fontWight="bold" cursor="pointer" />
                </div>
                <div className="main-file">
                    <div>
                        <span className="successful-cases-title">پرونده های موفق</span>
                    </div>
                    <div className="main-file-content">
                        <div className="main-file-content-text">
                            <div className="main-file-name">
                                کیانا طبسی
                            </div>
                            <div className="main-file-text">
                                <p>
                                    ورم ایپسوم یا طرح نما(به انگلیسی : lorem ipsum) به متنی آزمایشی و بی معنی در صنعت چاپ، صفحه آرایی و طراحی گرافیک گفته میشود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن و صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و   اندازه فونت و ظاهر متن باشد.

                                </p>
                                <p>
                                    معمولا طراحان گرافیک برای صفحه آرایی، نخست از متن های آزمایشی و بی معنی استفاده میکنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی و یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می رسد و قلم ها و اندازه بندی ها چگونه در نظر گرفته شده است. از آنجایی که طراحان عموما
                                </p>
                            </div>
                        </div>
                        <div className="main-file-content-img" >
                            <img src={kianaImage} width="90%" />
                        </div>
                    </div>
                    <div className="curcles-files">
                        <Circle fill={mainFile === 1 ? "rgba(0,0,0,0.5)" : "gray"} width="20" height="20" marginLeft="2%" />
                        <Circle fill={mainFile === 2 ? "rgba(0,0,0,0.5)" : "gray"} width="20" height="20" marginLeft="2%" />
                        <Circle fill={mainFile === 3 ? "rgba(0,0,0,0.5)" : "gray"} width="20" height="20" marginLeft="2%" />
                        <Circle fill={mainFile === 4 ? "rgba(0,0,0,0.5)" : "gray"} width="20" height="20" marginLeft="2%" />
                    </div>
                    <div>

                    </div>
                </div>
                <div onClick={() => clickHandler("L")}>
                    <AngleLeft width="50" height="50" color="white" fontWight="bold" cursor="pointer" />
                </div>
            </div>
            <div className="other-files">
                <div>
                    <img src={file1} />
                </div>
                <div>
                    <img src={file2} />
                </div>
            </div>
        </div>
    )
}

export default SuccessfulCases