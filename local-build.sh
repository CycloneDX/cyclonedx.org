#!/usr/bin/env sh
docker run \
    -v `pwd`:/srv/jekyll \
    -v `pwd`/_site:/srv/jekyll/_site \
    jekyll/builder:latest /bin/bash -c "jekyll build --future"
