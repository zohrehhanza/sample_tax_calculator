
# Intro

The goal is to get the data from the API server, do the calculations and show users their taxes.

# System Design
We generally have 2 options when data is provided by an API:
- Do all the calculations on the client-side (here UI): In the current case, this is preferred. This gives us good scalability and less server-side maintenance. We can just upload the UI on an S3 server and replicate it all over the world.
- Have a middle-ware: In situations where we need to do authentication to the backend API or to control the requests, this option is better. The middleware backend server can be a Django or Flask server depending on complexity and future plans for this component. This increases maintenance costs and scalability wouldn't be as straightforward as the first option.

# Error Handling
Here we assume the user is in debug mode and we show them the exact error message we receive from the server and guide them to retry again. If we were going to release this to the public, we would show a much nicer error message.

# How To Run

Run server: 
```bash
docker run --init -p 5000:5000 -it ptsdocker16/interview-test-server
```

install react requirements:
```bash
npm install
```

run react app:
```bash
npm run start
```

# Conclusion
This was a quick project to show some programming, system design and error handling techniques. If it was a real-world project, we would've put more consideration on general design as well as system design and most probably would've implemented a rate-limiting functionality with a middleware.

