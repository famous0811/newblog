import React from "react";
import Header from "../components/layout/Header";
import ReactFullpage from "@fullpage/react-fullpage";
import styled from "styled-components";
import Me from "../res/img/allblack.jpg";
function mainpage() {
  return (
    <>
      <Header />
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
                <Welcome className="mainsize">
                  <div>
                    <img src={Me} alt="" width="100%" height="100%" />
                  </div>
                  {/* 이름 학교 나이 한줄 자기소개 */}
                  <div className="column">
                    <h1>유명환</h1>
                    <div>회사 : 선린인터넷 고등학교</div>
                    <p>
                      독특하고 창의적인 개발자 famous 유명환이라고 합니다!
                    </p>
                  </div>
                </Welcome>
              </div>
              {/* 프로젝트 및 수상경력 */}
              <div className="section">
                <ProjectSkills className="mainsize">
                  <div>
                    
                    <div>
                      <h2>Project</h2>
                      <ul>
                        <li>connecText-2020</li>
                      </ul>
                    </div>

                    <div>
                      <h2>수상실적</h2>
                      <ul>
                        <li>아직 없음</li>
                      </ul>
                    </div>
                  </div>

                  <span>
                    <h2>기술 스택</h2>
                    <ul>
                      <li>React</li>
                      <li>Redux/Mobx</li>
                      <li>node.js</li>
                      <li>mongodb</li>
                      <li>typescript</li>
                    </ul>
                  </span>
                </ProjectSkills>
              </div>
              {/* 자기소개 */}
              <div className="section">
                <Welcome className="mainsize">
                <h1>자기소개</h1>
                  <p>
                    안녕하세요 반갑습니다 독특하고 창의적인 개발자 유명환이라고
                    합니다. 저는 React를 이용해서 주로 website를 개발하고 있습니다.
                    아직은 많은 것을 배우지 못해서 능력이 부족하지만 열심히 배우는 중입니다.
                    
                  </p>
                </Welcome>
              </div>
              <div className="section">
                <Welcome className="mainsize">
                  <div>
                    <h2>정보</h2>
                    <ul>
                      <li>카카오톡 아이디 : umh0811</li>
                      <li>
                        github :{" "}
                        <a href="http://github.com/famous0811">
                          http://github.com/famous0811
                        </a>
                      </li>
                      <li>
                        tistory :{" "}
                        <a href="allblack0811.tistory.com">
                          allblack의 개발세발
                        </a>
                      </li>
                    </ul>
                  </div>
                </Welcome>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
}
const Welcome = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* padding-top:76px; */

  & > div {
      flex-basis:50%;
    max-width: 300px;
    max-height: 500px;
  }
`;

const ProjectSkills = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  & > div {
      width:100%;
      justify-content:space-around;
    display: flex;
    align-items: center;
  }
`;
export default mainpage;
