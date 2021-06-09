(function(){
    var afficherOnglet = function(a, animations) { //deuxième paramêtre pour annuler animation à l'actualisation de la page
        //Annuler animation à l'actualisation de la page
        if (animations === undefined){
            animations = true;
        }

        var li = a.parentNode;
        var div = a.parentNode.parentNode.parentNode;
        var activeTab = div.querySelector(".tab-content.active"); //Contenu actif
        var aAfficher = div.querySelector(a.getAttribute("href")); //Contenu à afficher

        if(li.classList.contains("active")){
            return false;
        }

        //On retir la class active de l'onglet actif
        div.querySelector(".tabs .active").classList.remove("active");

        //Ajout de la class active sur l'onglet actif
        li.classList.add("active");

        //Enlever la class active sur le contenu actif sans transition
        //div.querySelector(".tab-content.active").classList.remove("active");

        if (animations){ //Animation à l'actualisation de la page
            activeTab.classList.add("fade");
            activeTab.classList.remove("in");

            var transitionend = function() {
                this.classList.remove("fade");
                this.classList.remove("active");

                aAfficher.classList.add("active");
                aAfficher.classList.add("fade");

                aAfficher.offsetWidth;
                aAfficher.classList.add("in");

                activeTab.removeEventListener("transitionend", transitionend);
                activeTab.removeEventListener("webkitTransitionEnd", transitionend);
                activeTab.removeEventListener("oTransitionEnd", transitionend);
            }
            activeTab.addEventListener("transitionend", transitionend);

        }else{ //Annuler animation à l'actualisation de la page
            aAfficher.classList.add("active");
            activeTab.classList.remove("active");
        }

        //Ajout de la class active sur le contenu correspondant à mon clic
        //div.querySelector(a.getAttribute("href")).classList.add("active");
    }

    var tabs = document.querySelectorAll(".tabs a");
    for (var i = 0; i < tabs.length; i++){
        tabs[i].addEventListener("click", function(e) {
        afficherOnglet(this, true); //deuxième paramêtre pour annuler animation à l'actualisation de la page       
        })
    }

    var hashChange = function(e) {
        var hash = window.location.hash;
        var a = document.querySelector('a[href="' + hash + '"]');
        if (a !== null && !a.parentNode.classList.contains("active")){
            afficherOnglet(a, e !== undefined); //deuxième paramêtre pour annuler animation à l'actualisation de la page
        }
    }

    window.addEventListener("hashchange", hashChange);
    hashChange();
})()