import { paths } from './paths/index.js';

export const specification = {
    openapi: '3.0.0',
    info: {
        title: 'Blog App',
        version: '0.0.1'
    },
    paths,
    components: {
        schemas: {
            BlogObject: {
                type: 'object',
                properties: {
                    id: {
                        type: 'string'
                    },
                    title: {
                        type: 'string'
                    },
                    description: {
                        type: 'string'
                    },
                    comments: {
                        type: 'string'
                    },
                    createdDate: {
                        type: 'number'
                    },
                    updatedDate: {
                        type: 'number'
                    }
                }
            },
            BlogRequestRequiredObject: {
                type: 'object',
                properties: {
                    title: {
                        type: 'string'
                    },
                    description: {
                        type: 'string'
                    }
                },
                required: [
                    'title',
                    'description'
                ]
            }
        }
    }
};