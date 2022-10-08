const testServer = require('../server')

describe('User Resolvers', () => {
  it('returns hello with the provided name', async () => {
    const result = await testServer.executeOperation({
      query: `
        mutation CreateUser($user: UserInput) {
          createUser(user: $user) {
            id
            email
            username
            photo
            summary
          }
        }
      `,
      variables: {
        user: {
          email: 'any_email@mail.com',
          username: 'any_username',
          password: 'any_password'
        }
      },
    });
    expect(result.errors).toBeUndefined()
    expect(result.data?.createUser).toEqual({
      id: '1',
      email: 'any_email@mail.com',
      username: 'any_username',
      photo: null,
      summary: null
    })
  })
})


/*
mutation CreateUser($user: UserInput) {
  createUser(user: $user) {
    id
    email
    username
    photo
    summary
  }
}

"user": {
    "email": "demo1@demo.com",
    "password": "1234",
    "usern
*/