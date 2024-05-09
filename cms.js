document.addEventListener('DOMContentLoaded', function() {
    const articleForm = document.getElementById('articleForm');
    articleForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        
        // Validate inputs
        if (title.trim() === '' || content.trim() === '') {
            alert('Please fill in all fields.');
            return;
        }
        
        let articles = JSON.parse(localStorage.getItem('articles')) || [];
        
        articles.push({ title: title, content: content }); // Push article data without image
        
        localStorage.setItem('articles', JSON.stringify(articles));
    
        alert('Article saved successfully!');
        
        // Clear form inputs after submission
        articleForm.reset();
        
        window.location.href = 'index.html';
    });
});
