import fullLogo from "./fullLogo.svg";

function Header() {
    return (
        <div className="navigation">
            <img src={fullLogo}/>
            <div className="pageNav">
            <button>미친자와 <span bold>함께하기</span></button>
            <button>미친자가 <span bold>되어보기</span></button>
            <button>미친자에서 <span bold>탈출하기</span></button>
            </div>
        </div>
    )
    }

export default Header;