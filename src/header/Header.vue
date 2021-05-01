<template>
    <div class="header">
        
        <div class="navbarwrap fixed-top bg-primary py-2">
            <div class="container">

                <nav class="navbar navbar-expand-lg navbar-dark">
                <router-link class="navbar-brand" to="/"><i class="fas fa-dumbbell"></i>
                <span class="font-weight-bold">M.TRAINING</span>.free.fr</router-link>

                <button class="navbar-toggler" type="button" data-toggle="collapse" 
                data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" 
                aria-expanded="false" aria-label="Toggle navigation">
                <div class="navbar-toggler-icon"></div>
                </button>

                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ml-auto">

                        <li class="nav-item active">
                            <router-link class="nav-link" to="/disponibilite">Les disponibilités</router-link>
                        </li>

                        <li class="nav-item dropdown active">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" 
                            role="button" data-bs-toggle="dropdown" aria-expanded="false"
                            data-toggle="collapse">Les cours</a>

                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <router-link class="dropdown-item" to="/cours">Remise en forme</router-link>
                                <router-link class="dropdown-item" to="/cours">Musculation</router-link>
                                <router-link class="dropdown-item" to="/cours">Réduire les douleurs de dos</router-link>
                                <router-link class="dropdown-item" to="/cours">Abdo / fessier</router-link>
                            </div>
                        </li>

                        <li class="nav-item active">
                            <router-link class="nav-link" to="/contact">Nous contacter<span class="sr-only">(current)
                            </span></router-link>
                        </li>                        

                        <li class="nav-item">
                            <router-link class="nav-link" to="/tarifs">Les tarifs</router-link>
                        </li>
                    </ul>
                </div>
                </nav>
            </div>
        </div>
        <br />
    
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            header: 0
        }
    },
    methods: { }
}

</script>

<style src="./../css/style.css"></style>