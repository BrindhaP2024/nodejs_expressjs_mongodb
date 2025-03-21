import { isMaster, fork } from 'cluster';
import { cpus } from 'os';

if (isMaster) {
  const numCPUs = cpus().length;
  for (let i = 0; i < numCPUs; i++) {
    fork(); 
  }
} else {
  require('./app'); 
}
