# iamvl.github.io
personal website

## Edit Github page (future times)

```NODE_OPTIONS=--openssl-legacy-provider npm start ``` to open up the localhost view.

## Create a Github repo (first time)
1. The repo should be public and named <your_github_id>.github.io 

## Setting up the react app:  
1. npm install create-react-app  
2. npx create-react-app <your_github_id>.github.io 
3. cd <your_github_id>.github.io 
4. NODE_OPTIONS=--openssl-legacy-provider npm start // just to check it out, make sure yarn and npm aren't being used at the same time! 
- npm i --save @fortawesome/free-solid-svg-icons
- npm i --save @fortawesome/fontawesome-svg-core
- npm i --save @fortawesome/react-fontawesome
5. edit package.json (e.g. "vim package.json")  
   - add "homepage": "https://<your_github_id>.github.io
   - add "predeploy": 
   - add "deploy": "gh-pages -d build -b master"
6. npm run build // creates a build folder  
   - copy the contents in the build folder and paste into the /<your_github_id>.github.io/ folder
7. npm install gh-pages --save-dev
   - make sure that you have github ssh setup! https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh  
8. push to github, setup as follows:
   - git add .
   - git commit -m "first build"
   - git remote add origin
   - git remote add origin https://github.com/iamvl/iamvl.github.io.git
   - git push -u origin master
   - git branch --set-upstream-to=origin/master
9. move your repo to a second branch (e.g. name this "code", or "dev") 
   - git checkout -b dev
   - git push -u origin dev
10. go to the github repo --> enter settings --> enter branches --> set "dev" as default branch
11. deploy your site: npm run deploy

If you're using yarn instead of npm, replace the commands: 
- NODE_OPTIONS=--openssl-legacy-provider npm run build --> yarn build
- NODE_OPTIONS=--openssl-legacy-provider npm run deploy --> yarn deploy

## References:  
https://medium.com/@kishandth.sivapalasundaram/how-to-deploy-your-react-app-to-a-github-user-page-d4b925cf5543  


