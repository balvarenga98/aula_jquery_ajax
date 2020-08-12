function consultacep() {
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/"
    $.ajax({
        url: url, type: "GET", success: function (response) {
            $("#logradouro").html(response.logradouro);
            //document.getElementById("logradouro").innerHTML = response.logradouro;
            document.getElementById("bairro").innerHTML = response.bairro;
            document.getElementById("localidade").innerHTML = response.localidade;
            document.getElementById("complemento").innerHTML = response.complemento;
            document.getElementById("estado").innerHTML = response.uf;
            document.getElementById("titulo_cep").innerHTML = "CEP " + response.cep;
           
        }
    })
};


