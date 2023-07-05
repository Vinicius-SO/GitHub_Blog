import { styled } from "styled-components";

export const ProfileContainer = styled.div`
    width: 54rem;
    height: 13.25rem;

    display: flex;
    align-items: center;
    flex-direction: row;

    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    position: relative;

    border-radius: 0.625rem;
    background: ${props=>props.theme.profile};
    box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);

    & > img{
        width: 9.25rem;
        height: 9.25rem;
        border-radius: 0.5rem;
        margin: 2rem
    }
`

export const ProfileContent = styled.div`
    width: 100% ;
    margin: 2rem;

    div:first-child{
        display: flex;
        
        justify-content: space-between;
        align-items: center;
        
        width: 100%;
        margin-bottom: 0.5rem;
    }

    .infos{
        margin-top: 1.5rem;
        
        display: flex;
        gap: 1.5rem;
        & > span{
            display: flex;
            gap: 0.5rem;
            align-items: center;
        }
    }

`

export const Button = styled.a`
    align-items: center;
    font-size: 12px;
    font-weight: 160 ;
    text-decoration: none;
    text-transform: capitalize;

    background: transparent ;
    border: 0;
    color: ${props=> props.theme["brand-blue"]} ;

    & > span{
        margin-right: 0.5rem
    }
`