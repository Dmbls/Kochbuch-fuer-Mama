document.addEventListener('DOMContentLoaded', function() {
    const articlesContainer = document.getElementById('articlesContainer'); // Get the articles container
    const articles = JSON.parse(localStorage.getItem('articles')) || []; // Get articles from local storage or initialize an empty array
    
    articles.forEach(function(article, index) {
        const articleDiv = document.createElement('div'); // Create a new article div
        articleDiv.classList.add('article'); // Add the 'article' class to the div
        
        const titleHeading = document.createElement('h2');
        titleHeading.textContent = article.title;
        
        const contentParagraph = document.createElement('p');
        contentParagraph.textContent = article.content;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            if (confirm("Are you sure you want to delete this article?")) {
                articles.splice(index, 1);
                localStorage.setItem('articles', JSON.stringify(articles));
                articlesContainer.removeChild(articleDiv);
            }
        });

        // Create an image element and set its source to the uploaded image URL
        if (article.image) {
            const imageElement = document.createElement('img');
            imageElement.src = article.image;
            imageElement.classList.add('article-image'); // Add a class for styling
            articleDiv.appendChild(imageElement); // Append the image to the article div
        }
        
        var _lsTotal=0,_xLen,_x;for(_x in localStorage){ if(!localStorage.hasOwnProperty(_x)){continue;} _xLen= ((localStorage[_x].length + _x.length)* 2);_lsTotal+=_xLen; console.log(_x.substr(0,50)+" = "+ (_xLen/1024).toFixed(2)+" KB")};console.log("Total = " + (_lsTotal / 1024).toFixed(2) + " KB");

        articleDiv.appendChild(titleHeading);
        articleDiv.appendChild(contentParagraph);
        articleDiv.appendChild(deleteButton);
        
        articlesContainer.appendChild(articleDiv);
    });
});
