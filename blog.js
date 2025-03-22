document.addEventListener("DOMContentLoaded", function () {
    const blogPosts = {
        1: { 
            title: "Building My First Weather App", 
            content: `Ever wondered how weather apps work? I did too! That’s why I decided to build one from scratch using HTML,
                      CSS, JavaScript, and the OpenWeather API. Here’s how I did it, what I learned, and what I plan to improve.`,
            image: "images/weather-app.jpg" 
        },
        2: { 
            title: "For My Film Lovers", 
            content: `Movies have a way of transporting us into different worlds, making us laugh, cry,
                      and think deeply. In this blog, I share my favorite films—whether it's a mind-bending sci-fi, 
                      a gripping thriller, or a heartwarming drama.`,
            image: "images/movies.jpg" 
        },
        3: { 
            title: "My Journey in Tech", 
            content: `Technology has been more than just a passion for me—it’s been a journey of discovery, growth, and endless learning.
                      From the moment I got my first computer in 2016 to diving deep into coding, networking, and cloud computing, 
                      every step has shaped my skills and mindset.`,
            image: "images/tech-journey.jpg" 
        },
        4: { 
            title: "How I Want to Start GameDev", 
            content: `Gaming has always fascinated me—not just playing, but understanding how worlds are built, mechanics are designed, 
                      and stories come to life. Now, I’m finally taking the leap into game development.`,
            image: "images/game-dev.jpg" 
        }
    };

    // Check if on blog.html (single blog post page)
    const params = new URLSearchParams(window.location.search);
    const blogId = params.get("id");

    if (blogId && blogPosts[blogId]) {
        document.getElementById("blog-title").innerText = blogPosts[blogId].title;
        document.getElementById("blog-content").innerHTML = blogPosts[blogId].content;
        document.getElementById("blog-image").src = blogPosts[blogId].image;
    }

    // Check if on index.html (main blog listing)
    const blogContainer = document.querySelector(".blog-container");

    if (blogContainer) {
        blogContainer.innerHTML = ""; // Clear existing content

        Object.keys(blogPosts).forEach(id => {
            const blog = blogPosts[id];
            const blogPost = document.createElement("div");
            blogPost.classList.add("blog-post");

            // Limit preview to 30 words
            const previewText = blog.content.split(" ").slice(0, 30).join(" ") + "...";

            blogPost.innerHTML = `
                <img src="${blog.image}" alt="${blog.title}">
                <h3>${blog.title}</h3>
                <p>${previewText}</p>
                <a href="blog.html?id=${id}">Read More</a>
            `;

            blogContainer.appendChild(blogPost);
        });
    }
});

// Comments
function postComment() {
    const commentText = document.getElementById("comment").value;
    if (commentText.trim() === "") return;

    const commentDiv = document.createElement("p");
    commentDiv.textContent = commentText;
    document.getElementById("comments").appendChild(commentDiv);

    document.getElementById("comment").value = "";
}
