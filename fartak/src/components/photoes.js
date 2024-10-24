import "../styles/videos.css"
import AngleLeft from "../svgIcons/angle-left"
import AngleRight from "../svgIcons/angle-right"
import Image from "../assets/photo.jpg"
import Video from "../assets/video.jpg"
import Circle from "../svgIcons/circle"
import { useState } from "react"

function Photoes() {
    const [selectedPhoto, setSelectedPhoto] = useState(1)
    const [image, setImage] = useState(Image);
    const clickHandler = (action) => {
        if (action === "R") {
            setSelectedPhoto(selectedPhoto === 1 ? 4 : selectedPhoto - 1)
        } else if (action === "L") {
            setSelectedPhoto(selectedPhoto === 4 ? 1 : selectedPhoto + 1)
        }
    }
    return (
        <div className="image-section">
            <div className="selected-option title-services">
                عکس ها :
            </div>
            <div className="video-box" style={{ backgroundImage: `url(${image})` }}>
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
                        <Circle fill={selectedPhoto === 1 ? "white" : "lightgray"} width="20" height="20" marginLeft="2%" />
                        <Circle fill={selectedPhoto === 2 ? "white" : "lightgray"} width="20" height="20" marginLeft="2%" />
                        <Circle fill={selectedPhoto === 3 ? "white" : "lightgray"} width="20" height="20" marginLeft="2%" />
                        <Circle fill={selectedPhoto === 4 ? "white" : "lightgray"} width="20" height="20" marginLeft="2%" />
                    </div>
                </div>
                <div className="title-video">
                    عنوان عکس
                </div>
            </div>
        </div>
    )
}

export default Photoes