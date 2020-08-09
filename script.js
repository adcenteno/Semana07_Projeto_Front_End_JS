function displayRepos(repos){
	let container = document.querySelector('#repos')
	for (let repo of repos ){
		let card = document.createElement('a')

		card.textContent = repo.name
		card.href = repo.link
		card.target = '_blank'
		card.rel = 'noopener'
		card.classList.add('card')

		container.appendChild(card)
	}

}



fetch('https://api.github.com/users/adcenteno/repos')
	
.then(response => {
		if (response.ok){
			return response.json()

		}

	})

	
	.then(data => {
		
let repos = []
		data.forEach(repo => {
			repos.push({

				name: repo.name,
				link: repo.html_url

			})
		})




		displayRepos(repos)
	})

function cleanForm(){
        document.querySelector('#fname').value = "";
        document.querySelector('#email').value = "";
        document.querySelector('#subject').value = "";
        document.querySelector('#message').value = "";
}

function validateDataForm(){
	let messageError = "";
	let nameRegex = /^([a-zA-Z]{2,}\s[a-zA-z]{1,})$/i;
	let emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	
	if(!nameRegex.test(document.querySelector('#fname').value)){
		messageError += "Você deve digitar só o seu primeiro nome e o seu primeiro sobrenome\n";
	}

	if(!emailRegex.test(document.querySelector('#email').value)){
		messageError += "Você deve digitar um endereço de email válido\n";
	}

	if(document.querySelector('#subject').value == ""){
		messageError += "você deve preencher o campo assunto\n";
	}

	if(document.querySelector('#message').value == ""){
		messageError += "você deve preencher o campo mensagem";
	}

	return messageError
}

function submitFunction(event){
	event.preventDefault()
	messageError = validateDataForm();
	if(messageError == ""){
		alert("a sua mensagem tem sido enviada!");
	}else{
		alert(messageError);
	}
	cleanForm();
}

document.querySelector("#uniqueForm").addEventListener("submit", submitFunction)