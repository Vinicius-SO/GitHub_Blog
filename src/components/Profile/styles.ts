import { styled } from "styled-components";

export const ProfileContainer = styled.div`
    width: 54rem;
    height: 13.25rem;

    display: flex;
    flex-direction: row;

    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
    /* margin: -5% auto; */

    position: relative;

    /* z-index: 2; */

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
    &> div{
        display: flex;
        justify-content: space-between;

        width: 100%;
    }



    margin: 2rem;

`