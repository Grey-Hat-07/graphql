import express from 'express';
import resolvers from './resolvers';
import Schema from './Schema'
import {graphqlHTTP} from 'express-graphql'
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
    });

const root = resolvers;
app.use('/graphql', graphqlHTTP({
    schema: Schema,
    rootValue:root,
    graphiql: true
    

}));

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');

});