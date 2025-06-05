cp -R /home/runner/work/_temp/* .
rm -f js/*.LICENSE.txt
git add .
git commit -m "Updating `build` with PR#103: Added a command to preserve the build folder when switching branches"
git push origin build
