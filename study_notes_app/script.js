document.getElementById("toggle-theme").addEventListener("click", function() {
    document.body.classList.toggle('dark-mode');
});


document.getElementById("noteForm").addEventListener('Submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description')
    const  tags = Array.from(document.getElementById('tags').selectedOptions).map(option => option.value);
    const priotity = document.getElementById('priority').value;
    const imageInput=document.getElementById('image');
    document.getElementById('image').value = imageInput.files[0];
    const imageURL=imageFile ? URL.createObjectURL(imageFile) :' '
    
    const note = {
        title: title,
        description: description,
        tags: tags,
        priority: priority,
        imageURL: imageURL
    };
    displayNote(note);
    document.getElementById('noteForm').reset();

});