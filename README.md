# LevenshteinSimilarity

Determine if two strings are similar using the Levenshtein distance.

## Installation

```bash
# Install dependencies ⌨️
$ npm install
```

## Startup

```bash
# Deploy the server 🖥️
$ node .
```

## Expected JSON query (GET: https://localhost:3000/{percentage})

Where {percentage} is a number between 0 and 100.

```json
{
	"str1": "String #1",
	"str2": "String #2"
}
```

## Output example

```json
{
	"error": null,
	"similarityPercentage": 70,
	"response": true
}
```

Percentages are truncated.
