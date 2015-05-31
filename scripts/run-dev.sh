#!/usr/bin/env bash
source ./local/env-dev.sh

echo "$MAILGUN_API_KEY"
DEBUG=tickler-file-express:* nodemon ./bin/www
