const Course = require('./models/Course'),
      Teacher = require('./models/Teacher'),

      resolvers = {
        Query: {
            courses: () => Course.query().eager('[teacher, comments]'),
            teachers: () => Teacher.query().eager('courses'),
            course: (rootValue, args) => Course.query().eager('[teacher, comments]').findById(args.id),
            teacher: (rootValue, args) => Teacher.query().eager('courses').findById(args.id)
        },
        Mutation: {
            teacherAdd: (_, args) => {
                return Teacher.query().insert(args.teacher)
            }
        }
    }

module.exports = resolvers    