import styled from "styled-components";

export const HeaderContainer = styled.header`
    background: ${props=>props.theme.profile};
    height: 18.5rem;
    width: 100%;
    /* position: absolute; */
    
    display: flex;
    justify-content: space-between;

    .left{
        margin-top: 70px;
        width: 409px;
        height: 188px
    }
    .right{
        margin-top: 30px;
        width: 371px;
        height: 236px

    }

    .logo{
        position: absolute;
        left: 50%;
        top: 65px;
        transform: translate(-50%, 0%);
    }
    div{
        position: absolute;
        /* bottom: 0; */
        top: 22%;
        left: 50%;
        
        transform: translate(-50%,-50%);
    }
`