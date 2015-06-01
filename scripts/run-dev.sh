#!/usr/bin/env bash
source ./local/env-dev.sh

DEBUG=tickler-file-express:* MONGODB_CONNECTION="$MONGODB_CONNECTION" nodemon ./bin/www
