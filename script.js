//your JS code here. If required.
 let panels = document.querySelectorAll(".panel")

     panels.forEach( (panel) => {
          panel.addEventListener("click" , () => {
               removeAllClasses()
               panel.classList.add("active")
          })
     })

     function removeAllClasses(){
         panels.forEach((panel) => {
               panel.addEventListener("click", () => {
                      panel.classList.remove("active")
               })
         }) 
     }
