#!/bin/bash

SASS=1
BD=0

for i in "$@"
do
case $i in
  -s=*|--sass=*)
  SASS="${i#*=}"
  ;;
  -b=*|--bd=*|--bbd=*|--betterdiscord=*)
  BD="${i#*=}"
  if [ "$BD" -ne 0 ] && [ "$SASS" -eq 1 ]; then
    echo "Assuming you meant to add --sass=0"
    SASS=0
  fi
  ;;
  *)
    # unknown option
  ;;
esac
done

case $SASS in
  ''|*[!0-1]*) echo "Invalid option -s=${SASS} (or --sass=${SASS}) - valid values are 0 and 1" ;exit 1 ;;
  *)
esac
case $BD in
  ''|*[!0-1]*) echo "Invalid option -b=${BD} (or --bd=${BD},--bbd=${BD},--betterdiscord=${BD}) - valid values are 0 and 1" ;exit 1 ;;
  *)
esac

echo -e "Options:\n- SCSS: $SASS\n- BD: $BD"

runScss(){
  echo "> Telling SASS to watch $PWD/scss and output to $PWD/css"
  echo '$ sass --watch scss:css'
  sass --watch scss:css
}
runBD(){
  echo "> Running script: bdCopy"
  echo '$ yarn bdCopy'
  yarn bdCopy
}

if [ "$EUID" -ne 0 ]; then
  if [ "$SASS" -ne 0 ] && [ "$BD" -ne 0 ]; then
    echo "FATAL: Pick between BD=1 and SASS=1"
    exit 1
  fi

  if [ "$SASS" -ne 0 ]; then
    echo '> Starting runScss'
    echo '$ runScss'
    runScss
  fi
  if [ "$BD" -ne 0 ]; then
    echo '> Starting runBd'
    echo '$ runBd'
    runBD
  fi
else
  echo '> Please run as a non-root-user!'
  exit
fi
