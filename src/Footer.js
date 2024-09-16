
function Footer() {
    const year = new Date().getFullYear();
    return (
        <div className="navigationBottom">
        <div className="pageNav">
        <button>미친자와 <span bold>함께하기</span></button>
        <button>미친자가 <span bold>되어보기</span></button>
        <button>미친자에서 <span bold>탈출하기</span></button>
        </div>
        <p className="footerp">Copyright michin자들 ⓒ {year}</p>
      </div>
    );
  }

export default Footer;