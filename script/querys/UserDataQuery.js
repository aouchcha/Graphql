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
        transaction(where :{type: {_eq: "xp"}, _and: [{path: {_like: "%module%"}}, {path: {_nilike: "%piscine-js/%"}}]}) {
            id
            type
            amount
            path
            createdAt
        }
        skills :  transaction( where: { type: { _like: "skill%" } }) {
            type
            amount
        }

        
}`