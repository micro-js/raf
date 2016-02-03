#
# Vars
#

BIN = ./node_modules/.bin

#
# Tasks
#

node_modules: package.json
	@npm install

test: node_modules
	@${BIN}/tape test/*

validate: node_modules
	@standard

init:
	@git init
	@git add .
	@git commit -am "FIRST"
	@hub create micro-js/raf -d "Request animation frame (polyfilled if it doesn&#x27;t exist)"
	@travis enable
	@git push -u origin master

.PHONY: test validate init
