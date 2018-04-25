#!/bin/bash
SEMANTIC_TAG=${1} 
echo "$@"
echo $SEMANTIC_TAG
echo "foo"
export SEM_TAG=$SEMANTIC_TAG
echo $SEM_TAG