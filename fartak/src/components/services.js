import { useState } from "react"
import '../styles/services.css'
import service1 from "../assets/service1.png"
import service2 from "../assets/service2.png"
import service3 from "../assets/service3.png"


function Services() {

    const [service, setService] = useState("")
    return (
        <>
            {/* In the normal case, when the data comes from the database, we should use the list.map, but here it is only for the purpose of designing the template */}
            <div className="selected-option title-services" >
                خدمات ما :
            </div>
            <div className="services-box">
                <img src={service1} alt="service" onClick={() => setService("service1")} />
                <img src={service2} alt="service" onClick={() => setService("service2")} />
                <img src={service3} alt="service" onClick={() => setService("service3")} />
            </div>
        </>
    )
}

export default Services