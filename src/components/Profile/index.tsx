import { ProfileContainer, ProfileContent, Button} from "./styles";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faBuilding, faUserGroup} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'


export function Profile(){
    return (

        <ProfileContainer>
            <img src="https://github.com/Vinicius-SO.png" alt="" />

            <ProfileContent>
                <div>
                    <h2>Vinicius Soares</h2>
                    <Button href="https://github.com/Vinicius-SO"><span>GITHUB</span> <FontAwesomeIcon icon={faArrowUpRightFromSquare}/> </Button>
                </div>
                <div>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</div>
                <div className="infos">
                    <span><FontAwesomeIcon icon={faGithub}/>Vinicius-SO</span>
                    <span><FontAwesomeIcon icon={faBuilding}/>Sollut</span>
                    <span><FontAwesomeIcon icon={faUserGroup}/>32 seguidores</span>
                </div>
                                
            </ProfileContent>
        </ProfileContainer>
    )
}