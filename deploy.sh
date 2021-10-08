#!usr/bin/env sh

set -e

npm run build

# mv dist docs

cd dist 

git add -A
git commit -m "new deploy"
git push origin master

cd -