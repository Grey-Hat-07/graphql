import {buildSchema} from 'graphql'

const Schema = buildSchema(`
    type Course{
        id: ID
        title: String
        description: String
        category: String
        stack: Stack
        price: Int
        language: String
        instructor: [teachers]
        email: String
        
    }
    type teachers{
        firstName: String
        lastName: String
        experience: Int

    }
    enum Stack{
        WEB
        MOBILE
        OTHER
    }
    type Query{
        getCourse(id: ID): Course
    }
    input CourseInput{
        id: ID
        title: String!
        description: String
        category: String
        stack: Stack
        price: Int!
        language: String
        instructor: [teachers]!
        email: String
    }
    input teachersInput{
        firstName: String
        lastName: String
        experience: Int
    }
    type Mutation{
        createCourse(input: CourseInput): Course
    }
`);



export default Schema;