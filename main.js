document.addEventListener("DOMContentLoaded", () => {
    const categoryLinks = document.querySelectorAll(".category");
    const productList = document.querySelector(".product-list");

    categoryLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            // Retirer la classe active de toutes les catégories
            categoryLinks.forEach(cat => cat.classList.remove("active"));

            // Ajouter la classe active à la catégorie cliquée
            link.classList.add("active");

            // Récupérer les produits de la catégorie cliquée
            const selectedCategory = link.dataset.category;
            const products = categories[selectedCategory] || [];

            // Réinitialiser la liste des produits
            productList.innerHTML = "";

            // Générer les produits dynamiquement
            products.forEach(product => {
                const productHTML = `
                    <div class="product-item">
                        <img src="${product.img}" alt="${product.name}">
                        <h3>${product.name}</h3>
                        <p>${product.description}</p>
                        <p class="price">${product.price}</p>
                        <a href="https://wa.me/22667472504?text=Bonjour,%20je%20souhaite%20commander%20le%20produit:%20${encodeURIComponent(product.name)}" 
                           target="_blank" 
                           class="whatsapp-link">
                           Commander via WhatsApp
                        </a>
                    </div>
                `;
                productList.innerHTML += productHTML;
            });
        });
    });
});
