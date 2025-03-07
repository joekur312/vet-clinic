const blogPosts = [
    {
        title: "Dog Immunization Scheme",
        date: "March 1, 2025",
        image: "images/dog.jfif",
        excerpt: "A detailed vaccination schedule to keep your dog healthy and protected.",
        content: `
            <p>Ensuring your dog receives the right vaccinations at the right time is crucial for their health. Below is a recommended vaccination schedule:</p>
            <table>
                <tr>
                    <th>Age</th>
                    <th>Core Vaccines</th>
                    <th>Non-Core Vaccines (Optional)</th>
                    <th>Notes</th>
                </tr>
                <tr>
                    <td>6-8 weeks</td>
                    <td>DHPP (Distemper, Hepatitis, Parvovirus, Parainfluenza)</td>
                    <td>Bordetella (Kennel Cough)</td>
                    <td>Start core vaccinations</td>
                </tr>
                <tr>
                    <td>10-12 weeks</td>
                    <td>DHPP (2nd dose)</td>
                    <td>Leptospirosis, Bordetella, Lyme</td>
                    <td>Optional vaccines based on risk</td>
                </tr>
            </table>
        `,
    },
    {
        title: "Cattle Vaccination Best Practices",
        date: "March 1, 2025",
        image: "images/immunization.png",
        excerpt: "Best practices and schedules for cattle, goat, and sheep vaccinations.",
        content: `
            <p>Proper vaccination of cattle, goats, and sheep ensures livestock health and productivity. Below is a recommended vaccination schedule for each:</p>
            <table>
                <tr>
                    <th>Animal</th>
                    <th>Age</th>
                    <th>Core Vaccines</th>
                    <th>Notes</th>
                </tr>
                <tr>
                    <td>Cows</td>
                    <td>2-4 months</td>
                    <td>Brucellosis, Clostridial (Blackleg), IBR-BVD-PI3</td>
                    <td>Essential for young calves</td>
                </tr>
                <tr>
                    <td>Goats</td>
                    <td>4-8 weeks</td>
                    <td>CD&T (Clostridium Perfringens Types C&D and Tetanus)</td>
                    <td>Crucial for preventing fatal diseases</td>
                </tr>
            </table>
        `,
    }
];

// Function to display blog list
function displayBlogList() {
    const blogContainer = document.querySelector(".blog-container");
    const blogDetails = document.querySelector(".blog-details");

    blogContainer.innerHTML = "";
    blogDetails.style.display = "none"; // Hide details
    blogContainer.style.display = "block"; // Show blog list

    blogPosts.forEach((post, index) => {
        const postElement = document.createElement("div");
        postElement.classList.add("blog-summary");
        postElement.innerHTML = `
            <img src="${post.image}" alt="${post.title}" class="blog-image">
            <h2>${post.title}</h2>
            <p>${post.excerpt}</p>
            <button onclick="viewPost(${index})">Read More</button>
        `;
        blogContainer.appendChild(postElement);
    });
}

// Function to display a single blog post
function viewPost(index) {
    const blogContainer = document.querySelector(".blog-container");
    const blogDetails = document.querySelector(".blog-details");
    const postTitle = document.getElementById("post-title");
    const postImage = document.getElementById("post-image");
    const postContent = document.getElementById("post-content");

    postTitle.innerText = blogPosts[index].title;
    postImage.src = blogPosts[index].image;
    postImage.alt = blogPosts[index].title;
    postContent.innerHTML = blogPosts[index].content;

    blogContainer.style.display = "none"; // Hide blog list
    blogDetails.style.display = "block"; // Show post details
}

// Function for back button
document.getElementById("back-btn").addEventListener("click", displayBlogList);

// Load the blog list initially
document.addEventListener("DOMContentLoaded", displayBlogList);
