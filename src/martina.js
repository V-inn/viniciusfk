var reveals = document.querySelectorAll(".reveal")

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("active")
        }else{
            entry.target.classList.remove("active")
        }
    });
});

reveals.forEach((el) => observer.observe(el));