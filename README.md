# EventTrackerProject

# Overview
The purpose of this project was to create a Spring Boot REST application utilizing REST controllers, services, and Spring Data JPA repositories. This project is a multi step project with the initial intent being that we are comfortable working with REST and utilizing POSTMAN and then followed with front end design the following week.

I started by building a database through MySQL workbench and creating appropriate POJOs. For database build I have the main feature of having a 'Dive Log' that captures information important to divers. Additionally I have designed it so that I may include a large database of sea creatures that they can select within their dive log. Lastly I designed it so that the user can also keep track of information specific to them.
After I was satisfied with the database I built out the Diving Log entity and proceeded with Spring Boot logic building the sercive, serviceImpl and controller. To ensure everything was working I tested using Postman.

To view please follow this link:
AWS:



# Routes required:

|HTTP req    | URI                   |  Response Body |
|------------|-----------------------|---------------|
| GET        | `/api/divinglogs`     | Gets all diving logs|
| GET        | `/api/divinglogs/{id}`| Gets a specific log by id |
| POST       | `/api/divinglogs`     | Creates a new log |
| PUT        | `/api/divinglogs/{id}`| Updates an existing log |
| DELETE     | `/api/divinglogs/{id}`| Deletes an exisitng log |


# Technologies Used:
- Java
- REST
- Spring Web
- Spring Data JPA
- MySQL Workbench
- POSTMAN
- AWS EC2
- MySQL Driver
- Git
- Gradle
- Eclipse


<img width="400" alt="Screen Shot 2023-01-21 at 3 15 03 PM" src="https://user-images.githubusercontent.com/113144309/213889053-9b3885da-1314-4da8-a437-7837a69f96c2.png">

# Lessons Learned
- This was my first time really building out a more detailed DB layout in MySQL. Initially I became really invested and made multiple different entities which would require more complex mapping than was within the scope of this project. I decided to instead focus and make sure I understood the process of what was happening before I expanded on what I had built.
- Happy to say that I am starting to prioritizing naming conventions in a way that is easy to recall and easier to trouble shoot. That has been a focus of several of the last projects and as they scale in size something I want to have engrained into my practice. 
