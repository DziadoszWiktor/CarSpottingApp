#building for productiion and generating dist file with static content
npm run build
#change into dist directory
cd dist
#commiting changes
git init
git add -A
git commit -m "dist commit"
#pushing changes on gh-pages branch 
git push -f https://github.com/DziadoszWiktor/CarSpottingApp.git master:gh-pages
#returning to project directory
cd ..   