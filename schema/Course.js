module.exports = `

    # This is a course in system
    type Course {
        id: ID!
        title: String!
        description: String!
        teacher: Teacher
        rating: Float @deprecated(reason: "Wont support this on future")
        comments: [Comment]
    }

        type Comment {
        id: ID!
        name: String!
        body: String!
    }
`