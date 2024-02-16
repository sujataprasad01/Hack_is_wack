// Course data (dummy data for demonstration)
const courses = [
    { id: 1, name: "Mathematics", instructor: "John Doe", duration: "10 weeks" },
    { id: 2, name: "Science", instructor: "Jane Smith", duration: "8 weeks" },
    { id: 3, name: "History", instructor: "Bob Johnson", duration: "12 weeks" }
];

// Function to display courses
function displayCourses() {
    const mainContent = document.getElementById("mainContent");
    mainContent.innerHTML = ""; // Clear previous content

    const coursesList = document.createElement("ul");

    courses.forEach(course => {
        const courseItem = document.createElement("li");
        courseItem.innerHTML = `<strong>${course.name}</strong> - Instructor: ${course.instructor}, Duration: ${course.duration}`;
        coursesList.appendChild(courseItem);
    });

    mainContent.appendChild(coursesList);
}

// Add event listener for "Manage Courses" link
document.getElementById("manageCoursesLink").addEventListener("click", displayCourses);

// Display courses on page load
displayCourses();
