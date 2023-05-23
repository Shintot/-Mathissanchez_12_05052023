import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "./mockData";

export function fetchAverageSessions(id, path) {
  const userSessions = USER_AVERAGE_SESSIONS.find((user) => user.userId === Number(id));
  return userSessions ? Promise.resolve(userSessions.sessions) : Promise.reject(new Error('User not found'));
}

export function fetchActivity(id, path) {
    if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
        // Dans l'environnement de développement ou de test, renvoyer les données mockées
        const userData = USER_ACTIVITY.find(user => user.userId === Number(id));

        if (userData) {
            return Promise.resolve(
                userData.sessions.map(session => ({
                    name: session.day,
                    calories: session.calories,
                    poid: session.kilogram,
                }))
            );
        } else {
            return Promise.reject(new Error('User not found'));
        }
    }
}


export function fetchCalories(id) {
  const userData = USER_MAIN_DATA.find((user) => user.id === Number(id));
  return userData ? Promise.resolve(userData.keyData.calorieCount) : Promise.reject(new Error('User not found'));
}

export function fetchGlucides(id) {
  const userData = USER_MAIN_DATA.find((user) => user.id === Number(id));
  return userData ? Promise.resolve(userData.keyData.carbohydrateCount) : Promise.reject(new Error('User not found'));
}

export function fetchLipides(id) {
  const userData = USER_MAIN_DATA.find((user) => user.id === Number(id));
  return userData ? Promise.resolve(userData.keyData.lipidCount) : Promise.reject(new Error('User not found'));
}

export function fetchProteines(id) {
  const userData = USER_MAIN_DATA.find((user) => user.id === Number(id));
  return userData ? Promise.resolve(userData.keyData.proteinCount) : Promise.reject(new Error('User not found'));
}

export function fetchPerformanceData(id, path) {
  const userPerformance = USER_PERFORMANCE.find((user) => user.userId === Number(id));

  if (userPerformance) {
    return Promise.resolve(
      userPerformance.data.map((perf) => ({
        subject: userPerformance.kind[perf.kind],
        A: perf.value,
        fullMark: 150,
      }))
    );
  } else {
    return Promise.reject(new Error('User not found'));
  }
}


export function fetchUserName(id) {
  const userData = USER_MAIN_DATA.find((user) => user.id === Number(id));
  return userData ? Promise.resolve(userData.userInfos.firstName) : Promise.reject(new Error('User not found'));
}

export function fetchScore(id) {
  const userData = USER_MAIN_DATA.find((user) => user.id === Number(id));
  return userData ? Promise.resolve(userData.todayScore || userData.score) : Promise.reject(new Error('User not found'));
}
