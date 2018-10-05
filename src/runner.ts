import { RunnerOptions } from "./runnerOptions";
import { Suite } from "./suite";
import * as fs from 'fs';

export class Runner {
    private suites: Suite[] = new Array<Suite>();

    constructor(private options: RunnerOptions) {

    }

    public scan() {
        fs.readdir(this.options.rootDir, {withFileTypes: true} , (err, files) => {
            
        });
        
    }
}