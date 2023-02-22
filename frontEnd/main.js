var form=document.getElementById('my-form')
var userList=document.getElementById('users')
var nameInput=document.getElementById('name')
var emailInput=document.getElementById('email')
var phoneInput=document.getElementById('phone')
var submitBtn=document.getElementById('submit')

form.addEventListener('submit',addUser)

window.addEventListener('DOMContentLoaded', async()=>{
    const user = await axios.get('http://localhost:3000/user')
   
    for(let i=0;i<user.data.userData.length; i++){
        showData(user.data.userData[i])
    }
})

function showData(obj){
    
    let text=`<li id=${obj.id} style="margin-bottom:10px;">${obj.name} | ${obj.email} | ${obj.phone}
            <button class="deleteBtn" onclick="deleteUser('${obj.id}')" style="float:right; margin-left:5px;">Delete</button>  
            </li>`
       

    userList.innerHTML=userList.innerHTML+text
    
}



async function deleteUser(id){
    try{
        console.log(id)
        
        const resp = await axios.delete(`http://localhost:3000/delete-user/${id}`)
        console.log(resp)
        
        let li= document.getElementById(id);
        
        userList.removeChild(li);

    }catch(err){
        console.log("ERR: FE_main.js deleteUser")
    } 
}

async function addUser(e){

    try{
        e.preventDefault();
        
        if(nameInput.value=="" || emailInput.value=="" || phoneInput.value==""){
            alert("Please enter all fields")
        }
        else{
            
            let obj = {
                name: nameInput.value,
                email: emailInput.value,
                phone: phoneInput.value
            }

            

            const res = await axios.post('http://localhost:3000/add-user',obj);

            showData(res.data.userData)

            nameInput.value="";
            emailInput.value="";
            phoneInput.value="";
        }
    }catch(err){
        console.log("ERR: FE_main.js addUser()")
    }
    
}



