import React from "react";
import frontcoverimage from "./frontcoverImages/frontcover.png";
import thirdimage from "./frontcoverImages/thirdimage.svg";
import fourthimage from "./frontcoverImages/fourthimage.svg";
import fifthimage from "./frontcoverImages/fifthimage.svg";

function Frontcover() {
    return (
        <div className="frontcoversections">
        <div className="firstsection">
            <img src={frontcoverimage}/>
        </div>
        <div className="secondsection">
            <p>대단한 사람들의 말씀을 들어보면</p>
            <div className="crazy">
            <p className="bold">‘미친자'</p>
            <p className="bold">‘미치다'</p>
            </div>
            <p>라는 표현을 계속 듣게 된다.</p>
            <p>그게 뭔데?</p>
        </div>
        <div className="thidfourthtogether">
        <div className="thirdsection">
            <img src={thirdimage}/>
        </div>
        <div className="fourthsection">
            <img src={fourthimage}/>
        </div>
        </div>
        <div className="fifthsection">
            <img src={fifthimage}/>
        </div>
        </div>
    )
}

export default Frontcover;