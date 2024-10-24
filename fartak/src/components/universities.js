import { useState } from "react"
import '../styles/universities.css'
import university1 from "../assets/university1.png"
import university2 from "../assets/university2.png"
import university3 from "../assets/university3.png"
import university4 from "../assets/university4.png"
import university5 from "../assets/university5.png"
import university6 from "../assets/university6.png"


function Universities() {

    const [university, setUniversity] = useState("")

    return (
        <>
            {/* In the normal case, when the data comes from the database, we should use the list.map, but here it is only for the purpose of designing the template */}
            <div className="selected-option title-university" >
                دانشگاه ها :
            </div>
            <div className="university-box">
                <img src={university1} alt="university" onClick={() => setUniversity("university1")} />
                <img src={university2} alt="university" onClick={() => setUniversity("university2")} />
                <img src={university3} alt="university" onClick={() => setUniversity("university3")} />
                <img src={university4} alt="university" onClick={() => setUniversity("university4")} />
                <img src={university5} alt="university" onClick={() => setUniversity("university5")} />
                <img src={university6} alt="university" onClick={() => setUniversity("university6")} />
            </div>
        </>
    )
}

export default Universities