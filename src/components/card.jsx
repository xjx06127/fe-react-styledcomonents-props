import React from "react";
import styled from "styled-components";

const Backgroud = styled.div `
    text-align:center;
    width:300px;
    height:385px;
    border-radius: 30px;
    background-color: #b9f5f9;
    display:inline-block;
    margin:20px;
`

const Img = styled.img `
    margin-top:10px;
    width:180px;
    height:180px;
    border-radius: 30px;
    content:url(${(props) => props.url});
`

const Title = styled.h1`
    margin-left:20px;
    margin-bottom:auto;
    text-align:left;
    color:black;
`

const Content = styled.p `
    margin-top:8px;
    margin-left:20px;
    margin-right:20px;
    text-align:left;
    color:gray;
`

const Button = styled.button `
    border:none;
    background : linear-gradient(to right, ${(props) => props.buttonColor1} , ${(props) => props.buttonColor2} );
    color:white;
    border-radius:30px;
    width:280px;
    height:50px;
    font-size:18px;
    margin-top:10px;
`

const Card = (props) => {
    return (
        <>
            <Backgroud>
                <Img url={props.url}/>
                <Title>{props.title}</Title>
                <Content>{props.content}</Content>
                <Button buttonColor1={props.buttonColor1} buttonColor2={props.buttonColor2}>Action</Button>
            </Backgroud>
        </>
    )
}

export default Card;