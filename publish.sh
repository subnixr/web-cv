#!/bin/sh -e
npm run build
rm -r ./subnixr.github.io/*
cp -r ./out/* ./subnixr.github.io
cd subnixr.github.io/
touch .nojekyll
git add .
git c -m "publish $(date -Is)"
git push