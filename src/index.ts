import * as cluster from 'cluster';
import namingWorkerId from './core/naming-worker-id';

(<any>Error).stackTraceLimit = Infinity;

if (cluster.isMaster) {
	console.log('Welcome to Misskey!');

	// Count the machine's CPUs
	const cpuCount: number = require('os').cpus().length;

	// Create a worker for each CPU
	for (let i = 0; i < cpuCount; i++) {
		cluster.fork();
	}

	require('./api/streaming');
} else {
	require('./server');
}

// Listen for dying workers
cluster.on('exit', (worker: cluster.Worker) => {
	// Replace the dead worker,
	// we're not sentimental
	console.log(`\u001b[1;31m${namingWorkerId(worker.id)} died :(\u001b[0m`);
	cluster.fork();
});
