import "../styles/videos.css"
import AngleLeft from "../svgIcons/angle-left"
import AngleRight from "../svgIcons/angle-right"
import videoImage from "../assets/video.jpg"
import Circle from "../svgIcons/circle"
import { useState } from "react"

function Videos() {
    const [selectedVideo, setSelectedVideo] = useState(1)
    const clickHandler = (action) => {
        if (action === "R") {
            setSelectedVideo(selectedVideo === 1 ? 4 : selectedVideo - 1)
            console.log("right");
        } else if (action === "L") {
            setSelectedVideo(selectedVideo === 4 ? 1 : selectedVideo + 1)
        }
    }
    return (
        <div className="video-section">
            <div className="selected-option title-services">
                ویدیو ها :
            </div>
            <div className="video-box" style={{ backgroundImage: `url(${videoImage})` }}>
                <div className="video-image">
                    <div className="video-image-head">

                    </div>
                    <div className="video-image-content">
                        <div onClick={() => clickHandler("R")}>
                            <AngleRight width="50" height="50" color="white" fontWight="bold" cursor="pointer" />
                        </div>
                        <div style={{ width: "80%" , height:"300px"}}>
                        
                        </div>
                        <div onClick={() => clickHandler("L")}>
                            <AngleLeft width="50" height="50" color="white" fontWight="bold" cursor="pointer" />
                        </div>
                    </div>

                    <div className="curcles-videos">
                        <Circle fill={selectedVideo === 1 ? "white" : "lightgray"} width="20" height="20" marginLeft="2%" />
                        <Circle fill={selectedVideo === 2 ? "white" : "lightgray"} width="20" height="20" marginLeft="2%" />
                        <Circle fill={selectedVideo === 3 ? "white" : "lightgray"} width="20" height="20" marginLeft="2%" />
                        <Circle fill={selectedVideo === 4 ? "white" : "lightgray"} width="20" height="20" marginLeft="2%" />
                    </div>
                </div>
                <div className="title-video">
                    عنوان ویدیو
                </div>
            </div>
        </div>
    )
}

export default Videos