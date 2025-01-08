// Fetch data from the JSON file and log it for testing
fetch('travel_recommendation_api.json')
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data => {
        console.log(data); // Log data to verify fetch is working
        displayRecommendations(data); // Call function to display recommendations
    })
    .catch(error => {
        console.error("Error fetching data: ", error);
        alert("Failed to load recommendations.");
    });

// Function to display recommendations dynamically
function displayRecommendations(data) {
    const recommendationsContainer = document.querySelector('.recommendations-container');
    recommendationsContainer.innerHTML = ''; // Clear any previous recommendations

    // Loop through countries and display cities
    data.countries.forEach(country => {
        country.cities.forEach(city => {
            const cityElement = document.createElement('div');
            cityElement.classList.add('recommendation');

            cityElement.innerHTML = `
                <h3>${city.name}</h3>
                <img src="${city.imageUrl}" alt="${city.name}" class="recommendation-image">
                <p>${city.description}</p>
            `;
            recommendationsContainer.appendChild(cityElement);
        });
    });

    // Loop through temples and display each
    data.temples.forEach(temple => {
        const templeElement = document.createElement('div');
        templeElement.classList.add('recommendation');

        templeElement.innerHTML = `
            <h3>${temple.name}</h3>
            <img src="${temple.imageUrl}" alt="${temple.name}" class="recommendation-image">
            <p>${temple.description}</p>
        `;
        recommendationsContainer.appendChild(templeElement);
    });

    // Loop through beaches and display each
    data.beaches.forEach(beach => {
        const beachElement = document.createElement('div');
        beachElement.classList.add('recommendation');

        beachElement.innerHTML = `
            <h3>${beach.name}</h3>
            <img src="${beach.imageUrl}" alt="${beach.name}" class="recommendation-image">
            <p>${beach.description}</p>
        `;
        recommendationsContainer.appendChild(beachElement);
    });
}