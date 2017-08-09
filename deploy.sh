#!/bin/bash
npm run clean
mkdir -p public && cd public
git init
git remote add blog git@github.com:9renpoto/9renpoto.github.io.git
git pull blog master
cd ..
find public -not -iwholename '*.git/*' | grep -v public/.git | xargs rm
npm run deploy
cd public
git add -A
git commit -am "Updated"
git push blog master
