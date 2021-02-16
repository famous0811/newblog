import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { useTranslation } from "react-i18next";
import Project from "../components/Project";

import Me from "../res/img/allblack.jpg";
import test3 from "../res/img/test3.jpg";

import connectext from "../res/img/connecText_main.png";

function Mainpage() {
  const { t, i18n } = useTranslation();

  function SettingLange(fullpageApi: any, lan: string) {
    i18n.changeLanguage(lan);
    fullpageApi.moveSectionDown();
  }
  return (
    <>
      <ReactFullpage
        licenseKey={"YOUR_KEY_HERE"}
        scrollingSpeed={600}
        recordHistory={true}
        scrollOverflow={true}
        navigation={true}
        responsiveHeight={100}
        cardsOptions={{
          perspective: 100,
          fadeContent: true,
          fadeBackground: true,
        }}
        render={({ state, fullpageApi }: any) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <div className="welcome">
                  <div className="basewrap">
                    <div className="img background" />
                    <div className="img">
                      <img src={Me} alt="" width="100%" height="100%" />
                    </div>
                    <h2 className="title">Allblack's Blog</h2>

                    {/* 언어 선택 */}
                    <div className="setlanguage">
                      <button onClick={() => SettingLange(fullpageApi, "kor")}>
                        한국어
                      </button>
                      <button onClick={() => SettingLange(fullpageApi, "eng")}>
                        영어
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* 신상정보 */}
              <div className="section">
                <div className="myData">
                  <div className="basewrap">
                    <div className="aboutme">
                      <h2>ABMOUT ME</h2>
                    </div>
                    <div className="datas">
                      <h1>유명환</h1>
                      <ul>
                        <li>
                          <p>회사 : 선린인터넷 고등학교</p>
                        </li>
                        <li>
                          <h3>기술스텍</h3>
                          <p>
                            <div className="skillitem">react-redux/mobx</div>
                            <div className="skillitem">nodejs</div>
                            <div className="skillitem">mongodb</div>
                            <div className="skillitem">typescript</div>
                          </p>
                        </li>
                        <li>
                          <h3>연락처</h3>
                          <p>
                            <div className="skillitem">yum969315@gmail.com</div>
                            <div className="skillitem">umh0811@naver.com</div>
                            <div className="skillitem">카카오톡: umh0811</div>
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <img
                        className="img"
                        src={Me}
                        alt=""
                        width="100%"
                        height="100%"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* 자기소개 */}
              <div className="section">
                <div className="introduced">
                  <div className="basewrap">
                    <h1>자기소개</h1>
                    <div id="drive" />
                    <p>
                      안녕하세요 독특하고 창의적인 개발자 유명환이라고 합니다.
                      저는 react를 이용한 front-end 개발을 공부하고 있으며{" "}
                    </p>
                  </div>
                </div>
              </div>
              {/* projects */}
              <div className="section">
                <div className="projects">
                  <div className="basewrap projectWrap">
                    <Project src={connectext} comment="connectext" />
                    <Project src="" comment="tset" />
                    <Project src="" comment="tset" />
                  </div>
                </div>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
}

export default Mainpage;
