install: install-deps

run:
	npx babel-node 'src/bin/say.js'

install-deps:
	npm install

build:
	rm -rf dist
	npm run build
	npm run bundling

test:
	npm test

lint:
	npx eslint .

publish:
	npm publish 

.PHONY: test
