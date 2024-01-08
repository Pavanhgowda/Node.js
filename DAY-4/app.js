//DAY-4 Working with NPM(Node Package Manager).
//STEP1: Intialize NPM (CMD:- npm init).
//STEP2: Modify the package.json file according to the needs.
//STEP3: "start":" node app.js"
//STEP4: To run ===>npm start.
//STEP5: To install 3rd Party libaries first run ===>npm install.
//STEP6: And install 3rd Party libaries (Ex:- npm i nodemon  --save-dev).
let a =[];
for(let i=0;i<=10;i++)
{
    if(i%2==0)
    {
        a.push('even');
    }
    else
    {
        a.push('odd');
    }
    
}
console.log(a);