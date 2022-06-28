

export const useActions = (state, handle)  => {

    const addAccount = (newAccount) => {
        let newAccounts = [...state.users] //TODO: define users
        newAccounts.push(newAccount);
        handle({
            type: "ADD_ACCOUNT",
            payload: newAccounts
        });
    };

    const Authenticate= (auth) => {
        let authAccount= state.users.find(user => user.email === auth.email &&
            user.password === auth.password )
       //if authentication is success handle it, otherwise provide a message
        if (authAccount) {
            handle({
                type: "LOGIN",
                payload: {...authAccount}
            })
        } else {
            alert("Invalid login credentials,\n please try again")
        }
    }

}
//Define functions for the following:
//Create a New Account
//Login

return {
    addAccount,
    Authenticate
}