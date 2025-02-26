export const LastPorjects = `
    {
        user {
            groups (where: {group: {status: {_eq: finished}, _and: [{path: {_like: "%module%"}}, {path: {_nilike: "%piscine-js%"}}] }}) {
                group {
                    path
                }
            }
        }
    }
`
