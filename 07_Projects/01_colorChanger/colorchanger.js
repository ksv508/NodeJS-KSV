const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button){
    button.addEventListener('click',function (action){
        if(action.target.id === "red")
            body.style.backgroundColor = action.target.id;
        if(action.target.id === "blue")
            body.style.backgroundColor = action.target.id;
        if(action.target.id === "green")
            body.style.backgroundColor = action.target.id;
        if(action.target.id === "gray")
            body.style.backgroundColor = action.target.id;
        if(action.target.id === "purple")
            body.style.backgroundColor = action.target.id;
    });
});
