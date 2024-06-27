// Get the result container element
let resultContainer = document.getElementById('result');

// Function to clear the result container
let clearResult = () => {
    resultContainer.innerHTML = '';
};

// Function to fetch and display all posts
let showPosts = () => {
    clearResult();
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {
            resultContainer.innerHTML = JSON.stringify(json, null, 2);
        })
        .catch((error) => console.error('Error:', error));
};

// Function to fetch and display a post by its ID
let showPostById = (id) => {
    clearResult();
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((json) => {
            resultContainer.innerHTML = JSON.stringify(json, null, 2);
        })
        .catch((error) => console.error('Error:', error));
};

// Function to create a new post and display the new post ID
let createPost = (newPost) => {
    clearResult();
    fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newPost)
    })
    .then((response) => response.json())
    .then((json) => {
        resultContainer.innerHTML = `Post id: ${json.id}`;
    })
    .catch((error) => console.error('Error:', error));
};

// Function to update a post's title by its ID and display the updated post
let updatePost = (id, updatedPost) => {
    clearResult();
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(updatedPost)
    })
    .then((response) => response.json())
    .then((json) => {
        resultContainer.innerHTML = JSON.stringify(json, null, 2);
    })
    .catch((error) => console.error('Error:', error));
};

// Function to replace a post by its ID and display the updated post
let replacePost = (id, newPost) => {
    clearResult();
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newPost)
    })
    .then((response) => response.json())
    .then((json) => {
        resultContainer.innerHTML = JSON.stringify(json, null, 2);
    })
    .catch((error) => console.error('Error:', error));
};

// Function to delete a post by its ID and display a success message
let deletePost = (id) => {
    clearResult();
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE'
    })
    .then(() => {
        resultContainer.innerHTML = `Post with id: ${id} deleted successfully.`;
    })
    .catch((error) => console.error('Error:', error));
};

// Event listeners for buttons to trigger the corresponding functions
document.getElementById('getAllPostsBtn').addEventListener('click', showPosts);
document.getElementById('getPostByIdBtn').addEventListener('click', () => showPostById(10));
document.getElementById('createPostBtn').addEventListener('click', () => {
    let newPost = { title: 'my post', body: 'This is the body of the post', userId: 1 };
    createPost(newPost);
});
document.getElementById('replacePostBtn').addEventListener('click', () => {
    let newPost = { title: 'Replaced Post', body: 'This is the replaced post body', userId: 1 };
    replacePost(12, newPost);
});
document.getElementById('updatePostTitleBtn').addEventListener('click', () => {
    let updatedPost = { title: 'Updated Title' };
    updatePost(12, updatedPost);
});
document.getElementById('deletePostBtn').addEventListener('click', () => deletePost(12));