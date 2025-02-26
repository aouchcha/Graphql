export const UserData = `{
    user {
        firstName
        lastName
        auditRatio
        campus
        login
        attrs
        login
        totalUp
        totalDown
    }
        transaction(where :{type: {_eq: "xp"}, _and: [{path: {_like: "%module/%"}}, {path: {_nilike: "%piscine-js/%"}}]}) {
            amount
            path
        }
        skills :  transaction( where: { type: { _like: "%skill%" } }) {
            type
            amount
        }
        projects : transaction(where: {type:{_eq:"xp"},object: {type: {_eq: "project"}}}) {
            object {
            name
            }
        }
        
}`