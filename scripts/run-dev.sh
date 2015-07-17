#!/usr/bin/env bash
source ./local/env-dev.sh
echo "Connection: $MONGODB_CONNECTION"
NODE_ENV=development DEBUG=tickler-file-express:* MONGODB_CONNECTION="$MONGODB_CONNECTION" nodemon ./bin/www
