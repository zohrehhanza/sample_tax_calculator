


Here we had a server which provide information through two APIS

The goal was getting the data from the server and provide the calculation
For this case , i think, we only need to provide a UI and I decided to do all the calculation in the client side.

I used React app and provide a UI for our case , you only need to have your server run and also run react app through npm run start, 
then we have all the information ready. As you mentioned there is bad response with one of the APIs, some time. 
I just provide the error to user to try again in a certain time. We also can set a timeout and recall the api's ourselves but I just asked the user to do that.


Another approach, having a middle server with django (flask also works but more comfortable with django) and also react as ui 
in this case we can have all the calculations in the server side, but here the UI can help and we don't need more.



To run the application:

Run server: 
docker run --init -p 5000:5000 -it ptsdocker16/interview-test-server

install react requirements:
npm install

run react app:
npm run start

