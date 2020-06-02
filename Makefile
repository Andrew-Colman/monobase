project = ./project/site

bootstrap:
	@test -d ./node_modules || yarn
	@cd project/site && make bootstrap

dist: bootstrap
	@rm -Rf dist
	./node_modules/.bin/tsc

clean:
	@rm -Rf ./node_modules
	@cd project/site && make clean

serve: bootstrap
	./node_modules/.bin/ts-node -P $(project) src/cli.ts serve --project=$(project)

build: bootstrap
	./node_modules/.bin/ts-node -P $(project) src/cli.ts build --project=$(project)

publish: git-check dist
	yarn publish
	make project
	-git commit -a -m "*** published new version"
	-git push

publish-beta: git-check dist
	yarn publish --tag beta
	make project
	-git commit -a -m "*** published new beta"
	-git push

project:
	-rm project.zip 
	zip -X -r project.zip project \
		-x "*.DS_Store" \
		-x "project/.*" \
		-x "project/*.css.d.ts" \
		-x "project/monobase.ts" \
		-x "project/yarn.lock" \
		-x "project/node_modules/*" \
		-x "project/build/*"
	md5 project.zip

git-check:
	@status=$$(git status --porcelain); \
	if test "x$${status}" = x; then \
		git push; \
	else \
		echo "\n\n!!! Working directory is dirty, commit/push first !!!\n\n" >&2; exit 1 ; \
	fi



TEMPDIR := $(shell mktemp -d)

test:
	yarn jest --watch

test-install:
	cd $(TEMPDIR); \
		curl -L -O https://github.com/koenbok/monobase/raw/master/project.zip; \
		unzip project.zip; \
		cd project; \
		make serve

.DEFAULT_GOAL := serve
.PHONY: project