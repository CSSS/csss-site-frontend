# csss-site-frontend Makefile

# these recipes don't represent actual targets
.PHONY: all clean main

all: main

build:
	mkdir -p build

clean:
	rm -Rf build/*

# main React app
main: build
	rm -Rf build/static build/index.html build/favicon.png build/asset-manifest.json
	npm run --prefix src/main build
	cp -Rf src/main/build/* build
