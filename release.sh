cp index.html index.bak.html
cp asset-manifest.json asset-manifest.bak.json
cp manifest.json manifest.bak.json
source ~/.bashrc
yarn --nomap --cwd /Users/lihaidong/work/app.deri.finance build 
cp -R /Users/lihaidong/work/app.deri.finance/build/* ./
git checkout main
git pull origin main
git add .
git commit -m 'release'
git push origin main
