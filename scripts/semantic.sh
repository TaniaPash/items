#!/bin/bash
SEMANTIC_TAG=${1} 
echo "$@"
echo $SEMANTIC_TAG
echo "foo"

sed -i -e "s/SEMANTIC_TAG/$SEMANTIC_TAG/" ./.travis.yml