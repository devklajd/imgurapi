Project made by Klajdi Belishaku -> https://github.com/devklajd


## About
Displays Image gallery using imgur api. 
Its a Simple web app that allows one to browse the Imgur gallery using https://api.imgur.com/.
React with redux pattern in the Front end and Express.js in the backend. 
Instead of calling Imgur API directly, API calls are proxied through Node/express server.

## Get started 
'npm install' in terminal to install all the dependencies.
'npm run start:server' to start the backend server.
Once the backend is up , 'npm start' to start the Client app  

## Start Backend server 
### `npm run start:server`
starts the node server.js on 5000

## Start Client side  
### `npm start`

# if this error appears :
# "//opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],
# library: 'digital envelope routines',
# reason: 'unsupported',
# code: 'ERR_OSSL_EVP_UNSUPPORTED'
# }//

# Node.js v20.10.0 "

# make sure to run this script on terminal :

# $env:NODE_OPTIONS = "--openssl-legacy-provider" <---!important


Open [http://localhost:3000](http://localhost:3000) to view it in the browser. This should redirect the page to [http://localhost:3000/gallery](http://localhost:3000/gallery)

## Set IMGUR client ID
imgur client ID here: /backend/constants/constants
