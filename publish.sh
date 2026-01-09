#!/bin/sh -e
npm run build
if [ ! -d ./subnixr.github.io ]; then 
    git clone git@github.com:subnixr/subnixr.github.io
fi
rm -r ./subnixr.github.io/*
cp -r ./out/* ./subnixr.github.io
cd subnixr.github.io/
touch .nojekyll
git add .
git c -m "publish $(date -Is)"
git push