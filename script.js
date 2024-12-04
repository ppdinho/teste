const products = [
    { name: "Martelo", url: "martelo.html" },
    { name: "Produto B", url: "/produtos/produto-b" },
    { name: "Produto C", url: "/produtos/produto-c" },
    { name: "Produto D", url: "/produtos/produto-d" },
    { name: "Produto E", url: "/produtos/produto-e" }
  ];
  
  function showSuggestions(query) {
    const suggestionsBox = document.getElementById('suggestions');
    suggestionsBox.innerHTML = ''; // Clear previous suggestions
  
    if (query.length === 0) {
      suggestionsBox.style.display = 'none';
      return;
    }
  
    const filteredProducts = products.filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase())
    );
  
    if (filteredProducts.length > 0) {
      suggestionsBox.style.display = 'block';
      filteredProducts.forEach(product => {
        const suggestionItem = document.createElement('div');
        suggestionItem.classList.add('suggestion-item');
        suggestionItem.textContent = product.name;
        suggestionItem.onclick = () => window.location.href = product.url;
        suggestionsBox.appendChild(suggestionItem);
      });
    } else {
      suggestionsBox.style.display = 'none';
    }
  }
  