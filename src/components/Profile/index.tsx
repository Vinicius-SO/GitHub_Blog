import { ProfileContainer, ProfileContent } from "./styles";

export function Profile(){
    return (

        <ProfileContainer>
            <img src="https://github.com/Vinicius-SO.png" alt="" />

            <ProfileContent>
                <div>
                    <h2>Vinicius Soares</h2>
                    <button>GitHub </button>
                </div>
                                
            </ProfileContent>
        </ProfileContainer>
    )
}