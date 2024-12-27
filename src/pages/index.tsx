
import React from "react";
import Link from "next/link";

const GeneratedPage: React.FC = () => {

  
function GeneratedNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // alignment w stringu
  const alignment: string = "left";
  let finalOffset = 5;
  if (alignment === "right") {
    finalOffset = -finalOffset;
  }

  const bgColor = "#100317";
  const navClass = "flex items-center justify-between p-4 h-[11.674433856505338%] md:h-[31.391812865497073%] xl:h-[16.479532163742686%]"; // tailwind klasy do nav
  const linkColor = "#327ac8";
  const linkFontSize = 28;
  const navLinks = [{"name":"no super","path":"/","isFromDB":true},{"name":"cmiczek","path":"/cmiczek","isFromDB":true},{"name":"testing","path":"/testing","isFromDB":true},{"name":"sprawdzenie","path":"/sprawdzenie","isFromDB":true}];

  const mobileMenuBg = "#100317";
  const mobileMenuWidth = 100;
  const mobileMenuPosition = "left";
  const mobileMenuTextAlign = "center";

  const logoClasses = "w-[200px] h-[50px] md:h-[100px]";
  const logoUrl = "https://9.allegroimg.com/s1024/0cbde8/0f4e067c4432bfe3642da1782279";

  const linkStyle: React.CSSProperties = {
    color: linkColor,
    fontSize: linkFontSize + "px",
    textDecoration: "none",
  };

  // Mobile menu style
  const mobileMenuStyle: React.CSSProperties = {
    position: "absolute",
    top: "100%",
    [mobileMenuPosition]: 0,
    width: mobileMenuWidth + "%",
    height: "calc(100vh)",
    backgroundColor: mobileMenuBg,
    zIndex: 9999,
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
    gap: "1rem",
    overflowY: "auto",
    textAlign: mobileMenuTextAlign,
  };

  const navStyle: React.CSSProperties = {
    position: "relative",
    backgroundColor: bgColor,
  };

  // Linki desktop/tablet
  const deskLinks = navLinks.map((lnk, idx) => (
    <Link key={idx} href={lnk.path} style={linkStyle}>
      {lnk.name}
    </Link>
  ));

  // Linki mobilne
  const mobLinks = navLinks.map((lnk, idx) => (
    <Link key={idx} href={lnk.path} style={linkStyle}>
      {lnk.name}
    </Link>
  ));

  return (
    <nav style={navStyle} className={`${navClass}`}>
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          src={logoUrl}
          alt="logo"
          className={`${logoClasses} object-fill`}
          style={{
            marginLeft: `${finalOffset}%`,
          }}
        />
      </div>

      {/* Burger – widoczny tylko na mobile (md:hidden) */}
      <button
        className="md:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        {isMobileMenuOpen ? (
          <><svg width="24" height="24" fill="none" stroke="#327ac8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <line x1="18" y1="6" x2="6" y2="18" />
  <line x1="6" y1="6" x2="18" y2="18" />
</svg></>
        ) : (
          <><svg width="24" height="24" fill="none" stroke="#327ac8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <line x1="3" y1="6" x2="21" y2="6" />
  <line x1="3" y1="12" x2="21" y2="12" />
  <line x1="3" y1="18" x2="21" y2="18" />
</svg></>
        )}
      </button>

      {/* Linki desktop/tablet – hidden na mobile */}
      <div className="hidden md:flex gap-4" style={{ alignItems: "center" }}>
        {deskLinks}
      </div>

      {/* Menu mobilne */}
      {isMobileMenuOpen && (
        <div style={mobileMenuStyle}>
          {mobLinks}
        </div>
      )}
    </nav>
  );
}


  return (
    <div>
      <section className="h-[61.5vh] md:h-[74.4vh]" style={{ position: "relative", backgroundColor: "#289f50" }}>
      <img src="https://czat.ai/img/avatars/full-og/kotek.jpg" alt="" className="w-[84.41012596899225%] md:w-[78.37779471544715%] xl:w-[45.572916666666664%] h-[17.543859649122812%] md:h-[47.36842105263158%] left-[7.3437499999999964%] md:left-[3.048780487804879%] xl:left-[7.343749999999999%] top-[67.76914112089243%] md:top-[49.853801169590675%] xl:top-[37.71929824561404%]" style={{ position: "absolute" }} />
<GeneratedNavbar />
<div className="w-[73.4811046511628%] md:w-[38.33079268292683%] xl:w-[39.0625%] h-[26.815779068073507%] md:h-[14.912280701754383%] xl:h-[47.80701754385965%] left-[11.970687984496154%] md:left-[60.11305894308951%] xl:left-[57.552083333333364%] top-[36.507044598447514%] md:top-[32.89473684210527%] xl:top-[30.994152046783647%]" style={{ position: "absolute", backgroundColor: "#f0f0f0" }}>
      <p className="text-[17px] md:text-[11px] xl:text-[25px] text-left w-[100%] h-[81.33333333333333%] md:h-[60.19607843137255%] xl:h-[20%] top-[0%] left-[0%]" style={{ color: "#a01c1c", position: "absolute" }}>cipusdasa</p>
    </div>
    </section>
    </div>
  );
};

export default GeneratedPage;
    