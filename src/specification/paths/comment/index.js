export const comment = {
    '/blog/:blogId/comment/:commentId': {
      get: {
        summary: 'Get a comment',
        operationId: 'getComment',
        parameters: [
          {
            $ref: '#/components/parameters/CommentParameterId'
          },
          {
            $ref: '#/components/parameters/BlogParameterId'
          }
        ],
        responses: {
          200: {
            description: 'A comment object',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/CommentObject'
                }
              }
            }
          }
        },
        security: [
          {
            cookieAuth: []
          }
        ]
      },
      delete: {
        summary: 'Delete a comment',
        operationId: 'deleteComment',
        parameters: [
          {
            $ref: '#/components/parameters/CommentParameterId'
          },
          {
            $ref: '#/components/parameters/BlogParameterId'
          }
        ],
        responses: {
          200: {
            description: 'successful response',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    success: {
                      type: 'boolean'
                    }
                  }
                }
              }
            }
          }
        },
        security: [
          {
            cookieAuth: []
          }
        ]
      },
      put: {
        summary: 'Update a comment',
        operationId: 'updateComment',
        parameters: [
          {
            $ref: '#/components/parameters/CommentParameterId'
          },
          {
            $ref: '#/components/parameters/BlogParameterId'
          }
        ],
        requestBody: {
          description: 'The request body for comment',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/CommentRequestObject'
              }
            }
          },
          required: true
        },
        responses: {
          200: {
            description: 'A comment object',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/CommentObject'
                }
              }
            }
          }
        },
        security: [
          {
            cookieAuth: []
          }
        ]
      }
    },
    '/blog/:blogId/comment': {
      post: {
        summary: 'Add a comment',
        operationId: 'addComment',
        parameters: [
          {
            $ref: '#/components/parameters/BlogParameterId'
          }
        ],
        requestBody: {
          description: 'The request body for comment',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/CommentRequestRequiredObject'
              }
            }
          },
          required: true
        },
        responses: {
          200: {
            description: 'A comment object',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/CommentObject'
                }
              }
            }
          }
        },
        security: [
          {
            cookieAuth: []
          }
        ]
      },
      get: {
        summary: 'Get many comment',
        operationId: 'getManyComment',
        parameters: [
          {
            name: 'limit',
            in: 'query',
            description: 'The number of items returned',
            schema: {
              type: 'number'
            },
          },
          {
            $ref: '#/components/parameters/BlogParameterId'
            
          }
        ],
        responses: {
          200: {
            description: 'A comment object',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/CommentObject'
                  }
                }
              }
            }
          }
        },
        security: [
          {
            cookieAuth: []
          }
        ]
      }
    }
  };
  