import i18n from "i18next"
import { initReactI18next } from "react-i18next"

export const resources = {

    eng:{
        translation:{
            "Headtitle":"Allblack's blog",
            "kor":"korean",
            "eng":"english"
        }
    },
    kor:{
        translation:{
            "Headtitle":"Allblack's 블로그",
            "kor":"한국어",
            "eng":"영어"
        }
    }
}

i18n
  .use(initReactI18next)
  .init({
    resources, // 리소스
    lng: "kor", // 초기 설정 언어
  });