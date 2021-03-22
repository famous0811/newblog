import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const resources = {
  eng: {
    translation: {
      kor: "korean",
      eng: "english",
      name: "Yoo Myunghwan",
      project: "projects",
      Awards: "Awards",
      skills: "skills",
      info: "information",
      intro: "interduce",
      company: "company : sunrin internet high school",
      welcome: "I'm A unique and creative developer famous Yoo Myunghwan",
      introduce:"hello ",
    },
  },
  kor: {
    translation: {
      kor: "한국어",
      eng: "영어",
      name: "유명환",
      info: "정보",
      intro: "자기소개",
      project: "프로젝트",
      Awards: "수상실적",
      skills: "기술 스택",
      company: "회사 : 선린인터넷 고등학교",
      welcome: "독특하고 창의적인 개발자 famous 유명환이라고 합니다!",
      introduce:"안녕하세요 반갑습니다 독특하고 창의적인 개발자 유명환이라고 합니다. 저는 React를 이용해서 주로 website를 개발하고 있습니다. 아직은 많은 것을 배우지 못해서 능력이 부족하지만 열심히 배우는 중입니다."
    },
  },
};

i18n.use(initReactI18next).init({
  resources, // 리소스
  lng: "kor", // 초기 설정 언어
});
