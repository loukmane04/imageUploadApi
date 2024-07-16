document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    
    if (file) {
        const formData = new FormData();
        formData.append('image', file);
        
        fetch('https://api.imgbb.com/1/upload?key=540a4171008b7d59dbc4cc88e8a8ce4b', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                const imageUrl = data.data.url;
                const imageUrlContainer = document.getElementById('imageUrlContainer');
                imageUrlContainer.innerHTML = `<p>Image URL: <a href="${imageUrl}" target="_blank">${imageUrl}</a></p>`;
            } else {
                alert('Image upload failed!');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred during the image upload.');
        });
    } else {
        alert('Please select an image file to upload.');
    }
});
