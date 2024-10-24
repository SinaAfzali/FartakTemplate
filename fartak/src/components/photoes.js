import "../styles/videos.css"
import AngleLeft from "../svgIcons/angle-left"
import AngleRight from "../svgIcons/angle-right"
import photo1 from "../assets/photo1.jpg"
import photo2 from "../assets/photo2.jpg"
import photo3 from "../assets/photo3.jpg"
import photo4 from "../assets/photo4.png"
import Circle from "../svgIcons/circle"
import { useState } from "react"

function Photoes() {
    const photoes = [
        {
            title: "عکس یک",
            image: photo1
        },
        {
            title: "عکس دو",
            image: photo2
        },
        {
            title: "عکس سه",
            image: photo3
        },
        {
            title: "عکس چهار",
            image: photo4
        }
    ]
    const [selectedPhoto, setSelectedPhoto] = useState(1)
    const [image, setImage] = useState(photoes[0]);

    const clickHandler = (action) => {
        if (action === "R") {
            if (selectedPhoto < 4) setSelectedPhoto(selectedPhoto + 1)
            else setSelectedPhoto(1)
        } else if (action === "L") {
            if (selectedPhoto > 1) setSelectedPhoto(selectedPhoto - 1)
            else setSelectedPhoto(4)
        }
        setImage(photoes[selectedPhoto - 1])
    }
    return (
        <div className="image-section">
            <div className="selected-option title-services">
                عکس ها :
            </div>
            <div className="video-box" style={{ backgroundImage: `url(${image.image})` }}>
                <div className="video-image">
                    <div className="video-image-head">

                    </div>
                    <div className="video-image-content">
                        <div onClick={() => clickHandler("R")}>
                            <AngleRight width="50" height="50" color="white" fontWight="bold" cursor="pointer" />
                        </div>
                        <div style={{ width: "80%", height: "300px" }}>

                        </div>
                        <div onClick={() => clickHandler("L")}>
                            <AngleLeft width="50" height="50" color="white" fontWight="bold" cursor="pointer" />
                        </div>
                    </div>

                    <div className="curcles-videos">
                        <Circle fill={selectedPhoto === 4 ? "white" : "lightgray"} width="20" height="20" marginLeft="2%" />
                        <Circle fill={selectedPhoto === 3 ? "white" : "lightgray"} width="20" height="20" marginLeft="2%" />
                        <Circle fill={selectedPhoto === 2 ? "white" : "lightgray"} width="20" height="20" marginLeft="2%" />
                        <Circle fill={selectedPhoto === 1 ? "white" : "lightgray"} width="20" height="20" marginLeft="2%" />
                    </div>
                </div>
                <div className="title-video">
                    {image.title}
                </div>
            </div>
        </div>
    )
}

export default Photoes