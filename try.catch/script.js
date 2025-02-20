function validar_Formu() {
    document.querySelectorAll(".error").forEach(el => el.textContent = "");

    try {
        validar_Campo("nome", "Nome é obrigatório!");
        validar_CPF("cpf");
        validar_Email("email");
        validar_Telefone("telefone");
        validar_Campo("endereco", "Endereço é obrigatório!");
        validar_Campo("cidade", "Cidade é obrigatória!");
        validar_Campo("estado", "Estado é obrigatório!");
        validar_CEP("cep");
        validar_DataNascimento("dataNascimento");
        validar_Campo("profissao", "Profissão é obrigatória!");
        validar_Senha("senha");
        validar_Genero();

        alert("Cadastro realizado com sucesso!");
    } catch (erro) {
        console.error("Erro: " + erro);
    }
}

function validar_Campo(id, mensagem) {
    let valor = document.getElementById(id).value.trim();
    if (!valor) throw document.getElementById(`error-${id}`).textContent = mensagem;
}

function validar_CPF(id) {
    let cpf = document.getElementById(id).value.trim();
    let regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!cpf) throw document.getElementById(`error-${id}`).textContent = "CPF é obrigatório!";
    if (!regexCPF.test(cpf)) throw document.getElementById(`error-${id}`).textContent = "CPF inválido!";
}

function validar_Email(id) {
    let email = document.getElementById(id).value.trim();
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) throw document.getElementById(`error-${id}`).textContent = "E-mail é obrigatório!";
    if (!regexEmail.test(email)) throw document.getElementById(`error-${id}`).textContent = "E-mail inválido!";
}

function validar_Telefone(id) {
    let telefone = document.getElementById(id).value.trim();
    let regexTelefone = /^\(\d{2}\) \d{5}-\d{4}$/;
    if (!telefone) throw document.getElementById(`error-${id}`).textContent = "Telefone é obrigatório!";
    if (!regexTelefone.test(telefone)) throw document.getElementById(`error-${id}`).textContent = "Formato inválido!";
}

function validar_CEP(id) {
    let cep = document.getElementById(id).value.trim();
    let regexCEP = /^\d{5}-\d{3}$/;
    if (!cep) throw document.getElementById(`error-${id}`).textContent = "CEP é obrigatório!";
    if (!regexCEP.test(cep)) throw document.getElementById(`error-${id}`).textContent = "CEP inválido!";
}

function validar_DataNascimento(id) {
    let data = new Date(document.getElementById(id).value);
    if (!data) throw document.getElementById(`error-${id}`).textContent = "Data de nascimento é obrigatória!";
    if (data.getFullYear() < 1920) throw document.getElementById(`error-${id}`).textContent = "Ano deve ser após 1920!";
}

function validar_Genero() {
    if (!document.querySelector('input[name="genero"]:checked')) {
        throw document.getElementById("error-genero").textContent = "Selecione um gênero!";
    }
}