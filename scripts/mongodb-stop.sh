grep_mongo=`ps -ef |  grep -v grep | grep mongod`

if [ ${#grep_mongo} -gt 0 ]
then
  echo "Stopping Mongo"
  PID=`ps x | grep -v grep | grep "mongod" | awk '{ print $1 }'`
  `kill -2 ${PID}`
  RETVAL=$?
else
  echo "MongoDB is not running"
fi
