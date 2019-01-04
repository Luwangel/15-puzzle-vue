help:
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: ## Install all dependencies. Usage: "make install".
	@yarn

run: ## Run the website for development purpose. Usage: "make run".
	cd packages/app && \
		yarn run serve

build-app: ## Build the website for propduction. Usage "make build-app".
	cd packages/app && \
		yarn run build

build-core: ## Build the core lib for propduction. Usage "make build-core".
	cd packages/core && \
		yarn run build
