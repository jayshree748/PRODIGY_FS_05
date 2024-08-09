document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();
    createPost();
});

function createPost() {
    const postContent = document.getElementById('postContent').value;
    const postImage = document.getElementById('postImage').files[0];

    const post = document.createElement('div');
    post.className = 'post';

    const content = document.createElement('p');
    content.textContent = postContent;
    post.appendChild(content);

    if (postImage) {
        const media = document.createElement(postImage.type.startsWith('image/') ? 'img' : 'video');
        media.src = URL.createObjectURL(postImage);
        if (media.tagName === 'VIDEO') {
            media.controls = true;
        }
        post.appendChild(media);
    }

    const likeButton = document.createElement('button');
    likeButton.textContent = 'Like';
    likeButton.addEventListener('click', () => {
        likeButton.textContent = likeButton.textContent === 'Like' ? 'Unlike' : 'Like';
    });
    post.appendChild(likeButton);

    const commentButton = document.createElement('button');
    commentButton.textContent = 'Comment';
    commentButton.addEventListener('click', () => {
        const comment = prompt('Enter your comment:');
        if (comment) {
            const commentElement = document.createElement('p');
            commentElement.textContent = comment;
            post.appendChild(commentElement);
        }
    });
    post.appendChild(commentButton);

    document.getElementById('posts').appendChild(post);
    document.getElementById('postForm').reset();
}
