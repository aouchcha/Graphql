export const Trans = `
{
	transaction(where :{type: {_eq: "xp"}, _and: [{path: {_like: "%module%"}}, {path: {_nilike: "%piscine-js/%"}}]}) {
    id
    type
    amount
    path
    createdAt
  }
}
`