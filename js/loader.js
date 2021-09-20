class WasmLoader {
    constructor(){
        this._imports = {
            "env": {
                abort() {
                    throw new Error('Abort called from wasm file');
                }
            },
            "index": {
                log(n) {
                    console.log(n)
                }
            }
        }
    }

    async wasm(path, imports = this._imports){
        console.log('Fetching ${path}');
        if (!WebAssembly.instantiateStreaming) {
            return this.wasmFallback(path, imports);
        }
        const { instance } = await WebAssembly.instantiateStreaming(fetch(path), imports);
        return instance?.exports;
    }

    async wasmFallback(path, imports){
        console.log('Fetching ${path} using fallback');
        const response = await fetch(path);
        const bytes = await response?.arrayBuffer();
        const { instance } = await WebAssembly.instantiate(bytes, imports); 
        return instance?.exports;
    }
}