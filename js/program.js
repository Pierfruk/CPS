
const FADE_VANTA = 4000;
const FADE_SKETCHER = 2000;
const SKETCH_DURATION = 9000;
const NOTE_DURATION = 4000;
const COUNTDOWN = 10000;
const CLOCK_SKEW = 1000;

const getRandomInt=function(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

const formatTime = function (d) {
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var result = ((h < 10) ? '0' + h : h) + ':' + ((m < 10) ? '0' + m : m) + ':' + ((s < 10) ? '0' + s : s);
    return result;
}

function getKey(d, step, action) {
   
    var ms = (step * 1000);
    var fd = new Date();

    switch (action) {

        case 'play':
            ms += FADE_VANTA;
            break;
        case 'sketch':
            ms += (FADE_SKETCHER + SKETCH_DURATION);
            break;
        case 'anim':
            break;
        default:
    }
    ms += CLOCK_SKEW;
    fd.setTime(d.getTime() + ms);
    var key = formatTime(d);
    return { fd, key };
}


const buildScenes = function (d, data) {
    var key;
    let entries = [];
    data.sort((a, b) => a.index - b.index);
    data.forEach(elem1 => {
        key = getKey(d, elem1.duration, elem1.action);
        entries.push(new Scene(key.key, elem1.index, elem1.action, elem1.name, elem1.duration));
        d = key.fd;
    });

    console.info(`Program scenes built with ${entries.length} entries`)
    return entries;
}

class Program {
    constructor(status, startTime, f, s) {
        this.status = status;
        this.startTime = startTime;
        this.freqs = f;
        this.scenes = s;
    }
    status;
    startTime;
    freqs;
    scenes;
    get status() {
        return this.status;
    }
    get startTime() {
        return this.startTime;
    }
    get freqs() {
        return this.freqs;
    }
    get scenes() {
        return this.scenes;
    }
}

class Scene {
    constructor(time, index, action, name, duration) {
        this.time = time;
        this.action = action;
        this.index = index;
        this.name = name;
        this.duration = duration;
    }
    time;
    index;
    action;
    name;
    duration;
    get time() {
        return this.time;
    }
    get index() {
        return this.index;
    }
    get action() {
        return this.action;
    }
    get name() {
        return this.name;
    }
    get duration() {
        return this.duration;
    }
}