import * as fs from "fs-extra";

export class TxtTable{
    /**
     * Creates an instance of TxtTable.
     * @param {string} path 写入文件路径
     * @memberOf TxtTable
     */
    public header: string[];
    private stream: any;
    private hasHeader: boolean;
    constructor(path) {
        if (typeof path !== "string") {
            throw new Error('the string-typed parameter "path" is required');
        }
        fs.ensureFileSync(path, (err) => {
            if (err) {
                throw err;
            }
        });
        this.header = null;
        this.hasHeader = false;
        this.stream = fs.createWriteStream(path);
    }
    /**
     * 根据表头写入新数据
     * @param {Object} data
     */
    public add(data) {
        // TODO: 参数检测

        if (! this.hasHeader && this.header) {
            this.hasHeader = true;
            this.header = Object.keys(data);
            let headerString = this.header.join("\t");
            headerString += "\n";
            this.stream.write(headerString);
        }
        let chunk = "";
        for (let item of this.header) {
            chunk += data[item] + "\t";
        }
        chunk += "\n";
        this.stream.write(chunk);
    }
}

// tslint:disable-next-line:max-classes-per-file
export class JsonTable {
    /**
     * Creates an instance of JsonTable.
     * @param {string} path 写入文件路径
     */
    public header: string[];
    private path: string;
    constructor(path: string) {
        if (typeof path !== "string") {
            throw new Error('the string-typed parameter "path" is required');
        }
        // tslint:disable-next-line:curly
        fs.ensureFileSync(path, (err) => {
            if (err) throw err;
        });
        this.path = path;
        this.header = null;
    }
    /**
     * 根据表头写入新数据
     * @param {Object} data
     * @memberOf TxtTable
     */
    public add(data) {
        if (this.header === null) {
            this.header = Object.keys(data);
        }
        fs.writeJsonSync(this.path, data, {flag: "a"});
    }
}