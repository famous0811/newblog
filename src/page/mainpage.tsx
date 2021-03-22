import React, { useRef } from "react";
import { useTranslation } from "react-i18next";

import Me from "../res/img/allblack.jpg";
import ConnecText from "../res/img/connecText_main.png";
import Textmemo from "../res/img/textmemo.jpg";
import tistory from "../res/img/tistory-logo.svg";
import Github from "../res/img/GitHub-Mark.png";
import Project from "../components/Project";

function Mainpage() {
  const { t, i18n } = useTranslation();
  const contents = useRef<HTMLDivElement>(null);
  const mydata = useRef<HTMLDivElement>(null);
  const myintro = useRef<HTMLDivElement>(null);
  function SettingLange(lan: string) {
    i18n.changeLanguage(lan);
  }
  function scolltotest(body: React.RefObject<HTMLDivElement>) {
    if (!body.current) {
      alert("none");
      return;
    }
    body.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <header>
        <div>
          <h2>allblack's blog</h2>
          <ul className="menu">
            <li onClick={() => scolltotest(mydata)}> 소개</li>
            <li onClick={() => scolltotest(myintro)}>자기소개</li>
            <li onClick={() => scolltotest(contents)}>작품들</li>
          </ul>
        </div>
      </header>
      <div id="body">
        <div id="main">
          <p>
            안녕하세요 세상에서 가장 유명한 남자 <br /> famous유명환이라고
            합니다!
          </p>
          <div className="current" onClick={() => scolltotest(mydata)}>
            <span className="material-icons">keyboard_arrow_down</span>
          </div>
        </div>
        <div id="mydata" ref={mydata}>
          <div>
            <img src={Me} alt="" width="100%" height="100%" />
          </div>
          <ul id="details">
            <li>이름: 유명환</li>
            <li>직업: 학생</li>
            <li>기술 스택: react(hooks),redux,mobx,typescript,scss</li>
            <li>공부중: web3D next.js node.js</li>
          </ul>
        </div>
        <div className="myintro" ref={myintro}>
          <p>
            안녕하세요 저는 Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nobis vel odit reprehenderit modi, reiciendis cum nemo earum.
            Odit explicabo deserunt repellat minus, expedita accusamus
            reiciendis ipsa voluptatum velit, corporis similique. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Ipsam eaque hic
            reprehenderit quisquam sit ex eligendi. Quidem doloremque adipisci
            cumque, voluptas aliquam sint voluptatum reiciendis, obcaecati rem
            quos incidunt consectetur?
          </p>
        </div>
        <div className="contents" ref={contents}>
          <Project
            src={ConnecText}
            comment="자신에게 필요한 문제만 골라 풀어 보세요!"
          />
          <Project
            src={Textmemo}
            comment="자신만에 단어 암기법을 공유해보세요!"
          />
        </div>
      </div>
      <footer>
        <div>
          <ul>
            <li>email: yum969315@gmail.com</li>
            <li>phone: 010-8504-0811</li>
            <li>kakao:umh0811</li>
          </ul>
          <div className="sns">
            <a href="https://allblack0811.tistory.com/">
              <img src={tistory} alt="" width="24px" height="24px" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100012268452765">
              <span className="material-icons facebook">facebook</span>
            </a>
            <a href="https://github.com/famous0811">
              <img src={Github} alt="" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Mainpage;
