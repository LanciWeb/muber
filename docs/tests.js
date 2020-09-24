//* SETUP MOCHA TESTS

//TODO 1 - Installing Mocha (npm install --save mocha)
//TODO 2 - Create a "test" Folder inside the application root folder
//TODO 3 - Create a app_test.js file inside test folder
/**
 * we require assert from assert
 * then we install supertest in order to make fake calls to our server
 * |npm i --save supertest
 * we require supertest
 * | const request = require('supertest')
 * then we use describe and it functions, together with supertest to run our tests
 * | request(app).get('/api').end((err, response) => {
 * |    console.log(response.body);
 * |    console.log(response.status);
 * |    assert(response.status === 200);
 * |    done();
 * | });
 */

//TODO 4 - Add Test script in package.json
/**
 * | "test": "nodemon --exec \"mocha --recursive -R min\""
 * nodemon watches for changes
 * --recursive make the test run in subfolders of test folder
 * -R specifies how the output should be printed
 * "min" associated with -R minimizes the output and clears previous tests in the console.
 */

//TODO 5 - Define a test environment variable
/**
 * in the package.json file, we can add an environment like this:
 *  | "NODE_ENV=test nodemon --exec \"mocha --recursive -R min\""
 * */

//TODO 6 - test_helper.js file
/**
 * we can create a test_helper.js file in the test folder and write some code that will be executed when we run tests.
 * We can use that to connect the DB, and / or to clean the database before each round of test.
 */
