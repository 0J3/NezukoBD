#!/bin/bash
if [ "$EUID" -ne 0 ]; then
  echo '> Telling SASS to watch $PWD/scss and output to $PWD/css'
  echo '$ sass --watch scss:css'
  sass --watch scss:css
  echo 'Exiting...'
  exit
else
  echo '> Please run as a non-root-user!'
  exit
fi
