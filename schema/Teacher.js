module.exports = `
    type Teacher {
        id: ID!
        name: String!
        nationality: String!
        gender: Gender
        courses: [Course]
    }

    enum Gender {
        MALE
        FEMALE
    }

    input NewTeacher {
        name: String!, gender: Gender, nationality: String!
    }
`