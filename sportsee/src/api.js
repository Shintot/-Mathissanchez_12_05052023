const API_BASE_URL = 'http://localhost:3000';

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

export function fetchCalories(id) {
  return fetch(`${API_BASE_URL}/user/${id}`)
    .then(response => response.json())
    .then(data => {
      return data.data.keyData.calorieCount;
    });
}

export function fetchGlucides(id) {
  return fetch(`${API_BASE_URL}/user/${id}`)
    .then(response => response.json())
    .then(data => {
      return data.data.keyData.carbohydrateCount;
    });
}

export function fetchLipides(id) {
  return fetch(`${API_BASE_URL}/user/${id}`)
    .then(response => response.json())
    .then(data => {
      return data.data.keyData.lipidCount;
    });
}

export function fetchProteines(id) {
  return fetch(`${API_BASE_URL}/user/${id}`)
    .then(response => response.json())
    .then(data => {
      return data.data.keyData.proteinCount;
    });
}

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

export function fetchUserName(id) {
  return fetch(`${API_BASE_URL}/user/${id}`)
    .then(response => response.json())
    .then(data => {
      return data.data.userInfos.firstName;
    });
}

export function fetchScore(id) {
  return fetch(`${API_BASE_URL}/user/${id}`)
    .then(response => response.json())
    .then(data => {
        console.log(data.data.todayScore)
      return data.data.todayScore ? data.data.todayScore : data.data.score;
    });
}
