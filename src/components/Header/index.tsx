import { HeaderContainer } from "./styles";

import rightCover from "../../assets/effect.svg"
import leftCover from "../../assets/effect (1).svg"
import light from "../../assets/Rectangle.svg"
import logo from "../../assets/Logo.svg"

export function Header(){
    return(
    <>
        <HeaderContainer>
            <img src={leftCover} className="left" alt="" />
            <img src={rightCover} className="right" alt="" />
            <div>
                <img src={light} alt="" className="light"/>
            </div>
            <img src={logo} alt="" className="logo"/>
        </HeaderContainer>
        {/* <LogoContainer>

        </LogoContainer> */}
    </>
    )
}