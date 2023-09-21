
# Course Registration Project

 <h2> Here are three project features that can be identified from my code-</h2>

- Course Selection and Credit Calculation: My project allows users to select courses from a list and calculates the total credit hours for the selected courses. It prevents users from exceeding a specified credit limit (20 hours) and provides feedback through alerts when the limit is reached.

- Displaying Course Information: The project displays detailed information about each course, including its title, description, price, and credit hours. This information is presented in a user-friendly and visually appealing manner, making it easy for users to browse and select courses.

- Shopping Cart and Cost Calculation: My project features a shopping cart component (the Cart component) that displays the selected courses, the remaining credit hours, the total credit hours selected, and the total cost in USD. It provides a clear summary of the user's selections and helps them keep track of their choices and the associated costs.

<h2>In my project, i managed state using React's useState hook to handle various aspects of the application- </h2>

- Course Data: I used useState to store and manage the allCourses state, which holds the data for available courses fetched from the JSON file.

- Selected Courses: The selectedCourses state is used to keep track of the courses that the user has selected to enroll in. It's initialized as an empty array and is updated when the user clicks the "Select" button for a course.

- Total Cost: The total Cost state represents the total cost of the selected courses. It starts at 0 and is updated each time a course is added to the selection.

- Remaining Credit Hours: remaining state is used to display the remaining credit hours available for enrollment. It's calculated based on the credit hours of selected courses and is updated dynamically.

- Total Credit Hours: The total Credit state keeps track of the total credit hours of all selected courses. It's updated as courses are added to the selection.


