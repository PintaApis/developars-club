module.exports = {
  createUserHelper: () => ({
    query: `
      mutation CreateUser($user: UserInput) {
        createUser(user: $user) { id email username photo summary }
      }
    `,
    variables: {
      user: {
        email: 'any_email@mail.com',
        username: 'any_username',
        password: 'any_password'
      }
    },
  }),
  updateUserSummaryHelper: (updateUserSummaryId, summary) => ({
    query: `mutation UpdateUserSummary($updateUserSummaryId: ID!, $summary: String!) {
      updateUserSummary(id: $updateUserSummaryId, summary: $summary) {
        id email username photo summary
      }
    }`,
    variables: {
      updateUserSummaryId,
      summary: summary
    }
  }),
  getUserByIdHelper: id => ({
    query: `query GetUserById($getUserByIdId: ID!) {
      getUserById(id: $getUserByIdId) {
        id email username photo summary
      }
    }`,
    variables: {
      getUserByIdId: `${id}`
    }
  }),
  listUsersHelper: () => ({
    query: `query ListUsers {
      listUsers {
        id email username photo summary
      }
    }`
  })
}