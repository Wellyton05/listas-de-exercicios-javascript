let funcionarioForm = document.getElementById('funcionarioForm');
        let calcularButton = document.getElementById('calcular');
        
        let funcionariasConcursadas = 0;
        let funcionariosHomens = 0;
        let maiorIdadeHomensConcursados = 0;
        let mulheresMais30SemConcurso = 0;
        let quantidadeConcursados = 0;
        let somaAlturasHomensMenos40 = 0;
        let quantidadeHomensMenos40 = 0;

        calcularButton.addEventListener('click', function() {
            let matricula = document.getElementById('matricula').value;
            let idade = Number(document.getElementById('idade').value);
            let sexo = document.getElementById('sexo').value;
            let altura = parseFloat(document.getElementById('altura').value);
            let concursado = document.getElementById('concursado').value.toUpperCase();

            if (matricula === '0') {
                // Não processar o último funcionário com matrícula igual a zero.
                alert('Todos os funcionários foram processados.');
                return;
            }

            if (concursado === 'S') {
                quantidadeConcursados++;
                if (sexo === 'F') {
                    funcionariasConcursadas++;
                } else if (sexo === 'M') {
                    funcionariosHomens++;
                    if (idade > maiorIdadeHomensConcursados) {
                        maiorIdadeHomensConcursados = idade;
                    }
                    if (idade > 30) {
                        somaAlturasHomensMenos40 += altura;
                        quantidadeHomensMenos40++;
                    }
                }
            } else if (sexo === 'F' && idade > 30) {
                mulheresMais30SemConcurso++;
            }

            // Atualizar os resultados na página
            document.getElementById('funcionariasConcursadas').textContent = funcionariasConcursadas;
            document.getElementById('funcionariosHomens').textContent = funcionariosHomens;
            document.getElementById('maiorIdadeHomensConcursados').textContent = maiorIdadeHomensConcursados;
            document.getElementById('mulheresMais30SemConcurso').textContent = mulheresMais30SemConcurso;
            document.getElementById('quantidadeConcursados').textContent = quantidadeConcursados;
            if (quantidadeHomensMenos40 > 0) {
                let mediaAlturasHomensMenos40 = somaAlturasHomensMenos40 / quantidadeHomensMenos40;
                document.getElementById('mediaAlturasHomensMenos40').textContent = mediaAlturasHomensMenos40.toFixed(2);
            } else {
                document.getElementById('mediaAlturasHomensMenos40').textContent = 'N/A';
            }

            // Limpar os campos do formulário
            document.getElementById('matricula').value = '';
            document.getElementById('idade').value = '';
            document.getElementById('altura').value = '';
            document.getElementById('concursado').value = '';
        });