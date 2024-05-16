const contentDisplayChildren = document.getElementById("contentDisplay").getElementsByTagName("div");

function defineVisibility(id){
    for(let i = 0; i < contentDisplayChildren.length; i++){
        contentDisplayChildren[i].classList.add("invisible")
    };

    contentDisplayChildren[id].classList.remove("invisible");
}