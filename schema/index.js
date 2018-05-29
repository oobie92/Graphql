const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools'),
//   casual = require('casual'),  
    resolvers = require('../resolvers'),
    Teacher = require('../schema/Teacher'),
    Course = require('../schema/Course')


    rootQuery = `
    type Query {
        courses: [Course]
        teachers: [Teacher]
        course(id: Int): Course
        teacher(id: Int): Teacher
    }

    type Mutation {
        teacherAdd(teacher: NewTeacher): Teacher
    }
    `,


    schema = makeExecutableSchema({
        typeDefs: [rootQuery, Teacher, Course],
        resolvers
    })



module.exports = schema