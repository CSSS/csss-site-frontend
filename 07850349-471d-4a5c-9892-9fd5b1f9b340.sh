# Set up a dummy user and email for identification purposes
git config --global user.name "jbriones1"
git config --global user.email "jbriones1@user.noreply.github.com"

# Checkout `build` and copy the files over
# Based off the script `./scripts/deploy_to_branch.sh`
# The branch we are publishing to
git fetch origin build
git switch build
