document.addEventListener("DOMContentLoaded", () => {
    const blogContainer = document.querySelector(".blog-container");
    const blogDetails = document.querySelector(".blog-details");
    const postTitle = document.getElementById("post-title");
    const postImage = document.getElementById("post-image");
    const postContent = document.getElementById("post-content");
    const backBtn = document.getElementById("back-btn");

    const blogPosts = [
    {
        title: "Dog Immunization Scheme",
        date: "March 1, 2025",
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
                <tr>
                    <td>14-16 weeks</td>
                    <td>DHPP (3rd dose), Rabies</td>
                    <td>Leptospirosis, Canine Influenza</td>
                    <td>Rabies required by law in most areas</td>
                </tr>
                <tr>
                    <td>1 year</td>
                    <td>DHPP Booster, Rabies Booster</td>
                    <td>Bordetella, Leptospirosis, Lyme</td>
                    <td>Boosters to maintain immunity</td>
                </tr>
                <tr>
                    <td>Every 1-3 years</td>
                    <td>DHPP Booster, Rabies Booster</td>
                    <td>Leptospirosis, Bordetella, Lyme</td>
                    <td>As recommended by vet</td>
                </tr>
            </table>
            <p>Consult your veterinarian to determine the best vaccination plan for your dog's needs.</p>
        `,
    },
    // Add more blog posts as needed
];

// Function to display blog posts
function displayBlogPosts() {
    const blogContainer = document.getElementById("blog-container");
    blogContainer.innerHTML = "";
    
    blogPosts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("blog-post");
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p><em>${post.date}</em></p>
            <div>${post.content}</div>
        `;
        blogContainer.appendChild(postElement);
    });
}

// Call function to load blog posts
document.addEventListener("DOMContentLoaded", displayBlogPosts);
