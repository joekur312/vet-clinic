document.addEventListener("DOMContentLoaded", () => {
    const blogContainer = document.querySelector(".blog-container");
    const blogDetails = document.querySelector(".blog-details");
    const postTitle = document.getElementById("post-title");
    const postImage = document.getElementById("post-image");
    const postContent = document.getElementById("post-content");
    const backBtn = document.getElementById("back-btn");

    const blogPosts = [
        {
            title: "Understanding Vaccination for Dogs",
            image: "images/dog.jfif",
            content: "Learn about the essential vaccines your dog needs and their schedules to keep them healthy."
        },
        {
            title: "Cattle Vaccination Guide",
            image: "images/cattle.jfif",
            content: "A detailed guide on vaccination schemes for cattle to prevent common diseases."
        },
        {
            title: "Poultry Immunization Best Practices",
            image: "images/poultry.png",
            content: "Discover the best immunization schedules for your poultry to ensure disease resistance."
        }
    ];

    function displayBlogPosts() {
        blogContainer.innerHTML = "";
        blogPosts.forEach((post, index) => {
            const postElement = document.createElement("div");
            postElement.classList.add("blog-post");
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <img src="${post.image}" alt="${post.title}">
                <p>${post.content.substring(0, 50)}...</p>
                <button onclick="viewPost(${index})">Read More</button>
            `;
            blogContainer.appendChild(postElement);
        });
    }

    window.viewPost = (index) => {
        const post = blogPosts[index];
        postTitle.textContent = post.title;
        postImage.src = post.image;
        postImage.alt = post.title;
        postContent.textContent = post.content;
        blogContainer.style.display = "none";
        blogDetails.style.display = "block";
    };

    backBtn.addEventListener("click", () => {
        blogContainer.style.display = "block";
        blogDetails.style.display = "none";
    });

    displayBlogPosts();
});
