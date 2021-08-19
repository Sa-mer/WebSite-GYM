import React from 'react'
import styled from 'styled-components'
import img1 from '../../images/img5.svg'

const InfoSection = ({
    lightBg,
    id,
    imgStart,
    darkText,
    description
}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img1}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>    
            </InfoContainer>   
        </>
    )
}

export default InfoSection


const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};
    @media screen and (max-width: 768px){
        padding: 100px 0 ;
    }

`

const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding:  0 24px;
    justify-content: center;
`
const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px){
        grid-template-areas: ${({ imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col1 col1'`)} ;

    }
`

const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`
const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`
const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText }) => (darkText ? '#010606' : '#fff')};
`

const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
    width: 100%;
    
`
const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0 ;
`