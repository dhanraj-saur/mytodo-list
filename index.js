const storeInput = document.getElementById("store");

const addBtn = document.getElementById("btn");

let myData = [];

addBtn.addEventListener("click", (event) => {
    event.preventDefault()
    const inputValue = document.getElementById("task").value;

    if (inputValue == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            footer: '<h2>please fill the input</h2>'
        })
    }
    else {
        let data = {
            id: myData.length + 1,
            name: inputValue,
        };
        myData.push(data)
        console.log(data);
        render(myData)
    }
})


function render(myData) {
    if (myData.length > 0) {
        storeInput.innerHTML = myData.map((item, ind) => {
            return (`
                <div> 
                   
                    <div class="content">
                        
                        <span> ${item.name}</span>       
                        <button id="deleteBtn"  class="btn" onclick=deleteBtn(${item.id})>Delete</button>        
                    </div>            
                           
                </div>

            
            `)

        }).join("")
    }
    else {
        storeInput.innerHTML = "";
    }
}


function deleteBtn(id) {

    myData = myData.filter((item, ind) => item.id != id)
    render(myData)
    console.log(id);
    Swal.fire({
        icon: 'success',
        footer: '<h2>DELETE SUCCESSFULLY</h2>'
    })
}


function changeTheme() {
    const checkBox = document.getElementById("checkbox-btn");
    if (checkBox.checked) {
        // document.getElementById('theme_name').textContent="Dark"
        theme.setAttribute("data-theme", "light")
        document.getElementById('theme_image').setAttribute("src", "moon.png")
    }
    else {
        // document.getElementById('theme_name').textContent="Light"
        const theme = document.getElementById('theme')
        theme.setAttribute("data-theme", "dark")
        document.getElementById('theme_image').setAttribute("src", "sunny.png")
    }
}