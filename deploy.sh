#!usr/bin/env sh

set -e

npm run build

cd dist 

git add -A
git commit -m "new deploy"
git push origin master

cd -