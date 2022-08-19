export const authState ={
    isAuthenticated : false,
    loading: true,
    user:{},
    error: false
}

const authReducer = ( state, action) =>{
    

    const {type, payload} = action;

    switch (type) {

        case "AUTH_SIGNIN":{
            
            return{
                ...state,
                isAuthenticated: true,
                loading : false,
                user: payload.user
            }
        }
        case "SIGN_OUT": {
            return {
              ...state,
              isAuthenticated: false,
              loading: true,
              user: {},
              error: false,
            };
          }
        case "AUTH_SIGNUP":{
            return{
                ...state,
                isAuthenticated: true,
                loading : false,
                user: payload       
            }
        }
        case "SIGNIN_ERR":{
            return{
                ...state,
                error: payload

            }
        }
        case "AUTH_VALID":{
            return{
                ...state,
                isAuthenticated: true,
                loading : false,
                user: payload
            }
        }
        
        case "CLR_ERR":{
            return{
                ...state,
                error: false
            }
        }

        default:{
            return state
        }
    }

}
export default authReducer