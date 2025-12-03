// 2025 Formula 1 Drivers Data
const drivers = [
    {
        number: 1,
        name: "Max Verstappen",
        team: "Red Bull Racing",
        nationality: "Dutch",
        info: "Four-time and reigning World Champion (2021, 2022, 2023, 2024)",
        teamColor: "#1E41FF",
        image: "PHOTOS/MV01.png"
    },
    {
        number: 22,
        name: "Yuki Tsunoda",
        team: "Red Bull Racing",
        nationality: "Japanese",
        info: "Improving driver with strong qualifying pace",
        teamColor: "#1E41FF",
        image: "PHOTOS/YT22.png"
    },
    {
        number: 44,
        name: "Lewis Hamilton",
        team: "Ferrari",
        nationality: "British",
        info: "Seven-time World Champion (2008, 2014, 2015, 2017, 2018, 2019, 2020)",
        teamColor: "#DC143C",
        image: "PHOTOS/LH44.png"
    },
    {
        number: 16,
        name: "Charles Leclerc",
        team: "Ferrari",
        nationality: "Monegasque",
        info: "Ferrari's lead driver, multiple race winner",
        teamColor: "#DC143C",
        image: "PHOTOS/CL16.png"
    },
    {
        number: 63,
        name: "George Russell",
        team: "Mercedes",
        nationality: "British",
        info: "Race winner and consistent podium finisher",
        teamColor: "#00D2BE",
        image: "PHOTOS/GR63.png"
    },
    {
        number: 12,
        name: "Kimi Antonelli",
        team: "Mercedes",
        nationality: "Italian",
        info: "Rising star, F2 champion making F1 debut",
        teamColor: "#00D2BE",
        image: "PHOTOS/KA12.png"
    },
    {
        number: 4,
        name: "Lando Norris",
        team: "McLaren",
        nationality: "British",
        info: "Multiple race winner, known for exceptional race pace.",
        teamColor: "#FF8700",
        image: "PHOTOS/LN04.png"
    },
    {
        number: 81,
        name: "Oscar Piastri",
        team: "McLaren",
        nationality: "Australian",
        info: "Rookie of the Year 2023, race winner",
        teamColor: "#FF8700",
        image: "PHOTOS/OP81.png"
    },
    {
        number: 14,
        name: "Fernando Alonso",
        team: "Aston Martin",
        nationality: "Spanish",
        info: "Two-time World Champion (2005, 2006), still competitive at 43",
        teamColor: "#006F62",
        image: "PHOTOS/FA14.png"
    },
    {
        number: 18,
        name: "Lance Stroll",
        team: "Aston Martin",
        nationality: "Canadian",
        info: "Experienced driver with multiple podiums",
        teamColor: "#006F62",
        image: "PHOTOS/LS18.png"
    },
    {
        number: 23,
        name: "Alexander Albon",
        team: "Williams",
        nationality: "Thai",
        info: "Consistent points scorer, team leader at Williams",
        teamColor: "#005AFF",
        image: "PHOTOS/AA23.png"
    },
    {
        number: 55,
        name: "Carlos Sainz Jr.",
        team: "Williams",
        nationality: "Spanish",
        info: "Multiple race winner and podium finisher, excels in strategy.",
        teamColor: "#005AFF",
        image: "PHOTOS/CS55.png"
    },
    {
        number: 10,
        name: "Pierre Gasly",
        team: "Alpine",
        nationality: "French",
        info: "Race winner, strong and experienced driver",
        teamColor: "#FF00C1",
        image: "PHOTOS/PG10.png"
    },
    {
        number: 43,
        name: "Franco Colapinto",
        team: "Alpine",
        nationality: "Argentine",
        info: "Rookie on first full season debut.",
        teamColor: "#FF00C1",
        image: "PHOTOS/FC43.png"
    },
    {
        number: 31,
        name: "Esteban Ocon",
        team: "Haas",
        nationality: "French",
        info: "Race winner",
        teamColor: "#FFFFFF",
        image: "PHOTOS/EO31.png"
    },
    {
        number: 87,
        name: "Oliver Bearman",
        team: "Haas",
        nationality: "British",
        info: "Ferrari Academy driver, impressive F2 results",
        teamColor: "#FFFFFF",
        image: "PHOTOS/OB87.png"
    },
    {
        number: 27,
        name: "Nico Hulkenberg",
        team: "Sauber",
        nationality: "German",
        info: "Multiple race winner, experienced campaigner, known for his consistency",
        teamColor: "#52C41A",
        image: "PHOTOS/NH27.png"
    },
    {
        number: 5,
        name: "Gabriel Bortoleto",
        team: "Sauber",
        nationality: "Brazilian",
        info: "Consistent performer, known for his consistency",
        teamColor: "#52C41A",
        image: "PHOTOS/GB05.png"
    },
    {
        number: 30,
        name: "Liam Lawson",
        team: "Racing Bulls",
        nationality: "New Zealander",
        info: "Rookie on first full season debut.",
        teamColor: "#003F7F",
        image: "PHOTOS/LL30.png"
    },
    {
        number: 6,
        name: "Isack Hadjar",
        team: "Racing Bulls",
        nationality: "French",
        info: "Rising star, making F1 debut in 2025",
        teamColor: "#003F7F",
        image: "PHOTOS/IH06.png"
    }
];

