const Base_URL = "https://posts-pw2021.herokuapp.com/api/v1";

const VerifyTokenService = async (token) => {
    const ApiResponse = await fetch(`${Base_URL}/auth/whoami`, {
        headers: {
            "Authorization": `Bearer ${ token }`
        }
    })
    if (ApiResponse.ok) {
        const data = await ApiResponse.json();
        return data;
    }
    return{};
}

export default VerifyTokenService;