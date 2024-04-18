function createLeaf() {
    const leafDiv = document.createElement('div');
    leafDiv.classList.add('leaf');
  
    // Define posição inicial da folha de forma aleatória
    leafDiv.style.left = Math.random() * 100 + '%';
  
    // Define tamanho da folha
    const size = (Math.random() * 5) + 5;
    leafDiv.style.width = `${size}px`;
    leafDiv.style.height = `${size}px`;
  
    // Define duração e animação da folha
    const animationDuration = Math.random() * 5 + 5;
    leafDiv.style.animation = `fall ${animationDuration}s linear infinite`;
  
    document.getElementById('leaf-container').appendChild(leafDiv);
  
    // Remove a folha após a animação terminar para limpar o DOM
    setTimeout(() => {
      leafDiv.remove();
    }, animationDuration * 1000);
  }
  
  // Cria uma nova folha a cada 300 milissegundos
  setInterval(createLeaf, 300);
  
  