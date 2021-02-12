import React from 'react';
import colors from '../res/constants/color';

import styled from 'styled-components';

interface ProjectProps{
    src:string;
    comment:string;
}
function Project({src,comment}:ProjectProps) {
    return (
        <Wrap>
            <img src={src} alt="" width="100%" height="100%"/>
            <div>
                <p>{comment}</p>
            </div>
        </Wrap>
    );
}

const Wrap= styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    height:100%;
    position:relative;
    background:white;
    margin:30px;
    /* margin:0 10px; */
    &::before{
        top:-15px;
        right:50%;
        content:"";
        width:100px;
        height:30px;
        background:${colors.main};
        position:absolute;
        transform:translateX(50%);
    }
    &>img{
        padding:10px;
        max-width:600px;
        max-height:300px;
    }
    &>div{
        margin:0 20px;
    }
    max-width:600px;
    max-height:500px;
    /* width: 100%; */
`;

export default Project;