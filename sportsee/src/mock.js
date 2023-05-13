const API_BASE_URL = 'http://localhost:3000';

/**

 Récupère les sessions moyennes d'un utilisateur
 @param {string} id - L'ID de l'utilisateur
 @param {string} path - Le chemin de l'API pour récupérer les données
 @returns {Promise<Array<Object>>} - Un tableau d'objets représentant les sessions moyennes de l'utilisateur
 */
export function fetchAverageSessions(id, path) {
    const url = `${API_BASE_URL}/user/${id}/${path}`;
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            return data.data.sessions.map(session => ({
                name: `Jour ${session.day}`,
                sessionLength: session.sessionLength
            }));
        });
}

/**

 Récupère les données d'activité d'un utilisateur
 @param {number} id - L'ID de l'utilisateur
 @param {string} path - Le chemin de l'API pour récupérer les données
 @returns {Promise<Array<Object>>} - Un tableau d'objets représentant les données d'activité de l'utilisateur
 */
export function fetchActivity(id, path) {
    return fetch(`${API_BASE_URL}/user/${id}/${path}`)
        .then(response => response.json())
        .then(data => {
            return data.data.sessions.map(session => ({
                name: session.day,
                calories: session.calories,
                poid: session.kilogram,
            }));
        });
}

/**

 Récupère le nombre de calories d'un utilisateur
 @param {number} id - L'ID de l'utilisateur
 @returns {Promise<number>} - Le nombre de calories de l'utilisateur
 */
export function fetchCalories(id) {
    return fetch(`${API_BASE_URL}/user/${id}`)
        .then(response => response.json())
        .then(data => {
            return data.data.keyData.calorieCount;
        });
}


/**

 Récupère le nombre de glucides d'un utilisateur
 @param {number} id - L'ID de l'utilisateur
 @returns {Promise<number>} - Le nombre de glucides de l'utilisateur
 */
export function fetchGlucides(id) {
    return fetch(`${API_BASE_URL}/user/${id}`)
        .then(response => response.json())
        .then(data => {
            return data.data.keyData.carbohydrateCount;
        });
}


/**

 Récupère le nombre de lipides d'un utilisateur
 @param {number} id - L'ID de l'utilisateur
 @returns {Promise<number>} - Le nombre de lipides de l'utilisateur
 */
export function fetchLipides(id) {
    return fetch(`${API_BASE_URL}/user/${id}`)
        .then(response => response.json())
        .then(data => {
            return data.data.keyData.lipidCount;
        });
}


/**

 Récupère le nombre de protéines d'un utilisateur
 @param {number} id - L'ID de l'utilisateur
 @returns {Promise<number>} - Le nombre de protéines de l'utilisateur
 */
export function fetchProteines(id) {
    return fetch(`${API_BASE_URL}/user/${id}`)
        .then(response => response.json())
        .then(data => {
            return data.data.keyData.proteinCount;
        });
}


/**

 Récupère les données de performance d'un utilisateur
 @param {number} id - L'ID de l'utilisateur
 @param {string} path - Le chemin de l'API pour récupérer les données
 @returns {Promise<Array<Object>>} - Un tableau d'objets représentant les données de performance de l'utilisateur
 */
export function fetchPerformanceData(id, path) {
    return fetch(`${API_BASE_URL}/user/${id}/${path}`)
        .then(response => response.json())
        .then(data => {
            const dataArray = data.data.data;
            return dataArray.map(perf => ({
                subject: data.data.kind[perf.kind],
                A: perf.value,
                fullMark: 150,
            }));
        });
}


/**

 Récupère le nom d'un utilisateur
 @param {number} id - L'ID de l'utilisateur
 @returns {Promise<string>} - Le nom de l'utilisateur
 */
export function fetchUserName(id) {
    return fetch(`${API_BASE_URL}/user/${id}`)
        .then(response => response.json())
        .then(data => {
            return data.data.userInfos.firstName;
        });
}


/**

 Récupère le score d'un utilisateur
 @param {number} id - L'ID de l'utilisateur
 @returns {Promise<number>} - Le score de l'utilisateur
 */
export function fetchScore(id) {
    return fetch(`${API_BASE_URL}/user/${id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data.data.todayScore)
            return data.data.todayScore ? data.data.todayScore : data.data.score;
        });
}
