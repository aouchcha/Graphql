export const UserData = `{
    user {
        firstName
        lastName
        auditRatio
        campus
        login
        attrs
        login
        groups(where: {group: {status: {_eq: finished}, _and: {path: {_like: "%module%"}}}}) {
            id
            path
            group {
                path
                members {
                    userLogin
                }
            }
        }
    }
}`