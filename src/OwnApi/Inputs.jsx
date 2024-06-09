
const Inputs=
    [
    {
        "id":1,
         name:"username",
         type:"text",
         placeholder:"username",
         label:"username",
         errorMessege:"Username should be 3-16 charater and shouldn't contain special charater",
         pattern:"^[A-Za-z0-9]{3,16}$",
         required:true  
    },
    {
        "id":2,
         name:"email",
         type:"email",
         placeholder:"email",
         label:"email",
         
         errorMessege:"Email must be valid",
         required:true  
    },
    {
        "id":3,
         name:"date",
         type:"date",
         placeholder:"Date",
         label:"date"
        
    },
    {
        "id":4,
         name:"password",
         type:"password",
         placeholder:"password",
         label:"password",
         errorMessege:"password should be 6-16 character with at leact 1 uppercase, 1 number and 1 special character",
         pattern:"^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,20}$",
         required:true  
    },
    {
        id:5,
         name:"confirmpassword",
         type:"password",
         placeholder:"Confirm password",
         label:"password",
         errorMessege:"password didn't match",
    
         required:true  
    }

]
export default Inputs