window.onload = function() {
    var userLang = navigator.language || navigator.userLanguage; 
    if(userLang === "pt-BR") {
        window.location.href = "/pt-br/";
    } else {
        window.location.href = "/en/";
    }
}