#!/bin/bash

projectPath=`pwd`
RED='\033[0;31m'
NC='\033[0m'
LGREEN='\033[1;32m'
my_dir="$(dirname "$0")"

# cd to hooks folder
cd ./.lint/hooks

printf '\n===== init hooks =====\n'
hooks="${projectPath}/.git/hooks/"
rm -f "${hooks}/pre-commit"
ln -s ../../.lint/hooks/pre-commit "$hooks"
chmod +x "${hooks}/pre-commit"

printf "\n ==== ALL DONE ===\n"