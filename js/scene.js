let entries = [];
let key2 = 0;
function getKey(d, step) {
    var ms = step * 1000;
    var fd = new Date();
    fd.setTime(d.getTime() + ms);
    console.debug(fd.getTime());
    var h = fd.getHours();
    var m = fd.getMinutes();
    var s = fd.getSeconds();
    var key = ((h < 10) ? '0' + h : h) + ':' + ((m < 10) ? '0' + m : m) + ':' + ((s < 10) ? '0' + s : s);
    return key;
}

function getKey2() {
    
    return key2++;
}

const getProgram = function (w, d, freqs, sketchs) {
    var i = 0;
    var base = 1;
    var t0;
    var t1;
    if (!isNaN(w)) {
        base *= w;
    }

    sketchs.forEach(elem1 => {
        var k = getKey2();
        t0 = getKey(d, i * base)
        entries.push(new Step(k,t0, 'sketch', elem1));
        freqs.filter(x => x.cst == elem1).forEach(elem2 => {
            t1 = getKey(d, i * base);
            k = getKey2();
            entries.push(new Step(k,t1, 'play', {f: elem2.f, cst: elem1}));
            console.debug(`time:${t1}, f: ${elem2.f}, cst: ${elem2.cst}`)
            i++;
        });
    });

    //freqs.forEach(elem2 => {
    //    var t=getKey(d,i*base);
    //    entries.push({ time: t, f: elem2.f, cst: elem2.cst});
    //    console.log(`time:${t}, f: ${elem2.f}, cst: ${elem2.cst}`)
    //    i++;
    //});
    console.info(`Program built with ${i} entries`)
    return entries;
}

class Scene {
    constructor(status, startTime, f, s) {
        this.status = status;
        this.startTime = startTime;
        this.freqs = f;
        this.sketchs = s;
    }
    status;
    startTime;
    freqs;
    sketchs;
    get status() {
        return this.status;
    }
    get startTime() {
        return this.startTime;
    }
    get freqs() {
        return this.freqs;
    }
    get sketchs() {
        return this.sketchs;
    }
}

class Step {
    constructor(key, time, action, data) {
        this.key = key;
        this.time = time;
        this.action = action;
        this.data = data;
    }
    key;
    time;
    action;
    data;
    get key() {
        return this.key;
    }
    get time() {
        return this.time;
    }
    get action() {
        return this.action;
    }
    get data() {
        return this.data;
    }
}