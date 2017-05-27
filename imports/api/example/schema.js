/**
 * Created by John Board on 27/05/2017.
 */
import { Example } from './example.js';

Example.schema = new SimpleSchema({
    name: {
        type: String
    }
});

Example.attachSchema(Exmaple.schema);