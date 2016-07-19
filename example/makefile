
index.js: app.js gcd.js ../workify.js
	browserify -r ../workify.js:workify -r ./gcd.js:gcd \
        --bare -o index.js ./app.js 

serve: index.js
	python -m SimpleHTTPServer 7777

clean:
	rm -f index.js
