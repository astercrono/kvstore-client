# KVStore Client #

A web front-end for kvstore-server, developed with React, Flux and Bootstrap.

## Prerequisites ##

 - nodejs
 - npm
 - A running instance of kvstore-server.

 ## Building ##

**Clone repository**

```bash
git clone https://github.com/astercrono/kvstore-client
cd kvstore-client
```

**Setup**

Install dependencies and then run the React build script.

```bash
npm install
npm run build
```

**Deployment**

After building, all compiled sources will be contained within *kvstore-client/build*. These are just static files that need to be served up by a web server. I recommend dropping them into a web server, such as *Nginx* or *Apache*. In order for the application to work, you will have to configure your backend web server to proxy requests to */kvstore/*** over to your instance of kvstore-server. 
