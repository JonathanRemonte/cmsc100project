import tap from 'tap';
import { build } from '../../src/app.js';
import 'must/register.js';

tap.mochaGlobals();

const prefix = '/api';

describe('Update a blog should work', async () => {
  let app;

  before(async () => {
    app = await build();
  });

  it('Should update the object given an ID ', async () => {
    const newBlog = {
      title: 'New Blog for get',
      description: 'Some description'
    };

    const newerBlog = {
      title: 'New Blog for update',
      description: 'Some description 2'
    };

    const createResponse = await app.inject({
      method: 'POST',
      url: `${prefix}/blog`,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBlog)
    });

    const { id, createdDate, updatedDate } = await createResponse.json();

    const response = await app.inject({
      method: 'PUT',
      url: `${prefix}/blog/${id}`,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newerBlog)
    });

    // this checks if HTTP status code is equal to 200
    response.statusCode.must.be.equal(200);

    const result = await response.json();

    // expect that id exists
    result.id.must.be.equal(id);
    // expect that all of the values should be equal to newBlog properties
    result.title.must.be.equal(newerBlog.title);
    result.description.must.be.equal(newerBlog.description);
    // expect that username exists
    // result.username.must.not.be.null();
    // expect createdDate and updatedDate is not null
    result.createdDate.must.equal(createdDate);
    result.updatedDate.must.above(updatedDate);
  });

  it('Should update the object given an ID and only title being updated', async () => {
    const newBlog = {
      title: 'New Blog for get',
      description: 'Some description'
    };

    const newerBlog = {
      title: 'New Blog for update 2'
    };

    const createResponse = await app.inject({
      method: 'POST',
      url: `${prefix}/blog`,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBlog)
    });

    const { id, createdDate, updatedDate } = await createResponse.json();

    const response = await app.inject({
      method: 'PUT',
      url: `${prefix}/blog/${id}`,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newerBlog)
    });

    // this checks if HTTP status code is equal to 200
    response.statusCode.must.be.equal(200);

    const result = await response.json();

    // expect that id exists
    result.id.must.be.equal(id);
    // expect that all of the values should be equal to newBlog properties
    result.title.must.be.equal(newerBlog.title);
    result.description.must.be.equal(newBlog.description);
    // expect that username exists
    // result.username.must.not.be.null();
    // expect createdDate and updatedDate is not null
    result.createdDate.must.equal(createdDate);
    result.updatedDate.must.above(updatedDate);
  });

  it('Should update the object given an ID and only description being updated', async () => {
    const newBlog = {
      title: 'New Blog for get',
      description: 'Some description'
    };

    const newerBlog = {
      description: 'Some description 2'
    };

    const createResponse = await app.inject({
      method: 'POST',
      url: `${prefix}/blog`,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBlog)
    });

    const { id, createdDate, updatedDate } = await createResponse.json();

    const response = await app.inject({
      method: 'PUT',
      url: `${prefix}/blog/${id}`,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newerBlog)
    });

    // this checks if HTTP status code is equal to 200
    response.statusCode.must.be.equal(200);

    const result = await response.json();

    // expect that id exists
    result.id.must.be.equal(id);
    // expect that all of the values should be equal to newBlog properties
    result.title.must.be.equal(newBlog.title);
    result.description.must.be.equal(newerBlog.description);
    // expect that username exists
    // result.username.must.not.be.null();
    // expect createdDate and updatedDate is not null
    result.createdDate.must.equal(createdDate);
    result.updatedDate.must.above(updatedDate);
  });
});