// Team colors mapping
const teamColors = {
    "Red Bull Racing": "#1E41FF",
    "Ferrari": "#DC143C",
    "Mercedes": "#00D2BE",
    "McLaren": "#FF8700",
    "Aston Martin": "#006F62",
    "Williams": "#005AFF",
    "Alpine": "#FF00C1",
    "Haas": "#FFFFFF",
    "Sauber": "#52C41A",
    "Racing Bulls": "#003F7F"
};

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    populateTeamFilter();
    displayDrivers(drivers);
    setupEventListeners();
});

// Populate team filter dropdown
function populateTeamFilter() {
    const teamFilter = document.getElementById('teamFilter');
    const teams = [...new Set(drivers.map(driver => driver.team))].sort();
    
    teams.forEach(team => {
        const option = document.createElement('option');
        option.value = team;
        option.textContent = team;
        teamFilter.appendChild(option);
    });
}

// Display drivers
function displayDrivers(driversToShow) {
    const container = document.getElementById('drivers-container');
    const noResults = document.getElementById('no-results');
    
    container.innerHTML = '';
    
    if (driversToShow.length === 0) {
        container.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }
    
    container.style.display = 'grid';
    noResults.style.display = 'none';
    
    driversToShow.forEach(driver => {
        const card = createDriverCard(driver);
        container.appendChild(card);
    });
}

// Create driver card element
function createDriverCard(driver) {
    const card = document.createElement('div');
    card.className = 'driver-card';
    
    const teamColor = teamColors[driver.team] || '#667eea';
    
    card.innerHTML = `
        <div class="driver-image-container">
            <img src="${driver.image}" alt="${driver.name}" class="driver-image" onerror="this.src='https://via.placeholder.com/300x400/667eea/ffffff?text=${encodeURIComponent(driver.name)}';">
        </div>
        <div class="driver-number">${driver.number}</div>
        <h2 class="driver-name">${driver.name}</h2>
        <div class="driver-team">${driver.team}</div>
        <div class="driver-nationality">${driver.nationality}</div>
        <div class="driver-info">${driver.info}</div>
        <div class="team-color-bar" style="background: ${teamColor}"></div>
    `;
    
    return card;
}

// Setup event listeners for search and filter
function setupEventListeners() {
    const searchInput = document.getElementById('searchInput');
    const teamFilter = document.getElementById('teamFilter');
    
    searchInput.addEventListener('input', filterDrivers);
    teamFilter.addEventListener('change', filterDrivers);
}

// Filter drivers based on search and team selection
function filterDrivers() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const selectedTeam = document.getElementById('teamFilter').value;
    
    const filtered = drivers.filter(driver => {
        const matchesSearch = 
            driver.name.toLowerCase().includes(searchTerm) ||
            driver.team.toLowerCase().includes(searchTerm) ||
            driver.nationality.toLowerCase().includes(searchTerm);
        
        const matchesTeam = selectedTeam === 'all' || driver.team === selectedTeam;
        
        return matchesSearch && matchesTeam;
    });
    
    displayDrivers(filtered);
}

