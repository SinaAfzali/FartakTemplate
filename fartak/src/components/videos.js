import "../styles/videos.css"
import AngleLeft from "../svgIcons/angle-left"
import AngleRight from "../svgIcons/angle-right"
import video1 from "../assets/video1.jpg"
import video2 from "../assets/video2.jpg"
import video3 from "../assets/video3.jpg"
import video4 from "../assets/video4.jpg"
import Circle from "../svgIcons/circle"
import { useState } from "react"

function Videos() {
    const videos = [
        {
            title : "ویدیو یک",
            image : video1
        },
        {
            title : "ویدیو دو",
            image : video2
        },
        {
            title : "ویدیو سه",
            image : video3
        },
        {
            title : "ویدیو چهار",
            image : video4
        }
    ]
    const [selectedVideo, setSelectedVideo] = useState(1)
    const [video, setVideo] = useState(videos[0])
    const clickHandler = (action) => {
        if (action === "R") {
            setSelectedVideo(selectedVideo === 4 ? 1 : selectedVideo + 1)
            console.log("right");
        } else if (action === "L") {
            setSelectedVideo(selectedVideo === 1 ? 4 : selectedVideo - 1)
        }
        setVideo(videos[selectedVideo - 1])
    }
    return (
        <div className="video-section">
            <div className="selected-option title-services">
                ویدیو ها :
            </div>
            <div className="video-box" style={{ backgroundImage: `url(${video.image})` }}>
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
                    {video.title}
                </div>
            </div>
        </div>
    )
}

export default Videos