const changeH1Content = function(){
    let h1Changed = document.getElementById("pageTitleJava")
    h1Changed.innerText = "Your New Shop"
}

const changeH1ContentBack = function(){
    let h1ChangedBack = document.getElementById("pageTitleJava")
    h1ChangedBack.innerText = "Luna's Shop"
}

const changeBackground = function(){
    let newBackground = document.getElementsByTagName("body")[0]
    newBackground.classList.toggle("active")
}

const changeFooter = function(){
    document.getElementById("pOfFooter").innerHTML = "Copyright© 2021 Luna's Shop - Unicorn Street, 37 Neverland"
}

const addClassToA = function(){
    
} 