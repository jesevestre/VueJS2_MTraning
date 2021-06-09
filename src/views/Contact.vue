<template>
    <div>
        <br />
        <h2 class="titreBandeCouleur"><span>FORMULAIRE DE CONTACT</span></h2>
        <br />

        <div class="contact-form">
            <form id="contact-form" method="POST" action="./../components/contact_post.php" >
                <i class="fas fa-2x  fa-user"></i>
                <input type="text" name="name" class="form-control" placeholder="Votre prénom et nom" required />
                <br />

                <i class="fas fa-2x fa-envelope"></i>
                <input type="email" name="email" class="form-control" placeholder="Votre Email de réponse" required />
                <br />

                <i class="fas fa-2x fa-folder-open"></i>
                <input type="text" name="subject" class="form-control" placeholder="Nom du sujet" required />
                <br />

                <i class="fas fa-2x fa-file-signature"></i>
                <textarea name="message" class="form-control" style="height: 200px;" placeholder="Votre message" ></textarea>
                <br />
                
                <div class="d-grid gap-2 col-2 mx-auto" style="padding-top: -20px;">
                    <input type="submit" class="btn btn-primary" value="Envoyer" />
                </div>
            </form>
		    <br />
	    </div>

    </div>
</template>


<script>
export default { 
    beforeRouteLeave (route, redirect, next) {
        if(window.confirm("En quittant, les informations du formulaire seront perdu !")){
            next();
        }
    }
}
</script>


<style src="./../css/style.css" lang="scss"></style>