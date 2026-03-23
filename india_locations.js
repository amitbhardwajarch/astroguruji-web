let INDIA_LOCATIONS = {};

async function loadIndiaData() {
    const response = await fetch(
        "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/json/states+cities.json"
    );

    const data = await response.json();

    // Find India
    const india = data.find(c => c.name === "India");

    INDIA_LOCATIONS = {};

    india.states.forEach(state => {
        INDIA_LOCATIONS[state.name] = {};

        // This dataset does not have districts → use state as district
        INDIA_LOCATIONS[state.name][state.name] = state.cities.map(c => c.name);
    });

    loadStates(); // populate dropdown
}