import React from 'react'
import styled from 'styled-components'
import Icon1 from '../../images/undraw_personal_trainer_ote3.svg'
import Icon2 from '../../images/im1.svg'
import Icon3 from '../../images/undraw_fitness_stats_sht6.svg'

const Services = () => {
    return (
        <ServicesConainer id='Services'>
             <ServicesH1>Nos Espaces</ServicesH1>
             <ServicesWrapper>
                 <ServicesCard>
                     <ServicesIcon src={Icon1} />
                        <ServicesH2>Musculation</ServicesH2>
                 </ServicesCard>
                 <ServicesCard>
                     <ServicesIcon src={Icon2} />
                        <ServicesH2>Cardio Traning</ServicesH2>
                 </ServicesCard>
                 <ServicesCard>
                     <ServicesIcon src={Icon3} />
                        <ServicesH2>Espace Fitness</ServicesH2>
                    </ServicesCard>
             </ServicesWrapper>
        </ServicesConainer>
        
    )
}

export default Services

const ServicesConainer = styled.div`
    height: 890px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 768px){
        height: 1100px;
    }
    
    @media screen and (max-width: 480px){
        height: 1300px;
    }
    
`
const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display:grid ;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 58px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }
    
    @media screen and (max-width: 768px){
        grid-template-columns:  1fr;
        padding: 0 20px;
    }
`

const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px 50px;
    box-shadow:  0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform:  scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`
const ServicesIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;
    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`
const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`
