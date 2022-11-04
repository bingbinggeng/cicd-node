module.exports = {
  "apps": [
    {
      "name": "cicd",
      "cwd": "/srv/cicd-node/src",
      "script": "app.js",
      "log_date_format": "YYYY-MM-DD HH:mm Z",
      "error_file": "/var/log/cicd-node/cicd-node.stderr.log",
      "out_file": "log/cicd-node.stdout.log",
      "pid_file": "pids/node-geo-api.pid",
      "instances": 6,
      "min_uptime": "200s",
      "max_restarts": 10,
      "max_memory_restart": "1M",
      "cron_restart": "1 0 * * *",
      "watch": false,
      "merge_logs": true,
      "exec_interpreter": "node",
      "exec_mode": "fork",
      "autorestart": false,
      "vizion": false
    }
  ]
}
