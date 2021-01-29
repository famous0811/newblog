import React,{useState} from "react";
import styled,{css} from "styled-components";
import { useTranslation } from "react-i18next";
import colors from "../../res/constants/color";
function Header() {
  const { t, i18n } = useTranslation();
  const [Lang,setLang]= useState("eng");
  function ChangeLanguage(){
    i18n.changeLanguage(Lang);
    setLang(Lang==="eng" ? "kor" : "eng")
  }
  return (
    <Head>
      {t("Headtitle")}
      <Language className="language">
        {t("kor")}
        <Toggle onClick={ChangeLanguage} language={Lang}/>
        {t("eng")}
      </Language>
    </Head>
  );
}
const Head = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  height: 76px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  z-index:100;
  background:${colors.base};
`;
const Language = styled.div`
position: absolute;
  right: 3%;
  top: 50%;
  transform: translate(0, -50%);
  font-size:16px;
  display: flex;
  align-items: center;
  justify-content:space-between;
  width:200px;
`;
const Toggle = styled.div<{language:string}>`
    width: 70px;
  height: 30px;
  background: ${colors.main};
  border-radius: 50px;
  &::before{
      border-radius: 50%;
      background: white;
      position: absolute;
      width: 23px;
      height: 23px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: transform 0.5s;

      cursor: pointer;
      ${({ language }) =>
      language === "eng"
        ? css`
            transform: translate(-90%, -50%);
          `
        : css`
            transform: translate(30%, -50%);
          `}
      content:"";
  }
  
`;
export default Header;
