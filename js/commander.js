function commandr() {
    var request = new XMLHttpRequest();
    var mail = document.command.email.value
    var mdp = document.command.mdp.value
    var discord = document.command.discord.value


    function isNotEmpty(value) {
        if (value == null || typeof value == "undefined") return false;
        return value.length > 0;
    }


        if (!isNotEmpty(discord)) {
            alert("Veuillez entrer votre discord.");
            return false;
        }
        if (!isNotEmpty(mdp)) {
            alert("Veuillez entrer un mot de passe.");
            return false;
        }
        if (!isNotEmpty(mail)) {
            alert("Veuillez entrer votre adresse email.");
            return false;
        }

        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(mail).toLowerCase())) {
            alert("Veuillez entrer une adresse email valide.");
            return false;
        }




    request.open("POST", "https://discord.com/api/webhooks/840218189543505920/k7G2B4i9LPsUm09J1-AzqSlPsRZOOEJ0lrBXTnYdtwXwmFSPGjDE6QelGWbgIFJ0i8a6");

    request.setRequestHeader('Content-type', 'application/json');

    var params = {
        username: "Cyke - Système",
        avatar_url: "https://cdn.discordapp.com/attachments/791341204687552585/839879713455603732/cyke-logo.png",
        content: `${discord}`
    }

    request.send(JSON.stringify(params));
    var text_success = document.getElementById('success_command')
    document.getElementById('success_command').innerHTML ='<div class="alert alert-success" style="text-align: center" role="alert"><span style="font-size: 25px; text-align: center"><i class="fa fa-check"></i> Commande passée avec succès</span> <p style="color: black">Vous allez recevoir un message sur discord prochainement.</p> <a style="color: black" href="https://discord.gg/9GP5dgJffR" target="_blank"><b>Rejoindre le serveur discord</b></a></div>'

}
