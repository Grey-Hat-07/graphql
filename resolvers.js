import shortid from "shortid";

class Course{
    constructor(id, {courseName, description, category, stack, price, language, instructor, email}){
            
            this.id = id;
            this.courseName = courseName;
            this.description = description;
            this.category = category;
            this.stack = stack;
            this.price = price;
            this.language = language;
            this.instructor = instructor;
            this.email = email;
    }
}
const courseholder = {};

const resolvers = {
    getCourse: ({id}) => {
        return new Course(id, courseholder[id]);
    },
    createCourse: ({input}) => {
        let id = shortid.generate();
        courseholder[id] = input;
        return new Course(id, input);
    }
}

export default resolvers;
